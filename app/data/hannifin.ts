export type Criterion = {
  id: string;
  text: string;
};

export const majorCriteria: Criterion[] = [
  {
    id: "prurido",
    text: "Prurido",
  },
  {
    id: "morfologia",
    text: "Morfologia e distribuição típica",
  },
  {
    id: "cronica",
    text: "Dermatite crônica ou recidivante",
  },
  {
    id: "atopia",
    text: "História pessoal ou familiar de atopia",
  },
];

export const minorCriteria: Criterion[] = [
  {
    id: "xerose",
    text: "Xerose",
  },
  {
    id: "ictiose",
    text: "Ictiose / hiperlinearidade palmar / queratose pilar",
  },
  {
    id: "teste_cutaneo",
    text: "Teste cutâneo imediato positivo",
  },
  {
    id: "ige",
    text: "IgE sérica elevada",
  },
  {
    id: "inicio_precoce",
    text: "Início precoce da doença",
  },
  {
    id: "infeccoes",
    text: "Tendência a infecções cutâneas",
  },
  {
    id: "eczema_maos",
    text: "Eczema de mãos ou pés",
  },
  {
    id: "eczema_mamilos",
    text: "Eczema de mamilos",
  },
  {
    id: "queilite",
    text: "Queilite",
  },
  {
    id: "conjuntivite",
    text: "Conjuntivite recorrente",
  },
  {
    id: "prega",
    text: "Prega infraorbital de Dennie-Morgan",
  },
  {
    id: "ceratocone",
    text: "Ceratocone",
  },
  {
    id: "catarata",
    text: "Catarata subcapsular anterior",
  },
  {
    id: "olheiras",
    text: "Escurecimento periorbitário",
  },
  {
    id: "palidez",
    text: "Palidez facial ou eritema facial",
  },
  {
    id: "pitiriase",
    text: "Pitiríase alba",
  },
  {
    id: "pregas",
    text: "Pregas anteriores do pescoço",
  },
  {
    id: "prurido_suor",
    text: "Prurido desencadeado pelo suor",
  },
  {
    id: "intolerancia_la",
    text: "Intolerância à lã",
  },
  {
    id: "acentuacao",
    text: "Acentuação perifolicular",
  },
  {
    id: "intolerancia_alimentos",
    text: "Intolerância alimentar",
  },
  {
    id: "curso",
    text: "Influência de fatores ambientais ou emocionais",
  },
  {
    id: "dermografismo",
    text: "Dermografismo branco",
  },
];