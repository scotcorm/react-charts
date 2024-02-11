import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import MetricCard from './MetricCard';
import { selectAllMetrics } from './metricsSlice';

const MetricsList = () => {
  const metrics = useSelector(selectAllMetrics);
  console.log('metrics:', metrics);
  return (
    <Row className='ms-auto'>
      {metrics.map((metric) => {
        return (
          <Col md='5' className='m-4' key={metric.id}>
            <MetricCard metric={metric} />
          </Col>
        );
      })}
    </Row>
  );
};

export default MetricsList;
