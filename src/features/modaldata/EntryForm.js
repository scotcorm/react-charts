import { useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Label,
} from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { validateEntryForm } from '../../utils/validateEntryForm';
//import JsonData from '../data/mainData.json';

const EntryForm = ({ dataId }) => {
  const [modalOpen, setModalOpen] = useState(0);
  const handleSubmit = (values) => {
    const data = {
      dataId: parseInt(dataId),
      year: values.year,
      label: values.month,
      completed: values.completed,
      cohort: values.cohort,
      overlaps: values.overlaps,
      text: values.dataId,
    };
    console.log(data);
    setModalOpen(false);
  };
  return (
    <>
      <Button outline onClick={() => setModalOpen(true)}>
        <i className='fa fa-pencil fa-lg' /> Add Data
      </Button>

      <Modal isOpen={modalOpen}>
        <ModalHeader toggle={() => setModalOpen(false)}>Add Data</ModalHeader>
        <ModalBody>data: {dataId}</ModalBody>
        <ModalBody>
          <Formik
            initialValues={{
              year: '',
              label: '',
              completed: '',
              cohort: '',
              overlaps: '',
            }}
            onSubmit={handleSubmit}
            validate={validateEntryForm}
          >
            <Form>
              <FormGroup>
                <Label htmlFor='year'>Year</Label>
                <Field
                  name='year'
                  placeholder='Four Digit Year'
                  className='form-control'
                  id='year'
                />
                <ErrorMessage name='year'>
                  {(msg) => <p className='text-danger'>{msg}</p>}
                </ErrorMessage>
              </FormGroup>
              <FormGroup>
                <Label htmlFor='label'>Month</Label>
                <Field
                  name='month'
                  placeholder='Full Text Version of Month'
                  className='form-control'
                  id='label'
                />
                <ErrorMessage name='month'>
                  {(msg) => <p className='text-danger'>{msg}</p>}
                </ErrorMessage>
              </FormGroup>
              <FormGroup>
                <Label htmlFor='completed'>Completed</Label>
                <Field
                  name='completed'
                  placeholder='Number of Files Completed'
                  className='form-control'
                  id='completed'
                />
                <ErrorMessage name='completed'>
                  {(msg) => <p className='text-danger'>{msg}</p>}
                </ErrorMessage>
              </FormGroup>
              <FormGroup>
                <Label htmlFor='cohort'>Cohort</Label>
                <Field
                  name='cohort'
                  placeholder='Number in Cohort'
                  className='form-control'
                  id='cohort'
                />
                <ErrorMessage name='cohort'>
                  {(msg) => <p className='text-danger'>{msg}</p>}
                </ErrorMessage>
              </FormGroup>
              <FormGroup>
                <Label htmlFor='overlaps'>Overlaps Completed</Label>
                <Field
                  name='overlaps'
                  placeholder='Number of Overlaps Completed'
                  className='form-control'
                  id='overlaps'
                />
                <ErrorMessage name='overlaps'>
                  {(msg) => <p className='text-danger'>{msg}</p>}
                </ErrorMessage>
              </FormGroup>
              <Button type='submit' color='primary'>
                Submit
              </Button>
            </Form>
          </Formik>
        </ModalBody>
      </Modal>
    </>
  );
};

export default EntryForm;
