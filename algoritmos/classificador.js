const participantes = [
  {
    souEu: true,
    responsavel: false,
    nome: "Matheus",
  },
  {
    souEu: false,
    responsavel: true,
    nome: "Marcos",
  },
  {
    souEu: false,
    responsavel: false,
    nome: "Lucas",
  },
  {
    souEu: false,
    responsavel: true,
    nome: "Victor",
  },
  {
    souEu: false,
    responsavel: false,
    nome: "Tiago",
  },
  {
    souEu: false,
    responsavel: false,
    nome: "Tadeu",
  },
  {
    souEu: false,
    responsavel: true,
    nome: "Ana",
  },
];

const classificador = (participantes) => {
  const eu = participantes.filter((participante) => participante.souEu);
  const responsaveis = participantes
    .filter((participante) => participante.responsavel)
    .sort((a, b) => a.nome.localeCompare(b.nome));
  const naoResponsaveis = participantes
    .filter((participante) => !participante.responsavel && !participante.souEu)
    .sort((a, b) => a.nome.localeCompare(b.nome));
  const result = [...eu, ...responsaveis, ...naoResponsaveis];
  const namesOfParticipantes = result.map((participante) => participante.nome);
  return namesOfParticipantes;
};
