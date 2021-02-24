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
            <ul class="navbar-nav ml-auto ls-2">
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
            <button className="  btn primary-btn px-4 text-white ls-2 ">
              Dashboard
            </button>
          </div>
        </div>
      </nav>
      {/* 1st section */}
      <section className="section-main">
        <div className="coantiner d-flex justify-content-around align-items-center">
          <div className="ls-2">
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
      {/* feature section */}
      <section className="p-5">
        <h1 className="text-center font-weight-bolder primary-color fs-50 text-uppercase ls-2">
          Features
        </h1>
        <div className="container mt-5 ls-2">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="feature-box d-flex p-3">
                <div className="feature-point"></div>
                <p className="m-0 text-uppercase text-white font-weight-bolder fs-26 mt-1 mx-4">
                  lightining fast
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="feature-box d-flex p-3">
                <div className="feature-point"></div>
                <p className="m-0 text-uppercase text-white font-weight-bolder fs-26 mt-1 mx-4">
                  quality
                </p>
              </div>
            </div>
          </div>
          {/* 2nd row */}
          <div className="row my-4">
            <div className="col-12 col-md-6">
              <div className="feature-box d-flex p-3">
                <div className="feature-point"></div>
                <p className="m-0 text-uppercase text-white font-weight-bolder fs-26 mt-1 mx-4">
                  reliability
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="feature-box d-flex p-3">
                <div className="feature-point"></div>
                <p className="m-0 text-uppercase text-white font-weight-bolder fs-26 mt-1 mx-4">
                  MULTIPLE SOLUTIONS
                </p>
              </div>
            </div>
          </div>
          {/* 3rd row */}
          <div className="row ">
            <div className="col-12 col-md-6">
              <div className="feature-box d-flex p-3">
                <div className="feature-point"></div>
                <p className="m-0 text-uppercase text-white font-weight-bolder fs-26 mt-1 mx-4">
                  EXCLUSIVE POOLS
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="feature-box d-flex p-3">
                <div className="feature-point"></div>
                <p className="m-0 text-uppercase text-white font-weight-bolder fs-26 mt-1 mx-4">
                  support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* plans section */}
      <section className="plan-section p-5 ">
        <h1 className="text-center font-weight-bolder primary-color fs-50 text-uppercase mb-5 ls-2">
          plans
        </h1>
        <div className="ml-auto d-flex justify-content-stretch button-wrapper text-center mb-5 mt-4 ">
          <button className="btn button-active text-uppercase font-weight-bolder tertiary-color fs-22 ls-2">
            residential
          </button>
          <button className="btn button-inactive text-uppercase font-weight-bolder tertiary-color fs-22 text-center ls-2">
            isp
          </button>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="plans-wrapper py-5 px-4">
                <div className="container text-center">
                  <h1
                    className="fs-35 tertiary-color"
                    style={{ letterSpacing: '0.2em' }}
                  >
                    WOLF TWILIGHT
                  </h1>
                  <button className="btn tertiary-color  secondary-btn font-weight-bolder px-3 py-1 my-4">
                    Residential
                  </button>
                  <ul
                    className=" mx-auto text-left custom-list my-4 ls-1"
                    style={{ width: '60% ' }}
                  >
                    <li className="text-white my-4">- 99.9% Uptime</li>
                    <li className="text-white my-4">
                      - User/Pass Authentication
                    </li>
                    <li className="text-white my-4">
                      - Exclusive Private Proxy Pools
                    </li>
                    <li className="text-white my-4">
                      - Custom Site Specific Pools
                    </li>
                    <li className="text-white my-4">
                      - Fresh IPs For Each Drop
                    </li>
                    <li className="text-white my-4">- 30 Day Expiry</li>
                    <li className="text-white my-4">- Unbanned on All Sites</li>
                    <li className="text-white my-4">- Unlimited Generation</li>
                  </ul>
                  <div className="d-flex justify-content-center">
                    <div
                      className="d-flex button-wrapper tertiary-color fs-24 align-items-center "
                      style={{ width: '150px' }}
                    >
                      <button
                        className="btn font-weight-bolder text-white  "
                        style={{ width: '30%' }}
                      >
                        <img src={require('../img/Minus.svg').default} alt="" />
                      </button>
                      <p
                        className="m-0 font-weight-bolder "
                        style={{ width: '40%' }}
                      >
                        2GB
                      </p>
                      <button
                        className="btn font-weight-bolder text-white  "
                        style={{ width: '30%' }}
                      >
                        <img src={require('../img/Plus.svg').default} alt="" />
                      </button>
                    </div>
                    <p className="fs-33 mx-3 my-0 tertiary-color font-weight-bolder">
                      $36
                    </p>
                  </div>
                  <button
                    className="tertiary-color fs-20 text-uppercase btn button-wrapper px-5 py-2 font-weight-bolder mt-5 ls-2"
                    style={{ width: '250px' }}
                  >
                    Sold Out
                  </button>
                </div>
              </div>
            </div>
            {/* right side */}
            <div className="col-12 col-md-6">
              <div className="plans-wrapper py-5 px-4">
                <div className="container text-center">
                  <h1
                    className="fs-35 tertiary-color"
                    style={{ letterSpacing: '0.2em' }}
                  >
                    WOLF LUNAR
                  </h1>
                  <button className="btn tertiary-color  secondary-btn font-weight-bolder px-3 py-1 my-4">
                    Residential
                  </button>
                  <ul
                    className=" mx-auto text-left custom-list my-4"
                    style={{ width: '60% ' }}
                  >
                    <li className="text-white my-4">- 99.9% Uptime</li>
                    <li className="text-white my-4">
                      - Real Worldwide Residential IPs
                    </li>
                    <li className="text-white my-4">- Massive Proxy Pools</li>
                    <li className="text-white my-4">
                      - Custom ISP Specific Pools
                    </li>
                    <li className="text-white my-4">
                      - Country, State, and City Targeting
                    </li>
                    <li className="text-white my-4">- 60 Day Expiry </li>
                    <li className="text-white my-4">
                      - Unbanned on All Sites{' '}
                    </li>
                    <li className="text-white my-4">- Unlimited Generation</li>
                  </ul>
                  <div className="d-flex justify-content-center">
                    <div
                      className="d-flex button-wrapper tertiary-color fs-24 align-items-center "
                      style={{ width: '150px' }}
                    >
                      <button
                        className="btn font-weight-bolder text-white  "
                        style={{ width: '30%' }}
                      >
                        <img src={require('../img/Minus.svg').default} alt="" />
                      </button>
                      <p
                        className="m-0 font-weight-bolder "
                        style={{ width: '40%' }}
                      >
                        2GB
                      </p>
                      <button
                        className="btn font-weight-bolder text-white  "
                        style={{ width: '30%' }}
                      >
                        <img src={require('../img/Plus.svg').default} alt="" />
                      </button>
                    </div>
                    <p className="fs-33 mx-3 my-0 tertiary-color font-weight-bolder">
                      $40
                    </p>
                  </div>
                  <button
                    className="tertiary-color fs-20 text-uppercase btn button-wrapper px-5 py-2 font-weight-bolder mt-5 ls-2"
                    style={{ width: '250px' }}
                  >
                    Sold Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* faq section */}
      <section>
        <div className="container">
          <h1 className="text-center fs-50 secondary-color font-weight-bolder ls-2 my-5">
            FAQ
          </h1>
          <h1 className="text-center fs-35 secondary-color font-weight-bolder ls-2 mb-5">
            Frequently Asked Questions
          </h1>
          <div className="row my-5">
            <div className="col-12 col-md-6 ">
              <div className="faq-wrapper p-4">
                <h3 className="text-white fs-20 font-weight-bold ls-2 ">
                  How do I join Wolf Proxies?
                </h3>
                <p className="text-white font-weight-bold ls-2 ">
                  Lorem, ipsum dolor.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 ">
              <div className="faq-wrapper p-4">
                <h3 className="text-white fs-20 font-weight-bold ls-2 ">
                  How do I join Wolf Proxies?
                </h3>
                <p className="text-white font-weight-bold ls-2 ">
                  Lorem, ipsum dolor.
                </p>
              </div>
            </div>
          </div>
          <div className="row my-4">
            <div className="col-12 col-md-6 ">
              <div className="faq-wrapper p-4">
                <h3 className="text-white fs-20 font-weight-bold ls-2 ">
                  How do I join Wolf Proxies?
                </h3>
                <p className="text-white font-weight-bold ls-2 ">
                  Lorem, ipsum dolor.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 ">
              <div className="faq-wrapper p-4">
                <h3 className="text-white fs-20 font-weight-bold ls-2 ">
                  How do I join Wolf Proxies?
                </h3>
                <p className="text-white font-weight-bold ls-2 ">
                  Lorem, ipsum dolor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* social section */}
      <section className="social-section mx-auto p-4 my-5">
        <div className="container">
          <h1 className="text-white fs-25 text-center ls-2">Social Media</h1>
          <div className="d-flex justify-content-center my-4">
            <div className="social-wrapper mx-4"></div>
            <div className="social-wrapper mx-4"></div>
          </div>
        </div>
      </section>
      {/* footer */}
      <footer className="footer d-flex p-4">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="font-weight-bold ls-2 text-white">
            <h1 className="text-white fs-22 ls-2 text-uppercase">
              <img
                src={require('../img/Logo-mini.svg').default}
                alt=""
                className="mr-3"
              />
              Wolf proxies
            </h1>
            <p className=" my-3 ">© 2021 WOLF LLC</p>
            <p className="">All Rights Reserved</p>
          </div>
          <div className="font-weight-bold ls-2 text-white">
            <h1 className="fs-20">LINKS</h1>
            <p className="my-3">Terms Of Service</p>
            <p>Privacy Policy</p>
          </div>
          <div className="font-weight-bold ls-2 text-white">
            <h1 className="fs-20">SOCIALS</h1>
            <p className="my-3">Twitter</p>
            <p>Discord</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
