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
	@media screen and (min-width: 768px) {
		margin: 15px 0;
	}
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
	/* border: 3px solid #c1f762; */
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

export const StyledNav = styled.nav`
	position: sticky;
	top: 0;
	z-index: 99;
	background-color: #296073;
	margin-bottom: 30px;
	box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
		rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
		rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;

	ul {
		margin: 0 33px 0 33px;
		padding: 0;
	}

	li {
		display: flex;
		align-items: center;
		list-style: none;
	}

	a {
		margin-right: 30px;
	}
`;

export const StyledImageNav = styled.img`
	width: 50px;
	height: 50px;
	@media screen and (min-width: 768px) {
		transition: all 0.2s ease-in-out;
		&:hover {
			transform: scale(1.1);
			opacity: 0.8;
		}
	}
`;

export const StyledInputNav = styled.input`
	width: 100%;
	padding: 7px 10px;
	border: none;
	border-radius: 5px;
	border: 1px solid #c1f762;
	background-color: transparent;
	color: #c1f762;
	&::placeholder {
		color: #c1f762;
	}
	&:focus-visible {
		outline: none;
	}
	@media screen and (min-width: 481px) {
		width: 250px;
	}
	@media screen and (min-width: 769px) {
		&:hover {
			opacity: 0.8;
		}
	}
`;
