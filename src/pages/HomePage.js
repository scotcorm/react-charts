import ChartCard from '../features/datainfo/ChartCard.js';
import { Container, Row } from 'reactstrap';
import { Routes, Route } from 'react-router-dom';

const HomePage = () => {
  return (
    <Container>
      <Row>
        <ChartCard />
      </Row>
    </Container>
  );
};

export default HomePage;
