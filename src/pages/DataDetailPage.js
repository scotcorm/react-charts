import { useSelector } from 'react-redux';
import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectDatasiteById } from '../features/datasites/datasitesSlice';
//import DatasiteDetail from '../features/datasites/DatasiteDetail';
//import mainData from '../data/mainData.json';
import JsonDataDisplay from '../components/JsonDataDisplay';
//import DataForm from '../features/modaldata/DataForm';

const DataDetailPage = () => {
  //const { datasiteId } = useParams();
  //const datasite = selectDatasiteById(datasite.id);
  //const datasite = useSelector(selectDatasiteById(datasiteId));
  //console.log('datasite:', datasite);

  return (
    <Container>
      <Row>
        <JsonDataDisplay />
      </Row>
    </Container>
  );
};

export default DataDetailPage;
