import React, { Component } from 'react';
import chartjs from 'react-chartjs';
import chartOptions from './chartOptions'

const LineChart = chartjs.Line;

class LineGraph extends Component {
  render() {
		const { chartData,chartLabel } = this.props
		const graphData = {
			labels: chartLabel,
			datasets: [
				{
					label: "My First dataset",
					fillColor: "rgba(220,220,220,0.2)",
					strokeColor: "rgba(220,220,220,1)",
					pointColor: "rgba(220,220,220,1)",
					pointStrokeColor: "#fff",
					pointHighlightFill: "#fff",
					pointHighlightStroke: "rgba(220,220,220,1)",
					data: chartData
				}
			]
		};
    return (
      <div>
        <LineChart data={graphData} options={chartOptions} width="600" height="250"/>
      </div>
    );
  }
}

export default LineGraph;
