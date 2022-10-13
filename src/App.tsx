import CharacterList from './components/characterList/characterList';
import PageNotFound from './components/pageNotFound/pageNotFound';
import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<CharacterList />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</>
	);
}

export default App;
