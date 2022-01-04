
const tabs = document.querySelectorAll('.tab')
const destDistance = document.getElementById('dest-distance')
const destTravel = document.getElementById('dest-est')
const destTitle = document.getElementById('dest-title')
const destDescription = document.getElementById('dest-desc')
const destImg = document.getElementById('dest-img')
let appInfo = {}



fetch('./data.json')
  .then(response => response.json())
  .then(data => getData(data))
  .catch(error => console.log(error));

 const getData = (data) => {
    
    appInfo = {...data}
    tabDestination(0)
    
 }

tabs.forEach((tab, index) => 
    tab.addEventListener('click', (e) =>{

        tabDestination(index)
        

    })
)


function tabDestination(index){
    const destinations = appInfo.destinations[index]
    destDistance.innerHTML = destinations.distance
    destTravel.innerHTML = destinations.travel
    destTitle.innerHTML = destinations.name
    destDescription.innerHTML = destinations.description
    destImg.src = destinations.images.png


    tabs.forEach( (tab) => {tab.classList.remove('active')})
    tabs[index].classList.add('active')

    
    
}