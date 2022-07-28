import { useSelector } from 'react-redux';
import Main from '../components/home/main';
import { getNotInterestedMails } from '../redux/slices/mails';

const NotInterested = () => {
	const mails = useSelector(getNotInterestedMails);

	return <Main mails={mails} />;
};

export default NotInterested;
