import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import image from '../../assets/header-img-rick.png';
import { Link } from 'react-router-dom';

import { fetchApi, fetchCurrentPage, filterByName } from '../../services/apiServices';
import {
	StyledContainer,
	StyledCardFront,
	StyledImage,
	StyledTitle,
	StyledLoadingContainer,
	StyledCard,
	StyledCardBack,
	StyledNav,
	StyledImageNav,
	StyledInputNav
} from './characterList.style';

function CharacterList() {
	const [isLoading, setIsLoading] = useState(true);
	const [filteredData, setFilteredData] = useState('');


	useEffect(() => {
		async function getData() {
			try {
				const data = await fetchApi();
				setFilteredData(data);
				setTimeout(() => {
					setIsLoading(false);
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
		setFilteredData(currentPageFromServer);
	};

	const fetchedFilteredResults = async currentName => {
		const data = await filterByName(currentName);
		return data;
	};

	const handleSearch = async event => {
		let value = event.target.value.toLowerCase();
		const resultValue = await fetchedFilteredResults(value);
		setFilteredData(resultValue);
	};

	console.log(filteredData)

	return (
		<>
			{isLoading ? (
				<StyledLoadingContainer>
					<img src={image} alt="img"></img>
				</StyledLoadingContainer>
			) : (
				<>
					<StyledNav>
						<ul>
							<li>
								<Link to="/">
									<StyledImageNav src={image} alt="" />
								</Link>
								<StyledInputNav
									onChange={event => handleSearch(event)}
									type="text"
									placeholder="Search for character..."
								/>
							</li>
						</ul>
					</StyledNav>
					<StyledContainer>
						{filteredData.results &&
							filteredData.results.map(item => {
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
						pageCount={filteredData.info.pages}
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
