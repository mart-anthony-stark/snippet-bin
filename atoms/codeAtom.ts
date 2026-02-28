import { atom } from "jotai";

export const codeAtom = atom<string>("");
export const fileNameAtom = atom<string>("Untitled");
export const languageAtom = atom<string>("typescript");
export const themeAtom = atom<string>("vs-dark");
export const toastAtom = atom<boolean>(false);

export const SUPPORTED_LANGUAGES = [
  { id: "typescript", name: "TypeScript" },
  { id: "python", name: "Python" },
  { id: "rust", name: "Rust" },
  { id: "go", name: "Go" },
  { id: "cpp", name: "C++" },
];

export const LANGUAGE_MAP: Record<string, string> = {
  typescript: "ts",
  python: "py",
  rust: "rs",
  go: "go",
  cpp: "cpp",
};
