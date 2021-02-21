import React from 'react';
import Header from '../components/Header';
const Product = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row d-flex justify-content-md-between">
          <div className="col-12 col-md-6 product-bg p-5 d-flex flex-column justify-content-between">
            <div>
              <h1 className="text-white fs-32 ">Premium Residential</h1>
              <ul className="text-white ml-3">
                <li className="my-0">Very fast speed between 100-500ms</li>
                <li className="my-0">
                  Unbanned on most sites including Footlocker EU, Footsites,
                  Shopify Anti-Bot, Mesh, Solebox, Supreme, Naked and many more{' '}
                </li>
                <li className="my-0">
                  Access to over 120 regions including our special Mesh pool
                </li>
                <li className="my-0">Proxy format: IP:PORT:USER:PASS</li>
              </ul>
            </div>

            <div className="d-flex mt-4">
              <div className="select-container">
                <select name="" id="" className="">
                  <option value="">€17/1GB</option>
                  <option value="">€34/2GB</option>
                  <option value="">€85/5GB</option>
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
                <li className="my-0"> Prefect for raffle botting </li>
                <li className="my-0">No expiration</li>
                <li className="my-0">Access to over 90 regions</li>
                <li className="my-0">Proxy format: IP:PORT:USER:PASS</li>
              </ul>
            </div>

            <div className="d-flex mt-4">
              <div className="select-container">
                <select name="" id="" className="">
                  <option value="">€5/1GB</option>
                  <option value="">€10/2GB</option>
                  <option value="">€50/5GB</option>
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
        <div className="row d-flex justify-content-md-between my-md-3 ">
          <div className="col-12 col-md-6 product-bg p-5 d-flex flex-column justify-content-around">
            <div>
              <h1 className="text-white fs-32 ">Death ISP</h1>
              <ul className="text-white ml-3">
                <li className="my-0">
                  Unbanned on most sites including Footlocker EU, Footsites,
                  Shopify Anti-Bot, Mesh, Solebox, Supreme, Naked and many more{' '}
                </li>
                <li className="my-0">Expires after 1 month</li>
                <li className="my-0">Location UK</li>
                <li className="my-0">Proxy format: IP:PORT:USER:PASS</li>
              </ul>
            </div>

            <div className="d-flex mt-4">
              <div className="select-container">
                <select name="" id="" className="">
                  <option value="">€50/25 ISPs</option>
                  <option value="">€100/50 ISPs</option>
                  <option value="">€200/100 ISPs</option>
                </select>
              </div>
              <button className="btn primary-btn fs-13 font-weight-bold mx-3">
                Purchase now
              </button>
            </div>
          </div>
          {/* right side of 2nd row */}
          <div className="col-12 col-md-6 product-bg p-5 d-flex flex-column justify-content-around">
            <div>
              <h1 className="text-white fs-32 ">Death Weekly DCs</h1>
              <ul className="text-white ml-3">
                <li className="my-0"> Blazing fast speeds between 9-70ms </li>
                <li className="my-0">
                  Unbanned on most sites including Footlocker EU, Footsites,
                  Shopify Anti-Bot, Mesh, Solebox, Supreme, Naked and many more
                </li>
                <li className="my-0"> Expires after 7 days</li>
                <li className="my-0">
                  Location random or on demand, if stock left, in ticket:
                  Netherlands, France, Germany
                </li>
                <li className="my-0">Proxy format: IP:PORT:USER:PASS</li>
              </ul>
            </div>

            <div className="d-flex mt-4">
              <div className="select-container">
                <select name="" id="" className="">
                  <option value="">€17,5/25</option>
                  <option value="">€35/50</option>
                  <option value="">€70/100</option>
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
