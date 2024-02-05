import { DATASITES } from '../../app/shared/DATASITES';
import { Col, Row } from 'reactstrap';
import DatasiteCard from './DatasiteCard';
import { selectAllData } from './datasitesSlice';
// import Error from '../../components/Error';
// import Loading from '../../components/Loading';

const DataSitesList = () => {
  const datasites = useSelector(selectAllData);
  console.log('datasites:', datasites);

  // const isLoading = useSelector((state) => state.datasites.isLoading);
  // const errMsg = useSelector((state) => state.datasites.errMsg);

  // if (isLoading) {
  //   return (
  //     <Row>
  //       <Loading />
  //     </Row>
  //   );
  // }

  // if (errMsg) {
  //   return (
  //     <Row>
  //       <Error errMsg={errMsg} />
  //     </Row>
  //   );
  // }

  return (
    <Row className='ms-auto'>
      {DATASITES.map((datasite) => {
        return (
          <Col md='5' className='m-4' key={datasite.id}>
            <DatasiteCard datasite={datasite} />
          </Col>
        );
      })}
    </Row>
  );
};

export default DataSitesList;
