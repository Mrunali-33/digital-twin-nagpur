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
    rounded-3xl
    border
    border-cyan-500/15
    bg-slate-950/60
    backdrop-blur-xl
    overflow-hidden
    shadow-[0_20px_60px_rgba(0,255,255,0.08)]
  "
>
      <div className="relative flex h-full flex-col">
        

     < MapControls
       layers={layers}
       setLayers={setLayers}
     />
     <div
  className="
    absolute
    top-4
    left-4
    z-[900]
    rounded-2xl
    border
    border-cyan-400/20
    bg-slate-900/70
    backdrop-blur-xl
    px-4
    py-3
    shadow-[0_10px_35px_rgba(0,255,255,0.12)]
    transition-all
    duration-300
  "
>

  <div className="flex items-center gap-3">

    <div
      className="
        h-10
        w-10
        rounded-xl
        bg-cyan-500/10
        border
        border-cyan-500/20
        flex
        items-center
        justify-center
        text-lg
      "
    >
      🌍
    </div>

    <div>

      <h3 className="text-sm font-semibold text-cyan-100 tracking-wide">

        Digital Twin

      </h3>

      <p className="text-xs text-slate-400">

        NEERI • Rahate Monitoring

      </p>

    </div>

  </div>

</div>

<div
  className="
    absolute
    top-4
    right-4
    z-[900]
    rounded-full
    border
    border-emerald-500/30
    bg-emerald-500/10
    backdrop-blur-xl
    px-4
    py-2
    flex
    items-center
    gap-2
    shadow-[0_0_20px_rgba(16,185,129,.15)]
  "
>

  <div
    className="
      h-2.5
      w-2.5
      rounded-full
      bg-emerald-400
      animate-pulse
    "
  />

  <span
    className="
      text-xs
      font-semibold
      tracking-wider
      text-emerald-300
    "
  >
    LIVE
  </span>

</div>

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