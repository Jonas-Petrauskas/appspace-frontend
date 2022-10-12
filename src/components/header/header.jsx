import { useState } from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/header-img-rick.png';
import { StyledNav, StyledImage, StyledInput } from './header.style';

function Header() {
	const [searchValue, setSearchValue] = useState('');

	const handleChange = event => {
		setSearchValue(event.target.value);
	};

	return (
		<StyledNav>
			<ul>
				<li>
					<Link to="/">
						<StyledImage src={image} alt="" />
					</Link>
					<StyledInput
						value={searchValue}
						onChange={handleChange}
						type="text"
						placeholder="Search for character..."
					/>
				</li>
			</ul>
		</StyledNav>
	);
}

export default Header;
