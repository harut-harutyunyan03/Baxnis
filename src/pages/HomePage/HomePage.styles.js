import styled from "styled-components/macro";
import {GrNext} from 'react-icons/gr'
import {GrPrevious} from 'react-icons/gr'

export const Header = styled.div`
  width: 100%;
  height: 70px;
  background: #ffffff;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const HeaderContainer = styled.div`
width:1300px;
display: flex;
justify-content: space-around;
align-items: center;
`
export const HeaderText = styled.p`
  font-size: 18px;
  color: black;
`;
export const PhoneNumber = styled.p`
  color: black;
  font-size: 20px;
  cursor: pointer;
`;
export const ProductsBlock = styled.div`
  width: 100%;
  background: #e5e5e5;
  display: grid;
  gap:50px;
  justify-content: center;
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }

  padding: 50px 350px;
`;
export const ProductItem = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  width: 100%;
`;
export const ProductImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

export const NewPrice = styled.div`
  font-family: DM Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  color: #000000;
`;
export const OldPrice = styled.div`
  text-decoration: line-through;
  color: #000000;
  opacity: 0.5;
  font-size: 13px;
  margin-top: 10px;
`;
export const ItemInformation = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  margin-top: 20px;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 10px 0 10px;
`;

export const SaveContainer = styled.div``;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const PricesContainer = styled.div`

`;

export const InputContainer = styled.div`
position: relative;
`;
export const HeaderInput = styled.input`
border: 1px solid black;
  padding: 12px;
  width: 400px;
  border: none;
  font-size: 15px;
  padding-right: 40px;
;

`;
export const SearchContainer = styled.div`
  width: 500px;
  display: inline-block;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const IconContainer = styled.div`
  width: 50px;
  position: relative;
  right: 30px;
  font-size: 20px;
  opacity: 0.5;
  cursor: pointer;
  padding:0 20px;
  right: 50px;
  top: 3px; 
`;
export const FaPhoneAltContainer = styled.div`
  cursor: pointer;
 `
 export const CaruselContainer = styled.div`
 display: flex;
 justify-content:center;
 align-items:center;
 background: #e5e5e5;

 `
 export const SliderItems= styled.div`
 height:300px;
 width:300px;
 border-radius:15px;
 align-items:center;
 display:flex;
 `

export const TopProductsParagraf = styled.p`
align-items:center;
 font-size:30px; 
color: black;
background: #e5e5e5;

`
export const TopProductsContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
background: #e5e5e5;
padding:50px;
`
export const ProductImageTop = styled.img`
  width: 200px;
  border-radius: 20px;
  height: 200px;
  align-items:center;
  cursor: pointer;
`;
export const NextButton = styled(GrNext)`
cursor: pointer;
`
export const PrevButton = styled(GrPrevious)`
cursor: pointer;
`
