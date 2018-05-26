const baseURL = "http://localhost:3000";

export function createRestaurant(restaurant){
  let formData = new FormData();
  for(let k in restaurant){
    formData.append(k, restaurant[k]);
  }
  return fetch(baseURL +'/mastermind/newrestaurant', {
    method:'post',
    body: formData
  })
    .then(r=>r.json())
    .then(restaurant => restaurant);
}

export function getRestaurants(){
  return fetch(baseURL + '/mastermind/restaurants')
    .then(r => r.json())
    .then(users => users)
}