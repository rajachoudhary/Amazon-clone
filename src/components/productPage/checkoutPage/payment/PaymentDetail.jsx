import React from "react"
import { NavLink } from "react-router-dom"
import Footer from "../../../navBar/footer/Footer"
import "./paymentdetail.css"
const PaymentDetail = () => {
  return (
    <>
      <div className="buynow_main">
        <nav>
          <img
            className="buynow_image"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/payselect/progressbar-payments._CB485947677_.gif"
            alt="gif"
          />
        </nav>
        <div className="buynow_main2">
          <h1 className="checout_headin">Select a payment method</h1>
          <div className="buyNow_container">
            <div className="buydiv">
              <input type="radio" name="b" />
              <span className="banking_name">Add Debit/Credit/ATM Card</span>
            </div>
            <div className="buydiv">
              <input type="radio" name="b" />
              <span className="banking_name">Net Banking</span> <br />
            </div>
            <div className="buydiv">
              <input type="radio" name="b" />
              <span className="banking_name"> Other UPI Apps</span>
            </div>
            <div className="buydiv">
              <input type="radio" name="b" />{" "}
              <span className="banking_name">EMI</span>
            </div>
            <div className="buydiv">
              <input type="radio" name="b" />

              <span className="banking_name">Pay on Delivery</span>
            </div>
          </div>
        </div>
        <div className="final_review">
         <NavLink to="/placed"> <button className="final_review_button">
            Continue
          </button></NavLink>
          <p className="final_review_button_p">
            You can review this order before it's final.
          </p>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default PaymentDetail
