import { BASE_URL } from "../../../service/constants";
// import { LoginPost, RegisterPost } from "./post.interface";

const login = 'auth/login';
const register = 'auth/register';


export const postLogin = (body) => {
  return fetch(`${BASE_URL}${login}`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body),
  })
    .then( r => { return r } )
    .catch( e => { return e } )
}

export const postRegister = (body) => {
  return fetch(`${BASE_URL}${register}`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body),
  })
    .then( r => { return r } )
    .catch( e => { return e } )
}