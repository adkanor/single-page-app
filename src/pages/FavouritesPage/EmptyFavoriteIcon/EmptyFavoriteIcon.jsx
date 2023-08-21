import "./EmptyFavoriteIcon.scss";
function EmptyFavoriteIcon() {
  return (
    <div className="emptyFavoriteIcon">
      <div className="emptyFavoriteIcon__text">No favorites was choosen </div>
      <svg
        className="emptyFavoriteIcon__svg"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        width="40%"
        height="40%"
        viewBox="0 0 128 128"
      >
        <path
          fill="white"
          d="M92,8c15.324,0,27.813,12.375,27.996,27.656c-0.055,0.422-0.098,0.844-0.109,1.281l-0.051,3.172
  c-2.652,24.742-37.203,60.523-55.84,77.273c-18.5-16.617-52.695-52-55.773-76.742l-0.109-3.703C8.102,36.523,8.063,36.109,8,35.656
  C8.188,20.375,20.676,8,36,8c8.422,0,16.352,3.875,21.754,10.625L64,26.43l6.246-7.805C75.648,11.875,83.578,8,92,8 M92,0
  C80.621,0,70.598,5.383,64,13.625C57.402,5.383,47.379,0,36,0C16.117,0,0,16.117,0,36c0,0.398,0.105,0.773,0.117,1.172H0
  C0,74.078,64,128,64,128s64-53.922,64-90.828h-0.117C127.895,36.773,128,36.398,128,36C128,16.117,111.883,0,92,0L92,0z"
        />
      </svg>
    </div>
  );
}

export default EmptyFavoriteIcon;