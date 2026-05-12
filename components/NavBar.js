import { BarChart3, Brain, Home, Sparkles, UserRound } from "lucide-react";

const items = [
  { label: "Início", icon: Home, active: true },
  { label: "Sessões", icon: Sparkles },
  { label: "Foco", icon: Brain },
  { label: "Dados", icon: BarChart3 },
  { label: "Perfil", icon: UserRound }
];

export default function NavBar() {
  return (
    <nav className="fixed inset-x-4 bottom-4 z-50 mx-auto max-w-md rounded-[2rem] border border-white/10 bg-black/55 px-3 py-3 shadow-[0_22px_80px_rgba(0,0,0,0.55)] backdrop-blur-2xl sm:bottom-6">
      <div className="grid grid-cols-5 gap-1">
        {items.map(({ label, icon: Icon, active }) => (
          <button
            key={label}
            type="button"
            className={`flex flex-col items-center justify-center gap-1 rounded-3xl px-2 py-2 text-[0.68rem] font-semibold transition ${
              active
                ? "bg-emerald-300/15 text-emerald-200 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
                : "text-white/42 hover:bg-white/5 hover:text-white/80"
            }`}
          >
            <Icon className="h-4 w-4" strokeWidth={2.2} />
            <span>{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
