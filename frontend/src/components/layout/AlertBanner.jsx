function AlertBanner({ data }) {

  const isCritical =

    data?.aqi > 200 ||
    data?.flood_risk === "HIGH";

  if (!isCritical) return null;

  return (

    <div
      className="
      bg-red-500/15
      border-y
      border-red-500/40
      text-red-300
      px-4
      py-2
      text-sm
      font-semibold
      animate-pulse
      "
    >

      🚨 ALERT :

      {data?.aqi > 200 &&
        " Hazardous AQI detected. "}

      {data?.flood_risk === "HIGH" &&
        " High flood probability detected."}

    </div>

  );
}

export default AlertBanner;