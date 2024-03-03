import { React, useState, Fragment } from 'react';

import { nanoid } from 'nanoid';
//import './App.css';
// import data from '../month-data.json';

import ReadOnlyRow from '../components/ReadOnlyRow';

import EditableRow from '../components/EditableRow';

import data from '../data/mainData.json';

// import { useSelector } from 'react-redux';
// import { Container, Row } from 'reactstrap';
// import { useParams } from 'react-router-dom';
// import { selectEntryById } from '../features/entries/entriesSlice';
// import EntryDetail from '../features/entries/EntryDetail';
// import EntriesList from '../features/entries/EntriesList';
// // import SubHeader from '../components/SubHeader';
// import JsonDataDisplay from '../components/JsonDataDisplay';

function EntryDetailPage() {
  const [metrics, setMetrics] = useState(data);
  const [addFormData, setAddFormData] = useState({
    year: '',
    label: '',
    completed: '',
    cohort: '',
    overlaps: '',
  });

  const [editFormData, setEditFormData] = useState({
    year: '',
    label: '',
    completed: '',
    cohort: '',
    overlaps: '',
  });

  const [editMetricId, setEditMetricId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newMetric = {
      id: nanoid(),
      year: addFormData.year,
      label: addFormData.label,
      completed: addFormData.completed,
      cohort: addFormData.cohort,
      overlaps: addFormData.overlaps,
    };

    const newMetrics = [...metrics, newMetric];
    setMetrics(newMetrics);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedMetric = {
      id: editMetricId,
      year: editFormData.year,
      label: editFormData.label,
      completed: editFormData.completed,
      cohort: editFormData.cohort,
      overlaps: editFormData.overlaps,
    };

    const newMetrics = [...metrics];

    const index = metrics.findIndex((metric) => metric.id === editMetricId);

    newMetrics[index] = editedMetric;

    setMetrics(newMetrics);
    setEditMetricId(null);
  };

  const handleEditClick = (event, metric) => {
    event.preventDefault();
    setEditMetricId(metric.id);

    const formValues = {
      year: metric.year,
      label: metric.label,
      completed: metric.completed,
      cohort: metric.cohort,
      overlaps: metric.overlaps,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditMetricId(null);
  };

  const handleDeleteClick = (metricId) => {
    const newMetrics = [...metrics];

    const index = metrics.findIndex((metric) => metric.id === metricId);

    newMetrics.splice(index, 1);

    setMetrics(newMetrics);
  };

  <div className='chart-container'>
    <canvas id='myChart'></canvas>
    <button onclick='updateChartData()'>Update chart</button>
  </div>;

  return (
    // <div className='app-container'>
    <div className='chart-container'>
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Year</th>
              <th>Label</th>
              <th>Completed</th>
              <th>Cohort</th>
              <th>Overlaps</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {metrics.map((metric) => (
              <Fragment key={metric.id}>
                {editMetricId === metric.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    metric={metric}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>
      <div className='chart-container-two'>
        <h2>Add a row</h2>
        <form onSubmit={handleAddFormSubmit}>
          <input
            type='text'
            name='year'
            required='required'
            placeholder='Year'
            onChange={handleAddFormChange}
          />
          <input
            type='text'
            name='label'
            required='required'
            placeholder='Label (Month)'
            onChange={handleAddFormChange}
          />
          <input
            type='text'
            name='completed'
            required='required'
            placeholder='Average Completed'
            onChange={handleAddFormChange}
          />
          <input
            type='text'
            name='cohort'
            required='required'
            placeholder='Average Cohort'
            onChange={handleAddFormChange}
          />
          <input
            type='text'
            name='overlaps'
            required='required'
            placeholder='Average Overlaps'
            onChange={handleAddFormChange}
          />
          <button type='submit'>Add</button>
        </form>
      </div>
    </div>
  );
}

//original code

// import { useSelector } from 'react-redux';
// import { Container, Row } from 'reactstrap';
// import { useParams } from 'react-router-dom';
// import { selectEntryById } from '../features/entries/entriesSlice';
// import EntryDetail from '../features/entries/EntryDetail';
// import EntriesList from '../features/entries/EntriesList';
// // import SubHeader from '../components/SubHeader';
// import JsonDataDisplay from '../components/JsonDataDisplay';

// const EntryDetailPage = () => {
//   const { entryId } = useParams();
//   const entry = useSelector(selectEntryById(entryId));
//   console.log('entry:', entry);

//   return (
//     <Container>
//       {/* <SubHeader current={metric.name} detail={true} /> */}
//       <Row>
//         {/* <EntryDetail entry={entry} />
//         <EntriesList entryId={entryId} /> */}
//         <JsonDataDisplay />
//       </Row>
//     </Container>
//   );
// };

export default EntryDetailPage;
