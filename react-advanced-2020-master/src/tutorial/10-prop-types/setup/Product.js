import React from "react";
import PropTypes from "prop-types";
import defaultImage from "../../../assets/default-image.jpeg";

const Product = ({ image, name, price }) => {
  const url = image && image.url;

  return (
    <article className="product">
      {/* <h4>Single Product</h4> */}
      <img src={url || defaultImage} alt={name || "Default Name"} />
      <h4>{name}</h4>
      <p>{price || 3.99}</p>
    </article>
  );
};

// Check the prop types from the JSON api is available.
Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

// If any missing these default values are assigned.
Product.defaultProps = {
  name: 'Default Name',
  price: 3.99,
  image: defaultImage
}
 
export default Product;
