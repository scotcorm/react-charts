import { useSelector } from 'react-redux';
import { Container, Row } from 'reactstrap';
import { useParams } from 'react-router-dom';
import { selectEntryById } from '../features/entries/entriesSlice';
import EntryDetail from '../features/entries/EntryDetail';
import EntriesList from '../features/entries/EntriesList';
// import SubHeader from '../components/SubHeader';

const EntryDetailPage = () => {
  const { entryId } = useParams();
  const entry = useSelector(selectEntryById(entryId));
  console.log('entry:', entry);

  return (
    <Container>
      {/* <SubHeader current={metric.name} detail={true} /> */}
      <Row>
        <EntryDetail entry={entry} />
        <EntriesList entryId={entryId} />
      </Row>
    </Container>
  );
};

export default EntryDetailPage;
