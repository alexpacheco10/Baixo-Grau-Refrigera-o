export const company = {
  name: "Baixo Grau Refrigeracao",
  displayName: "Baixo Grau Refrigeração",
  segment: "Climatização, refrigeração e manutenção de equipamentos",
  city: "Manaus - AM",
  whatsapp: "(92) 98292-8686",
  whatsappIntl: "5592982928686",
  hours: "08h às 20h",
  canonicalUrl: "https://baixo-grau-refrigeracao.vercel.app",
};

export const quickInfo = [
  "Atendimento em Manaus",
  "Horário: 08h às 20h",
  "Atendimento residencial e predial",
  "Orçamento conforme avaliação",
  "Solicitação de atendimento pelo WhatsApp",
];

export const defaultWhatsAppMessage =
  "Olá! Encontrei a Baixo Grau Refrigeração pelo site e gostaria de saber mais sobre os serviços.";

export type Service = {
  id: string;
  name: string;
  shortName: string;
  description: string;
  price: string;
  accent: string;
};

export const services: Service[] = [
  {
    id: "instalacao-ar-condicionado",
    name: "Instalação de ar-condicionado",
    shortName: "Instalação",
    description:
      "Instalação de ar-condicionado em Manaus realizada com atenção aos detalhes para favorecer o funcionamento adequado e seguro do equipamento.",
    price: "Residencial: R$ 300\nPredial: a partir de R$ 300",
    accent: "AC",
  },
  {
    id: "manutencao-preventiva",
    name: "Manutenção preventiva",
    shortName: "Preventiva",
    description:
      "Revisão periódica para conservar o aparelho, reduzir falhas e manter um bom desempenho em residências e ambientes prediais.",
    price: "Residencial: a partir de R$ 200\nPredial: a partir de R$ 250",
    accent: "MP",
  },
  {
    id: "manutencao-corretiva",
    name: "Manutenção corretiva",
    shortName: "Corretiva",
    description:
      "Diagnóstico e correção de defeitos quando o equipamento apresenta falhas, ruídos, perda de rendimento ou deixa de funcionar.",
    price: "Necessário realizar uma avaliação.",
    accent: "MC",
  },
  {
    id: "limpeza-higienizacao-ar-condicionado",
    name: "Limpeza e higienização de ar-condicionado",
    shortName: "Higienização",
    description:
      "Limpeza dos componentes para melhorar o funcionamento do aparelho e contribuir para a qualidade do ar no ambiente.",
    price: "Residencial: R$ 200\nPredial: a partir de R$ 200",
    accent: "LH",
  },
  {
    id: "recarga-gas-refrigerante",
    name: "Recarga de gás refrigerante",
    shortName: "Recarga",
    description:
      "Avaliação do sistema e reposição do gás refrigerante quando a necessidade for confirmada por análise técnica.",
    price: "Necessário realizar uma avaliação.",
    accent: "RG",
  },
  {
    id: "manutencao-geladeiras-freezers",
    name: "Manutenção de geladeiras e freezers",
    shortName: "Geladeiras",
    description:
      "Diagnóstico e reparo de falhas em equipamentos residenciais e comerciais.",
    price: "Valor sob avaliação.",
    accent: "GF",
  },
  {
    id: "manutencao-bebedouros-purificadores",
    name: "Manutenção de bebedouros e purificadores",
    shortName: "Purificadores",
    description:
      "Revisão, limpeza e correção de falhas para manter o equipamento funcionando adequadamente.",
    price: "Valor sob avaliação.",
    accent: "BP",
  },
  {
    id: "manutencao-maquinas-lavar",
    name: "Manutenção de máquinas de lavar",
    shortName: "Lavadoras",
    description:
      "Diagnóstico e reparo de problemas relacionados ao funcionamento da máquina de lavar.",
    price: "Valor sob avaliação.",
    accent: "ML",
  },
];

export const benefits = [
  "Mais conforto no ambiente",
  "Melhor funcionamento dos equipamentos",
  "Redução do risco de falhas inesperadas",
  "Atendimento profissional",
  "Maior conservação dos aparelhos",
  "Soluções adequadas para cada necessidade",
];

export const differentials = [
  "Atendimento responsável",
  "Transparência no serviço",
  "Soluções eficientes",
  "Compromisso com o cliente",
];

export const faqs = [
  {
    question: "Como saber se o ar-condicionado precisa de manutenção?",
    answer:
      "Sinais como pouca refrigeração, ruídos, vazamento, mau cheiro ou aumento no consumo podem indicar necessidade de avaliação técnica.",
  },
  {
    question: "Com que frequência devo realizar a limpeza?",
    answer:
      "A frequência depende do uso, do ambiente e do estado do equipamento. A necessidade ideal deve ser confirmada após avaliação.",
  },
  {
    question: "O valor do serviço pode mudar após a avaliação?",
    answer:
      "Sim. Os valores informados no site são iniciais ou referenciais, e o orçamento final depende do equipamento, local, materiais e complexidade do serviço.",
  },
  {
    question: "A Baixo Grau Refrigeração atende em quais regiões?",
    answer:
      "O atendimento divulgado no site é para Manaus - AM. Para confirmar disponibilidade, fale pelo WhatsApp.",
  },
  {
    question: "A recarga de gás é necessária em toda manutenção?",
    answer:
      "Não. A recarga só deve ser considerada quando a avaliação técnica indicar necessidade no sistema.",
  },
];

export function whatsappUrl(message: string) {
  return `https://wa.me/${company.whatsappIntl}?text=${encodeURIComponent(
    message,
  )}`;
}
