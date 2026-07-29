import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders indexable local SEO content for Baixo Grau", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();

  assert.match(html, /<html[^>]+lang="pt-BR"/i);
  assert.match(
    html,
    /<title>Baixo Grau Refrigeração \| Serviços de Refrigeração em Manaus<\/title>/i,
  );
  assert.match(
    html,
    /<meta[^>]+name="description"[^>]+content="Instalação, manutenção, limpeza e reparo de equipamentos de climatização e refrigeração em Manaus\./i,
  );
  assert.match(
    html,
    /<link[^>]+rel="canonical"[^>]+href="https:\/\/baixo-grau-refrigeracao\.vercel\.app\/"/i,
  );
  assert.match(html, /<meta[^>]+name="robots"[^>]+content="index, follow"/i);
  assert.match(
    html,
    /<h1[^>]*>Instalação, manutenção e refrigeração em Manaus<\/h1>/i,
  );
  assert.match(html, /Serviços de climatização e refrigeração em Manaus/i);
  assert.match(html, /Atendimento em Manaus - AM/i);
  assert.match(html, /5592982928686/);
  assert.doesNotMatch(html, /Rua Cerejeira/i);
});

test("renders visible FAQ and matching structured data", async () => {
  const response = await render();
  const html = await response.text();

  assert.match(html, /id="duvidas"/i);
  assert.match(html, /Como saber se o ar-condicionado precisa de manutenção\?/i);
  assert.match(html, /O valor do serviço pode mudar após a avaliação\?/i);
  assert.match(html, /"@type":"FAQPage"/i);
  assert.match(html, /"@type":"LocalBusiness"/i);
  assert.match(html, /"@type":"WebSite"/i);
  assert.match(html, /"@type":"WebPage"/i);
  assert.doesNotMatch(html, /"review"|"aggregateRating"/i);
});
