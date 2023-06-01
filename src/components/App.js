import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [qArray, setQArray] = useState([])
  useEffect(() => {
    fetch('http://localhost:4000/questions')
    .then(r => r.json())
    .then(questions => {
      setQArray(questions)
    })
  }, [])
  function handleNewQ(newQ) {
    setQArray((prev) => [...prev, newQ])
  }
  function deleteQuestion(id) {
      setQArray((prev) => prev.filter((question) => question.id != id)
      )
  }
  function updateAnswer(response) {
    const updatedItems = qArray.map((item) => {
      if (item.id === response.id) {
        return response;
      } else {
        return item;
      }
    });
    setQArray(updatedItems);
  }
  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm 
      handleNewQ={handleNewQ} /> : <QuestionList 
      qArray={qArray} 
      deleteQuestion={deleteQuestion}
      updateAnswer={updateAnswer} />}
    </main>
  );
}

export default App;
