import { Col, Row } from 'reactstrap';
import DataCard from './DataCard';
import { selectAllData } from './dataSlice';

const DataList = ({ setDataId }) => {
  const data = selectAllData();

  return (
    <Row className='ms-auto'>
      {data.map((data) => {
        return (
          <Col
            md='5'
            className='m-4'
            key={data.id}
            onClick={() => setDataId(data.id)}
          >
            <DataCard data={data} />
          </Col>
        );
      })}
    </Row>
  );
};
export default DataList;

// import { Col } from 'reactstrap';
// import Data from './Data';
// import { selectDataByDataId } from './dataSlice';
// import DataForm from './DataForm';

// const DataList = ({ dataId }) => {
//   const data = selectDataBydataId(dataId);

//   if (data && data.length > 0) {
//     return (
//       <Col md='5' className='m-1'>
//         <h4>Comments</h4>
//         {comments.map((comment) => {
//           return <Data key={data.id} comment={data} />;
//         })}
//         <DataForm dataId={dataId} />
//       </Col>
//     );
//   }
//   return (
//     <Col md='5' className='m-1'>
//       There is no data yet.
//     </Col>
//   );
// };

// export default DataList;
