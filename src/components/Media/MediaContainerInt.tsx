import { Show, createSignal } from "solid-js";

export default function MediaContainerInt(props:any) {

  // Single media:
  const src = props.src;
  const alt = props.alt;

  // Multiple media:
  const arr = props.arr;
  const index = props.index;
  const setIndex = props.setIndex;
  const isCarousel = (arr != undefined);

  // Popup:
  const popupIsOpen = props.popupIsOpen;
  const setPopupIsOpen = props.setPopupIsOpen;
  const withinPopup = props.withinPopup;

  const togglePopup = () => {
    if (!withinPopup) {
      if (popupIsOpen()) {
        setPopupIsOpen(false);
      } else {
        setPopupIsOpen(true);
      }
    }
  }

  return (
    <div 
      class="container"
      onClick={togglePopup}
    >
      <Show 
        when={(!isCarousel && src)}
      >
        <img 
          src={src}
          alt={alt}
        />
      </Show>
      <Show
        when={(isCarousel)}
      >
        <img 
          src={arr[index()].src}
          alt=""
        />
      </Show>
    </div>
  )
}