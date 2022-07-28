import { useSelector } from 'react-redux';
import Main from '../components/home/main';
import { getInterestedMails } from '../redux/slices/mails';

const Interested = () => {
	const mails = useSelector(getInterestedMails);

	return <Main mails={mails} />;
};

export default Interested;
