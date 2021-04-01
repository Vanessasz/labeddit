import React from "react";
import { Divisao, Input, MeuBotao } from "./estilo";
import { useHistory } from "react-router-dom";
import { irParaCadastro } from "../../router/Coordinator";
import { useForm } from "../../hooks/useForm";
import { login } from "../../services/user";

export default function PaginaLogin() {
  const history = useHistory();
  const { form, onChange } = useForm({ email: "", password: "" });

  const mudancaInput = (event) => {
    const { value, name } = event.target;
    onChange(value, name);
  };

  const formDeEnvio = (event) => {
    event.preventDefault();
    login(form, history);
  };
  return (
    <Divisao>
      <p>Login :)</p>
      <form onSubmit={formDeEnvio}>
        <Input
          placeholder="Email"
          type="email"
          name="email"
          required
          value={form.email}
          onChange={mudancaInput}
        />

        <Input
          placeholder="Senha"
          type="password"
          name="password"
          value={form.password}
          required
          onChange={mudancaInput}
        />
        <MeuBotao>Entrar</MeuBotao>
      </form>
      <MeuBotao onClick={() => irParaCadastro(history)}>
        Não tem login? Clique Aqui
      </MeuBotao>
    </Divisao>
  );
}
