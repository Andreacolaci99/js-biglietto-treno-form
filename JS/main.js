console.log(document)

const submitButton = document.querySelector(`#button`)
const kmToGo = document.querySelector(`#kmToGo`)
const age = document.querySelector(`#age`)
const price = document.querySelector(`#price`)
const km_price = 0.21 ;
const finalprice = kmToGo * km_price;
const scontogiovani = finalprice - (finalprice * 0.20);
const scontoanziani = finalprice - (finalprice * 0.40);
let result = 0;

submitButton.addEventListener(`click`, function(event){
  event.preventDefault()
  
  if (!isNaN(kmToGo.value)){

      if (Number(age.value)<18){

     result = scontogiovani ;
 
     }else if (!isNaN(kmToGo.value) && Number(age.value)>65){
      
     result = scontoanziani ;
 
     }else {
      result = finalprice ; 
    }
     price.innerHTML =`Il prezzo da pagare è ${result}`
   }
}
)