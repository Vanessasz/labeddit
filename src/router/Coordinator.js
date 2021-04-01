export const irParaLogin = (history) => {
  history.push("/login");
};

export const irParaCadastro = (history) => {
  history.push("/cadastro");
};

export const irParaFeed = (history) => {
  history.push("/feed");
};

export const irParaPosts = (history, id) => {
  history.push(`/posts/${id}`);
};
