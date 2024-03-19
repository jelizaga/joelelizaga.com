import { Show } from "solid-js";
import { SolidMarkdown } from "solid-markdown"

export default function MediaCaptionInt(props:any) {
  
  // Single media:
  const caption = props.caption;

  // Multiple media:
  const arr = props.arr;
  const index = props.index;
  const isCarousel = (arr != undefined);

  return (
    <>
      <Show
        when={(!isCarousel && caption)}
      >
        <SolidMarkdown
          children={caption}
        />
      </Show>
      <Show
        when={(isCarousel && arr[index()].caption)}
      >
        <SolidMarkdown
          class="caption"
          children={arr[index()].caption}
        />
      </Show>
    </>
  )
}