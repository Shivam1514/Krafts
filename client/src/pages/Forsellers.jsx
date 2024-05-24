import { useState } from "react";
import "../styles/forseller.css";
import PagesHeader from "../components/PagesHeader.jsx";
import Footer from "../components/Footer.jsx";
import BottomBar from "../components/BottomBar.jsx";

function SellerContact() {
  const [animationKey, setAnimationKey] = useState(0);
  const [sellerName, setSellerName] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [image, setImage] = useState(null);
  const [sellerNameValid, setSellerNameValid] = useState(true);
  const [productNameValid, setProductNameValid] = useState(true);
  const [productPriceValid, setProductPriceValid] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);

  function triggerAnimation() {
    setAnimationKey((prevKey) => prevKey + 1);
  }

  function validateForm() {
    console.log("Validating form...");
    let isValid = true;

    if (!sellerName.trim()) {
      setSellerNameValid(false);
      isValid = false;
    } else {
      setSellerNameValid(true);
    }

    if (!productName.trim()) {
      setProductNameValid(false);
      isValid = false;
    } else {
      setProductNameValid(true);
    }

    if (!productPrice.trim() || isNaN(productPrice)) {
      setProductPriceValid(false);
      isValid = false;
    } else {
      setProductPriceValid(true);
    }

    if (!isValid) {
      triggerAnimation();
    }

    return isValid;
  }

  function handleImageChange(event) {
    const selectedImage = event.target.files[0];
    setImage(selectedImage);
  }

  function submitForm(submit) {
    submit.preventDefault();
    if (validateForm()) {
      console.log(sellerName, productName, productPrice, image);
      setFormSubmitted(true);
    } else {
      setFormSubmitted(false);
    }
  }

  return (
    <div className="seller-contact-container">
      <PagesHeader />

      <form onSubmit={submitForm} className="seller-contact-form">
        <h1 className="seller-contact-head">For Sellers</h1>
        <input
          id="sellerName"
          key={`sellerName-${animationKey}`}
          type="text"
          name="sellerName"
          className={sellerNameValid ? "" : "seller-contact-error-input"}
          value={sellerName}
          onChange={(e) => setSellerName(e.target.value)}
          autoComplete="name"
          placeholder="Your Name"
        />

        <input
          id="productName"
          key={`productName-${animationKey}`}
          type="text"
          name="productName"
          className={productNameValid ? "" : "seller-contact-error-input"}
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          autoComplete="off"
          placeholder="Product Name"
        />

        <input
          id="productPrice"
          key={`productPrice-${animationKey}`}
          type="text"
          name="productPrice"
          className={productPriceValid ? "" : "seller-contact-error-input"}
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          autoComplete="off"
          placeholder="Product Price"
        />

        <input
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={handleImageChange}
        />

        <input type="submit" value="Send" />
        {formSubmitted && (
          <span className={`seller-thanks ${formSubmitted ? "visible" : ""}`}>
            Your request has been received. We will review it and get back to
            you soon.
          </span>
        )}
      </form>
      <Footer />
      <BottomBar />
    </div>
  );
}

export default SellerContact;
