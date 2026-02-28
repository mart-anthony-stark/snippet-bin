import { useAtom } from "jotai";
import { useEffect } from "react";
import {
  codeAtom,
  languageAtom,
  themeAtom,
  fileNameAtom,
  toastAtom,
  LANGUAGE_MAP,
} from "../atoms/codeAtom";
import { decodeCodeFromHash, encodeCodeToHash } from "../utils/codeUtils";

export function useCodeSharer() {
  const [code, setCode] = useAtom(codeAtom);
  const [language, setLanguage] = useAtom(languageAtom);
  const [theme, setTheme] = useAtom(themeAtom);
  const [fileName, setFileName] = useAtom(fileNameAtom);
  const [, setShowToast] = useAtom(toastAtom);

  const extension = LANGUAGE_MAP[language] || "txt";
  const fullFileName = `${fileName}.${extension}`;

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      decodeCodeFromHash(hash).then((state) => {
        if (state) {
          setCode(state.code);
          setLanguage(state.language);
          setTheme(state.theme);
          setFileName(state.fileName);
        }
      });
    }
  }, [setCode, setLanguage, setTheme, setFileName]);

  const shareCode = async () => {
    const hash = await encodeCodeToHash({
      code,
      language,
      theme,
      fileName,
    });

    if (hash) {
      window.history.pushState(null, "", `/#${hash}`);
      await navigator.clipboard.writeText(window.location.href);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  return {
    code,
    setCode,
    language,
    setLanguage,
    theme,
    setTheme,
    fileName,
    setFileName,
    extension,
    fullFileName,
    shareCode,
  };
}
