
const age = document.getElementById(`age`)
const kmToGo = document.getElementById(`kmToGo`)
const submitButton = document.getElementById(`button`)
const price = document.getElementById(`price`)
const km_price = kmToGo.value * 0.21 ;
const scontogiovani = km_price - (km_price * 0.20);
const scontoanziani = km_price - (km_price * 0.40);


submitButton.addEventListener(`click`, function(event){
  event.preventDefault()
  let result = 0;
  
  if (!isNaN(kmToGo.value)){

      if (Number(age.value)<18){

     let result = scontogiovani;
 
     }else if (!isNaN(kmToGo.value) && Number(age.value)>65){
      
    let result = scontoanziani;
 
     }else {

    let result = km_price;

    }
     price.innerHTML =`Il prezzo da pagare è ${result.value}`
   }
}
)
console.log(result)