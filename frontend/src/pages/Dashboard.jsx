import { useEffect, useState } from "react";

import { fetchEnvironmentalData } from "../services/api";

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

  useEffect(() => {

    const loadData = async () => {

      const result = await fetchEnvironmentalData();

      if (!result) return;

      setData(result);

      setHistory((prev) => {

        const updatedHistory = [

          ...prev,

          {
            time: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),

            aqi: result.aqi || 0,

            rain: result.rain || 0,

            water: result.water_level || 0,

          },

        ];

        return updatedHistory.slice(-10);

      });

    };

    loadData();

    const interval = setInterval(loadData, 3000);

    return () => clearInterval(interval);

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
        />

      </div>

    </div>

  );
}

export default Dashboard;