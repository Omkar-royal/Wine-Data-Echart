import React from 'react';
import ReactECharts from 'echarts-for-react';
import data from './Wine-Data.json';
const WineBarChart = () => {
  const wineData =data.wineData;

  // Calculate the average "Magnesium" value for each unique "Alcohol" category
  const averageMagnesiumValues ={} ;
  wineData.forEach(data => {
    const alcohol = data.Alcohol;
    const magnesium = data.Magnesium;
    if (!averageMagnesiumValues[alcohol]) {
      averageMagnesiumValues[alcohol] = {
        total: magnesium,
        count: 1,
      };
    } else {
      averageMagnesiumValues[alcohol].total += magnesium;
      averageMagnesiumValues[alcohol].count++;
    }
  });

  // Calculate the average "Magnesium" values
  const averages = Object.keys(averageMagnesiumValues).map(alcohol => ({
    alcohol,
    average: averageMagnesiumValues[alcohol].total / averageMagnesiumValues[alcohol].count,
  }));

  // Sort the averages by the "Alcohol" value
  averages.sort((a, b) => a.alcohol - b.alcohol);

  // Extract the "Alcohol" values and the average "Magnesium" values
  const alcoholValues = averages.map(entry => entry.alcohol);
  const averageMagnesium = averages.map(entry => entry.average);
  const lineChartOptions = {
    xAxis: {
      type: 'value',
      name: 'Flavanoids'
    },
    yAxis: {
      type: 'value',
      name: 'Ash'
    },
    series: [{
      type: 'line',
      data: wineData.map(d => [d.Flavanoids, d.Ash])
    }]
  };
  return (
    <div>
      <h2>Wine Data Bar Chart</h2>
      <ReactECharts
        option={{
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
              data: averageMagnesium,
              label: {
                show: true,
                position: 'top',
              },
            },
          ],
        }}
        style={{ height: '400px' }}
      />
      <h1>Line Chart</h1>
      <div className="chart-container">
        <ReactECharts option={lineChartOptions} style={{ height: '400px' }} />
      </div>
    </div>
  );
      }
      export default WineBarChart;