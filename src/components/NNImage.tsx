////////////////////////////////////////////////////////////////////////////////
// NNImage.tsx /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Interactive image component.

import { render } from "solid-js/web";
import { createSignal, Switch } from "solid-js";
import NNImagePopup from "./NNImagePopup";

interface Image {
  src: string;
  alt: string;
  caption?: string;
  straightCorners?: string;
  animated?: boolean;
  display?: string;
  float?: string;
  popup?: boolean;
  transparentBackground?: boolean;
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
  if (!props.popup === false) {
    containerClasses += " pops-up"
  }
  // Caption:
  if (props.caption) {
    imageClasses += " captioned";
    containerClasses += " captioned";
  }
  // Neumorphic shape:
  if (!props.display) {
    containerClasses += " depressed";
  } else {
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
  }
  // Float: 
  if (props.float) {
    switch(props.float) {
      case "left":
        imageClasses += " left";
        break;
      case "right":
        imageClasses += " right";
        break;
    }
  }
  // Transparent background:
  if (props.transparentBackground) {
    containerClasses += " transparent";
  }
  // Pops up:
  if (props.popup === true || props.popup === undefined) {
    containerClasses += " pops-up";
  }
  // Functions /////////////////////////////////////////////////////////////////
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
        <Switch>
          <Match when={props.popup === false}>
            <div class={containerClasses}>
              {!props.animated &&
                <img src={props.src} alt={props.alt} />
              }
              {props.animated &&
                <video autoplay loop muted src={props.src}></video>
              }
            </div>
          </Match>
          <Match when={props.popup === undefined || props.popup === true}>
            <div class={containerClasses} onClick={openPopup}>
              {!props.animated &&
                <img src={props.src} alt={props.alt} />
              }
              {props.animated &&
                <video autoplay loop muted src={props.src}></video>
              }
            </div>
          </Match>
        </Switch>
        {props.caption &&
          <p class="caption">{props.caption}</p>
        }
      </div>
    </>
  )
}