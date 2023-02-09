////////////////////////////////////////////////////////////////////////////////
// NNImagePopupControls.tsx ////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Controls bar for image popup.

export default function NNImagePopupControls(props: any) {
  //////////////////////////////////////////////////////////////////////////////
  return (
    <div class="controls">
      {!props.popupIsFullscreen() &&
        <button class="fullscreen" onClick={props.fullscreenPopup}>
          <i class="fa-solid fa-expand"></i>
        </button>
      }
      {props.popupIsFullscreen() &&
        <button class="un-fullscreen" onClick={props.unFullscreenPopup}>
          <i class="fa-solid fa-compress"></i>
        </button>
      }
      <button class="close" onClick={props.closePopup}>
        <i class="fa-solid fa-x"></i>
      </button>
    </div>
  )
}