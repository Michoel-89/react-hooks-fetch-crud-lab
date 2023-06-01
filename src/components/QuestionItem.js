import React from "react";

function QuestionItem({ question, deleteQuestion, updateAnswer }) {
  console.log(question)
  const { id, prompt, answers, correctIndex } = question;
  function handleDeleteClick() {
    fetch(`http://localhost:4000/questions/${id}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(response => response.json())
  .then(r => deleteQuestion(id))
  }

  function handleChange(e) {
    console.log(e.target.value)
    const data = {
      correctIndex: Number(e.target.value)
    };

    const requestOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    fetch(`http://localhost:4000/questions/${id}`, requestOptions)
      .then(response => response.json())
      .then(result => updateAnswer(result))
      }

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={handleChange} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
