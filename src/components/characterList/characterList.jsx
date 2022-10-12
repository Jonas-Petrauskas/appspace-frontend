import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import image from '../../assets/header-img-rick.png';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

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
	const [currentPage, setCurrentPage] = useState(0);
	const [initialPage, setInitalPage] = useState(0);
	const [filteredData, setFilteredData] = useState('');
	const [searchParams, setSearchParams] = useSearchParams();
	const [searchData, setSearchData] = useState('');
	const location = useLocation();

	useEffect(() => {
		async function getData() {
			try {
				const queryParams = new URLSearchParams(location.search);
				const currentInitialPage = queryParams.get('page');
				const currentInitalSearch = queryParams.get('name');

				const data = await fetchApi(`?${queryParams.toString()}`);

				if (currentInitialPage) {
					setCurrentPage(Number(currentInitialPage));
					setInitalPage(Number(currentInitialPage));
				}

				if (currentInitalSearch) setSearchData(currentInitalSearch);

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
		const fetchUrl = generateFetchUrl(data.selected + 1);
		// console.log(data.selected + 1, '+ 1 data selcted');
		setCurrentPage(data.selected + 1);
		let rickAndMortyCardsData = await fetchPages(fetchUrl);

		setFilteredData(rickAndMortyCardsData);

		const newResponseUrl = new URL(fetchUrl);
		const newResponseUrlQueryParams = new URLSearchParams(newResponseUrl.search);
		setSearchParams(newResponseUrlQueryParams.toString());
	};

	const generateFetchUrl = function (pageToFetch) {
		console.log(pageToFetch, 'fetch apge', currentPage, 'current');
		const url = filteredData.info.next || filteredData.info.prev;
		const newPageUrl = url.replace(/page=\d+/, `page=${pageToFetch}`);
		return newPageUrl;
		// if (pageToFetch > currentPage) return filteredData.info.next;
		// return filteredData?.info?.prev;
	};

	// const fetchedFilteredResults = async currentName => {
	// 	const rickAndMortyFilteredCardData = await filterByName(currentName);
	// 	return rickAndMortyFilteredCardData;
	// };

	const handleSearch = async event => {
		const value = event.target.value.toLowerCase();
		setSearchData(value);
		const { data, fetchUrl } = await filterByName(value);
		setFilteredData(data);

		const newResponseUrlQueryParams = new URLSearchParams(fetchUrl.search);
		setSearchParams(newResponseUrlQueryParams.toString());
		setCurrentPage(0);
	};

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
									value={searchData}
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
						forcePage={initialPage}
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
