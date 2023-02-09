////////////////////////////////////////////////////////////////////////////////
// NNImagePopup.tsx ////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Image & carousel popup.

import { render } from "solid-js/web";
import { createSignal, Switch } from "solid-js";
import hotkeys from "hotkeys-js";
import NNImagePopupCarouselContainer from "./NNImagePopupCarouselContainer";
import NNImagePopupImageContainer from "./NNImagePopupImageContainer";
import NNImagePopupCaption from "./NNImagePopupCaption";
import NNImagePopupControls from "./NNImagePopupControls";

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
  const popupIsCarousel = (props.images);
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
    if (popupIsCarousel && props.popupIsOpen()) {
      if (props.popupIsOpen()) {
        props.carouselLeft();
      }
    }
  })
  // `right` - Focuses image to the right in carousel.
  hotkeys("right", function(event, handler) {
    if (popupIsCarousel && props.popupIsOpen()) {
      if (props.popupIsOpen()) {
        props.carouselRight();
      }
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
        <NNImagePopupControls
          popupIsFullscreen={popupIsFullscreen}
          fullscreenPopup={fullscreenPopup}
          unFullscreenPopup={unFullscreenPopup}
          closePopup={closePopup}
        />
        <Switch>
          <Match when={popupIsCarousel}>
            <NNImagePopupCarouselContainer 
              client:load
              carouselLeft={props.carouselLeft}
              carouselRight={props.carouselRight}
              images={props.images}
              focusedImage={props.focusedImage}
              setFocusedImage={props.setFocusedImage}
            />
          </Match>
          <Match when={!popupIsCarousel}>
            <NNImagePopupImageContainer
              client:load
              src={props.src}
              alt={props.alt}
            />
          </Match>
        </Switch>
        <Switch>
          <Match when={popupIsCarousel}>
            {props.images[props.focusedImage()].caption &&
              <NNImagePopupCaption
                caption={props.images[props.focusedImage()].caption}
              />
            }
          </Match>
          <Match when={!popupIsCarousel}>
            {props.caption &&
              <NNImagePopupCaption
                caption={props.caption}
              />
            }
          </Match>
        </Switch>
      </div>
    </div>
  )
}