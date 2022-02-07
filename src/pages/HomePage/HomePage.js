import * as S from "./HomePage.styles";
import React, { useState } from "react";
import { productItem } from "./HomePage.helpers";
import { AiOutlineSearch } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { BsFillBookmarkFill } from "react-icons/bs";
import { GrBookmark } from "react-icons/gr";
import Carusel from './Slider'
import {GrNext} from 'react-icons/gr'
import {GrPrevious} from 'react-icons/gr'

export const GlobalPage = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleBookmarkClick = (id) => {
    if (selectedItems.includes(id)) {
      let newArr = selectedItems.filter(
        (el, index) => selectedItems[index] !== id
      );
      setSelectedItems([...newArr]);
      
    } else {
      setSelectedItems([...selectedItems, id]);
      
    }
  };
  
  return (
    <>

      <S.Header>
        <S.HeaderContainer>
        <S.HeaderText>Test.am</S.HeaderText>
        <S.SearchContainer>
          <S.HeaderInput  placeholder="Serach" />
          <S.IconContainer>
            <AiOutlineSearch />
          </S.IconContainer>
        </S.SearchContainer>
        <S.PhoneNumber>
          <S.FaPhoneAltContainer>
          <FaPhoneAlt /> +37493307577
          </S.FaPhoneAltContainer>
        </S.PhoneNumber>
        </S.HeaderContainer>
      </S.Header>
      <S.ProductsBlock>
        {productItem.map((item) => {
          return (
            <S.ProductItem>
              <S.ProductImage src={item.img} />
              <S.PriceContainer>
                <S.ContentContainer>
                  <S.PricesContainer>
                    <S.NewPrice>{item.newPrice}</S.NewPrice>
                    <S.OldPrice>{item.oldPrice}</S.OldPrice>
                  </S.PricesContainer>
                  <S.SaveContainer onClick={() => handleBookmarkClick(item.id)}>
                    {selectedItems.includes(item.id) ? (
                      <BsFillBookmarkFill />
                    ) : (
                      <GrBookmark />
                    )}
                  </S.SaveContainer>
                </S.ContentContainer>
                <S.ItemInformation>{item.information}</S.ItemInformation>
              </S.PriceContainer>
            
            </S.ProductItem>
            
          );
          
        })}
          
      </S.ProductsBlock>
      <S.TopProductsContainer>
      <S.TopProductsParagraf>Top Products</S.TopProductsParagraf>
      </S.TopProductsContainer>
      <S.CaruselContainer>
              
                 <Carusel/>
              
      </S.CaruselContainer>
     
      </>
  );
};
