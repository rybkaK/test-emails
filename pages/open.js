import { useSelector } from 'react-redux';
import Main from '../components/home/main';
import { getOpenMails } from '../redux/slices/mails';

const Open = () => {
	const mails = useSelector(getOpenMails);

	return <Main mails={mails} />;
};

export default Open;
