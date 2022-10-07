import styled from 'styled-components';

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
		margin: 0 30px 0 30px;
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

export const StyledImage = styled.img`
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

export const StyledInput = styled.input`
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
