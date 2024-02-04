import { useSelector } from 'react-redux';
import { Col } from 'reactstrap';
import Data from './Data';
import DataForm from './DataForm';
import { selectDataById } from './dataSlice';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

const DataList = ({ dataId }) => {
  // const comments = selectCommentsByCampsiteId(campsiteId);
  const data = useSelector(selectDataById(dataId));
  const isLoading = useSelector((state) => state.data.isLoading);
  const errMsg = useSelector((state) => state.data.errMsg);

  if (isLoading) {
    return <Loading />;
  }

  if (errMsg) {
    return <Error errMsg={errMsg} />;
  }

  if (data && data.length > 0) {
    return (
      <Col md='5' className='m-1'>
        <h4>Data</h4>
        {data.map((data) => {
          return <Comment key={data.id} data={data} />;
        })}
        <CommentForm dataId={dataId} />
      </Col>
    );
  }
  return (
    <Col md='5' className='m-1'>
      There is no data yet.
    </Col>
  );
};

export default DataList;

// import { Col } from 'reactstrap';
// import Data from './Data';
// import { selectDataById } from './dataSlice';

// const DataList = ({ dataId }) => {
//   const data = selectDataById(dataId);

//   if (data && data.length >= 0) {
//     return (
//       <Col md='5' className='m-1'>
//         <h4>Comments</h4>
//         {comments.map((data) => {
//           return <Comment key={data.id} data={data} />;
//         })}
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
