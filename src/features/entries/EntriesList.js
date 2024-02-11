import { useSelector } from 'react-redux';
import { Col } from 'reactstrap';
import Entry from './Entry';

import EntryForm from './EntryForm';
import { selectEntryById } from './entriesSlice';

const EntriesList = ({ entryId }) => {
  const entries = useSelector(selectEntryById(entryId));

  if (entries && entries.length > 0) {
    return (
      <Col md='5' className='m-1'>
        <h4>Entries</h4>
        {entries.map((entry) => {
          return <Entry key={entry.id} entry={entry} />;
        })}
        <EntryForm metricId={entryId} />
      </Col>
    );
  }
  return (
    <Col md='5' className='m-1'>
      There are no entrys for this metric yet.
    </Col>
  );
};
export default EntriesList;

// import { Col } from 'reactstrap';
// import Entry from './Entry';
// import { selectEntriesByMetricId } from './entriesSlice';
// import EntryForm from './EntryForm';

// const EntriesList = ({ metricId }) => {
//   const entries = selectEntriesByMetricId(metricId);

//   if (entries && entries.length > 0) {
//     return (
//       <Col md='5' className='m-1'>
//         <h4>Entries</h4>
//         {entries.map((entry) => {
//           return <Entry key={entry.id} entry={entry} />;
//         })}
//         <EntryForm metricId={metricId} />
//       </Col>
//     );
//   }
//   return (
//     <Col md='5' className='m-1'>
//       There are no entries yet.
//     </Col>
//   );
// };

// export default EntriesList;
