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

    <div class="box">
      <form>
        <p class="question"><em>Question ${a + 1}: </em>${e.question}</p>
    
        <input type="radio" name="incorrect_answer" "id="answers">${e.incorrect_answers[0]}</input>
        <input type="radio" name="incorrect_answer" "id="answers">${e.incorrect_answers[1]}</input>
        <input type="radio" name="incorrect_answer" "id="answers">${e.incorrect_answers[2]}</input>
        <input type="radio" name="incorrect_answer" "id="answers">${e.correct_answer}</input>

                <div class="input-group">
          <div class="input-group-prepend">
            <div class="input-group-text">
              <input type="radio" aria-label="Radio button for following text input">${e.incorrect_answers[0]}
              <input type="radio" aria-label="Radio button for following text input">${e.incorrect_answers[1]}
              <input type="radio" aria-label="Radio button for following text input">${e.incorrect_answers[2]}
              <input type="radio" aria-label="Radio button for following text input">${e.correct_answer}
            </div>
          </div>
        </div>


        
      </form> 
           
        <p>${e.correct_answer}</p>
    </div>
        `;
    a++;
  });
};

getQuestions();
