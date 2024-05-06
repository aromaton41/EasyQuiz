let totalScore = 0;
let answerOne = "";
let answerTwo = "";

function checkAnswer() {
    if (answerOne === 'a1') {
        totalScore++;
    }
    if (answerTwo === 'c2') {
        totalScore++;
    }

    document.querySelector('#totalScore').innerHTML = totalScore + ' คะแนน';
    document.querySelector('#submit').style.display = 'none';
    document.querySelector('#quiz').style.display = 'none';
    document.querySelector('#result').style.display = 'inline';
}

function selectAnwer(answer, name) {
    const select = document.querySelector(answer);
    const unselect = document.querySelectorAll(`input[name=${name}]`);
    unselect.forEach(item => item.style.backgroundColor = '#007BFF');
    select.style.backgroundColor = '#0056b3';

    switch (name) {
        case 'no1':
            answerOne = select.id;
            break;
        case 'no2':
            answerTwo = select.id;
            break;
        default:
            break;
    }

    validateAnswer();
}

function reset() {
    totalScore = 0;
    answerOne = "";
    answerTwo = "";
    const unselect = document.querySelectorAll(`input`);
    unselect.forEach(item => item.style.backgroundColor = '#007BFF');
    document.querySelector('#totalScore').innerHTML = '';
    document.querySelector('#submit').style.display = 'inline';
    document.querySelector('#submit').setAttribute('disabled', 'true')
    document.querySelector('#quiz').style.display = 'inline';
    document.querySelector('#result').style.display = 'none';
}

function validateAnswer() {
    if (answerOne && answerTwo) {
        document.querySelector('#submit').removeAttribute('disabled');
    }
}
