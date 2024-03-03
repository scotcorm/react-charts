import { React, useState, Fragment } from 'react';
import { Chart as ChartJS, defaults } from 'chart.js/auto';
import { Bar, Doughnut, Line } from 'react-chartjs-2';
import { Col, Row, Container, Card, CardBody, CardHeader } from 'reactstrap';
//import { Container, Navbar, NavbarBrand } from 'reactstrap';
// import Logo from './app/assets/img/logo.jpg';
//import SubHeader from '../components/SubHeader';
import '../../App.css';
//import './App.css';
//import Footer from '../components/Footer';
//import Header from '../components/Header';
//import mainData from '../../data/mainData.json';
//import mainData from '../data/mainData.json';
//import JsonDataDisplay from '../../components/JsonDataDisplay';
import data from '../../data/mainData.json';
import qaData from '../../data/qaData.json';
import { setMetrics } from '../../pages/MetricsDetails';
import MetricsDetails from '../../pages/MetricsDetails';
import EntryDetailPage from '../../pages/MetricsDetails';

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = 'start';
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = 'black';

const ChartCard = () => {
  const [metrics, setMetrics] = useState(data);

  // function update() {
  //   // const myChart1 = new Chart(document.getElementById('myChart1'), config);
  //   // console.log('test');
  //   //const line1 = document.getElementById('line1');
  //   // const line2 = document.getElementById('line2');
  //   // const line3 = document.getElementById('line3');

  //   //console.log(EntryDetailPage.newMetrics.cohort[1]);
  //   // myChart1.data.datasets[1].data.push(line2.value);
  //   // myChart1.data.datasets[2].data.push(line3.value);
  // }

  return (
    <Container>
      <Row className='row-content'>
        <h1
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          Monthly Data
        </h1>

        <div className='App'>
          <div className='data'>
            <div id='myChart14'>
              <Line
                data={{
                  labels: metrics.map((metric) => metric.label),
                  datasets: [
                    {
                      label: 'Average Cohort',

                      data: metrics.map((metric) => metric.cohort),
                      backgroundColor: '#FF3030',
                      borderColor: '#FF3030',
                    },
                  ],
                }}
                options={{
                  elements: {
                    line: {
                      tension: 0.5,
                    },
                  },
                  plugins: {
                    title: {
                      text: 'Average Cohort',
                    },
                  },
                }}
              />
              {/* adding the button */}
              {/* <div className='chartCard'>
                 <canvas id='myChart1'></canvas>  
                <input id='line1' type='number' />
                <input id='line2' type='number' />
                <input id='line3' type='number' />
                <button id='line1' onClick={update}>
                  Update
                </button>
              </div> */}
            </div>
            <div className='dataCard secondCard'>
              <Bar
                data={{
                  labels: metrics.map((metric) => metric.label),
                  datasets: [
                    {
                      label: 'Average Completed',
                      data: metrics.map((metric) => metric.completed),
                      backgroundColor: '#064FF0',
                      borderColor: '#064FF0',
                    },
                  ],
                }}
                options={{
                  elements: {
                    line: {
                      tension: 0.5,
                    },
                  },
                  plugins: {
                    title: {
                      text: 'Average Completed',
                    },
                  },
                }}
              />
            </div>
            <div className='dataCard secondCard'>
              <Bar
                data={{
                  labels: metrics.map((metric) => metric.label),
                  datasets: [
                    {
                      label: 'Overlaps Completed',
                      data: metrics.map((metric) => metric.overlaps),
                      backgroundColor: [
                        'rgba(43, 63, 229, 0.8)',
                        'rgba(250, 192, 19, 0.8)',
                        'rgba(253, 135, 135, 0.8)',
                      ],
                      borderRadius: 5,
                    },
                  ],
                }}
                options={{
                  plugins: {
                    title: {
                      text: 'Overlaps',
                    },
                  },
                }}
              />
            </div>
            <div className='dataCard thirdCard'>
              <Doughnut
                data={{
                  labels: qaData.map((data) => data.label),
                  datasets: [
                    {
                      label: 'Count',
                      data: qaData.map((data) => data.value),
                      backgroundColor: [
                        'rgba(43, 63, 229, 0.8)',
                        'rgba(250, 192, 19, 0.8)',
                        'rgba(253, 135, 135, 0.8)',
                      ],
                      borderColor: [
                        'rgba(43, 63, 229, 0.8)',
                        'rgba(250, 192, 19, 0.8)',
                        'rgba(253, 135, 135, 0.8)',
                      ],
                    },
                  ],
                }}
                options={{
                  plugins: {
                    title: {
                      text: 'QA',
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default ChartCard;
