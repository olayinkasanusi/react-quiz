function Progress({ index, numQuestions, points, maxPoints }) {
  return (
    <header className="progress">
      <progress max={maxPoints} value={points} />
      <p>
        Question <strong>{index + 1}</strong>/{numQuestions}
      </p>

      <p>
        <strong>{points}</strong> / {maxPoints}
      </p>
    </header>
  );
}

export default Progress;
