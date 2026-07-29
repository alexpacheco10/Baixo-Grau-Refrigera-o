"use client";

import Image from "next/image";
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

function ManifoldWatermark({ placement }: { placement: string }) {
  return (
    <Image
      className={`manifold-watermark ${placement}`}
      src="/manifold-watermark.svg"
      alt=""
      width={520}
      height={520}
      aria-hidden="true"
      draggable="false"
    />
  );
}

function ServiceIcon({ id }: { id: string }) {
  const common = {
    viewBox: "0 0 64 64",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  };

  const strokeProps = {
    stroke: "currentColor",
    strokeWidth: "4",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (id) {
    case "instalacao-ar-condicionado":
      return (
        <svg {...common} aria-hidden="true">
          <path {...strokeProps} d="M14 18h36v17H14z" />
          <path {...strokeProps} d="M22 43c5-4 15-4 20 0" />
          <path {...strokeProps} d="M22 28h20" />
          <path {...strokeProps} d="M48 28h2" />
        </svg>
      );
    case "manutencao-preventiva":
      return (
        <svg {...common} aria-hidden="true">
          <path {...strokeProps} d="M23 18h18" />
          <path {...strokeProps} d="M26 18v-6h12v6" />
          <path {...strokeProps} d="M18 18h28v30H18z" />
          <path {...strokeProps} d="m24 36 5 5 11-13" />
          <path {...strokeProps} d="M46 28h5v10h-5" />
        </svg>
      );
    case "manutencao-corretiva":
      return (
        <svg {...common} aria-hidden="true">
          <path {...strokeProps} d="M42 14a13 13 0 0 0-15 17L15 43a6 6 0 0 0 8 8l12-12a13 13 0 0 0 17-15l-9 9-8-8z" />
          <path {...strokeProps} d="M18 46h.1" />
        </svg>
      );
    case "limpeza-higienizacao-ar-condicionado":
      return (
        <svg {...common} aria-hidden="true">
          <path {...strokeProps} d="M17 38h30" />
          <path {...strokeProps} d="M23 38c0 8 4 13 9 13s9-5 9-13" />
          <path {...strokeProps} d="M32 12c-6 8-9 13-9 18a9 9 0 0 0 18 0c0-5-3-10-9-18Z" />
          <path {...strokeProps} d="M49 14v8" />
          <path {...strokeProps} d="M45 18h8" />
        </svg>
      );
    case "recarga-gas-refrigerante":
      return (
        <svg {...common} aria-hidden="true">
          <path {...strokeProps} d="M23 16h18" />
          <path {...strokeProps} d="M27 16v7h10v-7" />
          <path {...strokeProps} d="M22 23h20v28H22z" />
          <path {...strokeProps} d="M27 35h10" />
          <path {...strokeProps} d="M48 25c5 5 5 12 0 17" />
        </svg>
      );
    case "manutencao-geladeiras-freezers":
      return (
        <svg {...common} aria-hidden="true">
          <path {...strokeProps} d="M21 10h22v44H21z" />
          <path {...strokeProps} d="M21 30h22" />
          <path {...strokeProps} d="M28 20v4" />
          <path {...strokeProps} d="M28 38v4" />
        </svg>
      );
    case "manutencao-bebedouros-purificadores":
      return (
        <svg {...common} aria-hidden="true">
          <path {...strokeProps} d="M20 14h24v12H20z" />
          <path {...strokeProps} d="M24 26h16v24H24z" />
          <path {...strokeProps} d="M32 31c-5 6-7 10-7 14a7 7 0 0 0 14 0c0-4-2-8-7-14Z" />
          <path {...strokeProps} d="M44 20h6v8" />
        </svg>
      );
    case "manutencao-maquinas-lavar":
      return (
        <svg {...common} aria-hidden="true">
          <path {...strokeProps} d="M19 10h26v44H19z" />
          <path {...strokeProps} d="M25 18h5" />
          <path {...strokeProps} d="M37 18h2" />
          <circle {...strokeProps} cx="32" cy="36" r="10" />
          <path {...strokeProps} d="M25 37c5 4 9 4 14 0" />
        </svg>
      );
    default:
      return (
        <svg {...common} aria-hidden="true">
          <path {...strokeProps} d="M18 20h28v24H18z" />
          <path {...strokeProps} d="M24 32h16" />
        </svg>
      );
  }
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
        <span className="brand-logo">
          <Image src="/baixo-grau-logo-transparent.png" alt="" width={96} height={56} />
        </span>
        <span>
          <strong>{company.displayName}</strong>
          <small>Refrigeração e climatização</small>
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
    <section id="inicio" className="hero watermark-section">
      <ManifoldWatermark placement="watermark-hero" />
      <div className="section-shell hero-grid section-content">
        <div className="hero-brand-art" aria-label="Logo da Baixo Grau Refrigeração e Climatização">
          <Image
            src="/baixo-grau-logo-transparent.png"
            alt="Logo da Baixo Grau Refrigeração e Climatização"
            width={1254}
            height={625}
            priority
          />
        </div>
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
      <div className="service-visual" aria-hidden="true">
        <span className="service-icon">
          <ServiceIcon id={service.id} />
        </span>
        <span className="service-short">{service.shortName}</span>
      </div>
      <div className="service-body">
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
      </div>
    </article>
  );
}

function ServicesSection() {
  return (
    <section id="servicos" className="services watermark-section">
      <ManifoldWatermark placement="watermark-services" />
      <div className="section-shell section-content">
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
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="sobre" className="about watermark-section">
      <ManifoldWatermark placement="watermark-about" />
      <div className="section-shell about-grid section-content">
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
    <section className="final-call watermark-section">
      <ManifoldWatermark placement="watermark-footer" />
      <div className="section-shell section-content">
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
        <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
          <path
            fill="currentColor"
            d="M16 3.5C9.1 3.5 3.5 8.8 3.5 15.4c0 2.4.75 4.65 2.05 6.5L4 28.5l6.8-1.75a13 13 0 0 0 5.2.55c6.9 0 12.5-5.35 12.5-11.9S22.9 3.5 16 3.5Zm6.6 17.15c-.28.78-1.62 1.5-2.26 1.58-.6.09-1.36.13-2.2-.14-.5-.16-1.15-.37-1.98-.72-3.48-1.48-5.75-4.95-5.92-5.18-.17-.23-1.42-1.88-1.42-3.58s.9-2.54 1.22-2.88c.32-.35.7-.44.93-.44h.68c.22 0 .52-.08.82.62.31.75 1.05 2.58 1.14 2.77.09.18.15.4.03.63-.12.24-.18.38-.36.59-.18.2-.38.45-.54.6-.18.18-.37.38-.16.74.21.36.94 1.55 2.02 2.5 1.39 1.23 2.56 1.61 2.92 1.79.36.18.57.15.78-.09.21-.24.9-1.05 1.14-1.41.24-.36.48-.3.81-.18.33.12 2.12 1 2.48 1.18.36.18.6.27.69.42.09.15.09.87-.19 1.65Z"
          />
        </svg>
      </a>
    </>
  );
}
