const baseURL = "http://localhost:3000";

export function signUp(user){
  return fetch (baseURL + '/signup', {
    method: 'post',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(r => r.json())
    .then(user =>  user)
}

export function logIn(user){
  return fetch (baseURL + '/login', {
    method: 'post',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(r => r.json())
    .then(user => user)
}

export function searchUsers(){
  return fetch(baseURL + '/mastermind/users')
    .then(r => r.json())
    .then(users => users)
}





