import React from "react";
import { Nav, NavLink, NavMenu }
	from "./NavbarElements";

const Navbar = () => {
return (
	<Nav>
		<NavMenu>
        <NavLink to="/index" activeStyle>
			Home
		</NavLink>
		<NavLink to="/agriculture" activeStyle>
			Agriculture
		</NavLink>
		<NavLink to="/medical" activeStyle>
			Medical
		</NavLink>
		<NavLink to="/finance" activeStyle>
			Finance
		</NavLink>
		</NavMenu>
	</Nav>
);
};

export default Navbar;
