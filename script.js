const form = document.querySelector('form')
const ul = document.querySelector('ul')
const span = document.querySelector('span');
span.textContent = "Sem Item";


form.onsubmit = function(event){
    event.preventDefault()
const li = ul.querySelector('li').cloneNode(true)
const input = form.querySelector('input')
const value = input.value

if(value == '') return
if(span.textContent === "Sem Item"){
  span.textContent = value 

} else {
    li.querySelector('span').textContent = value
    ul.appendChild(li)
    li.style.display = 'flex'
   }

input.value = ''

ul.onclick = function(event){
    if(event.target.classList.contains('delete')){
        if(confirm('Deseja deletar esse item?')){
             event.target.parentElement.style.display = 'none'
           
        }
    }
}


}

