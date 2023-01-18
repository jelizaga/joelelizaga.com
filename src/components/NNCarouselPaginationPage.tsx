////////////////////////////////////////////////////////////////////////////////
// NNCarouselPaginationPage.tsx ////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Single pagination button associated with a single image in `NNCarousel`.
// Several `NNCarouselPaginationPage`s construct a `NNCarouselPagination` bar.
import { render } from "solid-js/web";
import { createEffect, createSignal, For } from "solid-js";

export default function NNCarouselPage(props) {
  // `paginationIndex` - Index of the `Image` associated with this
  // `NNCarouselPage`.
  const [paginationIndex, setPaginationIndex] = createSignal(props.index);
  const [pageIsSelected, setPageIsSelected] = createSignal(false);
  const buttonClasses = () => {
    return (paginationIndex() == props.focusedImage()) ? "selected" : "";
  }
  // Functions /////////////////////////////////////////////////////////////////
  // `carouselGoTo` - Focuses image associated with this `NNCarouselPage`.
  const carouselGoTo = () => {
    props.setFocusedImage(paginationIndex());
  }
  //////////////////////////////////////////////////////////////////////////////
  return (
    <button class={buttonClasses()} onClick={carouselGoTo}></button>
  )
}

