const questions = [
    ["Question 1.1", "Question 1.2", "Question 1.3", "Question 1.4", "Question 1.5"],
    ["Question 2.1", "Question 2.2", "Question 2.3", "Question 2.4", "Question 2.5"],
    ["Question 3.1", "Question 3.2", "Question 3.3", "Question 3.4", "Question 3.5"],
    ["Question 4.1", "Question 4.2", "Question 4.3", "Question 4.4", "Question 4.5"]
  ];
  
  const App = () => {
    const [answers, setAnswers] = React.useState(
      questions.map(qs => qs.map(() => "No"))
    );
    const [editStatus, setEditStatus] = React.useState([true, false, false, false]);
    const [showButtons, setShowButtons] = React.useState([false, false, false, false]);
  
    const handleRadioChange = (accordionIndex, questionIndex, value) => {
      const newAnswers = answers.map((section, i) =>
        i === accordionIndex
          ? section.map((answer, j) => (j === questionIndex ? value : answer))
          : section
      );
      setAnswers(newAnswers);
  
      const allAnswered = newAnswers[accordionIndex].every(answer => answer !== "No");
      const newEditStatus = editStatus.map((status, i) =>
        i === accordionIndex + 1 ? allAnswered : i <= accordionIndex
      );
      setEditStatus(newEditStatus);
  
      const newShowButtons = showButtons.map((show, i) =>
        i === accordionIndex ? true : show
      );
      setShowButtons(newShowButtons);
    };
  
    const handleSave = (accordionIndex) => {
      const newShowButtons = showButtons.map((show, i) =>
        i === accordionIndex ? false : show
      );
      setShowButtons(newShowButtons);
    };
  
    const handleCancel = (accordionIndex) => {
      const newAnswers = answers.map((section, i) =>
        i === accordionIndex ? section.map(() => "No") : section
      );
      setAnswers(newAnswers);
      const newEditStatus = editStatus.map((status, i) => i === accordionIndex + 1 ? false : status);
      setEditStatus(newEditStatus);
      const newShowButtons = showButtons.map((show, i) =>
        i === accordionIndex ? false : show
      );
      setShowButtons(newShowButtons);
    };
  
    return (
      <div className="App">
        {questions.map((qs, accordionIndex) => (
          <div key={accordionIndex} className="accordion">
            <h2>Accordion {accordionIndex + 1}</h2>
            {qs.map((question, questionIndex) => (
              <div key={questionIndex} className="question">
                <label>{question}</label>
                <input
                  type="radio"
                  name={`accordion${accordionIndex}question${questionIndex}`}
                  value="Yes"
                  checked={answers[accordionIndex][questionIndex] === "Yes"}
                  disabled={!editStatus[accordionIndex]}
                  onChange={() => handleRadioChange(accordionIndex, questionIndex, "Yes")}
                /> Yes
                <input
                  type="radio"
                  name={`accordion${accordionIndex}question${questionIndex}`}
                  value="No"
                  checked={answers[accordionIndex][questionIndex] === "No"}
                  disabled={!editStatus[accordionIndex]}
                  onChange={() => handleRadioChange(accordionIndex, questionIndex, "No")}
                /> No
                <input
                  type="radio"
                  name={`accordion${accordionIndex}question${questionIndex}`}
                  value="NA"
                  checked={answers[accordionIndex][questionIndex] === "NA"}
                  disabled={!editStatus[accordionIndex]}
                  onChange={() => handleRadioChange(accordionIndex, questionIndex, "NA")}
                /> NA
              </div>
            ))}
            {showButtons[accordionIndex] && (
              <div className="buttons">
                <button onClick={() => handleSave(accordionIndex)}>Save</button>
                <button onClick={() => handleCancel(accordionIndex)}>Cancel</button>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  }
  
  ReactDOM.render(<App />, document.getElementById('root'));
  