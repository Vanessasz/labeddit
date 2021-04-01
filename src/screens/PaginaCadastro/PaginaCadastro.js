import React from "react";
import { Divisao, Input, MeuBotao } from "./estilo";
import { useHistory } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { cadastro } from "../../services/user";

export default function PaginaCadastro() {
  const history = useHistory();
  const { form, onChange } = useForm({ username: "", email: "", password: "" });

  const mudancaInput = (event) => {
    const { value, name } = event.target;
    onChange(value, name);
  };

  const formDeEnvio = (event) => {
    event.preventDefault();
    cadastro(form, history);
  };
  return (
    <Divisao>
      <p> Cadastro :)</p>
      <form onSubmit={formDeEnvio}>
        <Input
          placeholder="Nome"
          name="username"
          required
          value={form.username}
          onChange={mudancaInput}
        />

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
          required
          value={form.password}
          onChange={mudancaInput}
        />
        <MeuBotao>Cadastrar</MeuBotao>
      </form>
    </Divisao>
  );
}
