console.log(document)

const age = document.querySelector(`#age`)
const kmToGo = document.querySelector(`#kmToGo`)
const submitButton = document.querySelector(`#button`)
const price = document.querySelector(`#price`)
const km_price = kmToGo * 0.21 ;
const scontogiovani = km_price - (km_price * 0.20);
const scontoanziani = km_price - (km_price * 0.40);
let result = 0;

submitButton.addEventListener(`click`, function(event){
  event.preventDefault()

  if (!isNaN(kmToGo.value)){

      if (Number(age.value)<18){

     result = scontogiovani ;
 
     }else if (!isNaN(kmToGo.value) && Number(age.value)>65){
      
     result = scontoanziani ;
 
     }else {
      result = km_price ; 
    }
     price.innerHTML =`Il prezzo da pagare è ${result}`
   }
}
)