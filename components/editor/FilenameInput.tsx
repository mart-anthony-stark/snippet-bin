interface FileNameInputProps {
  fileName: string;
  setFileName: (val: string) => void;
  extension: string;
}

export const FileNameInput = ({ fileName, setFileName, extension }: FileNameInputProps) => (
  <div className="mb-8">
    <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-blue-500 mb-2">
      <span>Editor</span>
      <span className="text-slate-700">•</span>
      <span className="text-slate-500 lowercase font-medium text-[11px]">click to rename</span>
    </div>
    
    <div className="inline-grid grid-cols-[min-content_max-content] items-baseline group">
      <div className="grid col-start-1">
        <span className="invisible col-start-1 row-start-1 whitespace-pre text-4xl font-bold px-0.5">
          {fileName || "Untitled"}
        </span>
        <input 
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
          className="col-start-1 row-start-1 bg-transparent border-none p-0 text-4xl font-bold text-white tracking-tight focus:ring-0 outline-none w-full min-w-0"
          placeholder="Untitled"
          spellCheck={false}
        />
      </div>
      <span className="col-start-2 text-4xl font-bold text-slate-700 select-none">
        .{extension}
      </span>
    </div>
  </div>
);