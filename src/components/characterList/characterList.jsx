import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import image from '../../assets/header-img-rick.png';
import Header from '../header/header';
import { fetchApi, fetchCurrentPage } from '../../services/apiServices';
import {
	StyledContainer,
	StyledCardFront,
	StyledImage,
	StyledTitle,
	StyledLoadingContainer,
	StyledCard,
	StyledCardBack
} from './characterList.style';

function CharacterList() {
	const [items, setItems] = useState([]);
	const [isLoading, SetIsLoading] = useState(true);

	useEffect(() => {
		async function getData() {
			try {
				const data = await fetchApi();
				setItems(data);
				setTimeout(() => {
					SetIsLoading(false);
				}, 1000);
			} catch (err) {
				console.error(err);
			}
		}
		getData();
	}, []);

	const fetchPages = async currentPage => {
		const data = await fetchCurrentPage(currentPage);
		return data;
	};

	const handlePageClick = async data => {
		let currentPage = data.selected + 1;
		const currentPageFromServer = await fetchPages(currentPage);
		setItems(currentPageFromServer);
	};

	return (
		<>
			{isLoading ? (
				<StyledLoadingContainer>
					<img src={image} alt="img"></img>
				</StyledLoadingContainer>
			) : (
				<>
					<Header />
					<StyledContainer>
						{items.results &&
							items.results.map(item => {
								return (
									<StyledCard key={item.id}>
										<StyledCardFront key={item.id}>
											<StyledImage src={item.image} alt="img" />
											<StyledTitle>{item.name}</StyledTitle>
										</StyledCardFront>
										<StyledCardBack>
											<h1>{item.name}</h1>
											<div>
												Species:<span>{item.species}</span>
											</div>
											<div>
												Gender:<span>{item.gender}</span>
											</div>
											<div>
												Status:<span>{item.status}</span>
											</div>
										</StyledCardBack>
									</StyledCard>
								);
							})}
					</StyledContainer>
					<ReactPaginate
						previousLabel={'<<'}
						nextLabel={'>>'}
						breakLabel={'...'}
						pageCount={42}
						marginPagesDisplayed={2}
						pageRangeDisplayed={1}
						onPageChange={handlePageClick}
						containerClassName={'pagination pagination-sm justify-content-center'}
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
				</>
			)}
		</>
	);
}

export default CharacterList;
