export const fetchApi = async queryParams => {
	try {
		const response = await fetch(`https://rickandmortyapi.com/api/character/${queryParams}`);
		if (!response.ok) {
			throw Error('Could not fetch the data.');
		}
		return response.json();
	} catch (err) {
		console.error(err);
	}
};

export const fetchCurrentPage = async fetchUrl => {
	try {
		const response = await fetch(fetchUrl);
		if (!response.ok) {
			throw Error('Could not fetch the data.');
		}
		return response.json();
	} catch (err) {
		console.error(err);
	}
};

export const filterByName = async currentName => {
	try {
		const fetchUrl = `https://rickandmortyapi.com/api/character/?name=${currentName}`;
		const response = await fetch(fetchUrl);
		const data = await response.json();
		if (!response.ok) {
			throw Error('Request Failed.');
		}
		return {
			data: data,
			fetchUrl: fetchUrl
		};
	} catch (err) {
		console.error(err);
	}
};
