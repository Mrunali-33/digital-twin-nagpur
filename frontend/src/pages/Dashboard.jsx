import { useEffect, useState } from "react";

import { fetchEnvironmentalData, fetchHistory} from "../services/api";
import {
  getAQITrend,
  getRiskTrend,
  getEnvironmentHealth,
} from "../services/analyticsApi";
import {
  getZoneComparison
} from "../services/analyticsApi";
import TopNavbar from "../components/layout/TopNavbar";
import LeftSidebar from "../components/layout/LeftSidebar";
import RightPanel from "../components/layout/RightPanel";
import BottomAnalytics from "../components/layout/BottomAnalytics";
import DigitalTwinMap from "../components/map/DigitalTwinMap";
import KPISection from "../components/layout/KPISection";
import AlertBanner from "../components/layout/AlertBanner";

function Dashboard() {

  const [data, setData] = useState(null);

  const [history, setHistory] = useState([]);

  const [aqiTrend, setAqiTrend] = useState([]);

  const [riskTrend, setRiskTrend] = useState([]);

  const [zoneComparison, setZoneComparison] =
  useState(null);

  const [environmentHealth, setEnvironmentHealth] =
  useState([]);

  useEffect(() => {

    const loadData = async () => {

      const result = await fetchEnvironmentalData();

      if (!result) return;

      setData(result);

      const historyData =
        await fetchHistory();

      const formattedHistory =
        historyData.map((item) => ({

         time: new Date(
          item.timestamp
         ).toLocaleTimeString(),

         aqi: item.aqi,

         rain: item.rain,

         water:
           item.water_level,

         risk:
           item.risk_score

        }));

     setHistory(
       formattedHistory
     );

     const zoneData =
       await getZoneComparison();

     setZoneComparison(zoneData);

     const aqiData =
       await getAQITrend();
 
     setAqiTrend(

       aqiData.map((item) => ({

         time: new Date(
          item.time
         ).toLocaleTimeString(),

         aqi: item.aqi

      }))

     );

     const riskData =
       await getRiskTrend();

     setRiskTrend(

     riskData.map((item) => ({

       time: new Date(
        item.time
       ).toLocaleTimeString(),

       risk_score:
       item.risk_score

      }))

     );

     const envData =
      await getEnvironmentHealth();

     setEnvironmentHealth(envData);


    };

    loadData();

    return () => {};

  }, []);

useEffect(() => {

  const ws = new WebSocket(
    "ws://127.0.0.1:8000/ws"
  );

  ws.onopen = () => {

    console.log(
      "✅ WebSocket Connected"
    );

  };

ws.onmessage = (event) => {

  const liveData =
    JSON.parse(event.data);

  setData(
    liveData
  );

  setHistory((prev) => [

    ...prev.slice(-99),

    {
      time: new Date()
        .toLocaleTimeString(),

      aqi: liveData.aqi,

      rain: liveData.rain,

      water: liveData.water_level,

      risk: liveData.risk_score
    }

  ]);

  setAqiTrend((prev) => [

    ...prev.slice(-19),

    {
      time: new Date()
        .toLocaleTimeString(),

      aqi: liveData.aqi
    }

  ]);

  setRiskTrend((prev) => [

    ...prev.slice(-19),

    {
      time: new Date()
        .toLocaleTimeString(),

      risk_score:
        liveData.risk_score
    }

  ]);

  setEnvironmentHealth((prev) => [

  ...prev.slice(-19),

  {
    time: new Date()
      .toLocaleTimeString(),

    health_score:
      liveData.health_score
  }

]);

setZoneComparison((prev) => {

  const current =
    prev || {};

  return {

    ...current,

    [liveData.zone.toLowerCase()]: {

      aqi:
        liveData.aqi,

      risk_score:
        liveData.risk_score,

      health_score:
        liveData.health_score

    }

  };

});

};
ws.onerror = (error) => {

    console.log(
      "❌ WebSocket Error",
      error
    );

  };

  ws.onclose = () => {

    console.log(
      "⚠️ WebSocket Closed"
    );

  };

  return () => {

    ws.close();

  };

}, []);

  return (

    <div className="h-screen overflow-hidden bg-[#071018] text-white flex flex-col">

      {/* TOP NAVBAR */}

      <TopNavbar />

      <AlertBanner data={data} />

      {/* KPI CARDS */}

      <KPISection data={data} />

      {/* MAIN DASHBOARD */}

      <div className="flex-[1.15] flex gap-3 p-3 pt-2 min-h-0">

        {/* LEFT SIDEBAR */}

        <div className="w-[15%] min-h-0">

          <LeftSidebar data={data} />

        </div>

        {/* CENTER MAP */}

        <div className="w-[73%] min-h-0">

          <DigitalTwinMap data={data} />

        </div>

        {/* RIGHT AI PANEL */}

        <div className="w-[16%] min-h-0">

          <RightPanel data={data} />

        </div>

      </div>

      {/* BOTTOM ANALYTICS */}

      <div className="h-[220px] px-3 pb-2">

        <BottomAnalytics
          data={data}
          history={history}
          aqiTrend={aqiTrend}
          zoneComparison={zoneComparison}
          riskTrend={riskTrend}
          environmentHealth={environmentHealth}
       />

      </div>

    </div>

  );
}

export default Dashboard;