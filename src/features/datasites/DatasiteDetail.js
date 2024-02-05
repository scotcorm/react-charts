import { Card, CardImg, CardText, CardBody, Col } from 'reactstrap';

const DatasiteDetail = ({ datasite }) => {
  const { id, year, label } = datasite;

  return (
    <Col md='5' className='m-1'>
      <Card>
        <CardBody>
          <CardText>
            {id} {year} {label}
          </CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DatasiteDetail;
