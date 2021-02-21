import React from 'react';
import Header from '../components/Header';
const Product = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 product-bg p-5 d-flex flex-column justify-content-between">
            <div>
              <h1 className="text-white fs-32 ">Premium Residential</h1>
              <ul className="text-white ml-3">
                <li className="my-1">Very fast speed between 100-500ms</li>
                <li className="my-1">
                  Unbanned on most sites including Footlocker EU, Footsites,
                  Shopify Anti-Bot, Mesh, Solebox, Supreme, Naked and many more{' '}
                </li>
                <li className="my-1">
                  Access to over 120 regions including our special Mesh pool
                </li>
                <li className="my-1">Proxy format: IP:PORT:USER:PASS</li>
              </ul>
            </div>

            <div className="d-flex mt-4">
              <div className="select-container">
                <select name="" id="" className="">
                  <option value="">€17/1GB</option>
                </select>
              </div>
              <button className="btn primary-btn fs-13 font-weight-bold mx-3">
                Purchase now
              </button>
            </div>
          </div>
          {/* right side of 1st row */}
          <div className="col-12 col-md-6 product-bg p-5 d-flex flex-column justify-content-between">
            <div>
              <h1 className="text-white fs-32 ">Raffle Residential</h1>
              <ul className="text-white ml-3">
                <li className="my-1"> Prefect for raffle botting </li>
                <li className="my-1">No expiration</li>
                <li className="my-1">Access to over 90 regions</li>
                <li className="my-1">Proxy format: IP:PORT:USER:PASS</li>
              </ul>
            </div>

            <div className="d-flex mt-4">
              <div className="select-container">
                <select name="" id="" className="">
                  <option value="">€5/1GB</option>
                </select>
              </div>
              <button className="btn primary-btn fs-13 font-weight-bold mx-3">
                Purchase now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        {/* bottom row */}
        <div className="row">
          <div className="col-12 col-md-6 product-bg p-5 d-flex flex-column justify-content-between">
            <div>
              <h1 className="text-white fs-32 ">Death ISP</h1>
              <ul className="text-white ml-3">
                <li className="my-1">
                  Unbanned on most sites including Footlocker EU, Footsites,
                  Shopify Anti-Bot, Mesh, Solebox, Supreme, Naked and many more{' '}
                </li>
                <li className="my-1">Expires after 1 month</li>
                <li className="my-1">Location UK</li>
                <li className="my-1">Proxy format: IP:PORT:USER:PASS</li>
              </ul>
            </div>

            <div className="d-flex mt-4">
              <div className="select-container">
                <select name="" id="" className="">
                  <option value="">€50/25 ISPs</option>
                </select>
              </div>
              <button className="btn primary-btn fs-13 font-weight-bold mx-3">
                Purchase now
              </button>
            </div>
          </div>
          {/* right side of 2nd row */}
          <div className="col-12 col-md-6 product-bg p-5 d-flex flex-column justify-content-between">
            <div>
              <h1 className="text-white fs-32 ">Death Weekly DCs</h1>
              <ul className="text-white ml-3">
                <li className="my-1"> Blazing fast speeds between 9-70ms </li>
                <li className="my-1">
                  Unbanned on most sites including Footlocker EU, Footsites,
                  Shopify Anti-Bot, Mesh, Solebox, Supreme, Naked and many more
                </li>
                <li className="my-1"> Expires after 7 days</li>
                <li className="my-1">
                  Location random or on demand, if stock left, in ticket:
                  Netherlands, France, Germany
                </li>
                <li className="my-1">Proxy format: IP:PORT:USER:PASS</li>
              </ul>
            </div>

            <div className="d-flex mt-4">
              <div className="select-container">
                <select name="" id="" className="">
                  <option value="">€17,50/25</option>
                </select>
              </div>
              <button className="btn primary-btn fs-13 font-weight-bold mx-3">
                Purchase now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
