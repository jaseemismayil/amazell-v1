import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

export default function Home() {
  return (
    <main>
      <Section className="flex min-h-screen items-center">
        <Container>
          <div className="max-w-3xl">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[var(--accent)]">
              Amazell
            </p>

            <h1 className="text-6xl font-bold leading-tight md:text-8xl">
              Power That
              <br />
              Never Stops.
            </h1>

            <p className="mt-8 max-w-xl text-lg text-[var(--muted)]">
              Premium tubular batteries engineered for
              reliability, performance and long-lasting
              power.
            </p>

            <div className="mt-12 flex gap-4">
              <Button>Explore Products</Button>

              <Button variant="secondary">
                Learn More
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}