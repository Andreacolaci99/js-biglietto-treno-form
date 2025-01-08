
const kmToGo = document.getElementById(`kmToGo`)
const submitButton = document.getElementById(`button`)
const price = document.getElementById(`price`)


submitButton.addEventListener(`click`, function(event){
  event.preventDefault()

  let km_price = kmToGo.value * 0.21 ;
  const age = document.querySelector(`#age`)
  const ageValue = parseInt(age.value)
  console.log(ageValue)

    if (ageValue < 18){

     km_price *= 0.80;
      
    } else if(ageValue > 65){

    km_price *= 0.60;

    }
    
     console.log(km_price)
      price.innerHTML =`Il prezzo da pagare è ${km_price.toFixed(2)}`
   }
)
