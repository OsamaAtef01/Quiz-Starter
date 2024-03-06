import {Quiz} from './quiz.js'
export class Setting {
    constructor(){
        this.category = document.querySelector('#category')
        this.difficulty = document.getElementsByName('difficulty')
        this.noOfQuestions = document.querySelector('#numberOfQuestions')


        this.startBtn = document.querySelector('#startBtn')
        this.startBtn.addEventListener('click',()=>{
            // console.log(this.getUserData());
            this.getUserData()
        })
    }

   async getUserData(){
        let category = this.category.value
        let difficulty = Array.from(this.difficulty).find((elm)=> elm.checked).value
        let noOfQuestions = this.noOfQuestions.value

        if(noOfQuestions > 0 && noOfQuestions <= 50){
            let questions = await this.getQuestions(category,difficulty,noOfQuestions)
            let quiz = new Quiz(questions)
            $('#alert1').fadeOut(300);
            $('#setting').removeClass('show');
            $('#quiz').addClass('show');
        }else {
            $('#alert1').fadeIn(300);
        }

        // console.log(questions);
    }

   async getQuestions(category,difficulty,noOfQuestions){
        const apiUrl = await fetch(`https://opentdb.com/api.php?amount=${noOfQuestions}&category=${category}&difficulty=${difficulty}`)
        const {results} = await apiUrl.json()
        return results
    }
}



