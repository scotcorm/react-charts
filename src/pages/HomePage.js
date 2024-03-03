import ChartCard from '../features/datainfo/ChartCard.js';
import { Container, Row } from 'reactstrap';
// import { Routes, Route } from 'react-router-dom';
import MetricsDetails from './MetricsDetails.js';

const HomePage = () => {
  return (
    <Container>
      <Row>
        <ChartCard />
        <MetricsDetails />
      </Row>
    </Container>
  );
};

export default HomePage;
