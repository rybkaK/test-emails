import { useSelector } from 'react-redux';
import Main from '../components/home/main';
import { getTrashMails } from '../redux/slices/mails';

const Trash = () => {
	const mails = useSelector(getTrashMails);

	return <Main mails={mails} />;
};

export default Trash;
