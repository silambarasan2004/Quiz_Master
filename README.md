# Quiz_Master
## Date: 11/7/2025
## Objective:
To demonstrate the concepts of callback functions and higher-order functions in JavaScript by building a simple quiz scoring system where the evaluation logic is passed as a callback to a higher-order function.

## Tasks:

#### 1. Create the HTML Layout:
Add a heading ```<h1>QuizMaster</h1>```

Add a few mock questions (or inputs for answers — optional)

Add a “Check Score” button

Display the final score in a ```<div> or <p>```

#### 2. Add CSS Styling:
Style the layout with a clean font and spacing

Add background color and rounded buttons

Keep the output score in a prominent style

#### 3. JavaScript Functionality:
Create a higher-order function called calculateScore(callback)

The callback will contain the logic for checking answers (or mocked results)

Pass different callback functions to demonstrate modular scoring (e.g., strict or lenient scoring)
## HTML Code:
```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>QuizMaster</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>QuizMaster</h1>

  <div class="container">
    <div class="ques">
      <label for="user1">1. What is the name of Chennai’s famous beach?</label>
      <input type="text" id="user1" class="answer-input" />
    </div>
    <div class="ques">
      <label for="user2">2. Which company owns GitHub, LinkedIn?</label>
      <input type="text" id="user2" class="answer-input" />
    </div>
    <div class="ques">
      <label for="user3">3. Which tech company created the iPhone?</label>
      <input type="text" id="user3" class="answer-input" />
    </div>

    <button class="btn-score">Check Score</button>

    <div class="score-output"></div>
  </div>

  <script src="script.js"></script>
</body>
</html>
```
## CSS Code:
```
body {
  font-family: 'Segoe UI', sans-serif;
  background-color: #bfd5eb;
  padding: 40px;
  max-width: 400px;
  margin: auto;
}

h1 {
  text-align: center;
  color: #333;
}

.container {
  background: #c9e6bf;
  padding: 20px 30px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.ques {
  margin-bottom: 15px;
}

.ques label {
  display: block;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-weight: 700;
  margin-bottom: 5px;

}

.answer-input {
  padding: 8px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.btn-score {
  display: block;
  width: 100%;
  margin-top: 20px;
  padding: 12px;
  background-color: #4CAF50;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.btn-score:hover {
  background-color: #45a049;
}

.score-output {
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: #1d3557;
}
```
## JavaScript Code:
```
const correct_ans=["marina beach","microsoft","apple"];

function calculate(callback){
    const user_ans=[
        document.getElementById("user1").value.trim().toLowerCase(),
        document.getElementById("user2").value.trim().toLowerCase(),
        document.getElementById("user3").value.trim().toLowerCase()
    ];

    const score=callback(user_ans,correct_ans);
    document.querySelector('.score-output').textContent=`Your score: ${score}/3`;
}

function strict_scoring(u_ans,c_ans){
    let score=0;
    for(let i=0;i<c_ans.length;i++){
        if(u_ans[i]===c_ans[i]) score++;
    }
    return score;
}
function lenient_scoring(userAns, correctAns) {
  let score = 0;
  for (let i = 0; i < correctAns.length; i++) {
    if (userAns[i].includes(correctAns[i].substring(0, 2))) score++;
  }
  return score;
}
document.querySelector('.btn-score').addEventListener('click',function(){
    calculate(lenient_scoring);
});
```
## Output:
<img width="1918" height="962" alt="Screenshot 2025-07-11 191234" src="https://github.com/user-attachments/assets/578cd07b-7c56-4dd9-8372-36e261fb0436" />

## Result:
A mini module using JavaScript callbacks and higher-order functions is successfully created. This reinforces real-world use of passing functions as arguments to other functions and modularizes logic for reusability.
