import PropTypes from 'prop-types';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = (props) => {
  const { completion } = props;

  const data = (canvas) => {
    const ctx = canvas.getContext('2d');
    const g = ctx.createLinearGradient(0, 0, 0, 150);
    g.addColorStop(0, '#307bbe');
    g.addColorStop(0.65, '#379cf6');

    return {
      datasets: [
        {
          cutout: '80%',
          backgroundColor: [g, '#f5f6fa'],
          hoverBackgroundColor: ['#4386bf', '#888'],
          data: [(completion * 100), ((1 - completion) * 100)],
        },
      ],
    };
  };

  return (
    <>
      <Doughnut
        data={data}
        options={{ maintainAspectRatio: true }}
      />
    </>
  );
};

export default DoughnutChart;

DoughnutChart.propTypes = {
  completion: PropTypes.number.isRequired,
};
