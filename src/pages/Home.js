import React from 'react';
import Header from '../components/Header';
import '../styles/Home.css';
import { Link, animateScroll as scroll } from 'react-scroll';
const Home = () => {
  return (
    <>
      <section className="main-section">
        <Header />
        <div className="container text-white h-75 d-flex align-items-center">
          <div>
            <h1 className="main-text">
              Providing you the <br /> highest quality <br /> proxies.{' '}
            </h1>
            <p className="secondary-text">
              Don't believe us ? Check our success !
            </p>
          </div>
        </div>
      </section>
      {/* 2nd section */}
      <section
        className="section-2 d-flex justify-content-center align-items-center p-5"
        id="features"
      >
        <div className="container">
          <h1 className="text-center text-white mt-2 mb-5 font-weight-bolder">
            Features
          </h1>
          <div className="row">
            <div className="col-12 col-md-3  ">
              <div className=" feature-wrapper text-center  d-flex justify-content-center align-items-center flex-column">
                <img src={require('../img/region.svg').default} alt="" />
                <h2 className="primary-color mt-4 mb-2 font-weight-bolder fs-20">
                  120+ Regions
                </h2>
                <p className="secondary-color fs-13 mt-3">
                  Our residential proxies provider <br /> access to over 120
                  different <br />
                  regions all over the world, <br /> including our special Mesh
                  pool.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-3   ">
              <div className="feature-wrapper text-center  d-flex justify-content-center align-items-center flex-column">
                <img src={require('../img/user.svg').default} alt="" />
                <h2 className="primary-color mt-4 mb-2 font-weight-bolder fs-20">
                  User:Pass <br /> Authenticated
                </h2>
                <p className="secondary-color fs-13 mt-3">
                  User:Pass the most common form <br /> of proxy authentication,
                  allows <br />
                  you to generate IP's quickly and <br /> easily reducing setup
                  time.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-3   ">
              <div className="feature-wrapper text-center  d-flex justify-content-center align-items-center flex-column">
                <img src={require('../img/support.svg').default} alt="" />
                <h2 className="primary-color mt-4 mb-2 font-weight-bolder fs-20">
                  24/7 Support
                </h2>
                <p className="secondary-color fs-13 mt-3">
                  Our goal is to ensure a top quality <br /> service that’s why
                  our friendly <br /> staff team is here to assist you <br />{' '}
                  24/7, if you have any issues
                </p>
              </div>
            </div>
            <div className="col-12 col-md-3   ">
              <div className="feature-wrapper text-center  d-flex justify-content-center align-items-center flex-column">
                <img src={require('../img/speed.svg').default} alt="" />
                <h2 className="primary-color mt-4 mb-2 font-weight-bolder fs-20">
                  Fast Speeds
                </h2>
                <p className="secondary-color fs-13 mt-3">
                  Our proxies are one of the fastest <br /> residential proxies
                  you will find at <br /> this price, with speeds ranging from{' '}
                  <br /> 200ms to 700ms, to ensure you <br /> manage to secure
                  the latest sneakers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 3rd section */}
      <section className="section-3 p-5 position-relative">
        <div className="container text-center">
          <h1 className="text-white font-weight-bolder text-center">
            Supported Sites
          </h1>
          <img
            src={require('../img/sitelist 1.svg').default}
            alt=""
            className="my-5"
          />
          <img
            src={require('../img/left.svg').default}
            alt=""
            className="left-img"
          />
          <img
            src={require('../img/right.svg').default}
            alt=""
            className="right-img"
          />
        </div>
      </section>
      {/* 4th section */}
      <section className="section-4 p-4" id="faq">
        <div className="container">
          <h1 className="text-white text-center font-weight-bolder">FAQ</h1>
          <div className="row my-5">
            <div className="col-12 col-md-3">
              <div className="faq-wrapper text-center p-3">
                <h1 className="main-color font-weight-bolder">1.</h1>
                <h4
                  className="text-white font-weight-bolder my-3"
                  style={{ fontSize: '20px' }}
                >
                  Do you offer any <br /> refunds ?
                </h4>
                <p className="text-white my-3" style={{ fontSize: '13px' }}>
                  Unfortunately, we do not offer any refunds as this is a
                  digital product.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="faq-wrapper text-center p-3">
                <h1 className="main-color font-weight-bolder">2.</h1>
                <h4
                  className="text-white font-weight-bolder my-3"
                  style={{ fontSize: '20px' }}
                >
                  Where can I get <br /> support?
                </h4>
                <p className="text-white my-3" style={{ fontSize: '13px' }}>
                  You can find support by joining our discord server (an invite
                  can be found at the footer of our website), and opening a
                  ticket.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="faq-wrapper text-center p-3">
                <h1 className="main-color font-weight-bolder">3.</h1>
                <h4
                  className="text-white font-weight-bolder my-3"
                  style={{ fontSize: '20px' }}
                >
                  When will I receive <br /> my proxies?
                </h4>
                <p className="text-white my-3" style={{ fontSize: '13px' }}>
                  Depending on what has been announced before the restock in the
                  discord server for DCs and ISPs, Residential proxies are
                  instantly delivered to your dashboard.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <div className="faq-wrapper text-center p-3">
                <h1 className="main-color font-weight-bolder">4.</h1>
                <h4
                  className="text-white font-weight-bolder my-3"
                  style={{ fontSize: '20px' }}
                >
                  How do I renew <br /> my plan?
                </h4>
                <p className="text-white my-3" style={{ fontSize: '13px' }}>
                  Residential proxies can be topped up directly from your
                  dashboard, to renew ISPs or DCs please open a ticket in our
                  discord server.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* last section */}
      <section className="p-5">
        <div className="container text-center">
          <h1
            className="text-white font-weight-bolder"
            style={{ fontSize: '40px' }}
          >
            Follow us on Twitter
          </h1>
          <p className="text-white my-4" style={{ fontSize: '20px' }}>
            @deathproxies
          </p>

          <button
            className="btn follow-btn text-white px-4"
            onClick={() => {
              window.open('https://twitter.com/ProxiesDeath');
            }}
          >
            Follow us
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
