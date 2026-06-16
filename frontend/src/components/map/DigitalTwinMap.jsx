import {
  MapContainer,
  TileLayer,

} from "react-leaflet";

import AreaDangerAura from "./AreaDangerAura";

import PollutionHeatmap from "./PollutionHeatmap";


import SensorNetwork from "./SensorNetwork";
import { useState } from "react";
import SensorMarkers from "./SensorMarkers";
import "leaflet/dist/leaflet.css";

import "../../styles/map.css";



import MapControls from "./MapControls";

import NEERIBoundary from "./NEERIBoundary";
import RahateBoundary from "./RahateBoundary";


function DigitalTwinMap({ data }) {

const [layers, setLayers] = useState({
  heatmap: true,
  neeri: true,
  rahate: true,
  sensors: true,
  rainfall: false,
  weather: false,
});
  return  (
<div
   className="
   h-full
   bg-[#07111B]
   border
   border-cyan-500/20
   rounded-2xl
   overflow-hidden
   shadow-[0_0_25px_rgba(0,255,255,0.08)]
  "
>
    <div className="relative h-full w-full">

     < MapControls
       layers={layers}
       setLayers={setLayers}
     />

      <MapContainer
        center={[21.1260, 79.0718]}
        zoom={15}
        zoomControl={false}
        preferCanvas={true}
        className="h-full w-full"
       >
        <TileLayer
         attribution='&copy; OpenStreetMap contributors & CARTO'
         url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
        />  
        {layers.heatmap && (
        <PollutionHeatmap />
        )} 
        {layers.neeri && (
          <NEERIBoundary data={data} />
        )}
        {layers.rahate && (
          <RahateBoundary data={data} />
        )}   

        {/*<AreaDangerAura
           center={[21.1225, 79.0680]}
           riskLevel="WARNING"
           riskScore={62}
         />

        <AreaDangerAura
           center={[21.1298, 79.0750]}
           riskLevel="CRITICAL"
           riskScore={91}
         /> */}

        {layers.sensors && (
          <SensorMarkers data={data} />
        )} 

        <SensorNetwork />
        


      </MapContainer>

    </div>

  </div>
);
}

export default DigitalTwinMap;