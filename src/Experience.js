import React from "react";
import styled from "styled-components";

const Experience = () => {
  return (
    <Container>
      <h1 id="experience">Experiência Profissional</h1>
      <h2>Estágio em Sistemas de Informação</h2>
      <h3>Fundação José Silveira</h3>
      <p>Início: 04/2022 | Atualmente</p>
      <p>
        Atividades: Acompanhar os sistemas implantados e suporte aos usuários.
      </p>
      <h2>Vendedor</h2>
      <h3>Mitchell Menswear</h3>
      <p>Início: 07/2018 | 01/2020</p>
      <p>
        Atividades: Realizar o atendimento direto ao consumidor, negociar preços
        de uma mercadoria, os prazos, as condições de pagamento e os descontos
        dessa venda. Além de orientar o cliente sobre as especificações dos
        produtos e/ou serviços, controlar a demanda dos pedidos em estoque e
        cumprir as meta de vendas.
      </p>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 3rem;
  margin-inline: 43vh;

  @media (max-width: 768px) {
    margin: 8vh;
  }

  h1 {
    color: #5434af;
  }

  h2 {
    color: #5e41b0;
  }

  h3 {
    color: #6e58ad;
  }

  p {
    color: #75848a;
    line-height: 1.7;
    letter-spacing: 2px;
    font-weight: 300;
  }
`;
export default Experience;
