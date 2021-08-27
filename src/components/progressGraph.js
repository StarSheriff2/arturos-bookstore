import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';

const ProgressGraph = (props) => {
  const { progress } = props;
  const { completion } = progress;

  const state = {
    datasets: [
      {
        backgroundColor: ['#379cf6', '#f5f6fa'],
        hoverBackgroundColor: ['#4386bf', '#888'],
        data: [(completion * 100), ((1 - completion) * 100)],
      },
    ],
  };

  return (
    <>
      <div className="book-card__progress-graph-container__wrapper">
        <div className="book-card__progress-graph-container__progress-graph">
          <Doughnut
            data={state}
            options={{ maintainAspectRatio: true }}
          />
        </div>
        <div className="book-card__progress-graph-container__progress-percentage">
          <span className="book-card__progress-graph-container__progress-percentage__completion">{`${(completion * 100)}%`}</span>
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
