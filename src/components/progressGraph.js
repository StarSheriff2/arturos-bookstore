import react from 'react';

const ProgressGraph = (props) => {
  const { completion } = props.progress;

  return (
    <>
      <div className="book-card__progress-graph-container__progress-graph"></div>
      <div className="book-card__progress-graph-container__progress-percentage">
        <span className="book-card__progress-graph-container__progress-percentage__completion">{completion}</span>
        <span className="book-card__progress-graph-container__progress-percentage__progress-status">Completed</span>
      </div>
    </>
  );
}

export default ProgressGraph;
