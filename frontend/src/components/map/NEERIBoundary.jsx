import { Polygon, Tooltip, Popup } from "react-leaflet";

import {
  areaStatus,
  getAreaStatus,
} from "../../data/areaStatus";

import AreaRiskPopup from "./AreaRiskPopup";

import {
  ENVIRONMENT_STATUS,
} from "../../data/environmentStatus";

function NEERIBoundary({ data }) {

  const boundary = [
    [21.122571, 79.073598],
    [21.124793, 79.073223],
    [21.123909, 79.070042],
    [21.123370, 79.067512],
    [21.120540, 79.064610],
    [21.119243, 79.067065],
    [21.119182, 79.064642],
  ];

  const status =
    getAreaStatus(areaStatus.neeri);

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
            ...areaStatus.neeri,

            aqi: data?.aqi || 0,

            rainfall:
              data?.rain || 0,

            waterLevel:
              data?.water_level || 0,
          }}
        />

      </Popup>

      <Tooltip
        permanent
        direction="top"
        offset={[40, -20]}
        opacity={1}
        className="custom-area-label"
      >

        <span>
          NEERI {areaInfo.icon}
        </span>

      </Tooltip>

    </Polygon>

  );
}

export default NEERIBoundary;