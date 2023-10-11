import axios from "axios";
import { useEffect, useState } from "react";
import { characterStatus } from "../../constants/residents";

const ResidentCart = ({ residentEndpoint }) => {
  const [resident, setResident] = useState(null);
  console.log(resident);

  useEffect(() => {
    axios
      .get(residentEndpoint)

      .then(({ data }) => setResident(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <article>
      <header className="relative border-2 border-green-500">
        <img src={resident?.image} alt="" />
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-1 rounded-md flex items-center gap-2">
          <div
            className={`h-3 w-3
           ${characterStatus[resident?.status]} rounded-full`}
          ></div>
          <span>{resident?.status}</span>
        </div>
      </header>
      <div className="border-2 border-green-500">
        <h4 className="flex justify-center items-center  text-green-500 bg-black">
          {resident?.name}
        </h4>
        <ul className="grid gap-1">
          <li>
            <span>species</span> :{resident?.species}
          </li>
          <li>
            <span>Origin</span> :{resident?.origin.name}
          </li>
          <li>
            <span>Times appear</span> :{resident?.episode.length}
          </li>
        </ul>
      </div>
    </article>
  );
};
export default ResidentCart;
