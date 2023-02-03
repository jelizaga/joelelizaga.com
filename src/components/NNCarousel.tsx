////////////////////////////////////////////////////////////////////////////////
// NNCarousel.tsx //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Interactive image/video carousel.

import { render } from "solid-js/web";
import { createSignal, createEffect, For } from "solid-js";
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

export default function NNCarousel(props: any) {
  // `focusedImage` - Index of the carousel's currently focused `Image` in
  // `image`. 
  const [focusedImage, setFocusedImage] = createSignal(0);
  // Classes ///////////////////////////////////////////////////////////////////
  // Corners:
  let imgClasses = "container";
  if (props.straightCorners) {
    imgClasses += " straight-corners";
  } else {
    imgClasses += " round-corners";
  }
  // Neumorphic shape:
  if (!props.display) {
    imgClasses += " depressed";
  } else {
    switch(props.display) {
      case "depressed":
        imgClasses += " depressed";
        break;
      case "protruding":
        imgClasses += " protruding";
        break;
      case "flat":
        imgClasses += "flat";
        break;
    }
  }
  // Aspect ratio:
  if (props.aspectRatio) {
    switch(props.aspectRatio) {
      case "16 / 9":
        imgClasses += " aspect-ratio-sixteen-nine";
        break;
      case "9 / 16":
        imgClasses += " aspect-ratio-nine-sixteen";
        break;
      case "1 / 1":
        imgClasses += " aspect-ratio-one-one";
        break;
      case "3 / 2":
        imgClasses += " aspect-ratio-three-two";
        break;
      case "5 / 4":
        imgClasses += " aspect-ratio-five-four";
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
  //////////////////////////////////////////////////////////////////////////////
  return (
    <>
      <div class="noonoo-carousel">
        <div class={imgClasses}>
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
          <NNCarouselPagination
            client:load
            images={props.images}
            focusedImage={focusedImage}
            setFocusedImage={setFocusedImage}
          />
          <img src={`${props.images[focusedImage()].src}`} />
        </div>
        {props.images[focusedImage()].caption &&
          <p class="caption">{`${props.images[focusedImage()].caption}`}</p>
        }
      </div>
      <noscript>
        <For each={props.images}>{(image, i) =>
          <div class="noonoo-image">
            <div class={imgClasses}>
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

