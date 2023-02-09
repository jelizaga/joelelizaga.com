////////////////////////////////////////////////////////////////////////////////
// NNImagePopupCarouselContainer.tsx ///////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Image / video container of carousel popup.

import { Switch } from "solid-js"
import NNCarouselPagination from "./NNCarouselPagination"

export default function NNImagePopupCarouselContainer(props: any) {
  return (
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
      <Switch>
        <Match when={!props.images[props.focusedImage()].animated}>
          <img
            src={props.images[props.focusedImage()].src}
            alt={props.images[props.focusedImage()].alt}
          />
        </Match>
        <Match when={props.images[props.focusedImage()].animated}>
          <video 
            autoplay
            loop
            muted
            src={props.images[props.focusedImage()].src}
          ></video>
        </Match>
      </Switch>
    </div>
  )
}