/* global monogatari */
monogatari.assets ('music', {
	'000': 'liminal.mp3',
	'menu_theme': 'Main_primeraparte.mp3',
	'Scene001': 'Scene001.mp3',
				'Inicio': 'Partida01.mp3',
});
monogatari.assets ('scenes', {
	'calma': 'Fondo01.jpg',
	'cuartapared': 'Fondo001.jpg',
	'Pasillos_01': 'Pasillos_01.jpg',
	'Pasillos_02': 'Pasillos_02.jpg',
	'Pasillos_03': 'Pasillos_03.jpg',
	'Aula': 'Aula.jpg',
	'Aula_sentado': 'Aula_sentado.jpg',
});

monogatari.assets ('sounds', {
	'beep1': 'bleep002.ogg',
	'beep2': 'bleep012.ogg'
});

monogatari.assets ('images', {
		'brillos': 'brillos.png',
});

monogatari.characters ({
	'g': {
		name: 'Gigi',
		color: '#637DDB',
		directory: 'portraits', 
		sprites: {
			// Las 10 variantes de Gigi
			emocionado: 'Gigi_emocionado.png',
			emocionado_sinN: 'Gigi_emocionado_sinNunu.png',
			neutral: 'Gigi_neutral.png',
			neutral_sinN: 'Gigi_neutral_sinNunu.png',
			pff: 'Gigi_pff.png',
			pff_sinN: 'Gigi_pff_sinNunu.png',
			sorprendido: 'Gigi_sorprendido.png',
			sorprendido_sinN: 'Gigi_sorprendido_sinNunu.png',
			speaking: 'Gigi_speaking.png',
			speaking_sinN: 'Gigi_speaking_sinNunu.png',
			smile: 'Gigi_smile.png',
												// after (t2)
			blush_t2: 'Gigi_blush_after.png',
			emocionado_t2: 'Gigi_emocionado_after.png',
			emocionado_sinN_t2: 'Gigi_emocionado_sinNunu_after.png',
			neutral_t2: 'Gigi_neutral_after.png',
			neutral_sinN_t2: 'Gigi_neutral_sinNunu_after.png',
			pff_t2: 'Gigi_pff_after.png',
			sorprendido_t2: 'Gigi_sorprendido_after.png',
			sorprendido_sinN_t2: 'Gigi_sorprendido_sinNunu_after.png',
			speaking_t2: 'Gigi_speaking_after',
			speaking_sinN_t2: 'Gigi_speaking_sinNunu_after.png',
			smile_t2: 'Gigi_smile_after.png',
		}
	},
	'n': {
		name: 'Lev',
		color: '#3F57B0',
		directory: 'portraits',
		sprites: {
			emocionado: 'Nunu_emocionado.png',
			neutral: 'Nunu_neutral.png',
			pff: 'Nunu_pff.png',
			pff_02: 'Nunu_pff_02.png',
			sorprendido: 'Nunu_sorprendido.png',
			sorprendido_blush: 'Nunu_sorprendido_blush.png',
			speaking: 'Nunu_speaking.png',
			smile: 'Nunu_smile.png',
			neutral_blush: 'Nunu_neutral_blush.png',
												// after (t2)
			emocionado_t2: 'Nunu_emocionado_after.png',
			neutral_t2: 'Nunu_neutral_after.png',
			neutral_blush_t2: 'Nunu_neutral_blush_after.png',
			pff_t2: 'Nunu_pff_after.png',
			pff_02_t2: 'Nunu_pff_02_after.png',
			sorprendido_t2: 'Nunu_sorprendido_after.png',
			sorprendido_blush_t2: 'Nunu_sorprendido_blush_after.png',
			speaking_t2: 'Nunu_speaking_after.png',
			smile_t2: 'Nunu_smile_after.png',
			blush_t2: 'Nunu_blush_after.png',

		}
	},
	'x': {
		name: '¿?',
		color: '#FFFFFF',
		directory: 'portraits',
		sprites: {

		}
	},

	'l': {
		name: 'Leyla',
		color: '#FFFFFF',
		directory: 'portraits',
		sprites: {

		}
	},
	'ls': {
		name: 'Lucas',
		color: '#FFFFFF',
		directory: 'portraits',
		sprites: {

		}
	}
});

monogatari.script ({
	'Start': [
	'stop music menu_theme with fadeOut 2s',
	'play music 000 with loop fadeIn 2s',
		'show scene cuartapared with fadeIn',
		'show character g with fadeIn', 
		'show character n with fadeIn',
		'show character g neutral_sinN', 
		'play sound beep1',
		'g:neutral ...',
		'show character g emocionado',
		'play sound beep1',
		'show character n neutral_blush',
		'g:emocionado ¡Holaaa, estás acá!',
		'play sound beep2',
		'show character n speaking',
		'show character g pff_sinN', 
		'n:speaking HOLAAAA.',
		'show character n speaking', 
		'play sound beep1',
		'show character n neutral',
		'show character g neutral', 

		// Aquí insertamos la pregunta de Nunu y las opciones
		'n ¿...?', 

		{
			'Choice': {
				'PreguntarLugar': {
					'Text': '¿Qué es este lugar?',
					'Do': 'jump EscenaLugar'
				},
				'PreguntarAqui': {
					'Text': '¿Por qué estamos acá?',
					'Do': 'jump EscenaAqui'
				},
				'PreguntarEsto': {
					'Text': '¿Qué es esto?',
					'Do': 'jump EscenaEsto'
				}
			}
		}
	],

	// --- ESCENAS BASADAS EN TUS ELECCIONES ---

	'EscenaLugar': [
		'stop music menu_theme with fadeOut 2s',
		'show character g neutral with fadeIn',
		'play sound beep2',
		'show character n speaking with fadeIn',
		'n ¿Qué es este lugar?',
		'show character n neutral_blush',
		'show character n speaking',
		'play sound beep2',
		'n Quiero decir-',
		'show character n neutral_blush',
		'show character n speaking',
		'play sound beep2',
		'n ¿Por qué luce así?',
		'show character n neutral_blush',
		'play sound beep1',
		'show character g sorprendido',
		'g ¡Oh!',
		'play sound beep1',
		'show character g speaking',
		'g Es... como un lugar',
		'play sound beep1',
		'g Para romper la',
		'play sound beep1',
		'g cuarta pared...',	
		'show character g neutral',
		'play sound beep1',
		'g ...',
		'show character g speaking',
		'play sound beep1',
		'g Por unos minutos.',
		'show character g neutral',
		'show character n speaking',
		'play sound beep2',
		'n Oh... entonces...',
		'play sound beep2',
		'n ¿Esto no es canónico en tu novela?',
		'show character n neutral',
		'play sound beep1',
		'show character g speaking',
		'g Exacto.',

		'jump Preguntas'
	],

	'EscenaAqui': [
		'stop music menu_theme with fadeOut 2s',
		'show character g smile',
		'show character n speaking',
		'play sound beep2',
		'n ¿Por qué estamos en este lugar?',
		'show character n neutral_blush',
		'play sound beep1',
		'show character g speaking',
		'g Para que...',
		'show character g neutral',
		'play sound beep1',
		'show character g speaking',
		'g Puedas familiarizarte',
		'show character g neutral',
		'play sound beep1',
		'show character g speaking',
		'g Con los personajes y contextos',
		'jump Preguntas'
	],

	'EscenaEsto': [
		'stop music menu_theme with fadeOut 2s',
		'show character n speaking',
		'play sound beep2',
		'show character n speaking',
		'n ¿Qué es esto?',
		'show character n neutral_blush',
		'show character g smile',
		'play sound beep2',
		'show character n speaking',
		'n Este lugar... y eso.',
		'show character n neutral_blush',
		'show character g speaking',
		'play sound beep1',
		'g Es un juego, eso ya lo sabés.',
		'show character g neutral',
		'show character g speaking',
		'play sound beep1',
		'g Pero si te referís al lugar,',
		'show character g neutral',
		'show character g speaking',
		'play sound beep1',
		'g cerremos en que es un espacio liminal',
		'show character g neutral',
		'show character g speaking',
		'play sound beep1',
		'g para romper la cuarta pared, y así',
		'show character g neutral',
		'show character g speaking',
		'play sound beep1',
		'g para que conozcas estos personajes',
		'show character g neutral',
		'show character g speaking',
		'play sound beep1',
		'g para darte una introducción...',
		'jump Preguntas'
	],

	'Preguntas': [
		'show character n neutral_blush',
		'show character g neutral',
		'n ¿...?',
		{
			'Choice': {
				'PreguntarLugar': {
					'Text': '¿Qué es este lugar?',
					'Do': 'jump EscenaLugar'
				},
				'PreguntarAqui': {
					'Text': '¿Por qué estamos acá?',
					'Do': 'jump EscenaAqui'
				},
				'PreguntarEsto': {
					'Text': '¿Qué es esto?',
					'Do': 'jump EscenaEsto'
				},
				'Continuar': {
					'Text': 'Nada más',
					'Do': 'jump EscenaContinuar'
				}
			}
		}
	],
	'EscenaContinuar': [
		'stop music menu_theme with fadeOut 2s',
	 'show character n neutral',
	 'show character g speaking',
		'play sound beep1',
		'g Creo que ya lo notaste, pero de todos modos.',
		'play sound beep2',
		'show character n speaking',
		'show character g pff_sinN',
		'n Yo soy tú pro.',
		'show character n smile',
		'play sound beep1',
		'show character g speaking',
		'g y yo, yo pro',
		{
			'Choice': {
				'Ok': {
					'Text': 'Okay.',
					'Do': 'jump EscenaOk'
				},
				'Ojos': {
					'Text': '¿Por qué "yo" miro? raro',
					'Do': 'jump EscenaOjos'
				},
				'Femboys': {
					'Text': '¿Por qué parecemos femboys?',
					'Do': 'jump EscenaFemboys'
				},
				'Pro': {
					'Text': 'Ora que pro',
					'Do': 'jump EscenaPro'
				}
			}
		}
	],

	'EscenaOk': [
		'stop music menu_theme with fadeOut 2s',
		'show character g neutral',
		'show character n speaking',
		'play sound beep2',
		'n Okay, entiendo',
		'show character n neutral_blush',
		'play sound beep1',
		'show character g pff',
		'g PUAJAJJA, admito que',
		'show character g smile',
		'play sound beep1',
		'show character g speaking',
		'g esta opción la hice para el copy',
		'show character g pff_sinN',
		'play sound beep1',
		'show character g speaking',
		'g de "¿Solo "ok"?""',
		'jump Ask'
	],
	'EscenaOjos': [
		'stop music menu_theme with fadeOut 2s',
		'show character g neutral',
		'show character n speaking',
		'play sound beep2',
		'n ¿Por qué mi personaje parece medio bisco?',
		'show character n pff',
		'play sound beep1',
		'show character g pff',
		'g USH, PUAJJASJD',
		'show character g smile',
		'show character n smile',
		'play sound beep1',
		'show character g speaking',
		'g Porque soy nub y no supe dibujar bien',
		'show character g pff_sinN',
		'play sound beep1',
		'show character g speaking_sinN',
		'g los ojos y asi, sosorry',
		'jump Ask'
	],
	'EscenaFemboys': [
		'stop music menu_theme with fadeOut 2s',
		'show character g pff',
		'show character n speaking',
		'play sound beep2',
		'n ¿Por qué parecemos femboys?',
		'show character n smile',
		'play sound beep1',
		'show character g speaking',
		'g Es qui-',
		'show character g neutral',
		'play sound beep1',
		'show character g speaking',
		'g Quería hacer los personajes bien',
		'show character g neutral',
		'play sound beep1',
		'show character g speaking',
		'g y similares a nosotros, pero',
		'show character g neutral',
		'play sound beep1',
		'show character g speaking',
		'g como usé picrew y luego',
		'show character n neutral',
		'show character g neutral',
		'play sound beep1',
		'show character g speaking',
		'g dibujé encima, quedaron asi',
		'jump Ask'
	],

	'EscenaPro': [
		'stop music menu_theme with fadeOut 2s',
		'show character g smile',
		'show character n speaking',
		'play sound beep2',
		'n ora que pro quedó',
		'show character n smile',
		'play sound beep1',
		'show character g emocionado',
		'g AYYY JSJJAS TYSM',
		'show character g pff_sinN',
		'play sound beep1',
		'show character g emocionado',
		'g EZ UN REKALITO PARA TI',
		'show character g pff_sinN',
		'show character n pff',
		'play sound beep1',
		'show character g emocionado',
		'g POR SER MUI PRO',
		'jump Ask'
	],
	'Ask': [
		'stop music menu_theme with fadeOut 2s',
		'show character n neutral',
		'show character g smile',
		'n ¿...?',
		{
			'Choice': {
				'Ok': {
					'Text': 'Okay.',
					'Do': 'jump EscenaOk'
				},
				'Ojos': {
					'Text': '¿Por qué "yo" miro raro?',
					'Do': 'jump EscenaOjos'
				},
				'Femboys': {
					'Text': '¿Por qué parecemos femboys?',
					'Do': 'jump EscenaFemboys'
				},
				'Pro': {
					'Text': 'Ora que pro',
					'Do': 'jump EscenaPro'
				},
				'Next': {
					'Text': 'Sigamos',
					'Do': 'jump EscenaNext'
				}
			}
		}

	],
	'EscenaNext':[
		'stop music menu_theme with fadeOut 2s',
		'show character g smile',
		'play sound beep1',
		'show character g speaking',
		'g Bien, si eso quedó',
		'show character g smile',
		'play sound beep1',
		'show character g speaking',
		'g claro, entonces quiero',
		'show character g smile',
		'play sound beep1',
		'show character g speaking',
		'g explicarte brevemente las cosas',
		'show character g smile',
		'play sound beep1',
		'show character g speaking',
		'g Si ves abajo del cuadro de',
		'show character g smile',
		'play sound beep1',
		'show character g speaking',
		'g dialogo hay un "save"',
		'show character g smile',
		'play sound beep1',
		'show character g speaking',
		'g Por favor usalo cuando sea',
		'show character g smile',
		'play sound beep1',
		'show character g speaking',
		'g necesario, el juego no tiene',
		'show character g smile',
		'play sound beep1',
		'show character g speaking',
		'g guardado automático',
		'jump Escena000'
	],

	'Escena000':[
		'stop music menu_theme with fadeOut 2s',
		'hide character g fadeOut',
		'hide character n fadeOut',
		'...',
		'show scene Pasillos_01 with fadeIn',
		'show character g smile with fadeIn',
		'show character n speaking with fadeIn',
		'play sound beep2',
		'n ¿Qué hacemos acá?',
		'show character n neutral_blush',
		'show character g speaking',
		'play sound beep1',
		'g Acá es donde vamos a comenzar',
		'show character g neutral',
		'show character g speaking',
		'play sound beep1',
		'g Sé que te gustan más las novelas y eso de fantasía',
		'show character g neutral',
		'show character g speaking',
		'play sound beep1',
		'g A mí también, pero a lo que voy con esto es que',
		'show character g neutral',
		'show character g speaking',
		'play sound beep1',
		'g Si bien nos encontraremos acá; un lugar normal, aún así hay fantasía',
		'show character g neutral',
		'¿Deseas pequeños spoilers?',
	{
		'Choice': {
			'spoiler': {
				'Text': 'Sí',
				'Do': 'jump EscenaSpoiler'
			},
			'nospoiler': {
				'Text': 'No',
				'Do': 'jump EscenaNoSpoiler'
			}
		}
	}
	],
	'EscenaSpoiler': [
		'stop music menu_theme with fadeOut 2s',
		'show character g smile with fadeIn',
		'show character n neutral_blush',
		'show character g speaking',
		'play sound beep1',
		'g Bien, entonces',
		'show character n neutral_blush',
		'show character g smile',
		'show character g speaking',
		'play sound beep1',
		'g '

	],

	'EscenaNoSpoiler':[
		'stop music menu_theme with fadeOut 2s',
		'show character g smile with fadeIn',
		'show character n neutral_blush',
		'show character n speaking',
		'play sound beep2',
		'n Entonces, ¿Ya puedo comenzar?',
		'show character g speaking',
		'play sound beep1',
		'show character n neutral_blush',
		'g sipi, entonces, comencemos',
		'show character g smile',
		'jump Escena001'
	],

	'Escena001': [
		'stop music menu_theme with fadeOut 2s',
		'stop music 000 fadeOut 2s',
		'play music Scene001 with fadeIn',
		'hide character n',
		'show character g neutral_sinN with fadeIn',
								'show character g speaking_sinN',
		'play sound beep1',
		'g y por eso yo siempre... ',
		'play sound beep1',
		'show character g emocionado',
		'g ¿Manu?',
		'show character n smile',
		'show character g emocionado',
		'play sound beep2',
		'show character n speaking',
		'n Hola',
					'play sound beep1',
		'show character g speaking',
		'show character n neutral',
		'g ¡Holaa!.. ¿Estudiás también acá o... solo pasabas?',
		'play sound beep2',
		'show character n pff',
		'show character g neutral',
		'n Jaj',
		'play sound beep2',
		'show character n speaking',
		'n Me mudaré acá.',
		'show character n smile',
		'play sound beep1',
		'show character g speaking',
		'g ¡Aaah! Que bueno que estés acá',
		'show character g pff_sinN',
		'play sound beep2',
		'show character n speaking',
		'n ¿Y vos?',
		'show character n smile',
		'play sound beep1',
		'show character g speaking',
		'g También, estába hasta socializando para empezar bien',
		'show character g pff_sinN',
		'play sound beep2',
		'show character n speaking',
		'n Me alegro, así mucho mejor',
		'show character n smile',
		'play sound beep1',
		'show character g speaking',
		'g Entonces, ¿te parece si paseamos juntos?',
		'show character g smile',
		{
			'Choice': {
				'spoiler': {
					'Text': 'Sí',
					'Do': 'jump Escenapaseo'
				},
				'nospoiler': {
					'Text': 'No',
					'Do': 'jump Escenapaseont'
				}
			}
		}
	],
	'Escenapaseo':[
		'stop music menu_theme with fadeOut 2s',
		'stop music Scene001',
		'play music Inicio fadeOut 2s',
		'show character g smile',
		'show character n neutral_blush',
		'show character n speaking',
		'play sound beep2',
		'n Me parece buena idea',
		'show character n smile',
		'play sound beep1',
		'show character g emocionado',
		'g ¡Va!',
		'show character g smile',
		'show scene Pasillos_02 with fadeIn',
		'show character n smile with fadeIn',
		'play sound beep1',
		'show character g speaking',
		'g Mmmh, ¿qué fecha estábamos?',
		'show character g neutral',
		'show character n pff',
		'play sound beep2',
		'n Jajaja',
		'show character g pff',
		'g Cálla, jajaja',
		'show character n speaking',
		'play sound beep2',
		'n 23 de abril, tonto',
		'show character n pff',
		'show character g pff',
		'play sound beep1',
		'g Jajajaja',
								'show character g smile',
		'show character g speaking',
		'play sound beep1',
		'g Por cierto, me gusta tu nuevo corte de cabello',
		'show character n speaking',
		'play sound beep2',
		'n Ah- gracias...',
		'show character n smile',
								'show character g smile',
		'show character g speaking',
		'play sound beep1',
		'g Entonces... como estámos en un mismo colegio',
								'show character g smile',
		'show character g speaking',
		'play sound beep1',
		'g ¿Te parece y nos hablamos en el receso y así?',
								'show character g smile',
		{
			'Choice': {
				'recreos': {
					'Text': 'Sí',
					'Do': 'jump Escenasirecreos'
				},
				'norecreos': {
					'Text': 'No',
					'Do': 'jump Escenanorecreos'
				}
			}
		}
	],

	'Escenapaseont':[
		'stop music menu_theme with fadeOut 2s',
		'stop music Scene001',
		'play music Inicio fadeOut 2s',
		'show character g smile',
		'show character n neutral',
		'show character n speaking',
		'play sound beep2',
		'show character g neutral',
		'n mmh, ¿y si mejor nos quedamos acá?',
		'show character n neutral',
		'show character g neutral',
		'show character g speaking',
		'g Ah, ¿Está bien, entonces...-',
		'show character g neutral',
		'show character g speaking',
		'g A ver... ¡Oh! Ahora que estamos hablando y así, muy lindo tu cabello',
		'show character g smile',
		'x ¡Hola!',
		'show character g neutral_sinN',
		'show character g speaking_sinN',
		'g Ah, hola',
		'show character g neutral_sinN',
		'x Mmmh, ¿son nuevos, no?',
		'show character n speaking',
		'play sound beep2',
		'show character g neutral',
		'n Sí...',
		'show character n neutral_blush',
		'x Mmmh, ya, ¿qué grado van?',
		'...',
		'show character n speaking',
		'play sound beep2',
		'show character g smile',
		'n Séptimo y octavo.',
		'show character n neutral',
		'x Jeje, me iré a otro lado, quiero conocer a otros...',
		'show character g smile',
		'show character g speaking',
		'g Entonces.... veamosno en los recreos y así',

		{
			'Choice': {
				'recreos': {
					'Text': 'Vale',
					'Do': 'jump Escenasirecreos'
				},
				'norecreos': {
					'Text': 'No quiero',
					'Do': 'jump Escenanorecreos'
				}
			}
		}
	],

	'Escenanorecreos':[
		'stop music menu_theme with fadeOut 2s',
		'stop music Scene001',
		'show character n speaking',
		'play sound beep2',
		'n Mmmh, ¿Y si mejor por ahora vamos cada quien por su lado?',
		'show character n neutral',
		'show character g speaking',
		'play sound beep1',
		'g ¡Ah! Eh, sí, me parece.',
		'show character g neutral',
		'play sound beep1',
		'show character g speaking',
		'g Me... voy a mí grado.',
		'show character g neutral',
		{
			'Choice': {
				'aula': {
					'Text': 'Aula',
					'Do': 'jump Aula'
				},
				'pasillo': {
					'Text': 'Pasillo anterior',
					'Do': 'jump Pasillo'
				}
			}
		}
	],
	'Escenasirecreos': [
		'stop music menu_theme with fadeOut 2s',
		'stop music Scene001',
		'show character n speaking',
		'play sound beep2',
		'n Me parece.',
		'show character n smile',
		'show character g speaking',
		'play sound beep1',
		'g ¡Yay! Muy bien, entonces te deseo suerte.',
		'show character n speaking',
		'play sound beep2',
		'n Igualmente.',
		'show character n neutral_blush',
		'show character g smile',
		'hide character g with fadeOut 2s',
		{
			'Choice': {
				'aula': {
					'Text': 'Aula',
					'Do': 'jump Aula'
				},
				'pasillo': {
					'Text': 'Pasillo anterior',
					'Do': 'jump Pasillo'
				}
			}
		}
],

	'Aula': [
		'stop music menu_theme with fadeOut 2s',
		'stop music Scene001',
		'show scene Aula',
		'show character n neutral_blush',
		'x ¡Hola!, ¿cómo te llamás? Recién te ví en pasillo...',
		'show character n speaking',
		'play sound beep2',
		'n Manuel.... ¿Qué hay de vos?',
		'show character n neutral_blush',
		'l Leyla, de hecho...',
		'show character n speaking',
		'play sound beep2',
		'n Oh...',
		'show character n neutral_blush',
		{
			'Choice': {
				'asiento': {
					'Text': 'Sentarse',
					'Do': 'jump Sentado_01'
				},
				'afuera': {
					'Text': 'Salir afuera',
					'Do': 'jump Pasillo_02'
				}
			}
		}
],

	'Pasillo': [
		'stop music menu_theme with fadeOut 2s',
		'stop music Scene001',
		'show scene Pasillos_01',
								'show character n neutral_blush',
		'x Hola... te ví allá.',
		'*Señala el pasillo anterior*.',
		'Y... me preguntaba si podía hablarte...',
		{
			'Choice': {
				'claro': {
					'Text': 'Por supuesto',
					'Do': 'jump x_y_Lev'
				},
				'no': {
					'Text': 'Estoy ocupado',
					'Do': 'jump Lev_ocupado'
				},
				'broma': {
					'Text': '¿Preguntábas?',
					'Do': 'jump Lev_sarcastico'
				}
			}
		}
],

	'Sentado_01': [
		'stop music menu_theme with fadeOut 2s',
		'stop music Scene001',
		'show scene Aula_sentado with fadeIn',
		'l ¿De dónde venís?',
		'play sound beep2',
		'n Emh, Asunción, CNAE ¿y vos, siempre estudiaste aquí?',
		'l ¡Síp! Desde primer grado.',
		'play sound beep2',
		'n Oh, woah, ¿conocés a todos, verdad?',
		'l ¡Siiiíp!',
		'play sound beep2',
		'n Ah, que bueno.',
		'l ¡Gracias!',
		'l Por cierto, me gusta mucho tu estilo',
		'play sound beep2',
		'n Ayy, muchas gracias.',
		'l JAJJA, no es nada',
		'play sound beep2',
		'n hmm, JAJAJ',
		'l Te ví con alguien en el pasillo, hmmm',
		'l ¿Ya lo conocés o estábas socializando?',
		'l Es que... te noto como callado',
		'play sound beep2',
		'n Ah, sí... lo conozco desde hace tiempo.',
		'play sound beep2',
		'n JAJAJ, sólo soy un poco callado al principio...',
					// ACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa
],

	'Pasillo_02': [
		'stop music menu_theme with fadeOut 2s',
		'stop music Scene001',
		'show scene Pasillos_02 with fadeIn',
								'show character n neutral',
		'x ...',
		'*Una persona te mira, como si quisiera hablarte.*',
		{
			'Choice': {
				'mirar': {
					'Text': 'Esperar que pase algo',
					'Do': 'jump Esperar'
				},
				'hablar': {
					'Text': 'Hablarle',
					'Do': 'jump Hablar'
				},
				'cruzar': {
					'Text': 'Ir al pasillo',
					'Do': 'jump Pasar'
				}
			}
		}
],

	'x_y_Lev': [
		'stop music menu_theme with fadeOut 2s',
		'stop music Scene001',
								'show character n neutral',
		'play sound beep2',
		'show character n speaking',
		'n Ah, sí, hablemos.',
		'show character n neutral_blush',
		'x ¡Aaay! muchas gracias, ¿podemos ver de ser amigos?',
		{
			'Choice': {
				'sip': {
					'Text': 'Sí.',
					'Do': 'jump amiguitos'
				},
				'noo': {
					'Text': 'No...',
					'Do': 'jump no_x'
				}
			}
		}
],
	'Lev_ocupado': [
		'stop music menu_theme with fadeOut 2s',
		'stop music Scene001',
		'play sound beep2',
		'show character n speaking',
		'n Ah, perdón, ya estoy ocupado.',
		'show character n neutral',
		'x Ouh, está bien, entiendo...',
		'*La persona te cede el paso*',
		{
			'Choice': {
				'nuevolugar': {
					'Text': 'Cruzar',
					'Do': 'jump nuevolugar'
				},
				'aula': {
					'Text': 'Volver al aula',
					'Do': 'jump aula'
				}
			}
		}
],
	'Lev_sarcastico': [
		'stop music menu_theme with fadeOut 2s',
		'stop music Scene001',
		'play sound beep2',
		'show character n speaking',
		'n ¿Te  preguntábas o preguntás?',
		'show character n pff',
		'x JAJAJA, me pregunto... te pregunto; ¿podemos ver de ser amigos?',
		{
			'Choice': {
				'sip': {
					'Text': 'Sí.',
					'Do': 'jump amiguitos'
				},
				'noo': {
					'Text': 'No...',
					'Do': 'jump no_x'
				}
			}
		}
],

	'amiguitos': [
		'stop music menu_theme with fadeOut 2s',
		'stop music Scene001',
		'play sound beep2',
		'show character n speaking',
		'n Por supuesto',
		'show character n neutral_blush',
		'x Gracias, que bueno esto...',
		'ls Oh, me llamo Lucas, ¿y vos?',
		'play sound beep2',
		'show character n speaking',
		'n Ah, Manuel.',
		'show character n neutral_blush',
],

	'no_x': [
		'stop music menu_theme with fadeOut 2s',
		'stop music Scene001',
		'play sound beep2',
		'show character n speaking',
		'n Mmmmh, no... nos conocemos bien.',
		'show character n neutral',
		'x Ah, eh... sí tenés la razón, perdón, JAJ.',
		'play sound beep2',
		'show character n speaking',
		'n Sí, mmh.',
		'show character n neutral',		
{
			'Choice': {
				'nuevolugar': {
					'Text': 'Seguir el camino',
					'Do': 'jump nuevolugar'
				},
				'aula': {
					'Text': 'Volver al aula',
					'Do': 'jump aula'
				}
			}
		}
],
	'nuevolugar': [
		'stop music menu_theme with fadeOut 2s',
		'stop music Scene001',
    'show scene Pasillos_03 with fadeIn',
		'show chracter n neutral_blush with fadeIn',
		'*Gabriel te vé desde la ventana de su grado.*',
		'*sale corriendo hacia vos.*',
		'show character g emocionado',
		'play sound beep1',
		'g ¡Nunu!',
		'show character g emocionado',
		'play sound beep1',
		'g Holiii, otra vez, ¿qué hacés por acá?'
	],

	'aula':[
		'stop music menu_theme with fadeOut 2s',
		'stop music Scene001',
		'show scene Aula with fadeIn',
		'show character n neutral_blush with fadeIn',
		'*Leyla observa desde su asiento, sonriendote.*',
		'show scene Aula_sentado with fadeIn',
		'l ¡Hola! De nuevo, ¿qué tal?',
	]
	
});