import { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import DataDetail from '../features/data/DataDetail';
import DataList from '../features/data/DataList';
import { selectDataById } from '../features/data/dataSlice';

const DataDirectoryPage = () => {
  const [dataId, setDataId] = useState(0);
  const selectedData = selectDataById(dataId);

  return (
    <Container>
      <Row>
        <Col sm='5' md='7'>
          <DataList setDataId={setDataId} />
        </Col>
        <Col sm='7' md='5'>
          <DataDetail data={selectedData} />
        </Col>
      </Row>
    </Container>
  );
};
export default DataDirectoryPage;
