import { useSelector } from 'react-redux';
import Main from '../components/home/main';
import { getUnreadMails } from '../redux/slices/mails';

const Unread = () => {
	const mails = useSelector(getUnreadMails);

	return <Main mails={mails} />;
};

export default Unread;
