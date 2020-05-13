<div class="counter">
  <div class="tenth">
    0
  </div>
  <div class="ones">
    0
  </div>
</div>


const counter = document.querySelector(".counter");

let count = 98;

const ticker = () => {
  const id = setInterval(() =>  {
    count++  
    updateTicker(count);
 
    if (count === 100) {
      resetTicker(id)
    }
   
  }, 1000)
   
}

ticker();

const onesPlaceDiv = counter.querySelector('.ones');
const tenthPlaceDiv = counter.querySelector('.tenth');

const updateTicker = (count) => {
  if (count <= 9) {
    onesPlaceDiv.innerText = count
  }
  
  if (count > 9) {
    
    onesPlaceDiv.innerText = count % 10
    tenthPlaceDiv.innerText = Math.floor(count / 10)
  }
}


function resetTicker(id) {
   count = 0;
   onesPlaceDiv.innerText = 0;
   tenthPlaceDiv.innerText = 0;
   clearInterval(id);
}
