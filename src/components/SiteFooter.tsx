export function SiteFooter() {
  return (
    <footer className="flex flex-col items-center gap-2 border-t border-white/10 pt-8 text-[10px] tracking-[0.22em] text-slate-500 sm:text-xs sm:tracking-[0.3em]">
      <span>Copyright {new Date().getFullYear()} Tirthkumar Bodar</span>
      <span>Crafted with Next.js, TypeScript and Tailwind CSS</span>
    </footer>
  );
}
