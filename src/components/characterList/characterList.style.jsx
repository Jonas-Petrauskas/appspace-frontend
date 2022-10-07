import styled from 'styled-components';

export const StyledContainer = styled.div`
	position: relative;
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 20px;
	text-align: center;
	margin: 0 30px 30px 30px;

	a {
		text-decoration: none;
	}

	@media screen and (min-width: 481px) {
		grid-template-columns: repeat(3, 1fr);
	}
	@media screen and (min-width: 768px) {
		grid-template-columns: repeat(4, 1fr);
	}
	@media screen and (min-width: 1025px) {
		margin: 0 auto;
		max-width: 800px;
	}
`;

export const StyledCharacterCard = styled.div`
	border-radius: 10px;
	/* @media screen and (min-width: 768px) {
		transition: transform 0.2s ease-in-out;
		&:hover {
			transform: scale(1.1);
			opacity: 0.8;
		}
	} */
`;

export const StyledImage = styled.img`
	border-radius: 10px;
	border: 3px solid #c1f762;
	width: 95%;
`;

export const StyledTitle = styled.h1`
	font-size: 16px;
	color: #c1f762;
	width: 100%;
`;

export const StyledLoadingContainer = styled.div`
	position: relative;
	z-index: 100;
	height: 100vh;
	margin-top: -84.5px;
	background-image: radial-gradient(circle, #051937, #072a47, #0e3b57, #1a4d65, #296073);

	img {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 100px;
		height: 100px;
		margin-top: -50px;
		margin-left: -50px;
		animation: spin-anim 1.2s linear infinite;
	}

	@keyframes spin-anim {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;
