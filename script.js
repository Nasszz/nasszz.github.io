var questions = [{
        text: "В каком году Наполеон напал на Россию",
        price: 100,
        answers: [
            1912,
            1812,
            1712,
            1612
        ],
        correct: 1
    },
    {
        text: "Кто был создателем iPhone",
        answers: [
            "Билл Гейтс",
            "Стив Джобс",
            "Сергей Брин",
            "Ларри Пейдж"
        ],
        correct: 1,
        price: 200
    },
    {
        text: "Кто был одним из создателей Google",
        answers: [
            "Марк Эванс",
            "Стив Джобс",
            "Люк Скай Вокер",
            "Ларри Пейдж"
        ],
        correct: 3,
        price: 300
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
        document.getElementById("prices").appendChild(element);
    }
}

drawQuestion(current);
for (let i = 0; i < 4; i++) {
    document.getElementById("answer-" + i).addEventListener("click", function(e) {
        if (checkAnswer(current, i) == true) {

            current = current + 1;
            if (current >= questions.length) {
                alert('Поздравляем! Вы выйграли ' + balance);
                current = 0;
            }
            drawQuestion(current);

        } else {
            alert('Увы, но вы проиграли! Ваш заработок составляет ' + balance);
            balance = 0;
            current = 0;
            drawQuestion(current);
        }
    });
}