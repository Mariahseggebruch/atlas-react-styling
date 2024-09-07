import coverPhoto from "../assets/placeholder.svg";

function CoverPhoto() {
  return (
    <div className="flex cover-art mb-6 w-full justify-center">
      <img
        src={CoverPhoto}
        alt="Placeholder Cover Art Image"
        className="rounded-md md:w-400 md:h-400"
      />
    </div>
  );
}

export default CoverArt;
