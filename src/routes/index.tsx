import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Zap, Wallet, CheckCircle2, MessageCircle, ArrowRight, Leaf, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Economize na conta de luz | Simulação gratuita" },
      {
        name: "description",
        content:
          "Reduza o valor da sua conta de energia sem trocar de concessionária e sem instalar equipamentos. Faça uma simulação gratuita.",
      },
      { property: "og:title", content: "Economize na conta de luz" },
      {
        property: "og:description",
        content: "Descubra como reduzir sua conta de energia. Simulação gratuita e sem compromisso.",
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    cidade: "",
    valorConta: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome || !form.email || !form.telefone) {
      toast.error("Preencha os campos obrigatórios.");
      return;
    }
    toast.success("Recebemos seus dados! Em breve entraremos em contato.");
    setForm({ nome: "", email: "", telefone: "", cidade: "", valorConta: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Toaster richColors position="top-center" />

      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-brand shadow-glow">
              <Zap className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-semibold tracking-tight">EnergiaJá</span>
          </div>
          <Button asChild variant="hero" size="sm">
            <a href="#simulacao">Simular agora</a>
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-accent/40 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Economia de até 20% garantida em contrato
            </div>
            <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Economize na sua{" "}
              <span className="bg-gradient-brand bg-clip-text text-transparent">conta de energia</span>
            </h1>
            <p className="mt-6 text-pretty text-lg text-muted-foreground md:text-xl">
              Descubra como reduzir o valor da sua conta de luz sem trocar de concessionária e
              sem instalar equipamentos.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild variant="whatsapp" size="lg">
                <a
                  href="https://wa.me/5500000000000?text=Quero%20economizar%20na%20conta%20de%20luz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5" />
                  Falar no WhatsApp
                </a>
              </Button>
              <Button asChild variant="hero" size="lg">
                <a href="#simulacao">
                  Fazer simulação
                  <ArrowRight className="h-5 w-5" />
                </a>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" /> 100% seguro</span>
              <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> Análise gratuita</span>
              <span className="inline-flex items-center gap-2"><Leaf className="h-4 w-4 text-primary" /> Energia limpa</span>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: ShieldCheck, title: "Sem instalação", desc: "Não precisa instalar placas solares ou equipamentos na sua casa." },
            { icon: Wallet, title: "Economia mensal", desc: "Reduza o valor da sua conta de energia todos os meses, de forma prática." },
            { icon: Sparkles, title: "Processo simples", desc: "Atendimento rápido e análise gratuita da sua conta de luz." },
          ].map((b) => (
            <Card key={b.title} className="group relative overflow-hidden border-border/60 bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-elegant">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-brand shadow-glow">
                <b.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">{b.title}</h3>
              <p className="mt-2 text-muted-foreground">{b.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Como funciona */}
      <section className="relative bg-secondary/40 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Como funciona?</h2>
            <p className="mt-4 text-muted-foreground">Em três passos simples você começa a economizar.</p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              { n: "1", t: "Envie seus dados", d: "Preencha o formulário com suas informações básicas." },
              { n: "2", t: "Análise gratuita", d: "Verificamos a possibilidade de economia para o seu perfil." },
              { n: "3", t: "Receba sua proposta", d: "Você acompanha tudo de forma simples e transparente." },
            ].map((s) => (
              <div key={s.n} className="relative rounded-2xl border border-border/60 bg-card p-8">
                <div className="absolute -top-5 left-8 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-brand text-lg font-bold text-primary-foreground shadow-glow">
                  {s.n}
                </div>
                <h3 className="mt-4 text-xl font-semibold">{s.t}</h3>
                <p className="mt-2 text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário */}
      <section id="simulacao" className="mx-auto max-w-3xl px-6 py-24">
        <Card className="overflow-hidden border-border/60 bg-card p-8 shadow-elegant md:p-12">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Faça sua simulação gratuita</h2>
            <p className="mt-3 text-muted-foreground">Sem compromisso. Resposta em até 24 horas.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <Input placeholder="Nome completo *" value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} className="h-12" />
            <Input type="email" placeholder="E-mail *" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="h-12" />
            <Input placeholder="Telefone / WhatsApp *" value={form.telefone} onChange={(e) => setForm({ ...form, telefone: e.target.value })} className="h-12" />
            <Input placeholder="Cidade" value={form.cidade} onChange={(e) => setForm({ ...form, cidade: e.target.value })} className="h-12" />
            <Input placeholder="Valor médio da conta (R$)" value={form.valorConta} onChange={(e) => setForm({ ...form, valorConta: e.target.value })} className="h-12" />

            <Button type="submit" variant="hero" size="lg" className="w-full">
              Quero economizar
              <ArrowRight className="h-5 w-5" />
            </Button>
          </form>
        </Card>
      </section>

      {/* FAQ */}
      <section className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Perguntas frequentes</h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {[
              { q: "Preciso trocar de concessionária?", a: "Não. Sua concessionária continua a mesma, sem nenhuma alteração no fornecimento." },
              { q: "Preciso instalar equipamentos?", a: "Não precisa. Nada é instalado na sua casa ou empresa." },
              { q: "A análise é gratuita?", a: "Sim. A análise da sua conta é 100% gratuita e sem compromisso." },
              { q: "Quanto consigo economizar?", a: "A economia varia conforme o perfil de consumo, podendo chegar a 20%." },
            ].map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="rounded-xl border border-border/60 bg-card px-5">
                <AccordionTrigger className="text-left text-base font-medium">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/60 bg-background py-10">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm text-muted-foreground">
          <div className="mb-4 inline-flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-brand">
              <Zap className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-semibold text-foreground">EnergiaJá</span>
          </div>
          <p className="mx-auto max-w-xl">
            Este site é independente e possui finalidade informativa e de captação de clientes.
          </p>
          <p className="mt-3">© {new Date().getFullYear()} EnergiaJá. Todos os direitos reservados.</p>
        </div>
      </footer>

      {/* WhatsApp floating */}
      <a
        href="https://wa.me/5500000000000?text=Quero%20economizar%20na%20conta%20de%20luz"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[oklch(0.72_0.18_150)] text-white shadow-glow transition-transform hover:scale-110"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}
