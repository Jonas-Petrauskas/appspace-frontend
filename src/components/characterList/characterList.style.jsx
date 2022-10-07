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
		margin: 0 auto 30px auto;
		max-width: 800px;
	}
`;

export const StyledCardFront = styled.div`
	border-radius: 10px;

	transition: all 1.25s;
	backface-visibility: hidden;
`;

export const StyledImage = styled.img`
	border-radius: 10px;
	border: 3px solid #c1f762;
	width: 95%;
`;

export const StyledTitle = styled.h1`
	width: 100%;
	margin: 10px 0;
	font-size: 16px;
	color: #c1f762;
`;

export const StyledLoadingContainer = styled.div`
	position: relative;
	z-index: 100;
	height: 100vh;
	margin-top: -84.5px;
	margin-bottom: -38px;
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

export const StyledCardBack = styled.div`
	transition: all 1.25s;
	backface-visibility: hidden;

	position: absolute;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: calc(100% - 6px);
	height: 100%;
	border: 3px solid #c1f762;
	border-radius: 10px;
	color: #c1f762;

	transform: rotateY(180deg);

	h1 {
		padding: 0 5px;
		margin: 0 0 10px 0;
		font-size: 20px;
	}

	div {
		font-size: 16px;
		margin-bottom: 10px;
		padding: 0 5px;
	}

	span {
		margin-left: 5px;
	}
`;

export const StyledCard = styled.div`
	position: relative;

	:hover ${StyledCardFront} {
		transform: rotateY(-180deg);
	}

	:hover ${StyledCardBack} {
		transform: rotateY(0);
	}
`;
