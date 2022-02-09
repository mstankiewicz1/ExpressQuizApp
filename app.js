const express = require('express');

const app = express();

app.listen(3000, () => {
    console.log('Servers are listening at http://localhost:3000/ Lets play a game');
});

let goodAnswers = 0;
let callToAfriendUsed = false;
let questionToTheCroudUsed = false;
let halfOnHalfUsed = false;

const questions = [
    {
        question: "Jaki jest najlepszy język programowania według mnie?",
        answers: ['C++', 'Fortran', 'JavaScript', 'Java'],
        correctAnswer: 2
    },
    {
        question: "Czy ten kurs jest fajny?",
        answers: ['Nie wiem', 'Oczywiście, że tak', 'Nie', 'Jest najlepszy'],
        correctAnswer: 3
    },
    {
        question: "Czy chcesz zjeść pizze?",
        answers: ['Nawet 2', 'Jestem na diecie', 'Nie dziękuje', 'Wolę brokuły'],
        correctAnswer: 0
    }
];

app.get('/question', (req, res) => {

    if(goodAnswers === questions.length) {
        res.json({
            winner: true,
        })
    } else {

        const nextQuestion = questions[goodAnswers];
        const  {question, answers} = nextQuestion;


        res.json({
            question, answers
        })
    }

});
