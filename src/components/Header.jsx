import {NavLink} from "react-router-dom";
import {Container, Navbar, Stack} from "react-bootstrap";

const Header = () => {
    return (
        <div>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/" >
                        <img
                            alt=""
                            src="src/assets/job.png"
                            width="40"
                            className="d-inline-block align-top bg-black"
                        />
                        Redux Toolkit
                    </Navbar.Brand>

                    <Stack className='text-black fw-semibold' direction='horizontal' gap={3}>
                        <NavLink to='/'>CRUD</NavLink>
                        <NavLink to='/counter'>Sayac</NavLink>
                    </Stack>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
