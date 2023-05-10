////////////////////////////////////////////////////////////////////////////////
// NNCarousel.tsx //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Interactive image/video carousel.

import { render } from "solid-js/web";
import { createSignal, createEffect, For } from "solid-js";
import NNCarouselPagination from "./NNCarouselPagination";
import NNImagePopup from "./NNImagePopup";

interface Image {
  src: string;
  alt: string;
  caption?: string;
  animated?: boolean;
}

interface CarouselImages {
  images: Image[];
}

export default function NNCarousel(props: any) {
  // `focusedImage` - Index of the carousel's currently focused `Image` in
  // `image`. 
  const [focusedImage, setFocusedImage] = createSignal(0);
  const [popupIsOpen, setPopupIsOpen] = createSignal(false);
  // Classes ///////////////////////////////////////////////////////////////////
  // Corners:
  let carouselClasses = "noonoo-carousel";
  let containerClasses = "container";
  if (props.straightCorners) {
    containerClasses += " straight-corners";
  } else {
    carouselClasses += " round-corners";
    containerClasses += " round-corners";
  }
  // Caption:
  let captioned = false;
  props.images.forEach(image => {
    if (image.caption) {
      captioned = true;
    }
  });
  if (captioned) {
    carouselClasses += " captioned";
    containerClasses += " captioned";
  }
  // Neumorphic shape:
  if (!props.display) {
    containerClasses += " depressed";
  } else {
    switch(props.display) {
      case "depressed":
        containerClasses += " depressed";
        break;
      case "protruding":
        containerClasses += " protruding";
        break;
      case "flat":
        containerClasses += "flat";
        break;
    }
  }
  // Aspect ratio:
  if (props.aspectRatio) {
    switch(props.aspectRatio) {
      case "16 / 9":
        containerClasses += " aspect-ratio-sixteen-nine";
        break;
      case "9 / 16":
        containerClasses += " aspect-ratio-nine-sixteen";
        break;
      case "1 / 1":
        containerClasses += " aspect-ratio-one-one";
        break;
      case "3 / 2":
        containerClasses += " aspect-ratio-three-two";
        break;
      case "5 / 4":
        containerClasses += " aspect-ratio-five-four";
        break;
    }
  }
  // Functions /////////////////////////////////////////////////////////////////
  // `carouselLeft` - Focuses image to the left of the current image.
  const carouselLeft = () => {
    if (focusedImage() == 0) {
      setFocusedImage(props.images.length - 1);
    } else {
      setFocusedImage(focusedImage() - 1);
    }
  }
  // `carouselRight` - Focuses image to the right of the current image.
  const carouselRight = () => {
    if (focusedImage() == props.images.length - 1) {
      setFocusedImage(0);
    } else {
      setFocusedImage(focusedImage() + 1);
    }
  }
  // `openPopup` - Opens NNImagePopup.
  const openPopup = () => {
    setPopupIsOpen(true);
  }
  //////////////////////////////////////////////////////////////////////////////
  return (
    <>
      {popupIsOpen() &&
        <NNImagePopup
          client:load
          images={props.images}
          focusedImage={focusedImage}
          setFocusedImage={setFocusedImage}
          popupIsOpen={popupIsOpen}
          setPopupIsOpen={setPopupIsOpen}
          carouselLeft={carouselLeft}
          carouselRight={carouselRight}
        />
      }
      <div class={carouselClasses}>
        <div class={containerClasses}>
          <div class="carousel-left" onClick={carouselLeft}>
            <button class="carousel-button">
              <i class="fa-solid fa-chevron-left"></i>
            </button>
            <div class="shadow"></div>
          </div>
          <div class="expand-image" onClick={openPopup}>
          </div>
          <div class="carousel-right" onClick={carouselRight}>
            <button class="carousel-button">
              <i class="fa-solid fa-chevron-right"></i>
            </button>
            <div class="shadow"></div>
          </div>
          <NNCarouselPagination
            client:load
            images={props.images}
            focusedImage={focusedImage}
            setFocusedImage={setFocusedImage}
          />
          {! props.images[focusedImage()].animated &&
            <img src={`${props.images[focusedImage()].src}`} />
          }
          {props.images[focusedImage()].animated &&
            <video
              autoplay 
              muted 
              loop 
              src={`${props.images[focusedImage()].src}`}
            />
          }
        </div>
        {props.images[focusedImage()].caption &&
          <p class="caption">
            {`${props.images[focusedImage()].caption}`}
          </p>
        }
      </div>
      <noscript>
        <For each={props.images}>{(image, i) =>
          <div class="noonoo-image captioned">
            <div class={containerClasses}>
              {!image.animated &&
                <img src={image.src} alt={image.alt} />
              }
              {image.animated &&
                <video autoplay loop muted src={image.src}></video>
              }
            </div>
            {image.caption &&
              <p class="caption">{image.caption}</p>
            }
          </div>
        }</For>
      </noscript>
    </>
  )
}

