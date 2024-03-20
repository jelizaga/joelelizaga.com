import { Show } from "solid-js";

export default function MediaNavigationInt(props:any) {

  const dir = props.dir;
  const arr = props.arr;
  const index = props.index;
  const setIndex = props.setIndex;

  const navigateNext = () => {
    if (index() == arr.length - 1) {
      setIndex(0);
    } else {
      setIndex(index() + 1);
    }
  }

  const navigatePrev = () => {
    if (index() == 0) {
      setIndex(arr.length - 1);
    } else {
      setIndex(index() - 1);
    }
  }

  const navigate = () => {
    if (dir == "prev") {
      navigatePrev();
    } else if (dir == "next") {
      navigateNext();
    } else {
      console.error("Carousel navigation direction unspecified.");
    }
  }

  return (
    <div 
      class={`
        navigation
        ${(dir == "prev" ? "prev" : "")}
        ${(dir == "next" ? "next" : "")}
      `}
      onClick={navigate}
    >
      <button>
        <i 
          class={`
            fa-solid
            ${(dir == "prev") ? "fa-chevron-left" : ""}
            ${(dir == "next") ? "fa-chevron-right" : ""}
          `}
        />
      </button>
      <div 
        class="background"
      />
    </div>
  )
}