////////////////////////////////////////////////////////////////////////////////
// NNCarouselPagination.tsx ////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Pagination bar overlaying `NNCarousel`.
import { render } from "solid-js/web";
import { createSignal, For } from "solid-js";
import NNCarouselPaginationPage from "./NNCarouselPaginationPage";

interface Image {
  src: string;
  alt: string;
  caption?: string;
  animated?: boolean;
}

interface CarouselImages {
  images: Image[];
}

export default function NNCarouselPagination(props: any) {
  return (
    <div class="carousel-pagination">
      <For each={props.images}>{(image, i) =>
        <NNCarouselPaginationPage 
          client:load
          index={i()}
          focusedImage={props.focusedImage}
          setFocusedImage={props.setFocusedImage}
        />
      }</For>
    </div>
  )
}

