import JsonData from '../data/mainData.json';
//import JsonData from '../data/qaData.json';
import EntryForm from '../features/modaldata/EntryForm';

function JsonDataDisplay() {
  const DisplayData = JsonData.map((info) => {
    return (
      <tr>
        <td>{info.label}</td>
        <td>{info.completed}</td>
        <td>{info.cohort}</td>
        <td>{info.overlaps}</td>
      </tr>
    );
  });

  return (
    <div>
      <h1
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 45,
        }}
      >
        <div>Detailed Monthly Data</div>
        <div style={{ padding: 20 }}>
          <EntryForm dataId={0} />
        </div>
      </h1>
      <table className='table table-striped'>
        <thead>
          <tr>
            <th>Month</th>
            <th>Average Completed</th>
            <th>Average Number in Cohort</th>
            <th>Overlaps Completed</th>
          </tr>
        </thead>
        <tbody>{DisplayData}</tbody>
      </table>
    </div>
  );
}

export default JsonDataDisplay;
