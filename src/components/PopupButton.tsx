////////////////////////////////////////////////////////////////////////////////
// PopupButton.tsx /////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

import { createSignal, Switch } from "solid-js";
import ContactPopup from "./ContactPopup";

interface PopupButton {
  button: Button;
  popup: string;
  class?: string;
}

interface Tooltip {
  id: string;
  content: string;
  position?: string;
}

interface Button {
  icon?: string;
  content?: string;
  tooltip?: Tooltip;
}

export default function PopupButton(props: PopupButton) {
  const [popupIsOpen, setPopupIsOpen] = createSignal(false);
  // Tooltip classes ///////////////////////////////////////////////////////////
  let tooltipClasses = "tooltip-bubble";
  if (props.button.tooltip) {
    if (props.button.tooltip.position) {
      switch (props.button.tooltip.position) {
        case "top":
          tooltipClasses += " top";
          break;
        case "bottom":
          tooltipClasses += " bottom";
          break;
        case "left":
          tooltipClasses += " left";
          break;
        case "right":
          tooltipClasses += " right";
          break;
      }
    }
  }
  // Functions /////////////////////////////////////////////////////////////////
  const openPopup = () => {
    setPopupIsOpen(true);
  }
  return (
    <>
      <Switch>
        <Match when={props.popup == "ContactPopup"}>
          {popupIsOpen() &&
            <ContactPopup
              popupIsOpen={popupIsOpen}
              setPopupIsOpen={setPopupIsOpen}
            />
          }
        </Match>
      </Switch>
      <button class={props.class} onClick={openPopup}>
        {props.button.icon &&
          <i class={props.button.icon}></i>
        }
        {props.button.content &&
          `${props.button.content}`
        }
        {props.button.tooltip &&
          <span
            id={props.button.tooltip.id}
            class={tooltipClasses}
            data-tooltip={props.button.tooltip.content}
          >
            {props.button.tooltip.content}
          </span>
        }
      </button>
    </>
  )
}