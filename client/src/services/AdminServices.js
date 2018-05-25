const baseURL = "http://localhost:3000";

export function createRestaurant(restaurant){
  return fetch (baseURL + '/mastermind/newrestaurant', {
    method: 'post',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(restaurant)
  })
    .then(r => r.json())
    .then(restaurant => restaurant)
}