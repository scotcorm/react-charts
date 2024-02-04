import React from 'react';
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
import mainData from '../../data/mainData.json';
//import mainData from '../data/mainData.json';
import JsonDataDisplay from '../../components/JsonDataDisplay';

import qaData from '../../data/qaData.json';

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = 'start';
defaults.plugins.title.font.size = 20;
defaults.plugins.title.color = 'black';

const ChartCard = () => {
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
            <div className='dataCard firstCard'>
              <Line
                data={{
                  labels: mainData.map((data) => data.label),
                  datasets: [
                    {
                      label: 'Average Cohort',
                      data: mainData.map((data) => data.cohort),
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
            </div>
            <div className='dataCard firstCard'>
              <Line
                data={{
                  labels: mainData.map((data) => data.label),
                  datasets: [
                    {
                      label: 'Average Completed',
                      data: mainData.map((data) => data.completed),
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
                  labels: mainData.map((data) => data.label),
                  datasets: [
                    {
                      label: 'Overlaps Completed',
                      data: mainData.map((data) => data.overlaps),
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
