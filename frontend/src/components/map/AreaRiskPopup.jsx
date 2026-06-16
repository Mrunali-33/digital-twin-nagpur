function AreaRiskPopup({ area }) {

  return (

    <div className="text-black min-w-[220px]">

      <h2 className="font-bold mb-2">
        {area.name}
      </h2>

      <div className="space-y-1">

        <p>
          Risk Score:
          <strong>
            {" "}
            {area.riskScore}
          </strong>
        </p>

        <p>
          Risk Level:
          <strong>
            {" "}
            {area.riskLevel}
          </strong>
        </p>

        <p>
          AQI:
          <strong>
            {" "}
            {area.aqi}
          </strong>
        </p>

        <p>
          Rainfall:
          <strong>
            {" "}
            {area.rainfall}
          </strong>
        </p>

        <p>
          Water Level:
          <strong>
            {" "}
            {area.waterLevel}
          </strong>
        </p>

      </div>

    </div>

  );
}

export default AreaRiskPopup;