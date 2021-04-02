import axios from "axios";
import { BASE_URL } from "../constants/apiConstants";
import { irParaFeed } from "../router/Coordinator";

export const login = (body, history) => {
  axios
    .post(`${BASE_URL}/login`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      irParaFeed(history);
    })
    .catch((erro) => {
      alert("Email ou senha inválidos :(");
      console.log(erro.mensagem);
    });
};

export const cadastro = (body, history) => {
  axios
    .post(`${BASE_URL}/signup`, body)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      alert("Cadastro efetuado com sucesso :)");
      irParaFeed(history);
    })
    .catch((erro) => {
      console.log(erro.mensagem);
    });
};

export const criandoPosts = (body, history) => {
  const token = localStorage.getItem("token");
  axios
    .post(`${BASE_URL}/posts`, body, {
      headers: {
        Authorization: token,
      },
    })
    .then(() => {
      irParaFeed(history);
    })
    .catch((erro) => {
      console.log(erro.mensagem);
    });
};

export const detalhesPosts = (id) => {
  axios
    .get(`${BASE_URL}/posts/${id}`, {
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
    .then(() => {})
    .catch((erro) => {
      console.log(erro.mensagem);
    });
};

export const comentarios = (body, id) => {
   
  axios.post(`${BASE_URL}/posts/${id}/comment`, body, {
      headers: {
        Authorization: localStorage.getItem("token")
      }})

      .then(res => {       
          console.log(res, "Comentário enviado!")

      }).catch(error => {
          console.log(error)
      })
}

// export const vote = (bodyVote, id) => {
   
//   const body = {
//       "direction": bodyVote
//   }
      
//       axios.put(`${BASE_URL}/posts/${id}/vote`, body, {
//           headers: {
//             Authorization: localStorage.getItem("token")
//           }})
  
//           .then(res => {     
              
  
//           }).catch(error => {
//               console.log(error.message)
//           })
  
//   return vote;
// }

// export const voteComment = (bodyVote, id, commentId) => {
 
//     const body = {
//         "direction": bodyVote
//     }
        
//         axios.put(`${BASE_URL}/posts/${id}/comment/${commentId}/vote`, body, {
//             headers: {
//               Authorization: localStorage.getItem("token")
//             }})
    
//             .then(res => {         
                
    
//             }).catch(error => {
//                 console.log(error.message)
//             })
    
//     return voteComment;
// }

