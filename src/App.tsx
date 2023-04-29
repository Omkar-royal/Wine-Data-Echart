import React, { useEffect } from 'react';
import ReactECharts from 'echarts-for-react';
import data from './Wine-Data.json';
const wineData = data.wineData;

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

const barChartOptions = {
  xAxis: {
    type: 'category',
    name: 'Alcohol',
    data: wineData.map(d => d.Alcohol)
  },
  yAxis: {
    type: 'value',
    name: 'Magnesium'
  },
  series: [{
    type: 'bar',
    data: wineData.map(d => d.Magnesium)
  }]
};

function App() {
  useEffect(() => {
    document.title = 'ECharts Demo';
  }, []);

  return (
    <div>
      <h1>Line Chart</h1>
      <div className="chart-container">
        <ReactECharts option={lineChartOptions} style={{ height: '400px' }} />
      </div>

      <h1>Bar Chart</h1>
      <div className="chart-container">
        <ReactECharts option={barChartOptions} style={{ height: '400px' }} />
      </div>
      
  
    </div>
  );
}

export default App;
