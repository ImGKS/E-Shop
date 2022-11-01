import React from 'react';
// import { useSelector } from "react-redux";

const Navbar = () => {

//    const state = useSelector((state)=> state.handleCart); 
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <a className="navbar-brand fw-bold fs-4" href="/">Fake Shop</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/products">Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact">Contact</a>
                            </li>
                          </ul> 
                        <div className='buttons'>
                            <a href='/cart' className='btn btn-outline-dark'>
                            Cart 
                             </a>
                            <a href='/register' className='btn btn-outline-dark ms-2'>Register</a>
                            <a href='/login' className='btn btn-outline-dark ms-2'>Login</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
