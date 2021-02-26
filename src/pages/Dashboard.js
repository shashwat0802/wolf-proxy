import React from 'react';
const Dashboard = () => {
  return (
    <>
      <nav className="my-3">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img src={require('../img/logo2.svg').default} alt="" />
            <h1 className="mx-3 primary-color fs-20 pt-2 ">WOLF Proxies</h1>
          </div>
          <div className="d-flex align-items-center">
            <select
              name=""
              id=""
              className="text-white border-0 font-weight-bolder"
              style={{ background: 'transparent' }}
            >
              <option value=""></option>
              <option value="">somthing</option>
            </select>
            <img
              src={require('../img/Spaced.svg').default}
              alt=""
              className="ml-3 circle"
            />
          </div>
        </div>
      </nav>
      <section className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="d-flex justify-content-between">
                <div className="content-bg p-5">
                  <h3 className="primary-color fs-24 font-weight-bolder ls-1">
                    Hello, Spaced
                  </h3>
                  <p className="font-weight-bold fourth-color mt-4 fs-12">
                    Active plans
                  </p>
                  <div className="d-flex">
                    <div className="subcontent-bg px-3 d-flex flex-column justify-content-center mr-2">
                      <h3 className="fs-18 fifth-color ">5GB</h3>
                      <h3 className="sixth-color fs-12 m-0">Residential</h3>
                    </div>
                    <div className="subcontent-bg px-3 d-flex flex-column justify-content-center ml-2">
                      <h3 className="fs-18 fifth-color ">25GB</h3>
                      <h3 className="sixth-color fs-12 m-0">ISP</h3>
                    </div>
                  </div>
                </div>
                {/* left-right */}
                <div className="content-bg d-flex justify-content-center align-items-center p-5">
                  <div className="data-circle  d-flex justify-content-center align-items-center flex-column   ">
                    <p
                      style={{ fontSize: '10px' }}
                      className="sixth-color font-weight-bold mb-1 "
                    >
                      Residential
                    </p>
                    <h3 className="primary-color fs-28 my-1">28GB</h3>
                    <p
                      className="sixth-color font-weight-bold my-0 "
                      style={{ fontSize: '10px' }}
                    >
                      of 5GB
                    </p>
                  </div>
                </div>
              </div>
              {/* left bottom */}
              <div className="mt-4">
                <h3 className="primary-color fs-18 mb-3">Generate Proxies</h3>
                <div>
                  <div className="header-bg px-3">
                    <ul
                      className="list-unstyled font-weight-bold d-flex m-0"
                      style={{ fontSize: '14px' }}
                    >
                      <li className="underline active-link mx-3 py-3">
                        Residential
                      </li>
                      <li
                        className=" mx-3 py-3"
                        style={{ color: 'rgba(229, 228, 255, 0.404001)' }}
                      >
                        ISP
                      </li>
                    </ul>
                  </div>
                  <div
                    className="p-3 content-bg"
                    style={{ borderRadius: '0 0 8px 8px' }}
                  >
                    <div className="d-flex justify-content-around mt-3">
                      <div className="custom-select">
                        <select
                          name=""
                          id=""
                          className="fifth-color w-100 fs-12 h-100 border-0"
                        >
                          <option value="">Select Country</option>
                        </select>
                      </div>
                      <div className="custom-select">
                        <select
                          name=""
                          id=""
                          className="fifth-color w-100 fs-12 h-100 border-0"
                        >
                          <option value="">Select State</option>
                        </select>
                      </div>
                    </div>
                    <div className="d-flex justify-content-around my-3">
                      <div className="custom-select">
                        <select
                          name=""
                          id=""
                          className="fifth-color w-100 fs-12 h-100 border-0"
                        >
                          <option value="">Select City</option>
                        </select>
                      </div>
                      <div className="d-flex justify-content-between">
                        <input
                          type="number"
                          className="custom-input fifth-color px-3"
                        />
                        <button className="custom-btn fifth-color px-3 py-1 mx-2 font-weight-bold fs-20">
                          -
                        </button>
                        <button className="custom-btn fifth-color px-3 py-1 font-weight-bold fs-20">
                          +
                        </button>
                      </div>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="ml-auto border-0 custom-btn fifth-color px-5 py-2 mr-2">
                        Generate
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;
