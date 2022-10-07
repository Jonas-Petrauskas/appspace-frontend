import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

function CharacterList() {
	const [items, setItems] = useState([]);

	useEffect(() => {
		async function getData() {
			try {
				const res = await fetch(`https://rickandmortyapi.com/api/character/${currentPage}`);
				const data = await res.json();
				setItems(data);
			} catch (err) {
				console.error(err);
			}
		}
		getData();
	}, []);
	const handlePageClick = (data: any) => {
		console.log(data.selected);
	};

	console.log(items);
	return (
		<div>
			<ReactPaginate
				previousLabel={'Previous'}
				nextLabel={'Next'}
				breakLabel={'...'}
				pageCount={42}
				marginPagesDisplayed={2}
				pageRangeDisplayed={2}
				onPageChange={handlePageClick}
				containerClassName={'pagination justify-content-center'}
				pageClassName={'page-item'}
				pageLinkClassName={'page-link'}
				previousClassName={'page-item'}
				previousLinkClassName={'page-link'}
				nextClassName={'page-item'}
				nextLinkClassName={'page-link'}
				breakClassName={'page-item'}
				breakLinkClassName={'page-link'}
				activeClassName={'active'}
			/>
		</div>
	);
}

export default CharacterList;
