import { useSelector } from 'react-redux';
import Main from '../components/home/main';
import { getConvertedMails } from '../redux/slices/mails';

const Converted = () => {
	const mails = useSelector(getConvertedMails);

	return <Main mails={mails} />;
};

export default Converted;
