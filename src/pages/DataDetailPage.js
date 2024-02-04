import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
//import { selectDataById } from '../features/campsites/campsitesSlice';
//import DataDetail from '../features/campsites/CampsiteDetail';
import mainData from '../data/mainData.json';
import JsonDataDisplay from '../components/JsonDataDisplay';
import DataForm from '../features/modaldata/DataForm';

const DataDetailPage = () => {
  //const { dataId } = useParams();
  //const campsite = selectCampsiteById(campsiteId);

  return (
    <Container>
      <Row>
        <DataForm />
        <JsonDataDisplay />
      </Row>
    </Container>
  );
};

export default DataDetailPage;
