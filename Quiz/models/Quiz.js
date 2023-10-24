
// @ts-check
import { Question } from "./questions.js";
export class Quiz{

    questionsIndex= 0;
    score=0;

    /**
     * 
     * @param {Question[]} questions 
     */

    constructor(questions){
        this.questions=questions
    }
    /**
     * 
     * @returns {Question} pregunta encontrada
     */
    getQuestionIndex(){
        return this.questions[this.questionsIndex]
    }

    siFinaliza(){
        return this.questions.length === this.questionsIndex
    }

    /**
     * 
     * @param {string} answer algo en texto
     */


    guess(answer){
        console.log(answer)

        if(this.getQuestionIndex().correctAnswer(answer)){
            this.score++

        }
    
        this.questionsIndex++      
       
    }

    

    
}


