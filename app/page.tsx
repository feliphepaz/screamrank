import Button from "@/components/button";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="page-container pt-8 pb-20">
      <section className="md:flex-row flex flex-col gap-10 items-center justify-between rounded-featured border border-hero-border bg-hero bg-[radial-gradient(ellipse_at_75%_0,var(--color-hero-glow),transparent_65%)] p-[clamp(24px,4vw,52px)] text-hero-foreground">
        <div className="md:order-1 order-2">
          <p className="highlight mb-3">Filme da semana</p>
          <h2 className="heading text-display-page">Hereditário</h2>
          <p className="mt-2.5 max-w-[540px] text-hero-muted">
            2018 · Ari Aster · 2h07 · EUA
          </p>
          <p className="text-body mt-3.5 max-w-[540px]">
            Quando a matriarca da família morre, segredos sombrios vêm à tona.
            Registre, avalie e ganhe XP para evoluir sua classe.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-2.5">
            <Button buttonType="primary">Registrar filme</Button>
            <Button buttonType="secondary">Ver detalhes</Button>
            <span className="text-gold">+50 XP esta semana</span>
          </div>
        </div>
        <Link
          href="/filme/hereditario"
          className="md:order-2 order-1 relative w-40 md:w-[250px] overflow-hidden rotate-[2.5deg] shadow-poster-hero rounded-poster after:content-[''] after:absolute after:w-full after:h-[5px] after:bg-gold after:bottom-0"
        >
          <Image src="/poster.jpg" alt="Hereditário" width={250} height={375} />
        </Link>
      </section>
    </main>
  );
}
