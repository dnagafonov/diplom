import React from "react";
import PropTypes from "prop-types";
import ButtonOrder from "../../button/_order/button_order";
import PriceOldPriceList from "../../price-old-price/_list/price-old-price_list";

import "./list__seller.scss";

const ListSeller = ({ seller }) => {
  const { name, price, oldPrice, link } = seller;
  return (
    <>
      <div className="list__seller">
        <div className="seller__name">{name}</div>
        <div className="seller__buy">
          <PriceOldPriceList price={price} oldPrice={oldPrice} /> 
          <ButtonOrder href={link}>Заказать с Aliepress</ButtonOrder>
        </div>
      </div>
    </>
  );
};

ListSeller.propTypes = {
  seller: PropTypes.exact({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    oldPrice: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }),
};

export default ListSeller;
