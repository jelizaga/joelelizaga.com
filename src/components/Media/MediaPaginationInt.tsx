import { For } from "solid-js";
import MediaPaginationPageInt from "./MediaPaginationPageInt";

export default function MediaPaginationInt(props:any) {
  
  // Multiple media:
  const arr = props.arr;
  const index = props.index;
  const setIndex = props.setIndex;

  return (
    <div 
      class="pagination"
    >
      <For each={arr}>{(page, i) =>
        <MediaPaginationPageInt
          client:load
          page={i()}
          index={index}
          setIndex={setIndex}
        />
      }</For>
    </div>
  )
}