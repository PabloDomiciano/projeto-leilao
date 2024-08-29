import React from "react";
import "./ContentArea.css";

const ContentArea = () => {
  return (
    <section className="content-area">
      <h2>Visão Geral do Dashboard</h2>
      <div className="info-cards">
        <div className="info-card">
          <h3>Últimos Leilões</h3>
          <p>
            Acompanhe os leilões mais recentes que estão ativos agora. Fique por
            dentro das oportunidades mais recentes!
          </p>
        </div>
        <div className="info-card">
          <h3>Notícias e Atualizações</h3>
          <p>
            Fique atualizado com as últimas notícias e atualizações do site de
            leilão. Não perca nenhuma novidade!
          </p>
        </div>
        <div className="info-card">
          <h3>Leilões Populares</h3>
          <p>
            Veja os leilões mais populares e os itens mais procurados. Aproveite
            as melhores ofertas!
          </p>
        </div>
        <div className="info-card">
          <h3>Dicas e Truques</h3>
          <p>
            Confira nossas dicas e truques para otimizar sua experiência de
            leilão e aumentar suas chances de sucesso.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContentArea;
