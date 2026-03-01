// src/components/editor/Navbar.tsx
import { ReactNode } from "react";
import { TbShare, TbCode, TbColorSwatch, TbChevronDown } from "react-icons/tb";
import { SUPPORTED_LANGUAGES } from "../../atoms/codeAtom";

interface SelectorOption {
  id: string;
  name: string;
}

interface SelectorProps {
  icon: ReactNode;
  value: string;
  onChange: (val: string) => void;
  options: SelectorOption[];
}

interface NavbarProps {
  language: string;
  setLanguage: (val: string) => void;
  theme: string;
  setTheme: (val: string) => void;
  onShare: () => Promise<void>;
}

const Selector = ({ icon, value, onChange, options }: SelectorProps) => (
  <div className="relative flex items-center gap-2 bg-[#161b22] px-3 py-1.5 rounded text-sm border border-white/10 hover:border-white/20 transition-all">
    {icon}
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="bg-transparent border-none text-xs font-semibold focus:ring-0 outline-none cursor-pointer appearance-none pr-6 capitalize text-slate-200"
    >
      {options.map((opt) => (
        <option key={opt.id} value={opt.id} className="bg-[#161b22]">
          {opt.name}
        </option>
      ))}
    </select>
    <TbChevronDown
      className="absolute right-2 pointer-events-none opacity-50"
      size={12}
    />
  </div>
);

export const Navbar = ({
  language,
  setLanguage,
  theme,
  setTheme,
  onShare,
}: NavbarProps) => (
  <nav className="h-16 px-6 flex items-center justify-between border-b border-white/5 bg-[#0d1117]">
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white">
        <TbShare size={18} />
      </div>
      <span className="font-bold text-white text-lg tracking-tight">
        SnippetBin
      </span>
    </div>

    <div className="flex items-center gap-3">
      <Selector
        icon={<TbCode className="text-slate-500" />}
        value={language}
        onChange={setLanguage}
        options={SUPPORTED_LANGUAGES}
      />
      <Selector
        icon={<TbColorSwatch className="text-slate-500" />}
        value={theme}
        onChange={setTheme}
        options={[
          { id: "vs-dark", name: "VS Dark" },
          { id: "dracula", name: "Dracula" },
          { id: "nord", name: "Nord" },
        ]}
      />
      <button
        onClick={onShare}
        className="cursor-pointer bg-blue-600 hover:bg-blue-500 text-white px-5 py-1.5 rounded-md font-bold text-sm transition-all active:scale-95 shadow-lg shadow-blue-500/20 flex items-center gap-2 ml-1"
      >
        <TbShare size={16} /> Share
      </button>
    </div>
  </nav>
);
