var questions = [{
        text: "Какое государство подарило США прославленную ныне Статую Свободы?",
        price: 100,
        answers: [
            "Франция",
            "Россия",
            "Дания",
            "Германия"
        ],
        correct: 0
    },
    {
        text: "Какая компьютерная игра, согласно Книге рекордов Гиннеса, является самой популярной в мире",
        answers: [
            "Тетрис",  
            "StarCraft",
            "Pac-Man",
            "Diablo2"
        ],
        correct: 2,
        price: 200
    },
    {
        text: "Во время работы над каким фильмом были впервые использованы компьютерные спецэффекты?",
        answers: [
            "Садко",
            "Челюсти",
            "Крестный отец",
            "Звездный войны. Новая надежда"
        ],
        correct: 3,
        price: 300
    },
    {
        text: "Какой самый высокий водопад?",
        answers: [
            "Виктория",
            "Ниагара", 
            "Анхель",
            "Игуасуа" 
        ],
        correct: 1,
        price: 500
    }, 
    {
        text: "Сколько на Земле материков?",
        answers: [
            "4",
            "5",
            "6",
            "7"
        ], 
        correct: 2,
        price: 1000
    }, 
    {
        text: "С какой из этих стран Чехия не граничит?",
        answers: [
            "Германия",
            "Австрия",
            "Венгрия",
            "Польша"
        ],
        correct: 2,
        price: 2000
    },
    {
        text: "Какая очередность этих трех букв в русском алфавите правильная?",
        answers: [
            "Ь Ы Ъ",
            "Ъ Ь Ы ",
            "Ь Ъ Ы",
            "Ъ Ы Ь "
         ],
         correct: 3,
         price: 5000
     },
     {
         text: "Как называется детеныш норки?",
         answers: [
             "Норик",
             "Котенок",
             "Щенок",
             "Белек"
         ],
         correct: 2,
         price: 8000
     },
     {
         text: "Что из перечисленного является единственным колониальным владением Британии в Европе?",
         answers: [
             "Монако",
             "Гибралтар",
             "Андорра",
             "Люксембург"
         ],
         correct: 1,
         price: 16000
     }, 
     {
         text: "Что означает количество пятнышек у божьей коровки?",
         answers: [
             "Вид",
             "Пол",
             "Возраст",
             "Дату рождения"
         ],
         correct: 0,
         price: 32000
     },
     {
         text: "Кем по профессии были Чехов и Булгаков?",
         answers: [
             "Педагогами",
             "Строителями",
             "Врачами",
             "Программистами"
         ],
         correct:2,
         price: 64000
     },
     {
         text: "Какой сок рекомендовала советская реклама тем, кто хочет подрасти?",
         answers: [
             "Яблочный",
             "Апельсиной",
             "Морковный",
             "Томатный"
         ],
         correct: 3,
         price: 128000
     },
     {
         text: "Сколько пальцев у кошки?",
         answers: [
             "10",
             "12",
             "16",
             "18"
         ],
         correct: 3,
         price: 256000
     },
     {
         text: "Какая страна единственная участвовала во всех чемпионатах мира по футболу?",
         answers: [
             "Германия",
             "Испания",
             "Бразилия",
             "Португалия"
         ],
         correct: 2,
         price: 512000
    },
    {
        text: "Мячами, какой фирмы неизменно играют на чемпионатах мира по футболу с 1970 года?",
        answers: [
            "Nike",
            "Adidas",
            "Puma",
            "Reebok"
        ],
        correct: 1,
        price: 1000000
     
    }
];

var current = 0;
var balance = 0;

var prices = [
    100,
    200,
    300,
    500,
    1000,
    2000,
    5000,
    8000,
    16000,
    32000,
    64000,
    128000,
    256000,
    512000,
    1000000
];

function drawQuestion(numberOfQuestion) {
    var question = questions[numberOfQuestion];
    if (typeof question != "undefined") {
        drawPrices(numberOfQuestion);
        document.getElementById("question").innerHTML = question.text;
        for (var i = 0; i < question.answers.length; i++) {
            document.getElementById("answer-" + i).innerHTML = question.answers[i];
        }
    }
}

function checkAnswer(numberOfQuestion, answerOfUser) {
    var result = false;
    var question = questions[numberOfQuestion];
    if (typeof question != "undefined") {
        if (question.correct == answerOfUser) {
            result = true;
        }
    }
    return result;
}

function drawPrices(numberOfQuestion) {
    document.getElementById("prices").innerHTML = "";
    for (var i = prices.length - 1; i >= 0; i = i - 1) {
        var element = document.createElement('div');
        element.innerHTML = prices[i];
        
        if (i == numberOfQuestion) {
            element.classList.add('current');
        }

        if (i< numberOfQuestion) {
            element. classList.add ('skip');
        }
        document.getElementById("prices").appendChild(element);
    }
}

drawQuestion(current);
for (let i = 0; i < 4; i++) {
    document.getElementById("answer-" + i).addEventListener("click", function(e) {
        var self = this;
        self.classList.add("checking");

        setTimeout (function (){
            self.classList.remove ("checking");
            if (checkAnswer (current, i) == true) {
                self.classList.add ("excellent");
              current = current + 1;
            if (current >= questions.length) {
                alert('Поздравляем! Вы выйграли ' + balance);
                current = 0;
            drawQuestion(current);
         } else {
             setTimeout (function () {
                 self.classList.remove ("excellent");
                 drawQuestion(current);
             } , 1000);
         } 
        

        } else {
            self.classList.add ("lose")
            setTimeout (function () {
            alert('Увы, но вы проиграли! Ваш заработок составляет ' + balance);
            balance = 0;
            current = 0;
            drawQuestion(current);
            self.classList.remove("lose");
        }, 1000);
    }
}, 1500); 

    });
}
