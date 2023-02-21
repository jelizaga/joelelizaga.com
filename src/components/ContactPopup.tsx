////////////////////////////////////////////////////////////////////////////////
// ContactPopup.tsx ////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Contact form popup.

import { createSignal, Switch } from "solid-js";
import hotkeys from "hotkeys-js";
import PopupControlBar from "./PopupControlBar";
import ContactForm from "./ContactForm";

export default function ContactPopup(props: any) {
  let popup;
  // Functions /////////////////////////////////////////////////////////////////
  // `closePopup` - Closes the popup.
  const closePopup = () => {
    props.setPopupIsOpen(false);
  }
  // Hotkeys ///////////////////////////////////////////////////////////////////
  // `esc` - Close popup if open.
  hotkeys("esc", function(event, handler) {
    if (props.popupIsOpen()) {
      closePopup();
    }
  })
  return (
    <div class="contact-popup popup-container">
      <div class="popup-background" onClick={closePopup}></div>
      <div class="popup" ref={popup}>
        <PopupControlBar
          icon="fa-solid fa-paper-plane"
          title="Contact"
          closePopup={closePopup}
        />
        <div class="contact-form content">
          <ContactForm
            closePopup={closePopup}
          />
        </div>
      </div>
    </div>
  )
}