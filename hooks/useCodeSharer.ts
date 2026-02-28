import { useAtom } from "jotai";
import {
  codeAtom,
  languageAtom,
  themeAtom,
  toastAtom,
  fileNameAtom,
  LANGUAGE_MAP,
} from "../atoms/codeAtom";
import { encodeCodeToHash } from "../utils/codeUtils";

export function useCodeSharer() {
  const [code, setCode] = useAtom(codeAtom);
  const [language, setLanguage] = useAtom(languageAtom);
  const [theme, setTheme] = useAtom(themeAtom);
  const [fileName, setFileName] = useAtom(fileNameAtom);
  const [, setShowToast] = useAtom(toastAtom);

  const extension = LANGUAGE_MAP[language] || "txt";
  const fullFileName = `${fileName}.${extension}`;

  const shareCode = async () => {
    const newHash = await encodeCodeToHash(code);
    if (newHash) {
      window.history.pushState(null, "", `/#${newHash}`);
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
