// src/components/editor/EditorWindow.tsx
import { ReactNode } from 'react';
import { TbX, TbCopy, TbShare } from 'react-icons/tb';

interface EditorWindowProps {
  children: ReactNode;
  fileName: string;
  language: string;
  theme: string;
  themeBg: string;
  onCopy: () => void;
}

export const EditorWindow = ({ children, fileName, language, theme, themeBg, onCopy }: EditorWindowProps) => (
  <div 
    className="rounded-xl overflow-hidden border border-white/10 shadow-2xl transition-colors duration-300"
    style={{ backgroundColor: themeBg }}
  >
    <div className="h-12 bg-white/5 border-b border-white/5 flex items-center px-4 justify-between backdrop-blur-sm">
      <div className="flex items-center h-full">
        <div className="flex gap-2 mr-6">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="h-12 border-x border-white/5 px-6 flex items-center bg-white/5 border-t-2 border-t-blue-500 gap-3">
          <span className="text-xs text-slate-200 font-mono tracking-wide">{fileName}</span>
          <TbX size={12} className="text-slate-600 hover:text-white cursor-pointer" />
        </div>
      </div>
      <div className="flex items-center gap-4 text-[10px] font-mono opacity-40 uppercase tracking-tighter">
        <span>Line 1, Col 1</span>
        <button onClick={onCopy} className="hover:opacity-100 flex items-center gap-1 transition-opacity py-1 px-2 hover:bg-white/5 rounded text-slate-300">
          <TbCopy size={14} /> Copy
        </button>
      </div>
    </div>

    {children}

    <div className="h-6 bg-blue-600 text-white flex items-center justify-between px-4 text-[10px] font-bold tracking-wider uppercase">
      <div className="flex gap-4">
        <span className="flex items-center gap-1 opacity-90"><TbShare size={12}/> BRANCH: MAIN</span>
        <span className="opacity-90">READY TO SHARE</span>
      </div>
      <div className="flex gap-6">
        <span>UTF-8</span>
        <span>{language}</span>
        <span>{theme.replace('-', ' ')}</span>
      </div>
    </div>
  </div>
);