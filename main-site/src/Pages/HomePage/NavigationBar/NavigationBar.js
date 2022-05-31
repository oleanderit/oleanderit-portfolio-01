import React from 'react';
import { Link } from 'react-router-dom';
import './NavigationBar.css'
const NavigationBar = () => {

    // const [show, setShow] = useState(false);
    // const showDropdown = (e) => {
    //     setShow(!show);
    // }
    // const hideDropdown = e => {
    //     setShow(false);
    // }
    return (
        <div class='container'>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">Navbar</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/services">Services</Link>
                            </li>


                            <ul class="Services" aria-labelledby="navbarDropdownMenuLink">
                                <li> <Link class="nav-link active" aria-current="page" to="/home">Home</Link></li> 
                            </ul>

                            
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/about">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/myOi">My OI</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to="/contactUs">Contact Us</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavigationBar;