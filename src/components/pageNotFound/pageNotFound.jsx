import { StyledContainer, StyledImgWrapper } from './pageNotFound.style';
import { Link } from 'react-router-dom';
import image from '../../assets/header-img-rick.png';

function PageNotFound() {
	return (
		<StyledContainer>
			<h1>Page not found</h1>
			<StyledImgWrapper>
				<img src={image} alt="img"></img>
				<Link to="/">Back to home page</Link>
				<img src={image} alt="img"></img>
			</StyledImgWrapper>
		</StyledContainer>
	);
}

export default PageNotFound;
