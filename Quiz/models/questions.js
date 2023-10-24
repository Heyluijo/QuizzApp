export class Question {

    /**
     * 
     * @param {string} text Esta es la pregunta
     * @param {string[]} choices Estas son las opciones
     * @param {string} answer Esta es la respuesta
     */


    constructor(text, choices, answer){
        this.text = text;
        this.choices = choices;
        this.answer= answer;
    }

    /**
     * 
     * @param {string} choices texto para adivinar 
     * @returns {boolean} devuelve true si es correcto
     */

     correctAnswer(choices) {
        return choices === this.answer
    }
}

new Question()