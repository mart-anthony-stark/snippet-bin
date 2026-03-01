import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="py-10 text-center transition-opacity duration-300">
      <div className="flex justify-center gap-6 mb-4">
        <a
          href="https://github.com/mart-anthony-stark/snippet-bin"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-500 hover:text-slate-800 transition-colors"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-bold">
            GitHub
          </span>
        </a>

        <a href="https://www.buymeacoffee.com/martsalazar" target="_blank">
          <Image
            src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
            alt="Buy Me A Coffee"
            width={100}
            height={25}
          />
        </a>
      </div>

      <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-500">
        Stateless • Database-Free • Encoded
      </p>
      <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-500">
        Made with ❤️ by Mart Salazar
      </p>
    </footer>
  );
};
