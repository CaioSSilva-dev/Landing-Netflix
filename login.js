const questions = [document.getElementById("q1"),document.getElementById("q2"),document.getElementById("q3"),document.getElementById("q4"),document.getElementById("q5"),document.getElementById("q6")]
const answers = [document.getElementById("r1"),document.getElementById("r2"),document.getElementById("r3"),document.getElementById("r4"),document.getElementById("r5"),document.getElementById("r6")]
const crosshair = [document.getElementById("crosshair-1"),document.getElementById("crosshair-2"),document.getElementById("crosshair-3"),document.getElementById("crosshair-4"),document.getElementById("crosshair-5"),document.getElementById("crosshair-6")]


questions[0].addEventListener('click', () => {
    if(answers[0].style.display == "flex"){
        answers[0].style.display = "none"
        crosshair[0].style.transform = "rotate(0deg)"
        crosshair[0].style.transition = ".1s"
    }else{
        answers[0].style.display = "flex"
        crosshair[0].style.transform = "rotate(45deg)"
        crosshair[0].style.transition = ".1s"
    }
})
questions[1].addEventListener('click', () => {
    if(answers[1].style.display == "flex"){
        answers[1].style.display = "none"
        crosshair[1].style.transform = "rotate(0deg)"
        crosshair[1].style.transition = ".1s"
    }else{
        answers[1].style.display = "flex"
        crosshair[1].style.transform = "rotate(45deg)"
        crosshair[1].style.transition = ".1s"
    }
})
questions[2].addEventListener('click', () => {
    if(answers[2].style.display == "flex"){
        answers[2].style.display = "none"
        crosshair[2].style.transform = "rotate(0deg)"
        crosshair[2].style.transition = ".1s"
    }else{
        answers[2].style.display = "flex"
        crosshair[2].style.transform = "rotate(45deg)"
        crosshair[2].style.transition = ".1s"
    }
})
questions[3].addEventListener('click', () => {
    if(answers[3].style.display == "flex"){
        answers[3].style.display = "none"
        crosshair[3].style.transform = "rotate(0deg)"
        crosshair[3].style.transition = ".1s"
    }else{
        answers[3].style.display = "flex"
        crosshair[3].style.transform = "rotate(45deg)"
        crosshair[3].style.transition = ".1s"
    }
})
questions[4].addEventListener('click', () => {
    if(answers[4].style.display == "flex"){
        answers[4].style.display = "none"
        crosshair[4].style.transform = "rotate(0deg)"
        crosshair[4].style.transition = ".1s"
    }else{
        answers[4].style.display = "flex"
        crosshair[4].style.transform = "rotate(45deg)"
        crosshair[4].style.transition = ".1s"
    }
})
questions[5].addEventListener('click', () => {
    if(answers[5].style.display == "flex"){
        answers[5].style.display = "none"
        crosshair[5].style.transform = "rotate(0deg)"
        crosshair[5].style.transition = ".1s"
    }else{
        answers[5].style.display = "flex"
        crosshair[5].style.transform = "rotate(45deg)"
        crosshair[5].style.transition = ".1s"
    }
})