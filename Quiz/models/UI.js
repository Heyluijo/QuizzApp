export class UI{
    constructor(){};

    /**
     * 
     * @param {*} text pregunta a moestrar 
     */

    showQuestion(text){
       const questionTitle = document.getElementById('preguntasMostrar');
        questionTitle.innerText = text;

    }
    
    /**
     * 
     * @param {string[]} choices opciones de respuestas
     */

    showChoices(choices, callback){
        const choicesContainer = document.getElementById("opciones");
        choicesContainer.innerHTML='';

        for (let i = 0; i < choices.length; i++){
            const button = document.createElement('button');
            button.innerText = choices[i];
            choicesContainer.append(button);
            button.addEventListener('click',() => callback(choices[i]));


            button.className += "col-lg-4 col-sm-12 col-xs-12";
            
        }

    }
    /**
     * 
     * @param {number} score  total score
     */

    showScore(score){
        const quizEndHTML = `
        <h3> SCORE</h3>
        <hr>
        <h1 id="score"> ${score}</h1>
        `
        const element = document.getElementById('showResults'); /* ME QUEDE AQUI, NO ESTA MOSTRANDO EL RESULTADO EN EL HTML */
        element.innerHTML = quizEndHTML;
    }


}

