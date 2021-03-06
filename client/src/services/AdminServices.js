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

export function createReservation(reservation){
  return fetch (baseURL + '/app', {
    method: 'post',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(reservation)
  })
    .then(r => r.json())
    .then(reservation =>  reservation)
}

export function getMenu(id){
  return fetch(baseURL + `/app/menu/${id}`)
    .then(r => {
      if(!r.ok) return Promise.reject(r.statusText);
      return r.json();
    })
    .then(restaurant => {
      return restaurant;
    });
}

export function finishReservation(id, reservation){
  return fetch(baseURL + `/app/menu/${id}`, {
    method: 'post',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(reservation)
  })
    .then(r => r.json())
    .then(reservation => reservation)
}