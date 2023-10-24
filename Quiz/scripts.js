// @ts-check

import {questions} from"./app/preguntas.js";
import { Quiz } from "./models/Quiz.js";
import { UI } from "./models/UI.js";

/**
 * 
 * @param {Quiz} quiz the main quiz object
 * @param {UI} ui ui object
 */

const renderPage = (quiz, ui) => {
    if (quiz.siFinaliza()){
        console.log(quiz.score);
        ui.showScore(quiz.score); /* Puntaje presentar */

    }else{
        ui.showQuestion(quiz.getQuestionIndex().text);
        ui.showChoices(quiz.getQuestionIndex().choices,(currentChoice)=> {
        quiz.guess(currentChoice);
        renderPage(quiz, ui);
        });
    }
}

function main(){
    const quiz = new Quiz(questions);
    const ui = new UI();
    renderPage(quiz,ui);

}

main();