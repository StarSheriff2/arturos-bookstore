import PropTypes from 'prop-types';
import DoughnutChart from './doughnutChart';

const ProgressGraph = (props) => {
  const { progress } = props;
  const { completion } = progress;

  return (
    <>
      <div className="book-card__progress-graph-container__wrapper">
        <div className="book-card__progress-graph-container__progress-graph">
          <DoughnutChart completion={completion} />
        </div>
        <div className="book-card__progress-graph-container__progress-percentage">
          <span className="book-card__progress-graph-container__progress-percentage__completion">{`${Math.trunc(completion * 100)}%`}</span>
          <span className="book-card__progress-graph-container__progress-percentage__progress-status">Completed</span>
        </div>
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
