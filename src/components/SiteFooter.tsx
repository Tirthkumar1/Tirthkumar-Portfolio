export function SiteFooter() {
  return (
    <footer className="flex flex-col items-center gap-2 border-t border-white/10 pt-8 text-xs tracking-[0.3em] text-slate-500">
      <span>Copyright {new Date().getFullYear()} Tirthkumar Bodar</span>
      <span>Crafted with Next.js, TypeScript and Tailwind CSS</span>
    </footer>
  );
}
