import Head from 'next/head';
import styled from 'styled-components';
import Header from '../components/header';
import Main from '../components/home/main';
import Sidebar from '../components/sidebar';

const HomeContainer = styled.div`
	padding: 0;
	margin: 0;
	height: 100vh;
	width: 100%;

	display: flex;
	flex-direction: column;
`;

const ListContainer = styled.div`
	padding-left: 250px;
	width: 100%;
`;

export default function Home() {
	return (
		<>
			<Head>Mails</Head>
			<HomeContainer>
				<Sidebar />
				<ListContainer>
					<Header />
					<Main />
				</ListContainer>
			</HomeContainer>
		</>
	);
}
