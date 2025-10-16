import React from "react";
import CardEmprestimo from "./CardEmprestimo";

interface Emprestimo {
  id: number;
  imageUrl: string;
  title: string;
  link: string;
}

interface DadosSegmentos {
  emprestimosApoioFamilia: Emprestimo[];
  creditoHabitacao: Emprestimo[];
  reservasMatematicas: Emprestimo[];
}

interface ListSegmentsProps {
  segmento: keyof DadosSegmentos;
  dados: DadosSegmentos;
}

const formatTitle = (segmento: string): string => {
  const segmentosMap: { [key: string]: string } = {
    emprestimosApoioFamilia: "EMPRÉSTIMOS DE APOIO À FAMÍLIA",
    creditoHabitacao: "CRÉDITO À HABITAÇÃO",
    reservasMatematicas: "RESERVAS MATEMÁTICAS",
  };

  return segmentosMap[segmento] || segmento.replace(/([A-Z])/g, " $1").toUpperCase();
};

const ListSegments: React.FC<ListSegmentsProps> = ({ segmento, dados }) => {
  const dadosSegmento = dados[segmento];
  const title = formatTitle(segmento);

  return (
    <section className="w-full max-w-screen-xl mx-auto flex-center flex-col gap-14 pt-10 pb-28 px-4">
      <div className="w-full flex justify-items-start items-center gap-2">
        <span className="bg-emprestimos w-8 h-0.5 block"></span>
        <h2 className="font-medium text-emprestimos text-lg sm:text-lg">{title}</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 place-items-center gap-10">
        {dadosSegmento.map(({ id, imageUrl, title, link }, index) => (
          <div
            key={id}
            className={`relative group 
              ${index % 3 === 0 ? "sm:translate-y-14" : ""}
              ${index % 3 === 1 ? "sm:translate-y-8" : ""}
              ${index % 3 === 2 ? "sm:translate-y-0" : ""}
            `}
          >
            <CardEmprestimo key={id} imageUrl={imageUrl} title={title} link={link} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ListSegments;
