

$(document).ready(function(){

	function pickAnswer(){

	const possibleAnswers = [
      'It is certain',
      'It is decidedly so',
      'Without a doubt',
      'Yes, definitely',
      'Yes, You may rely on it',
      'As I see it, yes',
      'Outlook good',
      'Yes',
      'Signs point to yes',
      'Reply hazy try again',
      'Ask again later',
      'Better not tell you now',
      'Cannot predict now',
      'Concentrate and ask again',
      "Don't count on it",
      'My reply is no',
      'My sources say no',
      'Most likely',
      'Outlook not so good',
      'Very doubtful'
    ];
    var x = Math.random() * 20;
    var y = Math.round(x);
    return possibleAnswers[y];

   }

   const tasks = [
   		'Read A Book',
   		'Watch TV',
   		'Take a walk outside',
   		'Hit the gym',
   		'Follow @playermayweda7 on twitter',
   		'Factorise 6x^2 - 17x + 12 = 0',
   		'Think about your life',
   		'Draw The Effiel Tower',
   		'Tweet A meme',
   		'Call your Boy/GirlFriend',
   		'Sleep...',
   		'Annoy A random stranger',
   		'Write about your Day',
   		'Listen to music(from Wizzy)',
   		'Game',
   		'Watch the Avengers from the first to the last',
   		"Read about Shrodinger\'s cat",
   		'Try to make anyone close to you laugh',
   		'Read Oliver Twist',
   		'Sing out loud',
   		'Find the square root of -1',
   		'Fold your clothes and arrange them alphabetically according to color',
   		'Sprint your living room 30 times',
   		'Learn a sentence in Spanish',
   		'Watch chinese comedy',
   		'Watch anime',
   		'Find someone you don\'t like and troll them on twitter',
   		'Shout \"Happy\" in Vietnamese out loud',
   		'Do twenty push-ups',
   		'Read Shakespeares Hamlet',
   		'Tell more people about AskAQuestion.com'
   ];

   const outcomes = [
   		 'Be Rich',
   		 'Go Broke',
   		 'Win Money',
   		 'Follow @playermayweda7 on twitter',
   		 'Talk to someone Famous',
   		 'Be Stuck in Traffic',
   		 'Burn Some Food',
   		 'Have a bad Haircut',
   		 'Take out your Trash',
   		 'Make an Educative Tiktok Video',
   		 'Have A car',
   		 'Meet a Billionaire',
   		 'Spend all your money on something you Don\'t Need',
   		 'Register for A gym',
   		 'Improve',
   		 'Write a Book',
   		 'Be Celebrated',
   		 'Be on TV',
   		 'Own a bicycle',
   		 'Chased around by strangers',
   		 'Own a Dog',
   		 'Be a professional Juggler',
   		 'Have a Nightmare about Chuckie',
   		 'Watch Anime',
   		 'Go to a religious gathering',
   		 'Break your Phone',
   		 'Move to another country',
   		 'Live in your country forever',
   		 'Be sent money from a Family member',
   		 'Stay Indoors for A Week'
   ]


   /* Crystal Ball*/
	$('#ball-form').submit(function(e){
		e.preventDefault();
		let cube = $('.cube');
		let input1 = $('#ipt-ball');
		let answer = $('.Answer span')
			answer.fadeOut(1000);
		if(input1.val() != '' && input1.val() != 'Please enter a Valid Question!'){
			$('#ask-ball').prop('disabled', true);
			if (cube.hasClass('rotate') != true){
				cube.addClass('rotate');
				setTimeout(function(){
					cube.removeClass('rotate');
					answer.html(pickAnswer());
					answer.fadeIn(1000);
					input1.val('');
					$('#ask-ball').prop('disabled', false);
				}, 5000)
			}
		}
		else{
			input1.val('Please enter a Valid Question!') 
		}	
	})

	/*Choice Picker*/
	$('#ai-form').submit(function(e){
		e.preventDefault();
		let aiImg = $('.ai-loading img');
		let input2 = $('#ai-ipt');
		let opts = $('.choices');
		let aiTxt = $('.ai-text')
		opts.empty();
		aiTxt.empty();
		if(input2.val() != '' && input2.val() != 'Please enter a Valid Choice!'){
			let arr = input2.val().split(',');
			$('#ai-btn').prop('disabled', true);
			let i = 0
				while (i < arr.length){
					let btn = $('<button></button>');
					btn.addClass('blink');
					btn.html(arr[i]);
					btn.appendTo(opts); 
					i++;
				}

					const loop = setInterval(function(){
						$('.blink').css('background-color', '#4806a6')
						if (i > arr.length - 1){
							i = 0;
						}
						$(`.blink:eq(${i})`).css('background-color', 'orange');
						i++;	
						},350);
				
			setTimeout(function(){
				clearInterval(loop);
				let x = Math.random() * arr.length;
				let y = Math.round(x);
				$('.blink').css('background-color', '#4806a6');
				$(`.blink:eq(${y})`).css('background-color', 'orange');
				$('#ai-btn').prop('disabled', false);
				aiTxt.html(`AI says that you should ${$(`.blink:eq(${y})`).html()}`);
				},5000);
		}
		else{
			input2.val('Please enter a Valid Choice!')
		}

	})
	/*Get A task*/
	$('#getTask').click(function(){
		let loadBar = $('#loading1');
		let progress = $('#loading1 .progress');
		progress.empty();
		$('#getTask').prop('disabled', true);
		if(!loadBar.hasClass('active')){
			loadBar.addClass('active');
		}
		setTimeout(setBar, 700, 20, 'Loading');
		setTimeout(setBar, 1300, 50, 'Loading');
		setTimeout(setBar, 2000, 85, 'Loading');
		setTimeout(setBar, 2400, 100, 'Done');
		function setBar(n, str){
			progress.css('width', `${n}%`);
			progress.html(str);
			if(n === 100){
				let x = Math.random() * (tasks.length - 1);
				let y = Math.round(x);
				$('.task').html(`AI says you should ${tasks[y]}`);
				$('#getTask').prop('disabled', false);
			}
		}
	})

	$('#getFuture').click(function(){
		let loadBar = $('#loading2');
		let progress = $('#loading2 .progress');
		progress.empty();
		$('#getFuture').prop('disabled', true);
		if(!loadBar.hasClass('active')){
			loadBar.addClass('active');
		}
		setTimeout(setBar, 900, 20, 'Initializing');
		setTimeout(setBar, 1600, 50, 'Picking Outcomes');
		setTimeout(setBar, 2400, 85, 'Calculating Odds');
		setTimeout(setBar, 2800, 100, 'Done');
		function setBar(n, str){
			progress.css('width', `${n}%`);
			progress.html(str);
			if(n === 100){
				let x = Math.random() * (outcomes.length - 1);
				let y = Math.round(x);
				$('.outcome').html(`You are going to ${outcomes[y]}`);
				$('#getFuture').prop('disabled', false);
			}
		}
	})
})




	
