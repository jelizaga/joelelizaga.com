////////////////////////////////////////////////////////////////////////////////
// NNImagePopup.tsx ////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Image & carousel popup.

import { render } from "solid-js/web";
import { createSignal } from "solid-js";
import hotkeys from "hotkeys-js";
import NNCarouselPagination from "./NNCarouselPagination";

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
  // `closePopup` - Closes the popup.
  const closePopup = () => {
    props.setPopupIsOpen(false);
  }
  // `fullscreenPopup` - Maximizes the popup to fullscreen.
  const fullscreenPopup = () => {
    if (!document.fullscreenElement) {
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
    } else {
      document.exitFullscreen();
    }
  }
  // `unFullscreenPopup` - Minimizes the popup to non-fullscreen.
  const unFullscreenPopup = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen().then(() =>
        setPopupIsFullscreen(false)
      );
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen(() =>
        setPopupIsFullscreen(false)
      );
    } else if (document.msRequestFullscreen) {
      document.msExitFullscreen(() =>
        setPopupIsFullscreen(false)
      );
    }
  }
  // `escFullscreen` - Resets popupIsFullscreen to `false` when user `esc`s
  // out of fullscreen mode.
  const escFullscreen = () => {
    if (!document.fullscreenElement && !document.webkitIsFullScreen && !document.mozFullScreen && !document.msFullscreenElement) {
      setPopupIsFullscreen(false);
    }
  }
  document.addEventListener('fullscreenchange', escFullscreen);
  document.addEventListener('webkitfullscreenchange', escFullscreen);
  document.addEventListener('mozfullscreenchange', escFullscreen);
  document.addEventListener('MSFullscreenChange', escFullscreen);
  // Hotkeys ///////////////////////////////////////////////////////////////////
  // `esc` - Close popup if open, minimize popup if fullscreen'd.
  hotkeys("esc", function(event, handler) {
    if (!document.fullscreenElement) {
      closePopup();
    }
  })
  // `left` - Focuses image to the left in carousel.
  hotkeys("left", function(event, handler) {
    if (props.popupIsOpen()) {
      props.carouselLeft();
    }
  })
  // `right` - Focuses image to the right in carousel.
  hotkeys("right", function(event, handler) {
    if (props.popupIsOpen()) {
      props.carouselRight();
    }
  })
  //////////////////////////////////////////////////////////////////////////////
  return (
    <div class="noonoo-image-popup">
      <div class="popup-background" onClick={closePopup}></div>
      <div 
        class={popupIsFullscreen() ? "popup fullscreen" : "popup"} 
        ref={popup}
      >
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
          <div class="carousel-left" onClick={props.carouselLeft}>
            <button class="carousel-button">
              <i class="fa-solid fa-chevron-left"></i>
            </button>
            <div class="shadow"></div>
          </div>
          <div class="carousel-right" onClick={props.carouselRight}>
            <button class="carousel-button">
              <i class="fa-solid fa-chevron-right"></i>
            </button>
            <div class="shadow"></div>
          </div>
          <a href={props.images[props.focusedImage()].src}></a>
          <NNCarouselPagination
            client:load
            images={props.images}
            focusedImage={props.focusedImage}
            setFocusedImage={props.setFocusedImage}
          />
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