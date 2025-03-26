import { React, useEffect, useRef ,useState} from 'react'
import Chart from "chart.js/auto";
import ComponentHeader from '../layout/ComponentHeader';
import Table from './Table';

const Dashboard = () => {
  const chartRef = useRef("");
  const chartInstance = useRef("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    // Destroy the existing chart instance if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create a new chart instance
    chartInstance.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels: [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday'
        ],
        datasets: [{
          data: [
            15339,
            21345,
            18483,
            24003,
            23489,
            24092,
            12964
          ],
          lineTension: 0,
          backgroundColor: 'transparent',
          borderColor: '#007bff',
          borderWidth: 4,
          pointBackgroundColor: '#007bff'
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: false
            }
          }]
        },
        plugins: {
          legend: {
            display: false,
          }
        }
      }
    });

    // Cleanup function to destroy the chart on component unmount
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);
  return (
    <>
      <ComponentHeader header={"Dashboard"} showButton={true} />
      <canvas className="my-4 w-100" ref={chartRef} id="myChart" width="900" height="380"></canvas>
      {/* <canvas className="my-4 w-100"  id="myChart" width="900" height="380"></canvas> */}

      <h2>Section title</h2>
      {/* <Table data={products} /> */}
    </>
  )
}

export default Dashboard