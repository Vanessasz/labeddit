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
  height: 500px;
  padding: 5px;
`;

export const CardVotos = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  bottom: 10px;
`;

export const CardComentarios = styled.p`
justify-content: space-space-between;
margin-left: 190px;
top: 30px;
position: relative;
 
`;

export const MeuBotao = styled.button`
  margin-bottom: 0.5em;
  margin: 10px;
  color: #ff3877;
  display: block;
`;