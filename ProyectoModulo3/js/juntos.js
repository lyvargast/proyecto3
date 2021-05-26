boton.addEventListener('click',e=>{
	e.preventDefault()

	let signo1=document.getElementById('signo1').value
	let signo2=document.getElementById('signo2').value

	let respuesta=document.getElementById('respuesta1')

	if(signo1==1 && signo2==1){
		texto=`<p>El nivel de compatibilidad de Aries con Aries es regular.<br>
		 Se pasarán el día midiéndose y se puede establecer una relación de fuerzas constante. Los Aries son muy apasionados, exigentes y competitivos, por lo que es probable, que en esta relación predominen los choques de ego.</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if (signo1==1 && signo2==2 || signo1==2 && signo2==1){
		texto=`<p>La compatibilidad entre Aries y Tauro es muy buena.<br>
		Tauro un signo de Tierra, mientras que Aries es un signo de Fuego, por lo que las relaciones entre estos dos signos suelen estar centradas generalmente en el aspecto financiero y materialista de la vida.</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if (signo1==1 && signo2==3 || signo1==3 && signo2==1){
		texto=`<p>Aries se suele sentir atraido por la creatividad y la energía de Géminis, y esta combinación promete una gran amistad, una brillante conversación e interesantes momentos de ocio juntos.<br>
		 Por lo que su grado de compatibilidad puede ser muy grande.</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if (signo1==1 && signo2==4 || signo1==4 && signo2==1){
		texto=`<p>La compatibilidad entre Aries y Cáncer es regular. Cuando Cáncer empieza una relación con Aries se suele establecer entre ambos una conexión inmediata a nivel emocional.<br>
		El signo de Cáncer se sentirá muy atraído por el aire apasionado, seguro y entusiasta de Aries, quien a su vez, se sentirá en paz al estar con un Cáncer.
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if (signo1==1 && signo2==5 || signo1==5 && signo2==1){
		texto=`<p>La atracción inmediata entre Aries y Leo es muy fuerte y tanto Aries como Leo se crecerán en compañía uno del otro y querrán conocer mejor a su pareja a todos los niveles, físicamente, mentalmente, emocionalmente e incluso, espiritualmente.<br>
		Por lo tanto, la compatibilidad entre Aries y Leo es altísima.
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if (signo1==1 && signo2==6 || signo1==6 && signo2==1){
		texto=`<p>
		La compatibilidad entre Aries y Virgo es regular. Los Virgo suelen ser bastante fríos, prácticos y a veces, críticos, lo que supone un contraste para los Aries que son rápidos, impetuosos e impulsivos.
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if (signo1==1 && signo2==7 || signo1==7 && signo2==1){
		texto=`<p>Aries y Libra son signos opuestos, lo cual puede ser bueno, al menos, al inicio de la relación por la atracción de opuestos.<br>
		No obstante, a medida que el tiempo pasa la novedad desaparece, y puede que haya demasiadas diferencias para que la relación funcione a largo plazo, a menos que exista una base muy fuerte de amor y de buena voluntad por parte de ambos signos.
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if (signo1==1 && signo2==8 || signo1==8 && signo2==1){
		texto=`<p>Aries y Escorpio es una combinación muy complicada y ambos signos deberán poner mucho de su parte, para que la relación funcione, debido a sus enormes diferencias entre sus carácteres. Sus planetas regentes, Marte y Saturno, son fuerzas diametralmente opuestas.
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if (signo1==1 && signo2==9 || signo1==9 && signo2==1){
		texto=`<p>Tanto Aries como Sagitario son signos de Fuego, por lo que a esta combinación no le faltará nada de variedad y emoción, pudiendo ser, en ocasiones, explosiva.<br>
		 La relación despegará directamente desde su comienzo. Su grado de compatibilidad es muy alto.
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if (signo1==1 && signo2==10 || signo1==10 && signo2==1){
		texto=`<p>La combinación Aries y Capricornio es muy complicada y su grado de compatibilidad es bajo. Ambos signos deberán poner mucho de su parte para que la relación funcione, debido a sus enormes diferencias entre sus carácteres.<br>
		 Sus planetas regentes, Marte y Saturno, son fuerzas diamétricamente opuestas.
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if (signo1==1 && signo2==11 || signo1==11 && signo2==1){
		texto=`<p>Aries y Acuario tienen mucho en común y un grado de compatibilidad muy alto. Ambos signos son independientes, humanitarios, optimistas y entusiastas. Les gustan las emociones fuertes, la valentía y carácter progresivo de los Acuario tienden a atraer mucho a los Aries.
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if (signo1==1 && signo2==12 || signo1==12 && signo2==1){
		texto=`<p>Una pareja Aries y Piscis es una combinación difícil con bastantes retos, porque a pesar de una fuerte atracción inicial, existen diferencias importantes entre ellos, que tendrán que ser superadas para que una relación de pareja funcione a largo plazo.
		Si logran formar una pareja estable, es probable que sea una relación fuera de lo común.</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	//Signo 2
	else if (signo1==2 && signo2==2){
		texto=`<p>
		La compatibilidad entre Tauro y Tauro es muy alta. Tauro es el signo de la tierra y esto constituye una base muy sólida para la relación. Hay algo simple y franco en los Tauro.<br>
		Son prácticos y no se complican demasiado, por lo que son muy compatibles en una relación.
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if (signo1==2 && signo2==3 || signo1==3 && signo2==2){
		texto=`<p>
		La compatibilidad entre Géminis y Tauro no es muy alta porque aunque los planetas Venus y Mercurio, que rigen sobre Tauro y Géminis, respectivamente, se llevan bien, hay algunas diferencias importantes en las motivaciones y la personalidad básicas de ambos signos.
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if (signo1==2 && signo2==4 || signo1==4 && signo2==2){
		texto=`<p>
		Esta combinación Cáncer - Tauro es una de las más compatibles tanto para Cáncer como para Tauro. <br>
		La gran ventaja es, que estos dos signos disfrutan demostrando su afecto hacia su pareja, y cuando los dos están de buen humor, es una combinación irresistible.
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if (signo1==2 && signo2==5 || signo1==5 && signo2==2){
		texto=`<p>La compatibilidad entre Leo y Tauro es alta, siempre y cuando los dos signos asuman sus diferencias y las gestionen de forma inteligente y evitando su habitual terquedad. La terquedad de los Tauro también forma parte de las características de Leo.<br>
		Ambos poseen una gran determinación y se aferran a una decisión una vez que la han tomado.
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if (signo1==2 && signo2==6 || signo1==6 && signo2==2){
		texto=`<p>
		Una combinación con compatibilidad muy alta, en realidad Tauro y Virgo tiene todas posibilidades, para tener una relación feliz y estable durante muchos años.
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if (signo1==2 && signo2==7 || signo1==7 && signo2==2){
		texto=`<p>La compatibilidad entre Libra y Tauro no es muy alta, por no decir baja y recomendamos mucho esfuerzo y comprensión por parte de los dos para hacer funcionar esta relación.<br>
		Lo bueno es que a Libra y a Tauro les gustan los retos - y hacer perdurar esta relación supone, sin duda, un reto muy interesante.
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if (signo1==2 && signo2==8 || signo1==8 && signo2==2){
		texto=`<p>La compatibilidad entre Escorpio y Tauro es más alta de lo que podría parecer. Tauro y Escorpio son signos zodiacales opuestos y por eso, a veces, se atraen mutuamente sin remedio.<br>
		Su primer encuentro podría ser sencillamente increíble y a Tauro le podría sorprender la pasión, que despierta su presencia.<br>
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if (signo1==2 && signo2==9 || signo1==9 && signo2==2){
		texto=`<p>La compatibilidad entre Sagitario y Tauro es bastante baja porque son signos muy diferentes.<br>
		 Tauro es práctico y se preocupa por lo que puede tocar y sentir (el mundo de las cosas reales).
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if (signo1==2 && signo2==10 || signo1==10 && signo2==2){
		texto=`<p>La compatibilidad entre Capricornio y Tauro es muy alta, porque tienen mucho en común y pueden esperar ser muy felices juntos. <br>
		El sentido práctico de Capricornio se lleva bien con la actitud realista de Tauro. Su conexión inicial con Capricornio será buena y Tauro encontrará muchas similitudes con su pareja.
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if (signo1==2 && signo2==11 || signo1==11 && signo2==2){
		texto=`<p>
		La compatibilidad entre Acuario y Tauro no es muy alta debido a las incompatibilidades, que existen entre ellos.<br>
		Pero sí tiene muchas posibilidades siempre y cuando ambos estén dispuestos a esforzarse para que funcione.
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if (signo1==2 && signo2==12 || signo1==12 && signo2==2){
		texto=`<p>
		La compatibilidad entre Piscis y Tauro es muy buena aunque sobre todo desde el punto de vista de compañerismo y actividad social.<br>
		Si una pareja Tauro-Piscis decide separarse, lo más seguro es que logren conservar una excelente amistad que puede incluso llegar a incomodar a futuras parejas.
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}

//TERCER SIGNO
	else if (signo1==3 && signo2==3){
		texto=`<p>
		La compatibilidad de Géminis con Géminis es alta y lo más probable, que una pareja de dos Géminis tengan una relación llena de diversión, aventura y variedad aunque tengan que aprender virtudes como la paciencia y el compromiso para que funcione a largo plazo.
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if (signo1==3 && signo2==4 || signo1==4 && signo2==3){
		texto=`<p>
		A primera vista los signos Cáncer y Géminis no tienen mucha compatibilidad porque existen diferencias muy importantes entre sus objetivos y los métodos que utiliza para conseguirlos.<br>
		No obstante, algunos expertos en astrología afirman, que cuando dos signos opuestos se atraen, la relación puede funcionar precisamente por la atracción de lo opuesto.
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if (signo1==3 && signo2==5 || signo1==5 && signo2==3){
		texto=`<p>
		La compatibilidad entre Leo y Géminis es bastante alta y en esta relación ambos descubrirán tener mucho en común. Tanto a Géminis como a Leo les encanta divertirse.<br>
		Los dos tienen una naturaleza aventurera y disfrutan de la vida. Se encontrarán mutuamente fascinantes y disfrutarán en compañía del otro.		
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if (signo1==3 && signo2==6 || signo1==6 && signo2==3){
		texto=`<p>
		La compatibilidad de Géminis con Virgo es bastante alta, sobre todo si los dos se esfuerzan en comprender y escuchar a su pareja.
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if (signo1==3 && signo2==7 || signo1==7 && signo2==3){
		texto=`<p>
		Géminis y Libra presentan una excelente compatibilidad, por lo que si esta es la combinación de tu relación hay muchas probabilidades de que seas extremadamente feliz durante mucho tiempo.
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if (signo1==3 && signo2==8 || signo1==8 && signo2==3){
		texto=`<p>La compatibilidad entre Escorpio y Géminis es bastante baja y ambas partes de la relación deberán trabajar duramente para conseguir, que funcione.<br>
		Si son lo suficientemente decididos, podría ser posible, pero deberán tener cuidado o se podrían ver envueltos en un escenario en el, que incluso dirigirse la palabra les resultaría difícil.
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if (signo1==3 && signo2==9 || signo1==9 && signo2==3){
		texto=`<p>
		Esta combinación de energías planetarias resulta intrigante. Sagitario es el signo opuesto a Géminis y el que resulte bien o no dependerá de la perspectiva, que tomen ambos.
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if (signo1==3 && signo2==10 || signo1==10 && signo2==3){
		texto=`<p>
		La compatibilidad de Capricornio con Géminis es bastante baja, dada la forma tan distinta, que tienen de enfocar la vida.<br>
		A ambos signos tendrán, que hacer un gran esfuerzo para que la relación funcione a largo plazo.
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if (signo1==3 && signo2==11 || signo1==11 && signo2==3){
		texto=`<p>
		La compatibilidad entre los signos Acuario y Géminis es muy alta, ya que ambos esperan sacar más o menos lo mismo de la vida.<br>
		Tienen planteamientos muy parecidos e incluso a nivel intelectual son compatibles.
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if (signo1==3 && signo2==12 || signo1==12 && signo2==3){
		texto=`<p>
		La compatibilidad entre Piscis y Géminis no es una de las más altas de estos signos y ambos tendrán, que esforzarse para hacer, que la relación funcione.<br>
		Sus elementos de aire y agua son muy distintos porque mientras, que el Aire está relacionado con la mente, el Agua está relacionado con las emociones.
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
//CUARTO SIGNO
else if (signo1==4 && signo2==4){
		texto=`<p>
		El grado de compatibilidad entre dos Cáncer es muy alto. <br>
		Es una combinación muy buena, ya que los Cáncer son un signo, que hay que entender para avanzar y ¿Quién mejor para entenderse que ellos mismos?
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if (signo1==4 && signo2==5 || signo1==5 && signo2==4){
		texto=`<p>
		Cáncer-Leo es una combinación es muy compatible.<br> 
		Tanto Cáncer como Leo tienen un ego bastante frágil, son vulnerables y no encajan bien la crítica, porque se ofenden con facilidad.<br>
		Ambos signos necesitan cariño y mucha atención de su pareja.
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if (signo1==4 && signo2==6 || signo1==6 && signo2==4){
		texto=`<p>
		Una combinación Cáncer y Virgo tiene compatibilidad muy alta.<br>
		Esta es una combinación rica y fértil de dos signos femeninos del zodiaco, regidos por la Luna y por Mercurio, respectivamente.<br>
		La combinación de Cáncer y Virgo produce grandes resultados a todos los niveles.
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if (signo1==4 && signo2==7 || signo1==7 && signo2==4){
		texto=`<p>
		La compatibilidad a largo plazo entre Cáncer y Libra es una combinación de signos es bastante baja y solamente sobreviriá la pareja si hay una base de amor y pasión muy fuerte.
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if (signo1==4 && signo2==8 || signo1==8 && signo2==4){
		texto=`<p>
		Las personas, que nacen bajo el mismo elemento suelen sentirse cómodas y atraerse entre sí.<br>
		Este es el caso de Cáncer y Escorpio. Tiene un grado de compatibilidad alto.<br>
		Ambos son sensibles, emocionales y cariñosos, pero Escorpio tiene un modo muy distinto de expresar el amor.
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if (signo1==4 && signo2==9 || signo1==9 && signo2==4){
		texto=`<p>
		El grado de compatibilidad entre Cáncer y Sagitario es más bien bajo.<br>
		Aunque hay una posibilidad de que Cáncer y Sagitario experimenten una fuerte atracción al conocerse, la relación puede no estar destinada a funcionar a largo plazo.
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if (signo1==4 && signo2==10 || signo1==10 && signo2==4){
		texto=`<p>
		La Compatibilidad entre Cáncer y Capricornio es már bien baja. A pesar de las importantes diferencias entre los signos de Cáncer y Capricornio, es posible que se establezca una relación entre los dos, aunque ambos deberán poner un poco de su parte.<br>
		Mientras que los Cáncer son cariñosos y expresivos, a Capricornio le cuesta expresar sus sentimientos.
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if (signo1==4 && signo2==11 || signo1==11 && signo2==4){
		texto=`<p>
		La combinación de los signos Cáncer y Acuario presenta muchos retos en una pareja.<br>
		La compatibilidad es baja a primera vista, aunque gracias a que ambos signos son muy persistentes, si hay suficientemente amor y disposición de esforzarse, una relación duradera es difícil, pero no imposible.
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if (signo1==4 && signo2==12 || signo1==12 && signo2==4){
		texto=`<p>
		Piscis y Cáncer tienen mucho en común, especialmente en cuanto a compatibilidad emocional.<br>
		Ambos signos se entienden instintivamente entre sí y sienten las necesidades del otro. Ambos son cariñosos y dan apoyo a su pareja.
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	//QUINTO SIGNO
	else if (signo1==5 && signo2==5){
		texto=`<p>
		Cuándo dos Leo se conocen, las llamas del amor y los rugidos de pasión hacen que toda la jungla tiemble de delicia.<br>
		Leo, el León es el monarca del Zodiaco y la combinación real es observada con entusiasmo por los demás, ya que se exhibe para, que todos la vean.<br>
		Su grado de compatibilidad es altísima.
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if (signo1==5 && signo2==6 || signo1==6 && signo2==5){
		texto=`<p>
		La compatibilidad de Leo con Virgo es regular, y ambos signos tendrán, que trabajar bastante para que la relación sea duradera. <br>
		La personalidad de Leo es muy distinta a la de Virgo.<br>
		Leo busca ser el centro de atención, mentras que Virgo es una persona mucho más privada.
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if (signo1==5 && signo2==7 || signo1==7 && signo2==5){
		texto=`<p>
		El sabroso mejunje de Libra, la Balanza, y Leo, el León, es exquisito. Libra es el punto focal de la elegancia en el zodiaco. <br>
		Regido por Venus, el planeta del amor y el placer sensual, Libra busca una relación con una ferviente fascinación.<br>
		Libra vive para el amor y el estilo.
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if (signo1==5 && signo2==8 || signo1==8 && signo2==5){
		texto=`<p>
		La compatibilidad entre Escorpio y Leo es bastante baja. La atracción es enorme, pero el choque fuertes caracteres más.<br>
		El romántico Leo, un Signo de Fuego, es autosuficiente y seguro y un amante ardiente, lleno de encanto personal y magnetismo físico...
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if (signo1==5 && signo2==9 || signo1==9 && signo2==5){
		texto=`<p>
		El intrépido Leo y el aventurero Sagitario forman una combinación romántica natural; también pueden ser los mejores amigos.<br>
		Dos signos de Fuego juntos encenderán pasiones abrasadoras en el dormitorio, dado que ambos entienden instintivamente las necesidades más profundas del otro.
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if (signo1==5 && signo2==10 || signo1==10 && signo2==5){
		texto=`<p>
		Tendrán que hacer ambos un sacrificio importante para que esta relación sea lo más duradera posible, algo que conseguirán no tomándose la vida y el amor con tanta solemnidad y pomposidad.<br>
		Lo mejor. Admiración, sensualidad, deleite, lealtad y estímulo de superación.
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if (signo1==5 && signo2==11 || signo1==11 && signo2==5){
		texto=`<p>
		A los Acuario les gusta el calor, la generosidad y la energía de Leo mientras, que a los Leo les impresiona la capacidad intelectual y la seguridad de Acuario.<br>
		Los dos signos son muy distintos, pero a pesar de sus diferencias logran atraerse e impresionarse.
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if (signo1==5 && signo2==12 || signo1==12 && signo2==5){
		texto=`<p>
		Leo se sentirá atraído por el sexy, pero vulnerable, Piscis. <br>
		Piscis también se siente atraído por el León, al percibir que Leo tiene un corazón cálido y una fuerza interior que puede estar ahí para él cuando los terrores de la noche acechen.<br>
		Su compatibilidad y complementariedad pueden ser muy grandes.'
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	//SEXTO SIGNO
	else if (signo1==6 && signo2==6){
		texto=`<p>
		La compatibilidad de Virgo con Virgo es muy alta y en esta relación la palabra clave es el perfeccionismo y de ahí se deriva el principal problema, que deban superar - exigencias excesivas.<br>
		Virgo es tremendamente aplicado y si funcionan como pareja, juntos serán capaces de mover montañas.
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if (signo1==6 && signo2==7 || signo1==7 && signo2==6){
		texto=`<p>
		La compatibilidad de Libra con Virgo no es muy alta y para que funcione la relación ambos signos tendrán que transigir.<br>
		No obstante, cuando funciona puede formarse una pareja muy equilibrada y muy especial, sobre todo cuando ambos logran convertir sus diferencias en un activo complementario para su pareja.
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if (signo1==6 && signo2==8 || signo1==8 && signo2==6){
		texto=`<p>
		La compatibilidad de Escorpio con Virgo es bastante alta, ya que la combinación de Tierra con Agua hace, que esta relación suela ser fructífera en muchos sentidos.<br>
		Ambos signos conectan muy bien, porque Virgo es el signo de amistad y realización para Escorpio, mientras que Escorpio representa el signo de comunicación para Virgo.
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if (signo1==6 && signo2==9 || signo1==9 && signo2==6){
		texto=`<p>
		La compatibilidad de Sagitario con Virgo no es muy alta dadas las grandes diferencias, que existen entre estos dos signos.<br>
		Mientras, que Virgo presta atención a los pequeños detalles, Sagitario tiende a centrarse en la visión global.
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if (signo1==6 && signo2==10 || signo1==10 && signo2==6){
		texto=`<p>
		La compatibilidad de Capricornio con Virgo es muy alta gracias a una combinación de elementos similares, que da una buena base para su relación.<br>
		Virgo tendrá una compenetración inmediata con Capricornio.
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if (signo1==6 && signo2==11 || signo1==11 && signo2==6){
		texto=`<p>
		La compatibilidad de Acuario con Virgo es una de las más bajas del Zodiaco y tendrá, que haber mucho amor para que esta relación tenga posibilidades a largo plazo.
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if (signo1==6 && signo2==12 || signo1==12 && signo2==6){
		texto=`<p>
		La compatibilidad de Piscis con Virgo es muy buena a pesar de una contradicción entre los dos signos.<br>
		Son dos signos opuestos: algo que paradójicamente en Astrología se suele considerar como un indicador positivo de amor y matrimonio.
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	//Séptimo signo

	else if (signo1==7 && signo2==7){
		texto=`<p>
		Cuando el estiloso Libra encuentra a otro Libra, la atracción es inmediata. El gusto atrae al gusto.<br>
		La magia favorable de esta unión Aire - Aire tiene sus retos pero, una vez resueltos, los dos disfrutarán de una pareja comprensiva y un romance de por vida.
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if (signo1==7 && signo2==8 || signo1==8 && signo2==7){
		texto=`<p>
		La pareja formada por Escorpio y Libra tiene la gran ventaja de ser una relación muy equilibrada porque la compatibilidad entre estos dos signos es altísima.<br>
		Libra cuyo planeta es Venus representa el amor, la sensualidad y el placer.
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if (signo1==7 && signo2==9 || signo1==9 && signo2==7){
		texto=`<p>
		La combinación de Libra, la Balanza, y Sagitario, el Arquero, es muy buena.<br>
		Libra es el punto focal de la elegancia en el zodíaco. Regido por Venus, el planeta de amor y el placer sensual, Libra busca una relación con una ferviente fascinación.<br>
		Libra vive para el amor y el estilo.
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if (signo1==7 && signo2==10 || signo1==10 && signo2==7){
		texto=`<p>
		No es la combinación más cómoda del Cosmos por varias razones, pero eso no significa que no puedan aprender a estar juntos y amarse mucho.<br>
		De hecho, si aprenden a apreciar y respetar las fortalezas y debilidades del otro, los dos pueden llegar a ser mucho mejor persona.<br>		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if (signo1==7 && signo2==11 || signo1==11 && signo2==7){
		texto=`<p>
		La compatibilidad entre Libra y Acuario es excelente. Ambos signos son sociables, les encanta conversar y disfrutan con reuniones y actos sociales.<br>
		Los dos son muy extrovertidos y suelen tener muchos amigos. A los dos les gusta la independencia y por eso no será un problema dar y disfrutar de cierta libertad dentro de su relación.
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if (signo1==7 && signo2==12 || signo1==12 && signo2==7){
		texto=`<p>
		Libra y Piscis son una combinación inusual, pero la atracción entre ambos puede ser intensa.<br> 
		El aire y el agua no se mezclan fácilmente, por lo que Libra tendrá que estar atento a las necesidades de Piscis, incluso aunque no siempre entienda cuáles son.<br>		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	//Octavo signo
	else if (signo1==8 && signo2==8){
		texto=`<p>
		La atracción sexual entre dos apasionados Escorpio es fuerte, pero la temperatura no puede ir siempre en aumento.<br>
		Los dos son muy parecidos y, sin embargo, apenas se entienden mutuamente.<br>
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if (signo1==8 && signo2==9 || signo1==9 && signo2==8){
		texto=`<p>
		La pareja formado por Sagitario y Escorpio es una combinación muy difícil porque mientras el aventurero Sagitario adora los cambios y la exploración de horizontes lejanos, asumiendo todo tipo de riesgos (físicos, emocionales y espirituales) para, a continuación, pasar al siguiente gran reto.
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if (signo1==8 && signo2==10 || signo1==10 && signo2==8){
		texto=`<p>
		Se trata de una combinación apasionada y fiel, y puede ser una de las mejores del Zodíaco.
		Incluso si no es una relación romántica, es probable, que los dos sean cariñosos mutuamente y se sientan muy cómodos con el contacto físico.<br>
		Estos dos signos pueden ser amigos maravillosos, familiares, socios empresariales y compañeros
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if (signo1==8 && signo2==11 || signo1==11 && signo2==8){
		texto=`<p>
		La compatibilidad entre Escorpio y Acuario es bastante baja.<br>
		Ambos tienen personalidades muy diferentes y su forma de enfocar la vida y las relaciones íntimas es muy distinto.<br>
		Por otra parte, dónde sí se parecen es su actitud cabezota de imponerse al otro, querer tener siempre razón y las ganas de discutir.
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if (signo1==8 && signo2==12 || signo1==12 && signo2==8){
		texto=`<p>
		La atracción de Escorpio y Piscis es irresistible, una unión con todas las posibilidades de éxito.<br>
		Los dos son apasionados y leales, por lo que es fácil que disfruten de un compañerismo natural.<br>
		Escorpio es un Signo Fijo, por lo que una vez que se compromete, se entrega totalmente.
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	//NOVENO SIGNO
	else if (signo1==9 && signo2==9){
		texto=`<p>
		Dos Sagitarios juntos forman un equipo formidable.<br>
		Algunos astrólogos piensan, que es la combinación perfecta y en muchas formas, es muy apropiada.<br>
		Se pueden atraer con una conversación estimulante, dado que ambos tendrán intereses similares 
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if (signo1==9 && signo2==10 || signo1==10 && signo2==9){
		texto=`<p>
		Sagitario no parece tener mucho en común con Capricornio, pero aún así puede ser una combinación razonablemente buena.<br>
		Los dos tendrán, que aprender a apreciar sus diferencias antes de poder sentirse cómodos juntos, pero una vez hecho esto, puede ser un equipo muy exitoso.
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if (signo1==9 && signo2==11 || signo1==11 && signo2==9){
		texto=`<p>
		La compatibilidad entre Sagitario y Acuario es bastante alta y si ambos se esfuerzan un poco, lo más probable es que su relación sea larga y feliz.
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if (signo1==9 && signo2==12 || signo1==12 && signo2==9){
		texto=`<p>
		Piscis y Sagitario son complementarios y compatibles. Tanto el imaginativo Piscis como el aventurero Sagitario están regidos por Júpiter, el planeta de los sueños y amplios horizontes.
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	//DÉCIMO SIGNO
	else if (signo1==10 && signo2==10){
		texto=`<p>
		Esta puede ser una combinación muy compatible, pero también podría adolecer del síndrome de demasiado buena.<br>
		Si ambos tienen suficientes intereses diferentes como para evitar caer en la rutina y consiguen mantener un equilibrio sano de poder, podría ser una relación muy feliz.
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if (signo1==10 && signo2==11 || signo1==11 && signo2==10){
		texto=`<p>
		La compatibilidad entre Capricornio y Acuario puede ser bastante alta.<br>
		Si los dos logran que las importantes diferencias que existen entre ellos, se conviertan en un punto positivo de la pareja.<br>
		Si no, la relación será muy tormentosa y es probable, que lejos de complementarse, los dos terminen completamente agotados
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if (signo1==10 && signo2==12 || signo1==12 && signo2==10){
		texto=`<p>
		Piscis es una combinación excelente para Capricornio, aunque al principio pueda haber dudas.<br>
		Piscis es un soñador y puede parecer frágil, pero a veces una sutil entereza se puede confundir con debilidad.<br>
		Las fortalezas combinadas de ambos ayudan a compensar sus debilidades individuales, y juntos forman un equipo sólido.
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	//SIGNO ONCE
	else if (signo1==11 && signo2==11){
		texto=`<p>
		La compatibilidad entre dos Acuario es alta.<br>
		Ya que no hay ningún signo con mayor capacidad para comprender el signo y de no sentirse amenazado por su forma de ser tan distinta y singular.
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
	else if (signo1==11 && signo2==12 || signo1==12 && signo2==11){
		texto=`<p>
		La compatibilidad entre Piscis y Acuario no es muy alta.<br>
		Y para, que una relación de pareja sea duradera, tendrá que haber una base sólida de amor y comprensión, así como mucho interés por parte de ambos signos.<br>
		Sin embargo, la compatibilidad para una relación de amigos es mayor.
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
//SIGNO DOCE
else if (signo1==12 && signo2==12){
		texto=`<p>
		Piscis, el Signo de los Peces, es un Signo de Agua.<br>
		Dos peces juntos pueden crear un paraíso privado o un infierno en la tierra, dependiendo de si eligen nadar río abajo o contra corriente.<br>
		Si bien los dos se sienten irresistiblemente atraídos el uno por el otro, ambos son propensos a perderse en sueños y fantasías.
		</p>`
		respuesta.innerHTML=texto
		respuesta.style.setProperty("transition"," all 3s ease")
	}
})














				
			
				
			
			