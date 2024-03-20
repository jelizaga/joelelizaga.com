import { Show, createSignal } from "solid-js";
import MediaNavigationInt from "./MediaNavigationInt";
import MediaExpandInt from "./MediaExpandInt";

export default function MediaContainerInt(props:any) {

  // Single media:
  const src = props.src;
  const alt = props.alt;

  // Multiple media:
  const arr = props.arr;
  const index = props.index;
  const setIndex = props.setIndex;
  const isCarousel = props.isCarousel;

  // Popup:
  const popupIsOpen = props.popupIsOpen;
  const setPopupIsOpen = props.setPopupIsOpen;
  const withinPopup = props.withinPopup;
  const togglePopup = props.togglePopup;

  return (
    <div 
      class="container"
    >
      <Show 
        when={(!isCarousel && src)}
      >
        <img 
          src={src}
          alt={alt || ""}
        />
      </Show>
      <Show
        when={(isCarousel)}
      >
        <MediaNavigationInt
          dir="prev"
          arr={arr}
          index={index}
          setIndex={setIndex}
        />
        <MediaExpandInt
          withinPopup={withinPopup}
          togglePopup={togglePopup}
        />
        <img 
          src={arr[index()].src}
          alt={alt || ""}
        />
        <MediaNavigationInt
          dir="next"
          arr={arr}
          index={index}
          setIndex={setIndex}
        />
      </Show>
    </div>
  )
}