import { Activity, Moon, ShieldCheck, Zap } from "lucide-react";
import NavBar from "../components/NavBar";
import Orb from "../components/Orb";

const metrics = [
  {
    label: "Pontuação de Foco",
    value: "92%",
    detail: "+8% vs. ontem"
  },
  {
    label: "Trabalho Profundo",
    value: "3h 12min",
    detail: "2 blocos completos"
  },
  {
    label: "Respirações Guiadas",
    value: "8",
    detail: "ritmo consistente"
  },
  {
    label: "Clareza Mental",
    value: "Alta",
    detail: "baixo ruído digital"
  }
];

const signals = [
  {
    icon: ShieldCheck,
    title: "Distrações bloqueadas",
    value: "14"
  },
  {
    icon: Moon,
    title: "Modo silencioso",
    value: "Ativo"
  },
  {
    icon: Zap,
    title: "Energia cognitiva",
    value: "Boa"
  }
];

export default function Home() {
  return (
    <main className="app-shell min-h-dvh safe-bottom px-5 pt-8 text-white sm:px-6">
      <section className="mx-auto w-full max-w-md">
        <header className="flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.34em] text-emerald-300/65">
              LUMA / Hoje
            </p>
            <h1 className="mt-3 text-5xl font-black leading-[0.92] tracking-[-0.08em] sm:text-6xl">
              Estado de Fluxo
            </h1>
          </div>

          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.045] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
            <Activity className="h-5 w-5 text-emerald-200" />
          </div>
        </header>

        <p className="mt-5 max-w-sm text-base font-medium leading-7 text-white/54">
          Seu foco está estabilizando. Poucas distrações foram detectadas hoje.
        </p>

        <section className="relative mt-8">
          <div className="absolute left-1/2 top-10 h-56 w-56 -translate-x-1/2 rounded-full bg-emerald-400/20 blur-3xl" />
          <Orb />
        </section>

        <section className="mt-7 grid grid-cols-3 gap-3">
          {signals.map(({ icon: Icon, title, value }) => (
            <div key={title} className="card rounded-[1.65rem] p-4">
              <Icon className="h-4 w-4 text-emerald-200/80" />
              <p className="mt-4 text-[0.68rem] font-semibold leading-4 text-white/42">
                {title}
              </p>
              <p className="mt-1 text-sm font-black text-white">{value}</p>
            </div>
          ))}
        </section>

        <section className="mt-4 grid grid-cols-2 gap-4">
          {metrics.map((item) => (
            <article key={item.label} className="card rounded-[2rem] p-5">
              <p className="min-h-10 text-sm font-bold leading-5 text-white/46">
                {item.label}
              </p>
              <p className="mt-4 text-[2.45rem] font-black leading-none tracking-[-0.07em] text-white">
                {item.value}
              </p>
              <p className="mt-3 text-xs font-semibold text-emerald-200/58">
                {item.detail}
              </p>
            </article>
          ))}
        </section>

        <section className="card mt-4 overflow-hidden rounded-[2rem] p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-bold text-white/45">Próxima sessão</p>
              <h2 className="mt-2 text-2xl font-black tracking-[-0.05em]">
                Respiração 4-7-8
              </h2>
              <p className="mt-2 text-sm leading-6 text-white/48">
                Cinco minutos para desacelerar o sistema nervoso e voltar para o foco.
              </p>
            </div>
            <span className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-black text-emerald-100">
              5 min
            </span>
          </div>

          <button className="mt-5 w-full rounded-2xl bg-emerald-300 px-5 py-4 text-sm font-black text-emerald-950 shadow-[0_18px_55px_rgba(16,185,129,0.24)] transition hover:scale-[1.01] active:scale-[0.98]">
            Iniciar sessão guiada
          </button>
        </section>
      </section>

      <NavBar />
    </main>
  );
}
