console.log(document)

const submitButton = document.querySelector(`#button`)
const kmToGo = document.querySelector(`body > form .kmToGo`)
const age = document.querySelector(`body > form .age`)
const km_price = 0.21 ;
const finalprice = kmToGo * km_price;
const scontogiovani = finalprice - (finalprice * 0.20);
const scontoanziani = finalprice - (finalprice * 0.40);

submitButton.addEventListener(`click`, function(event){
    event.preventDefault()

    if (!isNaN(kmToGo)){

        if (Number(age)<18){
    
       alert(`Hai diritto a uno sconto del 20%! Il prezzo finale è € ${scontogiovani.toFixed(2)}`);
   
       }else if (!isNaN(kmToGo) && Number(age)>65){
   
       alert(`Hai diritto a uno sconto del 40%! Il prezzo finale è € ${scontoanziani.toFixed(2)}`);
   
       }else {
           alert(`Pagherai tariffa intera di € ${finalprice.toFixed(2)}`);
       }
   }
 }
)