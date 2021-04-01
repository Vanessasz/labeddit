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
  width: 500px;
  height: 450px;
  padding: 5px;
`;

export const CardVotos = styled.div`
  display: flex;
  align-items: flex-end;
  top: 20px;
  position: relative;
  margin-right: 350px;
`;

export const CardComentarios = styled.p`
  top: 50px;
  position: relative;
  margin-left: 350px;
`;

export const MeuBotao = styled.button`
  margin-bottom: 0.5em;
  color: #ff3877;
  display: block;
`;
