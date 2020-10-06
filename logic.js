let questions = ["a"];
console.log(questions);

const getQuestions = function (term) {
  fetch(`https://opentdb.com/api.php?amount=10`)
    .then((response) => response.json())
    .then((data) => writeQuestions(data));
};

const writeQuestions = function (data) {
  document.getElementById("questions").innerHTML = "";
  let a = 0;

  data.results.forEach(function (e) {
    console.log(e);
    document.getElementById("questions").innerHTML += `

    <form>
    <p><em>Question ${a + 1}: </em>${e.question}</p>
    
    <input type="radio" name="incorrect_answer">${e.incorrect_answers[0]}</input>
    <input type="radio" name="incorrect_answer">${e.incorrect_answers[1]}</input>
    <input type="radio" name="incorrect_answer">${e.incorrect_answers[2]}</input>
    <input type="radio" name="incorrect_answer">${e.incorrect_answers[3]}</input>

    </form>
      


        
           
    



        <p>${e.correct_answer}</p>
        
        `;
    a++;
  });
};

getQuestions();
