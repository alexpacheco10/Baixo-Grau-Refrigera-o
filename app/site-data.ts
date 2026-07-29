export const company = {
  name: "Baixo Grau Refrigeracao",
  displayName: "Baixo Grau Refrigeração",
  city: "Manaus - AM",
  address: "Rua Cerejeira, 457",
  whatsapp: "(92) 98292-8686",
  whatsappIntl: "5592982928686",
  hours: "08h às 20h",
  canonicalUrl: "https://baixo-grau-refrigeracao.pages.dev",
};

export const quickInfo = [
  "Atendimento em Manaus",
  "Horário de atendimento: 08h às 20h",
  "Atendimento residencial e predial",
  "Orçamento conforme avaliação",
  "Contato pelo WhatsApp",
];

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
      "Instalação realizada com atenção aos detalhes para garantir o funcionamento adequado e seguro do equipamento.",
    price: "Residencial: R$ 300\nPredial: a partir de R$ 300",
    accent: "AC",
  },
  {
    id: "manutencao-preventiva",
    name: "Manutenção preventiva",
    shortName: "Preventiva",
    description:
      "Revisão periódica para conservar o aparelho, reduzir falhas e manter um bom desempenho.",
    price: "Residencial: a partir de R$ 200\nPredial: a partir de R$ 250",
    accent: "MP",
  },
  {
    id: "manutencao-corretiva",
    name: "Manutenção corretiva",
    shortName: "Corretiva",
    description:
      "Diagnóstico e correção de defeitos quando o equipamento apresenta falhas ou deixa de funcionar.",
    price: "Necessário realizar uma avaliação.",
    accent: "MC",
  },
  {
    id: "limpeza-higienizacao-ar-condicionado",
    name: "Limpeza e higienização de ar-condicionado",
    shortName: "Higienização",
    description:
      "Limpeza dos componentes para melhorar o funcionamento do aparelho e contribuir para a qualidade do ar.",
    price: "Residencial: R$ 200\nPredial: a partir de R$ 200",
    accent: "LH",
  },
  {
    id: "recarga-gas-refrigerante",
    name: "Recarga de gás refrigerante",
    shortName: "Recarga",
    description:
      "Avaliação do sistema e reposição do gás refrigerante quando tecnicamente necessária.",
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

export function whatsappUrl(message: string) {
  return `https://wa.me/${company.whatsappIntl}?text=${encodeURIComponent(
    message,
  )}`;
}
