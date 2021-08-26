import PropTypes from 'prop-types';

const ProgressGraph = (props) => {
  const { progress } = props;
  const { completion } = progress;

  return (
    <>
      <div className="book-card__progress-graph-container__progress-graph" />
      <div className="book-card__progress-graph-container__progress-percentage">
        <span className="book-card__progress-graph-container__progress-percentage__completion">{`${(completion * 100)}%`}</span>
        <span className="book-card__progress-graph-container__progress-percentage__progress-status">Completed</span>
      </div>
    </>
  );
};

ProgressGraph.defaultProps = {
  progress: {
    completion: 0,
  },
};

ProgressGraph.propTypes = {
  progress: PropTypes.shape({
    completion: PropTypes.number,
  }),
};

export default ProgressGraph;
