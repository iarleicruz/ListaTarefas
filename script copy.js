const form = document.querySelector('form')
const ul = document.querySelector('ul')
const span = document.querySelector('span');
span.textContent = "Sem Item";


  // uma forma de conxtruir o código 

// form.onsubmit = function(event){
//     event.preventDefault()

  // const li = document.createElement('li')
// li.setAttribute('class', "px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out flex justify-between")
// li.textContent = input.value


// const button = document.createElement('button')
// button.setAttribute('class', "text-red-700 delete")

// button.innerHTML = 'x'
//  li.appendChild(button)
//  ul.appendChild(li)


// }

// Outra forma de construir

// form.onsubmit = function(event){
//     event.preventDefault()

// const input = form.querySelector('input')
// const value = input.value

// ul.innerHTML += `<li class="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out flex justify-between"><span>${value}</span><button class="text-red-700 delete">ⅹ</button></li>`
// }



// Outra forma de construir

form.onsubmit = function(event){
    event.preventDefault()
const li = ul.querySelector('li').cloneNode(true)
const input = form.querySelector('input')
const value = input.value

if(value == '') return

// const li = ul.querySelector('li').cloneNode(true)
//   li = ul.querySelector('li').cloneNode(true)

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
            //   event.target.parentElement.remove()
              event.target.parentElement.style.display = 'none'
           
        }
    }
}


}

// function init() {
//     const span = document.querySelector('span');
// span.textContent = "Sem Item";

// }
// init() 