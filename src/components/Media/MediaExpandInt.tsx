import { Show } from "solid-js";

export default function MediaExpandInt(props:any) {

  // Media:
  const src = props.src;

  // Popup:
  const withinPopup = props.withinPopup;
  const togglePopup = props.togglePopup;

  return (
    <>
      <Show
        when={withinPopup}
      >
        <a
          class="expand"
          href={src}
        />
      </Show>
      <Show
        when={!withinPopup}
      >
        <div 
          class="expand"
          onClick={togglePopup}
        />
      </Show>
    </>
  )
}