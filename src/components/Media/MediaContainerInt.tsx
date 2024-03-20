import { Show, createSignal } from "solid-js";
import MediaNavigationInt from "./MediaNavigationInt";
import MediaExpandInt from "./MediaExpandInt";
import MediaPaginationInt from "./MediaPaginationInt";

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

  // Loading:
  const [
    mediaLoaded,
    setMediaLoaded
  ] = createSignal(false);

  const handleMediaLoaded = () => {
    setMediaLoaded(true);
  }

  return (
    <div 
      class={`
        container
        ${(isCarousel) ? "carousel" : ""}
      `}
    >
      <Show 
        when={(!isCarousel && src)}
      >
        <MediaExpandInt
          withinPopup={withinPopup}
          togglePopup={togglePopup}
          src={src}
        />
        <img 
          src={src}
          alt={alt || ""}
          onload={handleMediaLoaded}
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
        <MediaNavigationInt
          dir="next"
          arr={arr}
          index={index}
          setIndex={setIndex}
        />
        <MediaExpandInt
          withinPopup={withinPopup}
          togglePopup={togglePopup}
          arr={arr}
          index={index}
          isCarousel={isCarousel}
        />
        <img 
          src={arr[index()].src}
          alt={alt || ""}
        />
        <MediaPaginationInt
          arr={arr}
          index={index}
          setIndex={setIndex}
        />
      </Show>
    </div>
  )
}