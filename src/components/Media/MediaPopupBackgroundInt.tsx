export default function MediaPopupBackgroundInt(props:any) {

  const togglePopup = props.togglePopup;

  return (
    <div
      class="background"
      onClick={togglePopup}
    ></div>
  )

}