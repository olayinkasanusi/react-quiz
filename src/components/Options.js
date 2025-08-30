function Options({ quest, dispatch, answer }) {
  const { options, correctOption } = quest;

  const isAnswered = answer !== null;

  return (
    <div className="options">
      {options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            isAnswered && index === correctOption ? "correct" : "wrong"
          }`}
          key={option}
          disabled={isAnswered ? true : false}
          onClick={() => {
            dispatch({ type: "newAnswer", payload: index });
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
