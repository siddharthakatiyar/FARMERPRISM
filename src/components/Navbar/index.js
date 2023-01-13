import React, { useState } from 'react';
import {
	MDBContainer,
	MDBNavbar,
	MDBNavbarBrand,
	MDBNavbarToggler,
	MDBIcon,
	MDBNavbarNav,
	MDBNavbarItem,
	MDBNavbarLink,
	MDBBtn,
	MDBDropdown,
	MDBDropdownToggle,
	MDBDropdownMenu,
	MDBDropdownItem,
	MDBCollapse,
} from 'mdb-react-ui-kit';

export default function App() {
	const [showBasic, setShowBasic] = useState(false);

	return (
		<MDBNavbar expand='lg' light bgColor='#e0d9c7'>
			<MDBContainer fluid>
				<MDBNavbarBrand href='/'>
					<img src="/logo.png" alt='Logo' height='40' loading='lazy' />
					 FARMERPRISM
				</MDBNavbarBrand>
			</MDBContainer>
			<MDBNavbarToggler
				aria-controls='navbarSupportedContent'
				aria-expanded='false'
				aria-label='Toggle navigation'
				onClick={() => setShowBasic(!showBasic)}
			>
				<MDBIcon icon='bars' fas />
			</MDBNavbarToggler>
			<MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto text-nowrap mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink href='/index'>ABOUT US</MDBNavbarLink>
            </MDBNavbarItem>
			<MDBNavbarItem>
              <MDBNavbarLink href='/agriculture'>AGRICULTURE</MDBNavbarLink>
            </MDBNavbarItem>
			<MDBNavbarItem>
              <MDBNavbarLink href='/medical'>MEDICAL</MDBNavbarLink>
            </MDBNavbarItem>
			<MDBNavbarItem>
              <MDBNavbarLink href='/finance'>FINANCE</MDBNavbarLink>
            </MDBNavbarItem>
			
            

            
          </MDBNavbarNav>
        </MDBCollapse>
		</MDBNavbar>
	);
}