////////////////////////////////////////////////////////////////////////////////
// NNImagePopup.tsx ////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Image & carousel popup.

import { render } from "solid-js/web";
import { createSignal, createEffect, For } from "solid-js";

interface Image {
  src: string;
  alt: string;
  caption?: string;
  animated?: boolean;
}

interface CarouselImages {
  images: Image[];
}

export default function NNImagePopup(props: any) {
  // Functions /////////////////////////////////////////////////////////////////
  // `carouselLeft` - Focused image to the left of the current image.
  // `closePopup` - Closes this popup.
  const carouselLeft = () => {
    if (props.focusedImage() == 0) {
      props.setFocusedImage(props.images.length - 1);
    } else {
      props.setFocusedImage(props.focusedImage() - 1);
    }
  }
  // `carouselRight` - Focuses image to the right of the current image.
  const carouselRight = () => {
    if (props.focusedImage() == props.images.length - 1) {
      props.setFocusedImage(0);
    } else {
      props.setFocusedImage(props.focusedImage() + 1);
    }
  }
  const closePopup = () => {
    props.setPopupIsOpen(false);
  }
  //////////////////////////////////////////////////////////////////////////////
  return (
    <div class="noonoo-image-popup">
      <div class="popup-background" onClick={closePopup}></div>
      <div class="popup">
        <div class="controls">
          <button class="expand">
            <i class="fa-solid fa-expand"></i>
          </button>
          <button class="close" onClick={closePopup}>
            <i class="fa-solid fa-x"></i>
          </button>
        </div>
        <div class="container">
          <div class="carousel-left" onClick={carouselLeft}>
            <button class="carousel-button">
              <i class="fa-solid fa-chevron-left"></i>
            </button>
            <div class="shadow"></div>
          </div>
          <div class="carousel-right" onClick={carouselRight}>
            <button class="carousel-button">
              <i class="fa-solid fa-chevron-right"></i>
            </button>
            <div class="shadow"></div>
          </div>
          <img
            src={props.images[props.focusedImage()].src}
            alt={props.images[props.focusedImage()].alt}
          />
        </div>
        {props.images[props.focusedImage()].caption &&
          <p class="caption">
            {`${props.images[props.focusedImage()].caption}`}
          </p>
        }
      </div>
    </div>
  )
}