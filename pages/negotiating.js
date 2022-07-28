import { useSelector } from 'react-redux';
import Main from '../components/home/main';
import { getNegotiatingMails } from '../redux/slices/mails';

const Negotiating = () => {
	const mails = useSelector(getNegotiatingMails);

	return <Main mails={mails} />;
};

export default Negotiating;
