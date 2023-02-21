////////////////////////////////////////////////////////////////////////////////
// PopupControlBar.tsx /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Control bar for popups.

import { Switch } from "solid-js";

export default function PopupControlBar(props: any) {
  //////////////////////////////////////////////////////////////////////////////
  return (
    <div class="control-bar">
      <span class="title">
        {props.icon &&
          <i class={props.icon}></i>
        }
        {props.title &&
          `${props.title}`
        }
      </span>
      <div class="controls">
        <Switch>
          <Match when={props.fullscreenPopup && props.unFullscreenPopup && props.popupIsFullscreen}>
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
          </Match>
        </Switch>
        <button class="close" onClick={props.closePopup}>
          <i class="fa-solid fa-x"></i>
        </button>
      </div>
    </div>
  )
}