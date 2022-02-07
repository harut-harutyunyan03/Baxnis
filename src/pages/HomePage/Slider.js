import React, { Component } from "react";
import Carousel from 'react-simply-carousel'
import * as S from "./HomePage.styles";
import {GrNext} from 'react-icons/gr'
import {GrPrevious} from 'react-icons/gr'

class Carusel extends Component {
  state = {
    activeSlideIndex: 0,
  };

setActiveSlideIndex = (newActiveSlideIndex) => {
    this.setState({
     activeSlideIndex: newActiveSlideIndex,
    });
  };

  render() {
    return (
      <>
      <S.PrevButton onClick={()=>{}}/>
      <Carousel
        activeSlideIndex={this.state.activeSlideIndex}
        onRequestChange={this.setActiveSlideIndex}
        itemsToShow={3}
        itemsToScroll={3}
      >
        
        <S.SliderItems><S.ProductImageTop  src='https://qph.fs.quoracdn.net/main-qimg-b65f2600ed40b9cd9128954c80ff1081'/> </S.SliderItems>
        <S.SliderItems><S.ProductImageTop  src='https://qph.fs.quoracdn.net/main-qimg-b65f2600ed40b9cd9128954c80ff1081'/> </S.SliderItems>
        <S.SliderItems><S.ProductImageTop  src='https://qph.fs.quoracdn.net/main-qimg-b65f2600ed40b9cd9128954c80ff1081'/> </S.SliderItems>
        <S.SliderItems><S.ProductImageTop  src='https://qph.fs.quoracdn.net/main-qimg-b65f2600ed40b9cd9128954c80ff1081'/> </S.SliderItems>
        <S.SliderItems><S.ProductImageTop  src='https://qph.fs.quoracdn.net/main-qimg-b65f2600ed40b9cd9128954c80ff1081'/> </S.SliderItems>
        <S.SliderItems><S.ProductImageTop  src='https://qph.fs.quoracdn.net/main-qimg-b65f2600ed40b9cd9128954c80ff1081'/> </S.SliderItems>
        <S.SliderItems><S.ProductImageTop  src='https://qph.fs.quoracdn.net/main-qimg-b65f2600ed40b9cd9128954c80ff1081'/> </S.SliderItems>
        <S.SliderItems><S.ProductImageTop  src='https://qph.fs.quoracdn.net/main-qimg-b65f2600ed40b9cd9128954c80ff1081'/> </S.SliderItems>
        <S.SliderItems><S.ProductImageTop  src='https://qph.fs.quoracdn.net/main-qimg-b65f2600ed40b9cd9128954c80ff1081'/> </S.SliderItems>
        <S.SliderItems><S.ProductImageTop  src='https://qph.fs.quoracdn.net/main-qimg-b65f2600ed40b9cd9128954c80ff1081'/> </S.SliderItems>

      </Carousel>
      <S.NextButton />
      </>
    );
  }
}
export default Carusel;