import styled from "styled-components";

export const Cards = styled.div`
  display: flex;
  font-family: georgia;
  flex-direction: column;
  text-align: center;
  margin: 10px auto;
  background: #dbb4ad;
  border: 2px solid #d30c78;
  border-radius: 10px;
  width: 300px;
  height: 250px;
  padding: 5px;
`;

export const CardVotos = styled.div`
  display: flex;
  align-items: flex-start;
  bottom: 10px;
`;

export const CardComentarios = styled.p`
  margin-left: 190px;
  top: 30px;
  position: relative;
`;

export const MeuBotao = styled.button`
  margin-bottom: 0.5em;
  color: #ff3877;
  display: block;
`;
