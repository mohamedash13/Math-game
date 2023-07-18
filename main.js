let myAsnwer = document.getElementById("myAnswer")
let question = document.querySelector(".generate-question")
let form = document.querySelector(".answer")
let score = document.querySelector(".score")
let level = document.querySelector(".level")
let skipButton = document.querySelector("button") 
let countScore = 0;
let countLevel = 1;
let increaseDifficult = 0;



function generateQuestion() {
    let conditions = ["+","-","*","/"]
    let selectedCondition = conditions[Math.floor(Math.random()*10)]
    question.innerHTML = `${Math.floor(Math.random()*10 + increaseDifficult) + selectedCondition + Math.floor(Math.random()*10 + increaseDifficult)}`


    if (question.innerHTML === "NaN"){
        generateQuestion()    
    }
    console.log((Math.round(eval(question.innerHTML) * 10) /10))

}
generateQuestion()
    // solve the question onsubmit the form

    form.addEventListener("submit",(e) =>{
        e.preventDefault()
        if(+myAsnwer.value == (Math.round(eval(question.innerHTML) * 10) /10)){
            countScore++
        }
        generateQuestion()
            // function for levels
        if(countScore % 10 === 0){
            countLevel++
            increaseDifficult += 5
        }
        score.innerHTML = countScore
        level.innerHTML = countLevel
        myAsnwer.value = ""
    })


// skip question handeling


skipButton.addEventListener("click",()=>{
    generateQuestion()
})



