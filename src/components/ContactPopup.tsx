////////////////////////////////////////////////////////////////////////////////
// ContactPopup.tsx ////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Contact form popup.

import hotkeys from "hotkeys-js";
import PopupControlBar from "./PopupControlBar";
import ContactForm from "./ContactForm";

export default function ContactPopup(props: any) {
  let popup;
  let contactForm;
  // Effects ///////////////////////////////////////////////////////////////////
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
          icon="fa-solid fa-envelope"
          title="Contact"
          closePopup={closePopup}
        />
        <div 
          class="contact-form content"
          ref={contactForm}
        >
          <ContactForm
            closePopup={closePopup}
          />
          {/* <div ref={overflowYFog} class="overflow-y-fog"></div> */}
        </div>
      </div>
    </div>
  )
}