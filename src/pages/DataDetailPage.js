import { useSelector } from 'react-redux';
import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectMetricById } from '../features/metrics/metricsSlice';
import MetricDetail from '../features/metrics/MetricDetail';
import EntriesList from '../features/entries/EntriesList';
import SubHeader from '../components/SubHeader';

const MetricDetailPage = () => {
  const { metricId } = useParams();
  const metric = useSelector(selectMetricById(metricId));
  console.log('metric:', metric);

  return (
    <Container>
      <SubHeader current={metric.name} detail={true} />
      <Row>
        <MetricDetail metric={metric} />
        <EntriesList metricId={metricId} />
      </Row>
    </Container>
  );
};

export default MetricDetailPage;
