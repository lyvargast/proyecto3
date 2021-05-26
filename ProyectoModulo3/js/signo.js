boton.addEventListener('click',e=>{
	e.preventDefault()

	let dia=document.getElementById('dia').value
	dia=parseInt(dia)

	let mes=document.getElementById('mes').value
	mes=parseInt(mes)

	let respuesta=document.getElementById('respuesta')


	if((mes===1 && dia>=21) || (mes===2 && dia<=18)) {
		texto=`<p> Su signo zodiacal es acuario <img src="images/acuario.png"</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if ((mes===2 && dia>=19) || (mes===3 && dia<=20)){
		texto=`<p> Su signo zodiacal es piscis <img src="images/picis.png"</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if ((mes===3 && dia>=21) || (mes===4 && dia<=20)){
		texto=`<p> Su signo zodiacal es Aries <img src="images/aries.png"</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
		}
	else if ((mes===4 && dia>=21) || (mes===5 && dia<=21)){
		texto=`<p> Su signo zodiacal es Tauro <img src="images/tauro.png"</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if ((mes===5 && dia>=22) || (mes===6 && dia<=21)){
		texto=`<p> Su signo zodiacal es Géminis <img src="images/gemini.png"</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if ((mes===6 && dia>=22) || (mes===7 && dia<=22)){
		texto=`<p> Su signo zodiacal es Cáncer <img src="images/cancer.png"</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if ((mes===7 && dia>=23) || (mes===8 && dia<=23)){
		texto=`<p> Su signo zodiacal es Leo <img src="images/leo.png"</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if ((mes===8 && dia>=24) || (mes===9 && dia<=23)){
		texto=`<p> Su signo zodiacal es Virgo <img src="images/Virgo.png"</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if ((mes===9 && dia>=24) || (mes===10 && dia<=23)){
		texto=`<p> Su signo zodiacal es Libra <img src="images/Virgo.png"</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if ((mes===10 && dia>=24) || (mes===11 && dia<=22)){
		texto=`<p> Su signo zodiacal es Escorpio <img src="images/scorpio.png"</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if ((mes===11 && dia>=23) || (mes===12 && dia<=21)){
		texto=`<p> Su signo zodiacal es Sagitario <img src="images/sagi.png"</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if ((mes===12 && dia>=22) || (mes===1 && dia<=20)){
		texto=`<p> Su signo zodiacal es Capricornio <img src="images/capri.png"</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else {
		texto=`<p> Digite una fecha válida</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")

	}


})