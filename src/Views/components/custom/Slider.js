import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

const Slider = () => {
  return (
    <SliderStyled>
      <Carousel autoPlay={true} autoFocus={true} showThumbs={false}>
        <div>
          <img src="https://static.wixstatic.com/media/60aa73_8d34fff29ba144b8929d73fc8f489934~mv2.jpg/v1/fill/w_1349,h_523,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/60aa73_8d34fff29ba144b8929d73fc8f489934~mv2.jpg" />
        </div>
        <div>
          <img src="https://static.wixstatic.com/media/60aa73_50d1657bd3294e8bae4efd5b90f87133~mv2.jpg/v1/fill/w_1349,h_523,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/60aa73_50d1657bd3294e8bae4efd5b90f87133~mv2.jpg" />
        </div>
        <div>
          <img src="https://static.wixstatic.com/media/60aa73_15cfe58110e941ea9d11bd0d74dd9131~mv2.jpg/v1/fill/w_1349,h_523,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/60aa73_15cfe58110e941ea9d11bd0d74dd9131~mv2.jpg" />
        </div>
        <div>
          <img src="https://static.wixstatic.com/media/60aa73_9cb737ed31994a1a8c5aee3bc041e32b~mv2.jpg/v1/fill/w_1349,h_523,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/60aa73_9cb737ed31994a1a8c5aee3bc041e32b~mv2.jpg" />
        </div>
        <div>
          <img src="https://www.uhlbd.com/backend/web/slider_images/16256576291.jpg" />
        </div>

        <div>
          <img src="https://www.uhlbd.com/backend/web/slider_images/16256576285.jpg" />
        </div>
        <div>
          <img src="https://www.uhlbd.com/backend/web/slider_images/16256576286.jpg" />
        </div>
        <div>
          <img src="https://www.uhlbd.com/backend/web/slider_images/16256576287.jpg" />
        </div>
        <div>
          <img src="https://www.uhlbd.com/backend/web/slider_images/16256576278.jpg" />
        </div>
        <div>
          <img src="https://www.uhlbd.com/backend/web/slider_images/16256576278.jpg" />
        </div>
        <div>
          <img src="https://www.uhlbd.com/backend/web/slider_images/162565769410.jpg" />
        </div>
        <div>
          <img src="https://www.uhlbd.com/backend/web/slider_images/162565769311.jpg" />
        </div>

        <div>
          <img src="https://static.wixstatic.com/media/60aa73_f11efc87a7a14871a9780f5b7aecd823~mv2.jpg/v1/fill/w_1349,h_523,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/60aa73_f11efc87a7a14871a9780f5b7aecd823~mv2.jpg" />
        </div>
      </Carousel>
    </SliderStyled>
  );
};

const SliderStyled = styled.div`
  margin-top: 60px;
  img {
    height: 90vh;
    @media (max-width: 700px) {
      height: 100%;
    }
  }
`;

export default Slider;
