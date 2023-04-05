const compteur = document.querySelector('#compteur')! // si on rajoute le ! on dit que compteur ne peut pas être null
let i =0;
const increment = (e :Event) => {
  i++ ;
  const span =  compteur?.querySelector('span')
  if(span){
    span.innerText = i.toString()
  }

}

compteur?.addEventListener('click', increment)