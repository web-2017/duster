import React, { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import CheckoutSection from "../../components/CheckoutSection";
import Scrollbar from "../../components/scrollbar/scrollbar";
import { connect } from "react-redux";
import Logo from "../../assets/logo-2.png";
import Footer from "../../components/footer/Footer";

const CheckoutPage = ({ cartList }) => {
  return (
    <Fragment>
      <Navbar hclass={"header-style-3"} Logo={Logo} />
      <PageTitle pageTitle={"Checkout"} pagesub={"Checkout"} />
      <CheckoutSection cartList={cartList} />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
const mapStateToProps = (state) => {
  return {
    cartList: state.cartList.cart,
    symbol: state.data.symbol,
  };
};

export default connect(mapStateToProps)(CheckoutPage);
