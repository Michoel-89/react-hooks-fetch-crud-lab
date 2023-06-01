import React from "react";
import QuestionItem from "./QuestionItem";
function QuestionList({qArray, deleteQuestion, updateAnswer}) {
  
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{qArray.map((question) => {
        return <QuestionItem 
        key={question.id} 
        question={question} 
        deleteQuestion={deleteQuestion} 
        updateAnswer={updateAnswer}/>
      })}</ul>
    </section>
  );
}

export default QuestionList;
