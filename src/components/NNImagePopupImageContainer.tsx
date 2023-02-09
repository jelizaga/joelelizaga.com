////////////////////////////////////////////////////////////////////////////////
// NNImagePopupImageContainer.tsx //////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Image / video container of image popup.

import { Switch } from "solid-js";

export default function NNImagePopupImageContainer(props: any) {
  return (
    <div class="container">
      <a href={props.src}></a>
      <Switch>
        <Match when={!props.animated}>
          <img
            src={props.src}
            alt={props.alt}
          />
        </Match>
        <Match when={props.animated}>
          <video 
            autoplay
            loop
            muted
            src={props.src}
          />
        </Match>
      </Switch>
    </div>
  )
}