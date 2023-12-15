import React from 'react';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { IoIosArrowRoundUp } from "react-icons/io";

const Item = (props) => {
  return (
    <div className='item-container'>
      <i className="icon-best"><span>베스트</span></i>
      <figure>
        <figcaption hidden>상품 이미지</figcaption>
        <img src={props.imgSrc} alt='' />
      </figure>
      <div className="item-content">
        <em className='region'>{props.region}</em>
        <span className='product-name'>{props.productName}</span>
        <span className='price'>{props.price}원</span>
        <p className='condition'>{props.date}부터 사용가능</p>
        <div className='grade'>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
          <i>({props.starNum})</i>
        </div>
        <div className='info'>
          <span>구매 {props.buy} <IoIosArrowRoundUp /></span>
          <span>조회 {props.hits} <IoIosArrowRoundUp /></span>
        </div>
      </div>
    </div>
  )
}

export default Item;