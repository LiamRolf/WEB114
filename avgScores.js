let username = prompt("Enter your name");

    function calcScore(){
        let count = 0;
        let total = 0;
        let grade = 0;
    
    grade = parseFloat(
        prompt(`Enter a quiz score from 0-100. Enter -1 when you're done`)
    )

    while (grade !== -1){
        total = total + grade;
        count++
        grade = parseFloat(prompt(`Enter a score from 1-100. Enter -1 to stop`))
    }
    return total / count;
    }
    let score = calcScore();
    console.log(score);