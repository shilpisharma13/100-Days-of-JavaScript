const userLocation = document.querySelector('.location')
const btn = document.querySelector('.btn')
// let position

function getLocation() {
  navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords
    userLocation.innerHTML = `Latitude: ${latitude} Longitude:${longitude}`
  })
}

btn.addEventListener('click', getLocation)
