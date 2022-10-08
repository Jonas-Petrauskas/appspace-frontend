export const fetchApi = async () => {
	try {
		const response = await fetch('https://rickandmortyapi.com/api/character/');
		if (!response.ok) {
			throw Error('could not fetch the data');
		}
		return response.json();
	} catch (err) {
		console.error(err);
	}
};

export const fetchCurrentPage = async currentPage => {
	try {
		const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`);
		if (!response.ok) {
			throw Error('could not fetch the data');
		}
		return response.json();
	} catch (err) {
		console.error(err);
	}
};

export const filterByName = async currentName => {
	try {
		const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${currentName}`);
		return response.json();
	} catch (err) {
		console.error(err);
	}
};
