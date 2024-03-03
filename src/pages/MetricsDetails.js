import { React, useState, Fragment, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';

// import data from '../month-data.json';
import ReadOnlyRow from '../components/ReadOnlyRow';
import EditableRow from '../components/EditableRow';
import data from '../data/mainData.json';
import '../../src/App.css';

import { Bar, Doughnut, Line, Chart } from 'react-chartjs-2';
// import { useSelector } from 'react-redux';
// import { Container, Row } from 'reactstrap';
// import { useParams } from 'react-router-dom';
// import { selectEntryById } from '../features/entries/entriesSlice';
// import EntryDetail from '../features/entries/EntryDetail';
// import EntriesList from '../features/entries/EntriesList';
// // import SubHeader from '../components/SubHeader';
// import JsonDataDisplay from '../components/JsonDataDisplay';

import styles from '../utils/mystyle.module.css';

// const dataCard = {
//   background-color: #efefef,
//   border-radius: 0.5em;
//   box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px,
//   padding: 1em;
// };

// const revenueCard = {
//   width: 92 %,
//   height: 20rem,
// };

// const customerCard = {
//   width: 50 %;
//   height: 20rem;
// };

// const categoryCard = {
//   width: 40 %;
//   height: 20rem;
// };

// const chartContainer = {
//   position: 'relative',
//   margin: 'auto',
//   height: '80vh',
//   width: '80vw',
// };

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
  // ***********************************************************************************************************
  function update(props) {
    console.log(metrics[metrics.length - 1].year);
    // const myChart1 = new Chart(document.getElementById('myChart1'), config);
    // console.log('test');
    //const line1 = document.getElementById('line1');
    // const line2 = document.getElementById('line2');
    // const line3 = document.getElementById('line3');

    //console.log(EntryDetailPage.newMetrics.cohort[1]);
    // myChart1.data.datasets[1].data.push(line2.value);
    // myChart1.data.datasets[2].data.push(line3.value);
  }

  // *********************************************************************************************************

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

  // function update() {
  //   // const myChart1 = new Chart(document.getElementById('myChart1'), config);
  //   // console.log('test');
  //   //const line1 = document.getElementById('line1');
  //   // const line2 = document.getElementById('line2');
  //   // const line3 = document.getElementById('line3');

  //   //console.log(EntryDetailPage.newMetrics.cohort[1]);
  //   // myChart1.data.datasets[1].data.push(line2.value);
  //   // myChart1.data.datasets[2].data.push(line3.value);
  // }

  // const chartRef = useRef(null);

  // useEffect(() => {
  //   const chart = chartRef.current;

  //   if (chart) {
  //     console.log('CanvasRenderingContext2D', chart.ctx);
  //     console.log('HTMLCanvasElement', chart.canvas);
  //   }
  // }, []);

  return (
    // <div className='app-container'>

    <div className='chart-container'>
      <div className='App'>
        {/* <Chart ref={chartRef} type='line' data={data} />
        input id="bar1" */}
        <div id='myChart12' className='firstCard'>
          {/* <div>
            <canvas id='myChart'></canvas>
          </div> */}

          <Bar
            data={{
              labels: [
                metrics[metrics.length - 12].label,
                metrics[metrics.length - 11].label,
                metrics[metrics.length - 10].label,
                metrics[metrics.length - 9].label,
                metrics[metrics.length - 8].label,
                metrics[metrics.length - 7].label,
                metrics[metrics.length - 6].label,
                metrics[metrics.length - 5].label,
                metrics[metrics.length - 4].label,
                metrics[metrics.length - 3].label,
                metrics[metrics.length - 2].label,
                metrics[metrics.length - 1].label,
              ],
              datasets: [
                {
                  label: 'Average Completed per Month',
                  data: [
                    metrics[metrics.length - 12].completed,
                    metrics[metrics.length - 11].completed,
                    metrics[metrics.length - 10].completed,
                    metrics[metrics.length - 9].completed,
                    metrics[metrics.length - 8].completed,
                    metrics[metrics.length - 7].completed,
                    metrics[metrics.length - 6].completed,
                    metrics[metrics.length - 5].completed,
                    metrics[metrics.length - 4].completed,
                    metrics[metrics.length - 3].completed,
                    metrics[metrics.length - 2].completed,
                    metrics[metrics.length - 1].completed,
                  ],
                },
              ],
            }}
            width={100}
            height={50}
            options={{
              maintainAspectRatio: true,
              plugins: {
                legend: {
                  position: 'top',
                },
                title: {
                  display: true,
                  text: 'Editable Bar Chart',
                },
              },
            }}
          ></Bar>
        </div>
      </div>
      <div className='chart-container-three'>
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
