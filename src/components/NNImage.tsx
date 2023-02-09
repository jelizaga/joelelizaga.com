////////////////////////////////////////////////////////////////////////////////
// NNImage.tsx /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Interactive image component.

import { render } from "solid-js/web";
import { createSignal, createEffect, For } from "solid-js";
import NNImagePopup from "./NNImagePopup";

interface Image {
  src: string;
  alt: string;
  caption?: string;
  straightCorners?: string;
  animated?: boolean;
  display?: string;
}

export default function NNImage(props: Image) {
  const [popupIsOpen, setPopupIsOpen] = createSignal(false);
  // Classes ///////////////////////////////////////////////////////////////////
  let imageClasses = "noonoo-image";
  let containerClasses = "container";
  // Corners:
  if (props.straightCorners) {
    containerClasses += " straight-corners";
  } else {
    imageClasses += " round-corners";
    containerClasses += " round-corners";
  }
  // Caption:
  if (props.caption) {
    imageClasses += " captioned";
    containerClasses += " captioned";
  }
  switch(props.display) {
    case "depressed":
      containerClasses += " depressed";
      break;
    case "protruding":
      imageClasses += " protruding";
      containerClasses += " protruding";
      break;
    case "flat":
      containerClasses += " flat";
      break;
  }
  let captionClass = "caption";
  if (!props.caption) {
    captionClass += " hidden";
  }
  const openPopup = () => {
    setPopupIsOpen(true);
  }
  //////////////////////////////////////////////////////////////////////////////
  return (
    <>
      {popupIsOpen() &&
        <NNImagePopup
          client:load
          src={props.src}
          alt={props.alt}
          caption={props.caption}
          animated={props.animated}
          popupIsOpen={popupIsOpen}
          setPopupIsOpen={setPopupIsOpen}
        />
      }
      <div class={imageClasses}>
        <div class={containerClasses} onClick={openPopup}>
          {!props.animated &&
            <img src={props.src} alt={props.alt} />
          }
          {props.animated &&
            <video autoplay loop muted src={props.src}></video>
          }
        </div>
        <p class={captionClass}>{props.caption}</p>
      </div>
    </>
  )
}