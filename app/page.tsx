"use client";

import { FormEvent, useState } from "react";
import {
  benefits,
  company,
  differentials,
  quickInfo,
  services,
  whatsappUrl,
  type Service,
} from "./site-data";

const defaultMessage =
  "Olá! Encontrei a Baixo Grau Refrigeração pelo site e gostaria de saber mais sobre os serviços.";

const heroMessage =
  "Olá! Encontrei a Baixo Grau Refrigeração pelo site e gostaria de solicitar atendimento.";

const finalMessage =
  "Olá! Encontrei a Baixo Grau Refrigeração pelo site. Meu equipamento está apresentando um problema e gostaria de solicitar uma avaliação.";

function openWhatsApp(message: string) {
  window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Início", "#inicio"],
    ["Serviços", "#servicos"],
    ["Sobre", "#sobre"],
    ["Contato", "#contato"],
  ];

  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Baixo Grau Refrigeração">
        <span className="brand-mark" aria-hidden="true">
          BG
        </span>
        <span>
          <strong>{company.displayName}</strong>
          <small>Manaus - AM</small>
        </span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="site-menu"
        aria-label="Abrir menu"
        onClick={() => setOpen((current) => !current)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav id="site-menu" className={open ? "nav open" : "nav"}>
        {links.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <button type="button" className="btn btn-small" onClick={() => openWhatsApp(defaultMessage)}>
          Falar no WhatsApp
        </button>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="inicio" className="hero section-shell">
      <div className="hero-copy">
        <p className="eyebrow">Refrigeração em Manaus</p>
        <h1>Climatização e refrigeração com qualidade e confiança</h1>
        <p className="hero-text">
          Serviços profissionais para manter seus equipamentos funcionando com
          eficiência, segurança e tranquilidade.
        </p>
        <button type="button" className="btn btn-large" onClick={() => openWhatsApp(heroMessage)}>
          Solicitar atendimento pelo WhatsApp
        </button>
        <ul className="quick-list" aria-label="Informações rápidas">
          {quickInfo.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="hero-media" aria-label="Técnico realizando manutenção em ar-condicionado">
        <img
          src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=900&q=78"
          alt="Técnico com ferramentas em atendimento de climatização"
          width="900"
          height="680"
          fetchPriority="high"
        />
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const [observation, setObservation] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const cleanObservation = observation.trim().slice(0, 500);
    const mensagemBase = `Olá! Encontrei a Baixo Grau Refrigeração pelo site e gostaria de solicitar atendimento para ${service.name}.

Valor informado no site:
${service.price}`;

    const mensagemCompleta = cleanObservation
      ? `${mensagemBase}

Observação: ${cleanObservation}`
      : mensagemBase;

    openWhatsApp(mensagemCompleta);
  }

  return (
    <article className="service-card">
      <div className="service-top">
        <span className="service-icon" aria-hidden="true">
          {service.accent}
        </span>
        <span>{service.shortName}</span>
      </div>
      <h3>{service.name}</h3>
      <p>{service.description}</p>
      <div className="price">
        <span>Valor informado no site</span>
        <strong>{service.price}</strong>
      </div>
      <form onSubmit={submit}>
        <label htmlFor={`${service.id}-obs`}>Observação opcional</label>
        <textarea
          id={`${service.id}-obs`}
          value={observation}
          maxLength={500}
          onChange={(event) => setObservation(event.target.value)}
          placeholder="Descreva o problema ou informe algum detalhe, se desejar."
        />
        <button type="submit" className="btn btn-card" aria-label={`Solicitar atendimento para ${service.name}`}>
          Solicitar atendimento
        </button>
      </form>
    </article>
  );
}

function ServicesSection() {
  return (
    <section id="servicos" className="services section-shell">
      <div className="section-heading">
        <p className="eyebrow">Serviços técnicos</p>
        <h2>Nossos serviços</h2>
        <p>
          Escolha o serviço desejado, informe os detalhes e fale diretamente com
          um profissional.
        </p>
      </div>
      <div className="services-grid">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
      <p className="price-note">
        Os valores apresentados são iniciais e podem variar de acordo com o
        modelo do equipamento, capacidade, local de instalação, estado de
        conservação, materiais necessários e complexidade do serviço. O orçamento
        final será confirmado após análise ou avaliação técnica.
      </p>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="sobre" className="about">
      <div className="section-shell about-grid">
        <div>
          <p className="eyebrow">Sobre</p>
          <h2>Sobre a Baixo Grau Refrigeração</h2>
          <p>
            A Baixo Grau Refrigeração atua com serviços de climatização,
            refrigeração e manutenção de equipamentos em Manaus. O trabalho é
            realizado com atenção, responsabilidade e foco em oferecer soluções
            adequadas para cada necessidade.
          </p>
        </div>
        <div>
          <p className="eyebrow">Missão</p>
          <h2>Nossa missão</h2>
          <p>
            Oferecer serviços de refrigeração com qualidade, segurança e
            responsabilidade, garantindo o bom funcionamento dos equipamentos e
            proporcionando mais conforto, economia e tranquilidade aos clientes.
          </p>
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="trust section-shell">
      <div className="section-heading">
        <p className="eyebrow">Diferenciais</p>
        <h2>Por que escolher a Baixo Grau Refrigeração?</h2>
        <p>
          O diferencial está no atendimento cuidadoso, na transparência do
          serviço e na busca por soluções eficientes para cada necessidade. O
          trabalho é realizado com pontualidade, organização e atenção aos
          detalhes, sempre priorizando a confiança e a satisfação do cliente.
        </p>
      </div>
      <div className="differentials">
        {differentials.map((item) => (
          <article key={item}>
            <span aria-hidden="true">✓</span>
            <h3>{item}</h3>
          </article>
        ))}
      </div>
      <div className="benefits">
        <h2>Benefícios para o seu equipamento</h2>
        <ul>
          {benefits.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contato" className="contact section-shell">
      <div>
        <p className="eyebrow">Área de atendimento</p>
        <h2>Atendimento em Manaus - AM</h2>
        <dl className="contact-list">
          <div>
            <dt>Endereço</dt>
            <dd>{company.address}</dd>
          </div>
          <div>
            <dt>Horário</dt>
            <dd>{company.hours}</dd>
          </div>
          <div>
            <dt>WhatsApp</dt>
            <dd>{company.whatsapp}</dd>
          </div>
        </dl>
      </div>
      <button type="button" className="btn btn-large" onClick={() => openWhatsApp(defaultMessage)}>
        Falar com um profissional
      </button>
    </section>
  );
}

function FinalCall() {
  return (
    <section className="final-call">
      <div className="section-shell">
        <h2>Seu equipamento precisa de manutenção?</h2>
        <p>
          Explique o que está acontecendo e receba orientação sobre o atendimento
          adequado para o seu equipamento.
        </p>
        <button type="button" className="btn btn-light" onClick={() => openWhatsApp(finalMessage)}>
          Chamar no WhatsApp
        </button>
      </div>
    </section>
  );
}

function Footer() {
  const links = [
    ["Início", "#inicio"],
    ["Serviços", "#servicos"],
    ["Sobre", "#sobre"],
    ["Contato", "#contato"],
  ];

  return (
    <footer className="footer">
      <div className="section-shell footer-grid">
        <div>
          <strong>{company.displayName}</strong>
          <p>
            {company.city}<br />
            {company.address}<br />
            WhatsApp: {company.whatsapp}<br />
            Horário: {company.hours}
          </p>
        </div>
        <nav aria-label="Links do rodapé">
          {links.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
          <a href="#privacidade">Política de privacidade</a>
        </nav>
        <p className="footer-note">
          © {new Date().getFullYear()} {company.displayName}. Direitos
          reservados. Serviços e valores estão sujeitos à avaliação técnica.
        </p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServicesSection />
        <AboutSection />
        <TrustSection />
        <ContactSection />
        <FinalCall />
      </main>
      <Footer />
      <a
        className="floating-whatsapp"
        href={whatsappUrl(defaultMessage)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com a Baixo Grau Refrigeração pelo WhatsApp"
      >
        <span aria-hidden="true">☎</span>
      </a>
    </>
  );
}
