
   	var startButton =  document.getElementById('start'),
		startPage = document.getElementById('startPage'),
		transition = document.getElementById('transition'),
		task1 = document.getElementById('task1'),
		buttonToTask2 = document.getElementById('toTask2'),
		task2 = document.getElementById('task2'),
		task3 = document.getElementById('task3'),
		task4 = document.getElementById('task4'),
		task5 = document.getElementById('task5'),
		task6 = document.getElementById('task6'),
		result = document.getElementById('result'),
		taskTransition = document.getElementsByClassName('task1'),
		points = [],
		radio1 = document.getElementsByName('task1'),
		radio2 = document.getElementsByName('task2'),
		radio3 = document.getElementsByName('task3'),
		radio4 = document.getElementsByName('task4'),
		radio5 = document.getElementsByName('task5'),
		radio6 = document.getElementsByName('task6'),
		radio7 = document.getElementsByName('task7'),
		radio8 = document.getElementsByName('task8'),
		radio9 = document.getElementsByName('task9'),
		radio10 = document.getElementsByName('task10'),
		radio11 = document.getElementsByName('task11'),
		radio12 = document.getElementsByName('task12'),
		radio13 = document.getElementsByName('task13'),
		pointsInner = document.getElementById('pointsInner'),
		titleInner = document.getElementById('result-title'),
		commentInner = document.getElementById('comment'),
		counterTop = document.getElementById('counter-top'),
		counterBot = document.getElementById('counter-bot');



	let resultPoint = 0;
	var count = randomInteger(100, 200);

	function counterIt(num) {
		counterTop.innerHTML = 'Данный тест прошли уже ' + num + ' человек!'
		counterBot.innerHTML = 'Данный тест прошли уже ' + (num + 1) + ' человек!'
	}

	counterIt(count);

	startButton.onclick = function() {
		startPage.classList.add('displaynone')
		transition.classList.remove('displaynone');
		task1.classList.remove('displaynone');
	};

	function toTask2() {
		task1.classList.add('displaynone');
		task2.classList.remove('displaynone');
		taskTransition[1].classList.add('active')
		taskTransition[0].classList.add('complete')
		checked(radio1)
		answer(0, 1, points)
		return console.log(points)
	}

	function toTask3() {
		task2.classList.add('displaynone');
		task3.classList.remove('displaynone');
		taskTransition[2].classList.add('active')
		taskTransition[1].classList.add('complete')
		checked(radio2)
		answer(1, 1, points)
		return console.log(points)
	}

	function toTask4() {
		task3.classList.add('displaynone');
		task4.classList.remove('displaynone');
		taskTransition[3].classList.add('active')
		taskTransition[2].classList.add('complete')
		checked(radio3)
		answer(2, 2, points)
		return console.log(points)
	}

	function toTask5() {
		task4.classList.add('displaynone');
		task5.classList.remove('displaynone');
		taskTransition[4].classList.add('active')
		taskTransition[3].classList.add('complete')
		checked(radio4)
		answer(2, 2, points)
		return console.log(points)
	}

	function toTask6() {
		task5.classList.add('displaynone');
		task6.classList.remove('displaynone');
		taskTransition[5].classList.add('active')
		taskTransition[4].classList.add('complete')
		checked(radio5)
		answer(2, 3, points)
		return console.log(points)
	}

	function showResult() {
		
		checked(radio6)
		answer(2, 1, points)
		checked(radio7)
		answer(0, 1, points)
		checked(radio8)
		answer(2, 1, points)
		checked(radio9)
		answer(1, 2, points)
		checked(radio10)
		answer(2, 2, points)
		checked(radio11)
		answer(0, 2, points)
		checked(radio12)
		answer(0, 3, points)
		checked(radio13)
		answer(2, 3, points)
		sum(points)
		inner(resultPoint);
		task6.classList.add('displaynone');
		result.classList.remove('displaynone');
	}

	function back() {
		document.location.reload(true);
	}


	function checked(butt) {
		for (let i = 0; i < radio1.length; i++) {
			if (butt[i].checked) {
				return resultPoint = i;
			}
			else resultPoint = -1;
	}
}

	function answer(a, b, arr) {

		if (resultPoint === a) {
			arr.push(b);
		}
		else {
			arr.push(0);
		}

		resultPoint = 0
	}

	function sum(arr) {
		return resultPoint = arr.reduce(function(a, b) {return a + b})
	}

	function inner(num) {
		pointsInner.innerHTML = num;
		if (num <= 4) {
			titleInner.innerHTML = 'Ваш уровень - Beginner';
			return commentInner.innerHTML = 'Вам знакомы азы английского языка. Скорее всего, Вы только начали изучать английский или обладаете остаточными знаниями языка со времен школы. Вы умеете читать и писать, знаете алфавит, можете представиться и сообщить самую простую информацию о себе на английском. Но Ваших знаний совершенно недостаточно для общения в типичных жизненных ситуациях. Человек с уровнем Beginner стоит в самом начале длинного и увлекательного пути к вершинам английского языка.'
		}
		else if (num <= 8) {
			titleInner.innerHTML = 'Ваш уровень - Elementary';
			return commentInner.innerHTML = 'Вы понимаете высказывания, относящиеся к самым насущным аспектам жизни (рассказ о себе и о семье, трудоустройство, покупки). Сможете спросить дорогу (как пройти из пункта А в пункт В) и понять ответ.Можете объясниться на английском языке в простых бытовых ситуациях, требующих прямого обмена информацией на знакомые вам темы. Можете рассказать на английском, кто вы такой, где живете и с кем общаетесь, выразить свои базовые потребности.'
		}
		else if (num <= 12) {
			titleInner.innerHTML = 'Ваш уровень - Pre Intermediate';
			return commentInner.innerHTML = 'Правильно понимаете суть высказываний на знакомые вам темы (работа, школа, отдых и т. д.). Можете объясниться на английском в большинстве ситуаций, возникающих во время путешествия в англоязычную страну. Можете описать впечатления, события, мечты, надежды и стремления, вкратце изложить и обосновать свое мнение. Уже смотрите англоязычные фильмы в оригинале, но порою догадываетесь о происходящем лишь по изображению на экране. Можете прочесть простейшую инструкцию, а также рекламные брошюры, письма, короткие официальные документы.'
		}
		else if (num <= 16) {
			titleInner.innerHTML = 'Ваш уровень - Upper Intermediate';
			return commentInner.innerHTML = 'Способны понять суть сложного текста на конкретную или абстрактную тему, готовы поддержать обстоятельную беседу на английском языке на тему вашей профессиональной специализации. Можете достаточно свободно общаться на английском на отвлеченные темы, способны взаимодействовать с носителями языка без напряжения для каждой из сторон. Умеете выстраивать ясные и подробные высказывания по широкому кругу вопросов; можете изложить свой взгляд на проблему, указать на преимущества и недостатки различных вариантов ее решения.'
		}
		else if (num <= 20) {
			titleInner.innerHTML = 'Ваш уровень - Advanced';
			return commentInner.innerHTML = 'Понимаете сложные и длинные тексты на самые разные темы, распознаете скрытый смысл сказанного. Изъясняетесь свободно и спонтанно, без явных затруднений с подбором слов и выражений. В состоянии гибко и эффективно использовать язык в социальной, научной и профессиональной деятельности. Понимаете неадаптированные фильмы с большим количеством сленга и идиом. Можете писать четкие хорошо структурированные подробные тексты на сложные темы, демонстрируя владение приемами структурирования и придания тексту связности. Способны поддерживать эффективную переписку на английском.'
		}
		else if (num <= 24) {
			titleInner.innerHTML = 'Ваш уровень - Mastery';
			return commentInner.innerHTML = 'Понимаете практически все услышанное и прочитанное. Можете обобщить информацию из различных устных и письменных источников, оформляя доводы и мнения в виде связного текста. Можете говорить на любую тему без подготовки, точно и без затруднений выражая свою мысль, различая малейшие оттенки значений даже в самых сложных ситуациях.'
		}
	}

	function randomInteger(min, max) {
	  var rand = min + Math.random() * (max - min)
	  rand = Math.round(rand);
	  return rand;
	}

	

