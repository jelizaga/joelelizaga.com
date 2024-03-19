import MediaCaptionInt from "./MediaCaptionInt";
import MediaContainerInt from "./MediaContainerInt";
import MediaPopupBackgroundInt from "./MediaPopupBackgroundInt";

export default function MediaPopupInt(props:any) {
  
  // Popup:
  const setPopupIsOpen = props.setPopupIsOpen;
  const popupIsOpen = props.popupIsOpen;
  const togglePopup = props.togglePopup;
  
  // Single media:
  const src = props.src; 
  const alt = props.alt;
  const caption = props.caption;

  // Multiple media:
  const arr = props.arr;
  const index = props.index;
  const setIndex = props.setIndex;
  const isCarousel = props.isCarousel;

  return (
    <div 
      class="popup"
    >
      <MediaPopupBackgroundInt
        togglePopup={togglePopup}
      />
      
      <div 
        class="card"
      >
        <MediaContainerInt
          client:load
          src={src}
          alt={alt}
          arr={arr}
          index={index}
          setIndex={setIndex}
          withinPopup={true}
          isCarousel={isCarousel}
        />
        <MediaCaptionInt
          client:load
          caption={caption}
          arr={arr}
          index={index}
          isCarousel={isCarousel}
        />
      </div>
    </div>
  )
}