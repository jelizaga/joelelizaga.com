import { Show, createSignal } from "solid-js";
import MediaContainerInt from "./MediaContainerInt";
import MediaCaptionInt from "./MediaCaptionInt";
import MediaPopupInt from "./MediaPopupInt";

export default function MediaInt(props:any) {

  // Popup:
  const popup = props.popup;

  // Multiple media:
  const arr = props.arr;
  const isCarousel = (arr != undefined);
  const aspectRatio = props.aspectRatio;

  // Single media:
  const src = props.src;
  const alt = props.alt;
  const caption = props.caption;

  // Signals:
  const [
    popupIsOpen,
    setPopupIsOpen
  ] = createSignal(false);
  const [
    index,
    setIndex
  ] = createSignal(0)

  // Popup:
  const withinPopup = false;

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
      class={
        `media 
        ${(caption != undefined) ? "captioned" : ""}
        ${(isCarousel && arr[index()].caption != undefined) ? "captioned" : ""}
        ${(isCarousel) ? "carousel" : ""}
      `}
    >
      {popupIsOpen() &&
        <MediaPopupInt
          client:load
          setPopupIsOpen={setPopupIsOpen}
          popupIsOpen={popupIsOpen}
          togglePopup={togglePopup}
          src={src}
          alt={alt}
          caption={caption}
          arr={arr}
          index={index}
          setIndex={setIndex}
          isCarousel={isCarousel}
        />
      }
      <MediaContainerInt
        client:load
        src={src}
        alt={alt}
        setPopupIsOpen={setPopupIsOpen}
        popupIsOpen={popupIsOpen}
        togglePopup={togglePopup}
        withinPopup={withinPopup}
        arr={arr}
        index={index}
        setIndex={setIndex}
        isCarousel={isCarousel}
        aspectRatio={aspectRatio}
      />
      <MediaCaptionInt
        client:load
        caption={caption}
        arr={arr}
        index={index}
        isCarousel={isCarousel}
      />
    </div>
  )
}