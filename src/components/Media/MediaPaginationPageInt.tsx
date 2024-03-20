import { createSignal } from "solid-js";

export default function MediaPaginationPageInt(props:any) {

  const index = props.index;
  const setIndex = props.setIndex;

  const [
    page,
    setPage
  ] = createSignal(props.page)
  
  const goToThisPage = () => {
    console.log(`Moving to ${page()}.`);
    setIndex(page());
  }

  return (
    <button
      class={`
        page
        ${(index() == page()) ? "current" : ""}
      `}
      onClick={goToThisPage}
    >
    </button>
  )
}