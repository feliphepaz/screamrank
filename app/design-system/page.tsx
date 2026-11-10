import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design System · ScreamRank",
};

const colors = [
  ["background", "bg-background"],
  ["surface", "bg-surface"],
  ["surface-raised", "bg-surface-raised"],
  ["border", "bg-border"],
  ["foreground", "bg-foreground"],
  ["muted", "bg-muted"],
  ["primary", "bg-primary"],
  ["primary-dark", "bg-primary-dark"],
  ["gold", "bg-gold"],
  ["hero", "bg-hero"],
  ["hero-glow", "bg-hero-glow"],
  ["hero-foreground", "bg-hero-foreground"],
] as const;

const horrorClasses = [
  ["Lâmina Final", "Slasher", "tone-class-blade"],
  ["Véu Rasgado", "Sobrenatural", "tone-class-veil"],
  ["Carne em Fuga", "Body Horror", "tone-class-flesh"],
  ["Mente Fraturada", "Psicológico", "tone-class-mind"],
  ["Olho da Fita", "Found Footage", "tone-class-tape"],
  ["Filho do Culto", "Folk & Cósmico", "tone-class-cult"],
  ["Último Imune", "Zumbi", "tone-class-immune"],
  ["Caçador do Vazio", "Monstros", "tone-class-void"],
] as const;

const displayScale = [
  ["display-page", "text-display-page", "Explorar o terror"],
  ["display-imdb", "text-display-imdb", "7,3"],
  ["display-level", "text-display-level", "Nv. 14"],
  ["display-summary", "text-display-summary", "+325 XP"],
  ["display-logo", "text-display-logo", "Screamrank"],
  ["display-section", "text-display-section", "Vozes da comunidade"],
  ["display-poster", "text-display-poster", "Hereditário"],
  ["display-xp", "text-display-xp", "+100 XP"],
  ["display-card", "text-display-card", "Lâmina Final"],
] as const;

const sansScale = [
  ["mission-title", "text-mission-title", "Trilogia sangrenta"],
  [
    "body",
    "text-body",
    "Quando a matriarca da família morre, segredos sombrios vêm à tona.",
  ],
  ["button", "text-button", "Registrar filme"],
  ["nav", "text-nav", "Explorar"],
  ["poster-title", "text-poster-title", "Midsommar"],
  ["field", "text-field", "Todas as décadas"],
  ["caption", "text-caption", "2018 · IMDb 7,3"],
  ["tag", "text-tag", "Sobrenatural"],
] as const;

const spacing = [
  ["4", "w-1"],
  ["8", "w-2"],
  ["12", "w-3"],
  ["16", "w-4"],
  ["20", "w-5"],
  ["24", "w-6"],
  ["32", "w-8"],
  ["40", "w-10"],
] as const;

const radii = [
  ["button · 4px", "rounded-button"],
  ["tag · 5px", "rounded-tag"],
  ["poster · 6px", "rounded-poster"],
  ["field · 8px", "rounded-field"],
  ["card · 10px", "rounded-card"],
  ["featured · 14px", "rounded-featured"],
  ["pill · 20px", "rounded-pill"],
  ["full · 50%", "rounded-full"],
] as const;

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-4 border-t pt-10">
      <h2 className="heading text-display-section">{title}</h2>
      {children}
    </section>
  );
}

export default function DesignSystemPage() {
  return (
    <main className="page-container flex flex-col gap-10 pt-8 pb-20">
      <header className="relative overflow-hidden rounded-featured border border-hero-border bg-hero bg-[radial-gradient(ellipse_at_75%_0,var(--color-hero-glow),transparent_65%)] p-[clamp(24px,4vw,52px)] text-hero-foreground">
        <p className="eyebrow mb-3">Design system</p>
        <h1 className="heading text-display-page">
          Scream<span className="text-primary">rank</span>
        </h1>
        <p className="mt-2.5 max-w-[540px] text-hero-muted">
          Tokens e componentes base em <code>app/globals.css</code>, espelhando
          o protótipo “diário de terror”.
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-2.5">
          <button className="btn">Registrar filme</button>
          <button className="btn btn-secondary">Ver detalhes</button>
        </div>
      </header>

      <Section title="Botões">
        <div className="flex flex-wrap items-center gap-2">
          <button className="btn">Registrar filme</button>
          <button className="btn btn-secondary">Cancelar</button>
        </div>
        <p className="text-caption text-muted">
          <code>btn</code> · <code>btn btn-secondary</code>
        </p>
      </Section>

      <Section title="Cores">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {colors.map(([name, cls]) => (
            <div key={name} className="card flex items-center gap-3 p-3">
              <div className={`size-10 shrink-0 rounded-field border ${cls}`} />
              <code className="text-caption">{name}</code>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Classes">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {horrorClasses.map(([name, genre, tone]) => (
            <div key={name} className={`card flex flex-col gap-2 ${tone}`}>
              <h3 className="heading text-display-card">{name}</h3>
              <span className="tag self-start">{genre}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Cartão, rótulo e nota">
        <div className="flex flex-wrap items-start gap-3">
          <div className="card w-60">
            <h3 className="heading mb-1.5 text-display-card">Lâmina Final</h3>
            <p className="text-caption text-muted">Slasher · Nv. 14</p>
          </div>
          <div className="rounded-card bg-hero p-6 text-hero-foreground">
            <div className="eyebrow mb-3">Filme da semana</div>
            <span className="tag tone-class-veil">Sobrenatural</span>
          </div>
          <div className="card">
            <span className="rating">
              4,5<small>/5</small>
            </span>
          </div>
        </div>
      </Section>

      <Section title="Tipografia">
        <div className="flex flex-col gap-4">
          {displayScale.map(([name, cls, sample]) => (
            <div key={name} className="flex items-baseline gap-6">
              <code className="w-36 shrink-0 text-caption text-muted">
                {name}
              </code>
              <span className={`heading ${cls}`}>{sample}</span>
            </div>
          ))}
          <div className="flex items-baseline gap-6">
            <code className="w-36 shrink-0 text-caption text-muted">
              eyebrow
            </code>
            <span className="eyebrow">Filme da semana</span>
          </div>
          {sansScale.map(([name, cls, sample]) => (
            <div key={name} className="flex items-baseline gap-6">
              <code className="w-36 shrink-0 text-caption text-muted">
                {name}
              </code>
              <span className={cls}>{sample}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Espaçamento">
        <div className="flex flex-col gap-2">
          {spacing.map(([px, cls]) => (
            <div key={px} className="flex items-center gap-4">
              <code className="w-10 text-caption text-muted">{px}px</code>
              <div className={`h-3 bg-primary ${cls}`} />
            </div>
          ))}
        </div>
      </Section>

      <Section title="Raios">
        <div className="flex flex-wrap gap-4">
          {radii.map(([name, cls]) => (
            <div key={name} className="flex flex-col items-center gap-2">
              <div
                className={`size-16 border border-muted bg-surface-raised ${cls}`}
              />
              <code className="text-caption text-muted">{name}</code>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
