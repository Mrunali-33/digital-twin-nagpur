import { Polyline } from "react-leaflet";

import { sensors } from "../../data/sensors";

function SensorNetwork() {

  const links = [
    [0, 1],
    [1, 2],
    [2, 3],
  ];

  return (
    <>
      {links.map((link, index) => (

        <Polyline
          key={index}
          positions={[
            sensors[link[0]].position,
            sensors[link[1]].position,
          ]}
          pathOptions={{
            color: "#06b6d4",
            weight: 2,
            opacity: 0.7,
            dashArray: "8 8",
          }}
        />

      ))}
    </>
  );
}

export default SensorNetwork;