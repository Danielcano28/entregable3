import { IconSearch } from "@tabler/icons-react";
import axios from "axios";

const Location = ({ location, setLocation }) => {
  console.log(location);
  const handleSubmit = (e) => {
    e.preventDefault();
    const idLocation = e.target.idLocation.value;

    axios
      .get(`https://rickandmortyapi.com/api/location/${idLocation}`)
      .then(({ data }) => setLocation(data))
      .catch((err) => console.log(err));
  };
  return (
    <section className="grid justify-center gap-4">
      <div>
        <div className="position: relative   z-10  w-[450px] h-[400px]">
          <img src="/ricky.png" alt="" />
        </div>
        <div className="animate-spin-show w-[500px] h-[550px] overflow-hidden position: absolute -top-20 ">
          <img src="/vortex.png" alt="" />
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex justify-center items-center position relative bottom-16 "
      >
        <input
          placeholder="escribe"
          name="idLocation"
          className="text-slate-500 bg-black border-2 border-green-500 top-0  z-20 h-11"
          type="number"
        />
        <button
          type="submit"
          className="flex gap-2 bg-green-500 px-4 h-11 items-center"
        >
          serch <IconSearch size={18} />
        </button>
      </form>

      <section className="grid justify-center items-center gap-2  py-[15px] px-[30px] border-2 border-green-600 position relative bottom-12">
        <h3 className="justify-center items-start grid text-green-500">
          ¡{location?.name}!
        </h3>

        <ul className="flex gap-6 text-white-500 ">
          <li>Type:{location?.type} </li>
          <li>Dimension:{location?.dimension}</li>
          <li>Population:{location?.residents.length} </li>
        </ul>
      </section>
    </section>
  );
};
export default Location;
