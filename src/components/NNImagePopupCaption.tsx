////////////////////////////////////////////////////////////////////////////////
// NNImagePopupCaption.tsx /////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Caption for image popup.
import { SolidMarkdown } from "solid-markdown"

export default function NNImagePopupCaption(props: any) {
  //////////////////////////////////////////////////////////////////////////////
  return (
    <p class="caption">
      <SolidMarkdown
        children={props.caption}
      />
    </p>
  )
}