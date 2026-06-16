import { Polygon, Tooltip } from "react-leaflet";

import {
  areaStatus,
  getAreaStatus,
} from "../../data/areaStatus";

import { Popup } from "react-leaflet";
import AreaRiskPopup from "./AreaRiskPopup";

import {
  ENVIRONMENT_STATUS,
} from "../../data/environmentStatus";

function RahateBoundary({ data }) {
    const boundary = [
    [21.131229, 79.076894],
    [21.131323, 79.074480],
    [21.130288, 79.073731],
    [21.129131, 79.072678],
    [21.127545, 79.072765],
    [21.128573, 79.076066],
    [21.130093, 79.076617],
  ];

  const status =
  getAreaStatus(areaStatus.rahate);

  const areaInfo =
    ENVIRONMENT_STATUS[status] ||
    ENVIRONMENT_STATUS.NORMAL;

  return (
    <Polygon
      className={
        status === "CRITICAL"
         ? "critical-area"
         : status === "WARNING"
         ? "warning-area"
         : ""
      }
      positions={boundary}
      pathOptions={{
        color: areaInfo.color,
        weight: 3,
        fillColor: areaInfo.color,
        fillOpacity: 0.18,
      }}
    >
      <Popup>
        <AreaRiskPopup
           area={{
              ...areaStatus.rahate,

              aqi: data?.aqi || 0,

              rainfall: data?.rain || 0,

              waterLevel:
              data?.water_level || 0,
           }}
         />
      </Popup>
      <Tooltip
        permanent
        direction="top"
        offset={[50, -15]}
        opacity={1}
        className="custom-area-label"
      >
        <span>
          RAHATE {areaInfo.icon}
        </span>
      </Tooltip>
    </Polygon>
  );
}

export default RahateBoundary;