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
  const [popupIsFullscreen, setPopupIsFullscreen] = createSignal(false);
  let popup;
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
  // `closePopup` - Closes the popup.
  const closePopup = () => {
    props.setPopupIsOpen(false);
  }
  // `fullscreenPopup` - Maximizes the popup to fullscreen.
  const fullscreenPopup = () => {
    if (popup.requestFullscreen) {
      popup.requestFullscreen();
      setPopupIsFullscreen(true);
    } else if (popup.webkitRequestFullscreen) {
      popup.webkitRequestFullscreen();
      setPopupIsFullscreen(true);
    } else if (popup.msRequestFullscreen) {
      popup.msRequestFullscreen();
      setPopupIsFullscreen(true);
    }
  }
  // `unFullscreenPopup` - Minimizes the popup to non-fullscreen.
  const unFullscreenPopup = () => {
    console.log("close");
    if (document.exitFullscreen) {
      document.exitFullscreen();
      setPopupIsFullscreen(false);
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
      setPopupIsFullscreen(false);
    } else if (document.msRequestFullscreen) {
      document.msExitFullscreen();
      setPopupIsFullscreen(false);
    }
  }
  //////////////////////////////////////////////////////////////////////////////
  return (
    <div class="noonoo-image-popup">
      <div class="popup-background" onClick={closePopup}></div>
      <div class="popup" ref={popup}>
        <div class="controls">
          {!popupIsFullscreen() &&
            <button class="fullscreen" onClick={fullscreenPopup}>
              <i class="fa-solid fa-expand"></i>
            </button>
          }
          {popupIsFullscreen() &&
            <button class="un-fullscreen" onClick={unFullscreenPopup}>
              <i class="fa-solid fa-compress"></i>
            </button>
          }
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
          <a href={props.images[props.focusedImage()].src}></a>
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