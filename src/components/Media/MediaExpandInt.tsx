import { Show } from "solid-js";

export default function MediaExpandInt(props:any) {

  // Single media:
  const src = props.src;

  // Multiple media:
  const arr = props.arr;
  const index = props.index;
  const isCarousel = props.isCarousel;

  // Popup:
  const withinPopup = props.withinPopup;
  const togglePopup = props.togglePopup;

  return (
    <>
      <Show
        when={withinPopup && !isCarousel}
      >
        <a
          class="expand"
          href={src}
        />
      </Show>
      <Show
        when={withinPopup && isCarousel}
      >
        <a 
          class="expand"
          href={arr[index()].src}
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