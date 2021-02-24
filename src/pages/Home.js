import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
const Home = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          <Link class="navbar-brand" to="#">
            <img src={require('../img/Logo.svg').default} alt="" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item ">
                <Link
                  class="nav-link text-white font-weight-bolder mx-3"
                  to="#"
                >
                  Home
                </Link>
              </li>
              <li class="nav-item ">
                <Link
                  class="nav-link text-white font-weight-bolder mx-3"
                  to="#"
                >
                  Features
                </Link>
              </li>
              <li class="nav-item ">
                <Link
                  class="nav-link text-white font-weight-bolder mx-3"
                  to="#"
                >
                  Plans
                </Link>
              </li>
              <li class="nav-item ">
                <Link
                  class="nav-link text-white font-weight-bolder mx-3"
                  to="#"
                >
                  FAQ
                </Link>
              </li>
              <li class="nav-item ">
                <Link
                  class="nav-link text-white font-weight-bolder mx-3"
                  to="#"
                >
                  Socials
                </Link>
              </li>
            </ul>
            <button className="  btn primary-btn px-4 text-white ">
              Dashboard
            </button>
          </div>
        </div>
      </nav>
      {/* 1st section */}
      <section className="section-main">
        <div className="coantiner d-flex justify-content-around align-items-center">
          <div>
            <h1 className="fs-50 primary-color">WOLF PROXIES</h1>
            <h2 className="secondary-color text-uppercase fs-20 my-2">
              Join the pack
            </h2>
            <button className="secondary-color btn primary-btn px-5 py-1 my-2 ">
              Plans
            </button>
          </div>
          <img src={require('../img/Home.svg').default} alt="" />
        </div>
      </section>
    </>
  );
};

export default Home;
