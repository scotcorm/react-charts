// import { useState } from 'react';
// import {
//   Button,
//   Modal,
//   ModalHeader,
//   ModalBody,
//   FormGroup,
//   Label,
// } from 'reactstrap';
// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import { validateDataForm } from '../../utils/validateDataForm';

// const EntryForm = ({ dataId }) => {
//   const [modalOpen, setModalOpen] = useState(0);
//   const handleSubmit = (values) => {
//     const comment = {
//       dataId: parseInt(dataId),
//       year: values.year,
//       // label: values.label,
//       // completed: values.completed,
//       // cohort: values.cohort,
//       // overlaps: values.overlaps,
//     };
//     console.log(comment);
//     setModalOpen(false);
//   };
//   return (
//     <>
//       <Button outline onClick={() => setModalOpen(true)}>
//         <i className='fa fa-pencil fa-lg' /> Add Data
//       </Button>

//       <Modal isOpen={modalOpen}>
//         <ModalHeader toggle={() => setModalOpen(false)}>Add Data</ModalHeader>
//         <ModalBody>
//           <Formik
//             initialValues={{ rating: undefined, author: '', dataText: '' }}
//             onSubmit={handleSubmit}
//             validate={validateDataForm}
//           >
//             <Form>
//               <FormGroup>
//                 <Label htmlFor='year'>Year</Label>
//                 <Field
//                   name='year'
//                   placeholder='Year'
//                   className='form-control'
//                 />
//                 <ErrorMessage name='year'>
//                   {(msg) => <p className='text-danger'>{msg}</p>}
//                 </ErrorMessage>
//               </FormGroup>
//               {/* <FormGroup>
//                 <Label htmlFor='commentText'>Comment</Label>
//                 <Field
//                   name='commentText'
//                   as='textarea'
//                   rows='12'
//                   className='form-control'
//                 />
//               </FormGroup> */}
//               <Button type='submit' color='primary'>
//                 Submit
//               </Button>
//             </Form>
//           </Formik>
//         </ModalBody>
//       </Modal>
//     </>
//   );
// };

// export default EntryForm;

// // import { useState } from 'react';
// // import {
// //   Button,
// //   Modal,
// //   ModalHeader,
// //   ModalBody,
// //   FormGroup,
// //   Label,
// // } from 'reactstrap';
// // import { Formik, Field, Form, ErrorMessage } from 'formik';
// // //import { validateDataForm } from '../../utils/validateDataForm';

// // const DataForm = ({ dataId }) => {
// //   const [modalOpen, setModalOpen] = useState(0);
// //   const handleSubmit = (values) => {
// //     const data = {
// //       dataId: parseInt(dataId),
// //       year: values.year,
// //       label: values.month,
// //       completed: values.completed,
// //       cohort: values.cohort,
// //       overlaps: values.overlaps,
// //       text: values.dataId,
// //     };
// //     console.log(data);
// //     setModalOpen(false);
// //   };
// //   return (
// //     <>
// //       <Button outline onClick={() => setModalOpen(true)}>
// //         <i className='fa fa-pencil fa-lg' /> Add Data
// //       </Button>

// //       <Modal isOpen={modalOpen}>
// //         <ModalHeader toggle={() => setModalOpen(false)}>Add Data</ModalHeader>
// //         <ModalBody>data: {dataId}</ModalBody>
// //         <ModalBody>
// //           <Formik
// //             initialValues={{
// //               year: '',
// //               label: '',
// //               completed: '',
// //               cohort: '',
// //               overlaps: '',
// //             }}
// //             onSubmit={handleSubmit}
// //             //validate={validateDataForm}
// //           >
// //             <Form>
// //               <FormGroup>
// //                 <Label htmlFor='year'>Year</Label>
// //                 <Field
// //                   name='year'
// //                   placeholder='Four Digit Year'
// //                   className='form-control'
// //                 />
// //                 <ErrorMessage name='year'>
// //                   {(msg) => <p className='text-danger'>{msg}</p>}
// //                 </ErrorMessage>
// //               </FormGroup>
// //               <FormGroup>
// //                 <Label htmlFor='month'>Month</Label>
// //                 <Field
// //                   name='month'
// //                   placeholder='Full Text Version of Month'
// //                   className='form-control'
// //                 />
// //                 <ErrorMessage name='month'>
// //                   {(msg) => <p className='text-danger'>{msg}</p>}
// //                 </ErrorMessage>
// //               </FormGroup>
// //               <FormGroup>
// //                 <Label htmlFor='completed'>Completed</Label>
// //                 <Field
// //                   name='completed'
// //                   placeholder='Number of Files Completed'
// //                   className='form-control'
// //                 />
// //                 <ErrorMessage name='completed'>
// //                   {(msg) => <p className='text-danger'>{msg}</p>}
// //                 </ErrorMessage>
// //               </FormGroup>
// //               <FormGroup>
// //                 <Label htmlFor='cohort'>Cohort</Label>
// //                 <Field
// //                   name='cohort'
// //                   placeholder='Number in Cohort'
// //                   className='form-control'
// //                 />
// //                 <ErrorMessage name='cohort'>
// //                   {(msg) => <p className='text-danger'>{msg}</p>}
// //                 </ErrorMessage>
// //               </FormGroup>
// //               <FormGroup>
// //                 <Label htmlFor='overlaps'>Overlaps Completed</Label>
// //                 <Field
// //                   name='overlaps'
// //                   placeholder='Number of Overlaps Completed'
// //                   className='form-control'
// //                 />
// //                 <ErrorMessage name='overlaps'>
// //                   {(msg) => <p className='text-danger'>{msg}</p>}
// //                 </ErrorMessage>
// //               </FormGroup>
// //               <Button type='submit' color='primary'>
// //                 Submit
// //               </Button>
// //             </Form>
// //           </Formik>
// //         </ModalBody>
// //       </Modal>
// //     </>
// //   );
// // };

// // export default DataForm;

// //========================================================
// // import { useState } from 'react';
// // import { useDispatch } from 'react-redux';
// // import {
// //   Button,
// //   Modal,
// //   ModalHeader,
// //   ModalBody,
// //   FormGroup,
// //   Label,
// // } from 'reactstrap';
// // import { Formik, Field, Form, ErrorMessage } from 'formik';
// // import { validateEntryForm } from '../../utils/validateEntryForm';

// // import { addEntry } from './entriesSlice';

// // const EntryForm = ({ metricId }) => {
// //   const [modalOpen, setModalOpen] = useState(false);

// //   const dispatch = useDispatch();

// //   const handleSubmit = (values) => {
// //     const entry = {
// //       metricId: parseInt(metricId),
// //       rating: values.rating,
// //       author: values.author,
// //       text: values.entryText,
// //       date: new Date(Date.now()).toISOString(),
// //     };

// //     console.log('entry:', entry);
// //     dispatch(addEntry(entry));
// //     setModalOpen(false);
// //   };
// //   return (
// //     <>
// //       <Button outline onClick={() => setModalOpen(true)}>
// //         <i className='fa fa-pencil fa-lg' /> Add Entry
// //       </Button>

// //       <Modal isOpen={modalOpen}>
// //         <ModalHeader toggle={() => setModalOpen(false)}>Add Entry</ModalHeader>
// //         <ModalBody>
// //           <Formik
// //             initialValues={{ rating: undefined, author: '', entryText: '' }}
// //             onSubmit={handleSubmit}
// //             validate={validateEntryForm}
// //           >
// //             <Form>
// //               <FormGroup>
// //                 <Label htmlFor='rating'>Rating</Label>
// //                 <Field name='rating' as='select' className='form-control'>
// //                   <option>Select...</option>
// //                   <option>1</option>
// //                   <option>2</option>
// //                   <option>3</option>
// //                   <option>4</option>
// //                   <option>5</option>
// //                 </Field>

// //                 <ErrorMessage name='rating'>
// //                   {(msg) => <p className='text-danger'>{msg}</p>}
// //                 </ErrorMessage>
// //               </FormGroup>
// //               <FormGroup>
// //                 <Label htmlFor='author'>Your Name</Label>
// //                 <Field
// //                   name='author'
// //                   placeholder='Your Name'
// //                   className='form-control'
// //                 />

// //                 <ErrorMessage name='author'>
// //                   {(msg) => <p className='text-danger'>{msg}</p>}
// //                 </ErrorMessage>
// //               </FormGroup>
// //               <FormGroup>
// //                 <Label htmlFor='entryText'>Entry</Label>
// //                 <Field
// //                   name='entryText'
// //                   as='textarea'
// //                   rows='12'
// //                   className='form-control'
// //                 />
// //               </FormGroup>

// //               <Button type='submit' color='primary'>
// //                 Submit
// //               </Button>
// //             </Form>
// //           </Formik>
// //         </ModalBody>
// //       </Modal>
// //     </>
// //   );
// // };
// // export default EntryForm;
// //===============================================================
// // import { useState } from 'react';
// // import {
// //   Button,
// //   Modal,
// //   ModalHeader,
// //   ModalBody,
// //   FormGroup,
// //   Label,
// // } from 'reactstrap';
// // import { Formik, Field, Form, ErrorMessage } from 'formik';
// // import { validateEntryForm } from '../../utils/validateEntryForm';

// // const EntryForm = ({ metricId }) => {
// //   const [modalOpen, setModalOpen] = useState(0);
// //   const handleSubmit = (values) => {
// //     const entry = {
// //       metricId: parseInt(metricId),
// //       rating: values.rating,
// //       author: values.author,
// //       text: values.entryText,
// //     };
// //     console.log(entry);
// //     setModalOpen(false);
// //   };
// //   return (
// //     <>
// //       <Button outline onClick={() => setModalOpen(true)}>
// //         <i className='fa fa-pencil fa-lg' /> Add Entry
// //       </Button>

// //       <Modal isOpen={modalOpen}>
// //         <ModalHeader toggle={() => setModalOpen(false)}>Add Entry</ModalHeader>
// //         <ModalBody>
// //           <Formik
// //             initialValues={{ rating: undefined, author: '', entryText: '' }}
// //             onSubmit={handleSubmit}
// //             validate={validateEntryForm}
// //           >
// //             <Form>
// //               <FormGroup>
// //                 <Label htmlFor='rating'>Rating</Label>
// //                 <Field name='rating' as='select' className='form-control'>
// //                   <option>Select...</option>
// //                   <option>1</option>
// //                   <option>2</option>
// //                   <option>3</option>
// //                   <option>4</option>
// //                   <option>5</option>
// //                 </Field>
// //                 <ErrorMessage name='rating'>
// //                   {(msg) => <p className='text-danger'>{msg}</p>}
// //                 </ErrorMessage>
// //               </FormGroup>
// //               <FormGroup>
// //                 <Label htmlFor='author'>Your Name</Label>
// //                 <Field
// //                   name='author'
// //                   placeholder='Your Name'
// //                   className='form-control'
// //                 />
// //                 <ErrorMessage name='author'>
// //                   {(msg) => <p className='text-danger'>{msg}</p>}
// //                 </ErrorMessage>
// //               </FormGroup>
// //               <FormGroup>
// //                 <Label htmlFor='entryText'>Entry</Label>
// //                 <Field
// //                   name='entryText'
// //                   as='textarea'
// //                   rows='12'
// //                   className='form-control'
// //                 />
// //               </FormGroup>
// //               <Button type='submit' color='primary'>
// //                 Submit
// //               </Button>
// //             </Form>
// //           </Formik>
// //         </ModalBody>
// //       </Modal>
// //     </>
// //   );
// // };

// // export default EntryForm;
