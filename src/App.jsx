import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { getRandomNumber } from "./utils/random";
import Location from "./assets/components/Location";
import ResidentList from "./assets/components/ResidentList";

function App() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    axios

      .get(`https://rickandmortyapi.com/api/location/${getRandomNumber(126)}`)

      .then(({ data }) => setLocation(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="px-4 min-h-screen bg-black text-white  bg-[url(/fondo.png)] bg-no-repeat bg-cover bg-center">
      <div style={{ textAlign: "center" }}>
        <div style={{ height: "80px", color: "green" }}></div>
        <div style={{ height: "80px" }}></div>
      </div>
      <Location location={location} setLocation={setLocation} />
      <ResidentList residents={location?.residents ?? []} />
    </main>
  );
}

export default App;
