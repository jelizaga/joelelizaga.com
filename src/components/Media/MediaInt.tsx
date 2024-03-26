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

  // Single media:
  const src = props.src;
  const alt = props.alt;
  const caption = props.caption;
  const isVideo = props.isVideo;

  // Display:
  const float = props.float;
  const borderRadius = props.borderRadius;
  const aspectRatio = props.aspectRatio;
  const depth = props.depth;

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
    console.dir(arr);
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
        ${(float == "right") ? "float-right" : ""}
        ${(float == "left") ? "float-left" : ""}
        ${(depth == "flat") ? "flat" : ""}
        ${(depth == "protrusion") ? "protrusion" : ""}
        ${(borderRadius) ? "" : "straight-edges"}
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
        isVideo={isVideo}
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