import React from 'react';
import { Provider } from 'react-redux';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Layout from '../components/layout';
import { store } from '../redux/store';

const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
  }
  *,
  *:before,
  *:after {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	
	font-family: Arial, Helvetica, sans-serif;
  }
`;

const theme = {
	colors: {
		primary: '#000000',
	},
};

export default function App({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={theme}>
				<Provider store={store}>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</Provider>
			</ThemeProvider>
		</>
	);
}
