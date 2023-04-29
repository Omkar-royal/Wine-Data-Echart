/*const WineBarChart = () => {
    // Define the wine data
    const wineData = [
      {
        "Alcohol": 1,
        "Malic Acid": 13.63,
        "Ash": 1.81,
        "Alcalinity of ash": 2.7,
        "Magnesium": 17.2,
        "Total phenols": 112,
        "Flavanoids": 2.85,
        "Nonflavanoid phenols": 2.91,
        "Proanthocyanins": ".3",
        "Color intensity": 1.46,
        "Hue": 7.3,
        "OD280/OD315 of diluted wines": 1.28,
        "Unknown": 2.88
      },{
        "Alcohol": 1,
        "Malic Acid": 13.63,
        "Ash": 1.81,
        "Alcalinity of ash": 2.7,
        "Magnesium": 17.2,
        "Total phenols": 112,
        "Flavanoids": 2.85,
        "Nonflavanoid phenols": 2.91,
        "Proanthocyanins": ".3",
        "Color intensity": 1.46,
        "Hue": 7.3,
        "OD280/OD315 of diluted wines": 1.28,
        "Unknown": 2.88
      },{
        "Alcohol": 3,
        "Malic Acid": 13.63,
        "Ash": 1.81,
        "Alcalinity of ash": 2.7,
        "Magnesium": 17.2,
        "Total phenols": 112,
        "Flavanoids": 2.85,
        "Nonflavanoid phenols": 2.91,
        "Proanthocyanins": ".3",
        "Color intensity": 1.46,
        "Hue": 7.3,
        "OD280/OD315 of diluted wines": 1.28,
        "Unknown": 2.88
      },{
        "Alcohol": 3,
        "Malic Acid": 13.63,
        "Ash": 1.81,
        "Alcalinity of ash": 2.7,
        "Magnesium": 17.2,
        "Total phenols": 112,
        "Flavanoids": 2.85,
        "Nonflavanoid phenols": 2.91,
        "Proanthocyanins": ".3",
        "Color intensity": 1.46,
        "Hue": 7.3,
        "OD280/OD315 of diluted wines": 1.28,
        "Unknown": 2.88
      },{
        "Alcohol":2,
        "Malic Acid": 13.63,
        "Ash": 1.81,
        "Alcalinity of ash": 2.7,
        "Magnesium": 17.2,
        "Total phenols": 112,
        "Flavanoids": 2.85,
        "Nonflavanoid phenols": 2.91,
        "Proanthocyanins": ".3",
        "Color intensity": 1.46,
        "Hue": 7.3,
        "OD280/OD315 of diluted wines": 1.28,
        "Unknown": 2.88
      }
      // Add the other wine data objects here
    ];
  
    // Calculate the average of "Magnesium" values
    const magnesiumSum = wineData.reduce((sum, data) => sum + data.Magnesium, 0);
    const magnesiumAverage = magnesiumSum / wineData.length;
  
    // Extract the "Alcohol" values
    const alcoholValues = wineData.map(data => data.Alcohol);
  
    // Define the chart data
    const chartData = {
      labels: ['Average Magnesium'],
      datasets: [
        {
          label: 'Alcohol',
          data: [magnesiumAverage],
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
        },
      ],
    };
  
    return <Bar data={chartData} />;
  };
  
  export default WineBarChart; 
  import React from 'react';
import { Bar } from 'react-chartjs-2';
//import ReactECharts from 'echarts-for-react';


const data = {
  labels: ['Alcohol 1', 'Alcohol 2', 'Alcohol 3'],
  datasets: [
    {
      label: 'Average Magnesium',
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(75,192,192,0.6)',
      hoverBorderColor: 'rgba(75,192,192,1)',
      data: [
        (17.2 + 17.2) / 2, // Average for Alcohol 1
        17.2, // Value for Alcohol 2
        (17.2 + 17.2) / 2, // Average for Alcohol 3
      ],
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const BarChart = () => (
  <div>
    <h2>Bar Chart</h2>
    <Bar data={data} options={options} />
  </div>
);

export default BarChart;

  
import React from 'react';
import { Bar } from 'react-chartjs-2';
import data from './Wine-Data.json';

const WineBarChart = () => {
  const wineData =data.wineData;
  
  
    // Calculate the average "Magnesium" value for each "Alcohol" category
    const sumMagnesiumValues = {};
    const countMagnesiumValues = {};
    wineData.forEach(data => {
      const alcohol = data.Alcohol;
      const magnesium = data.Magnesium;
      if (sumMagnesiumValues[alcohol]) {
        sumMagnesiumValues[alcohol] += magnesium;
        countMagnesiumValues[alcohol]++;
      } else {
        sumMagnesiumValues[alcohol] = magnesium;
        countMagnesiumValues[alcohol] = 1;
      }
    });
  
    const averageMagnesiumValues = {};
    Object.keys(sumMagnesiumValues).forEach(alcohol => {
      averageMagnesiumValues[alcohol] = sumMagnesiumValues[alcohol] / countMagnesiumValues[alcohol];
    });
  
    // Extract the unique "Alcohol" values
    const alcoholValues = Object.keys(averageMagnesiumValues).map(Number);
  
    // Extract the average "Magnesium" values
    const averageMagnesium = alcoholValues.map(alcohol => averageMagnesiumValues[alcohol]);
  
    // Define the chart data
    const chartData = {
      labels: alcoholValues.map(alcohol => `Alcohol ${alcohol}`),
      datasets: [
        {
          label: 'Average Magnesium',
          data: averageMagnesium,
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
        },
      ],
      xAxis: {
        type: 'category',
        name: 'Alcohol',
        data: alcoholValues
      },
      yAxis: {
        type: 'value',
        name: 'Magnesium'
      },
      series: [{
        type: 'bar',
        data: averageMagnesium
      }]
    };
   
    return (
      <div>
        <h2>Wine Data Bar Chart</h2>
        <h1>Line Chart</h1>
      <div className="chart-container">
        <ReactECharts option={chartData} style={{ height: '400px' }} />
        </div>
       {/* <Bar
          data={chartData}
          options={{
            scales: {
              x: {
                title: {
                  display: true,
                  text: 'Alcohol',
                },
              },
              y: {
                title: {
                  display: true,
                  text: 'Average Magnesium',
                },
              },
            },
          }}
        /> 
      </div>
    );
  };
  
  export default WineBarChart; */
  import React, { useEffect, useRef } from 'react';
import echarts from 'echarts';
import data from './Wine-Data.json';

const WineBarChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const wineData =data.wineData;

    // Calculate the average "Magnesium" value for each "Alcohol" category
    const avgMagnesiumValues = {};
    const countMagnesiumValues = {};
    wineData.forEach(data => {
      const alcohol = data.Alcohol;
      const magnesium = data.Magnesium;
      if (!avgMagnesiumValues[alcohol]) {
        avgMagnesiumValues[alcohol] = 0;
        countMagnesiumValues[alcohol] = 0;
      }
      avgMagnesiumValues[alcohol] += magnesium;
      countMagnesiumValues[alcohol]++;
    });

    Object.keys(avgMagnesiumValues).forEach(alcohol => {
      avgMagnesiumValues[alcohol] /= countMagnesiumValues[alcohol];
    });

    // Extract the unique "Alcohol" values
    const alcoholValues = Object.keys(avgMagnesiumValues).map(Number);

    // Extract the average "Magnesium" values
    const avgMagnesium = alcoholValues.map(alcohol => avgMagnesiumValues[alcohol]);

    // Initialize the chart
    const chart = echarts.init(chartRef.current);

    // Configure the chart options
    const options = {
      xAxis: {
        type: 'category',
        data: alcoholValues.map(alcohol => `Alcohol ${alcohol}`),
        name: 'Alcohol',
      },
      yAxis: {
        type: 'value',
        name: 'Average Magnesium',
      },
      series: [
        {
          type: 'bar',
          data: avgMagnesium,
          label: {
            show: true,
            position: 'top',
          },
        },
      ],
    };

    // Set the chart options and render the chart
    chart.setOption(options);

    // Clean up the chart on component unmount
    return () => {
      chart.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: '100%', height: '400px' }} />;
};

export default WineBarChart;

  