import Head from 'next/head';
import styled from 'styled-components';
import Main from '../components/main';
import Navbar from '../components/navbar';

const HomeContainer = styled.div`
	padding: 0;
	margin: 0;
	height: 100vh;
	width: 100%;

	display: grid;
	grid-template-columns: 250px 1fr;
`;

export default function Home() {
	return (
		<>
			<Head>Mails</Head>
			<HomeContainer>
				<Navbar />
				<Main />
			</HomeContainer>
		</>
	);
}
