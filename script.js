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