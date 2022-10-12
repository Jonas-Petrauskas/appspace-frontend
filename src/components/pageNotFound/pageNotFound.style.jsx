import styled from 'styled-components';

export const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
	h1 {
		color: white;
		font-size: 2rem;
	}

	img {
		width: 50px;
		height: 50px;
	}

	@media screen and (min-width: 481px) {
		h1 {
			font-size: 3rem;
		}
	}
`;

export const StyledImgWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-top: 20px;

	a {
		margin: 0 20px;
		color: #ffffff;
	}

	a:hover {
		color: #c1f762;
	}
`;
