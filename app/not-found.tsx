import Link from "next/link";
import { company, defaultWhatsAppMessage, whatsappUrl } from "./site-data";

export default function NotFound() {
  return (
    <main className="not-found">
      <section className="not-found-content" aria-labelledby="not-found-title">
        <p className="eyebrow">Página não encontrada</p>
        <h1 id="not-found-title">Não encontramos esta página</h1>
        <p className="hero-text">
          O endereço acessado pode ter mudado ou não existir. Você pode voltar
          para a página inicial, ver os serviços ou falar com a {company.displayName}
          pelo WhatsApp.
        </p>
        <div className="not-found-actions">
          <Link className="btn" href="/">
            Ir para a página inicial
          </Link>
          <Link className="btn btn-light" href="/#servicos">
            Ver serviços
          </Link>
          <a
            className="btn btn-card"
            href={whatsappUrl(defaultWhatsAppMessage)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar no WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
