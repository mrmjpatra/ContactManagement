import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import { Chart } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)


const LineGraph = () => {
    const { data: graphData } = useQuery('graphData', async () => {
        const response = await axios.get(
            'https://disease.sh/v3/covid-19/historical/all?lastdays=all'
        );
        return response.data;
    });
    const casesData = graphData?.cases;
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart',
            },
        },
    };
    const chartData = {
        labels: Object.keys(casesData || {}),
        datasets: [
            {
                label: 'Cases',
                data: Object.values(casesData || {}),
                fill: false,
                // borderColor: 'rgba(75,192,192,1)',
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };
   
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
            <h2 className="text-xl font-semibold mb-4">Cases Fluctuations</h2>
            <Line options={options} data={chartData} />;
        </div>
  )
}

export default LineGraph