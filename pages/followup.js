import { useSelector } from 'react-redux';
import Main from '../components/home/main';
import { getFollowupMails } from '../redux/slices/mails';

const FollowUp = () => {
	const mails = useSelector(getFollowupMails);

	return <Main mails={mails} />;
};

export default FollowUp;
