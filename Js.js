var namee = document.getElementById("name");
var userName;
var email;
var password;
var confirmPassword;
var male;
var female;
var valid1 = document.getElementById("valid1");
var valid2 = document.getElementById("valid2");
var valid3 = document.getElementById("valid3");
var valid4 = document.getElementById("valid4");
var btn = document.getElementById("register");
var container = document.querySelector(".container1");
var flag = 1;
var container2 = document.querySelector(".container2");
questionNumber = document.getElementById("question-number");
questionBody = document.getElementById("question-body");
questionAnswer1 = document.getElementById("question-answer1");
questionAnswer2 = document.getElementById("question-answer2");
questionAnswer3 = document.getElementById("question-answer3");
questionAnswer4 = document.getElementById("question-answer4");
radio1 = document.getElementById("radio1");
radio2 = document.getElementById("radio2");
radio3 = document.getElementById("radio3");
radio4 = document.getElementById("radio4");
answer = document.getElementsByName("answer");
next = document.getElementById("next");
skip = document.getElementById("skip");
skipQs = document.querySelectorAll(".skip");
skip1 = document.getElementById("s1");
skip2 = document.getElementById("s2");
skip3 = document.getElementById("s3");
skip4 = document.getElementById("s4");
skip5 = document.getElementById("s5");
var container3 = document.querySelector(".container3");
finalMesage = document.getElementById("finalMessage");
scoreMessage = document.getElementById("Myscore");

var skipContainer = document.querySelector('.skiped-container');

var questions = [];
var studentQuestions = [];
var skipedQuestions = {};


var currentQuestionIndex = 0;

function validation() {
    flag = 1;
    namee = document.getElementById("name").value;
    userName = namee;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    confirmPassword = document.getElementById("confirm-password").value;
    male = document.getElementById("male").value;
    female = document.getElementById("female").value;

    if (namee.length < 5 || !isNaN(namee) || !namee.match(/^[A-Za-z]+$/)) {
        valid1.style.visibility = 'visible';
        document.getElementById("name").value = "";
        flag = 0;
    }

    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email) || email.length == 0) {
        valid2.style.visibility = 'visible';
        document.getElementById("email").value = "";
        flag = 0;
    }

    if (password.length < 8 || password.length == 0) {
        valid3.style.visibility = 'visible';
        document.getElementById("password").value = "";
        flag = 0;
    }

    if (confirmPassword != password || confirmPassword.length == 0) {
        valid4.style.visibility = 'visible';
        document.getElementById("confirm-password").value = "";
        flag = 0;
    }

    if (flag == 1) {

        container.style.display = "none";
        container2.style.display = "block";

    }

}

btn.addEventListener('click', validation);


/////////////////////////////////////////////////  Questions   ///////////////////////////////////////////////////////////////////////


function Question(question, answer1, answer2, answer3, answer4, trueAnswer, index) {
    this.question = question;
    this.answer1 = answer1;
    this.answer2 = answer2;
    this.answer3 = answer3;
    this.answer4 = answer4;
    this.trueAnswer = trueAnswer;
    this.index = index;
}

questions[0] = new Question("What does CSS stand for ?", "Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "Colorful Style Sheets", "Cascading Style Sheets");
questions[1] = new Question("Which HTML tag is used to define an internal style sheet?", "<css>", "<script>", "<style>", "<span>", "<css>");
questions[2] = new Question("Which HTML attribute is used to define inline styles ?", "font", "styles", "style", "class", "style");
questions[3] = new Question("Choose the correct HTML element for the largest heading:", "<head>", "<heading>", "<h1>", "<h6>", "<h1>");
questions[4] = new Question("Where is the correct place to insert a JavaScript?", "The <head> section", " The <body> section", "Both the <head> section and the <body> section are correct", "none of the above", "Both the <head> section and the <body> section are correct");
questions[5] = new Question("How do you call a function named myFunction ?", "call function myFunction()", " myFunction()", "call myFunction()", "none of the above", "myFunction()");
questions[6] = new Question("How to write an IF statement in JavaScript?", "if i = 5 then", "if i = 5", "if i == 5 then", "if (i == 5)", "if (i == 5)");
questions[7] = new Question("What does XML stand for?", "X-Markup Language", " Example Markup Language", "eXtensible Markup Language", "eXtra Modern Link", "eXtensible Markup Language");
questions[8] = new Question("How do you select an element with id 'demo'?", "demo", ".demo", "*demo", "#demo", "#demo");
questions[9] = new Question("In HTML, onblur and onfocus are:", "Style attributes", "HTML elements", "Style attributes", "Event attributes", "Event attributes");

var object;
var studentQuestionsIndexes = [];
var n = 0;
var x;
var indexFound = null;
var rand_question;
var skipedQuesElm;
var skipedQ;

while (n != 5) {

    x = Math.floor(Math.random() * questions.length);

    indexFound = studentQuestionsIndexes.find(function (q) {
        return q == x;
    });

    if (!indexFound) {

        rand_question = questions[x];
        rand_question.index = n;
        studentQuestions[n] = rand_question;
        studentQuestionsIndexes.push(x);
        n++;

    } else {

        indexFound = null;
    }

}

function generateStudentQuestion() {
    var rand_question;
    for (var j = 0; j < 5; j++) {
        rand_question = questions[Math.floor(Math.random() * questions.length)];
        rand_question.index = j;
        studentQuestions[j] = rand_question;
    }

    var index = Math.ceil(Math.random() * 5);
    studentQuestions.forEach(function (el, i) {
        if (i == index) {
            object = el;
        }
    });
}

function displayQuestion(obj) {

    questionBody.innerText = obj.question;

    questionBody.setAttribute('index', obj.index);

    questionNumber.textContent = "Q" + (parseInt(obj.index) + 1);

    answer[0].value = obj.answer1;
    questionAnswer1.textContent = obj.answer1;
    answer[1].value = obj.answer2;
    questionAnswer2.textContent = obj.answer2;
    answer[2].value = obj.answer3;
    questionAnswer3.innerText = obj.answer3;
    answer[3].value = obj.answer4;
    questionAnswer4.textContent = obj.answer4;

}

object = studentQuestions.shift();
displayQuestion(object);

var score = 0;

function Next() {

    currentQuestionIndex++;
    if (studentQuestions.length == 0 && Object.keys(skipedQuestions).length > 0) {

        studentQuestions.push(skipedQuestions[Object.keys(skipedQuestions).pop()]);
        var skipToBeRemoved = document.querySelector('.s' + (parseInt(skipedQuestions[Object.keys(skipedQuestions).pop()].index) + 1));

        skipToBeRemoved.parentNode.removeChild(skipToBeRemoved);

        delete skipedQuestions[Object.keys(skipedQuestions).pop()];
    }

    if (studentQuestions.length === 0) {

        next.style.display = "none";
        return finish();

    } else {
        questionNumber.textContent = "Q" + (parseInt(currentQuestionIndex) + 1);

        for (var i = 0; i < answer.length; i++) {
            if (answer[i].checked) {
                if (answer[i].value == object.trueAnswer) {
                    score++;
                    answer[i].checked = false;
                }
                else {
                    answer[i].checked = false;
                }

            }
        }
    }

    // object = studentQuestions[parseInt(currentQuestionIndex)];
    object = studentQuestions.shift();
    displayQuestion(object);
}

function displaySkipedQuestion(e) {

    studentQuestions.unshift(_this.object);


    skipedQ = skipedQuestions[parseInt(e.target.getAttribute('index'))];
    _this.object = skipedQ;
    displayQuestion(skipedQ);

    skipedQuesElm = document.querySelector('.s' + (parseInt(e.target.getAttribute('index')) + 1));

    skipedQuesElm.parentNode.removeChild(skipedQuesElm);
    delete skipedQuestions[e.target.getAttribute('index')];

}

var _this = this;

function Skip(object) {

    skipedQuestions[parseInt(questionBody.getAttribute('index'))] = _this.object;

    if (document.querySelector('.s' + (parseInt(questionBody.getAttribute('index')) + 1)) != undefined) {
        return;
    }
    var skipElm = document.createElement('div');
    skipElm.className = 'skip ' + 's' + (parseInt(questionBody.getAttribute('index')) + 1);
    // skipElm.id = 's' + (parseInt(questionBody.getAttribute('index')) + 1);
    skipElm.setAttribute('index', parseInt((questionBody.getAttribute('index')) + 1));
    skipElm.textContent = questionNumber.textContent;
    skipElm.setAttribute('index', parseInt((questionBody.getAttribute('index'))));
    skipContainer.appendChild(skipElm);


    document.querySelectorAll('.skip').forEach(function (q) {
        q.addEventListener('click', displaySkipedQuestion);
    });


    Next();
}

var sk;

function fullSkippedArray(header) {
    questions.forEach(function (e1) {
        if (e1.questionBody == header) {
            sk = e1;
            skipedQuestions.push(sk);
        }
    })

}

function finish() {

    container2.style.display = "none";
    for (var k = 0; k < answer.length; k++) {
        if (answer[k].checked) {
            if (answer[k].value == object.trueAnswer) {
                score++;
                answer[k].checked = false;
            }
            else {
                answer[k].checked = false;
            }

        }
    }
    if (score >= 4) {
        icon2.style.display = "none"
        icon1.style.display = "block"
        finalMesage.textContent = "Excellent  " + userName;
    }
    else {
        icon1.style.display = "none"
        icon2.style.display = "block"
        finalMesage.textContent = "You need to do more " + userName +" !!" ;
    }
    scoreMessage.textContent = "Your Degree is " + score + " from 5";

    container3.style.display = "block";

    return;
}


next.addEventListener('click', Next);
skip.addEventListener('click', Skip);
