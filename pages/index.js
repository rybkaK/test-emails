import { useSelector } from 'react-redux';
import Main from '../components/home/main';
import { getAllMails } from '../redux/slices/mails';

const Home = () => {
	const mails = useSelector(getAllMails);

	return <Main mails={mails} />;
};

export default Home;
