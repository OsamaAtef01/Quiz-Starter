export class Quiz {
    constructor(userQuestions){
        console.log(userQuestions);
        this.questionsNumber = userQuestions.length
        this.currentQuestionNo = 0
        this.userQuestions = userQuestions
        this.showQuestion()
        this.correctAnswer
        this.inCorrectAnswer // ['ahmed','route','frontend']

        this.nextQuestion = document.getElementById('next')
        this.nextQuestion.addEventListener('click',()=>{
            this.getNextQuestion()
        })
        this.score = 0
        document.getElementById('tryBtn').addEventListener('click',()=>{
            this.startAgain()
        })
    }

    showQuestion(){
        document.querySelector('#totalNumberOfQuestions').innerHTML = this.questionsNumber
        document.querySelector('#currentQuestion').innerHTML = this.currentQuestionNo + 1
        const questionCurrent = this.userQuestions[this.currentQuestionNo]
        document.querySelector('#question').innerHTML = questionCurrent.question
        this.inCorrectAnswer = questionCurrent.incorrect_answers
        this.correctAnswer = questionCurrent.correct_answer
        // console.log(this.inCorrectAnswer);
        this.allAnswers = [...this.inCorrectAnswer]
        const randomNumber = Math.floor(Math.random() * this.allAnswers.length)
        this.allAnswers.splice(randomNumber,0,this.correctAnswer)
        console.log(randomNumber);
        console.log(this.allAnswers);
        let container = ''
        this.allAnswers.forEach((answer)=>{
            container += `
                <li class="my-3 animate__animated">
                    <div class="d-flex align-items-center">
                        <input type="radio" name="answer" value="${answer}" />
                        <div class="state p-success-o">
                            <label class="m-0 p-2"> ${answer} </label>
                        </div>
                    </div>
                </li>
            `
        })

        $('#rowAnswer').html(container);
        console.log(this.userQuestions);
    }

    getNextQuestion(){
        this.userSelectedAnswer = document.querySelector('[name="answer"]:checked')?.value
        console.log(this.userSelectedAnswer);
        if(this.userSelectedAnswer != undefined){
            $('#alert').fadeOut(300);
            this.currentQuestionNo++
            if(this.currentQuestionNo > this.userQuestions.length-1){
                $('#quiz').removeClass('show');
                $('#finish').addClass('show');
                document.getElementById('score').innerHTML = this.score
            }else {
                if(this.userSelectedAnswer === this.correctAnswer){
                    $('#Correct').fadeIn(300);
                    $('#Correct').fadeOut(300);
                    this.score++
                }else {
                    $('#inCorrect').fadeIn(300);
                    $('#inCorrect').fadeOut(300);
                }
                this.showQuestion()
            }
        }else {
            $('#alert').fadeIn(300);
        }
    }
    startAgain(){
        window.location.reload()
    }
}