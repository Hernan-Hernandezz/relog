let horas = document.querySelector('#horas'),
  minutos = document.querySelector('#minutos'),
  segundos = document.querySelector('#segundos')


setInterval( ()=>{
  let date = new Date
  let hora = date.getHours(),
    minuto = date.getMinutes(),
    segundo = date.getSeconds() 
  segundos.innerHTML = `${segundo}`
  minutos.innerHTML = `${minuto}`
  horas.innerHTML = `${hora}`
},1000) 
