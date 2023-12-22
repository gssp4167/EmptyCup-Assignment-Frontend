import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Spinner = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");

  return (
    <div className="mt-5" >
      <ClipLoader color={"#E0A64E"} loading={true} size={30} />
    </div>
  );
};

export default Spinner;
