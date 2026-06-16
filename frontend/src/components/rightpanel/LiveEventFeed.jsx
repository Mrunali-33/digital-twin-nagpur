import { useState, useEffect } from "react";

import { alertTimeline }
from "../../data/alertTimeline";

import { liveAlerts }
from "../../data/liveAlerts";

import { generateAlerts }
from "../../services/alertEngine";
import {
  ENVIRONMENT_STATUS,
}
from "../../data/environmentStatus";

function LiveEventFeed({ data }) {
  
  const [feed, setFeed] =
    useState(alertTimeline);

useEffect(() => {

  if (!data) return;

  const generatedAlerts =
    generateAlerts(data);

  if (generatedAlerts.length === 0)
    return;

  const currentTime =
    new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

  const events = generatedAlerts.map(
    alert => ({
      ...alert,
      time: currentTime,
    })
  );

  setFeed(prev => [

    ...events,

    ...prev,

  ].slice(0, 12));

}, [data]);

  return (

    <div className="bg-[#0B1622]/70 border border-cyan-500/20 rounded-xl p-4">

      <h2 className="text-cyan-400 font-bold mb-3">
        Live Event Feed
      </h2>

      <div className="space-y-2 max-h-56 overflow-y-auto pr-1">

{feed.map((event, index) => (

  <div
    key={`${event.time}-${index}`}
    className="
    bg-[#102235]
    rounded-lg
    p-2
    text-sm
    border
    border-cyan-500/10
    "
  >

    <div className="flex justify-between">

      <div>

        {
          ENVIRONMENT_STATUS[
            event.type
          ]?.icon || "⚠️"
        }

        <span className="ml-2">
          {event.message}
        </span>

      </div>

      <span className="text-cyan-300 text-xs">
        {event.time}
      </span>

    </div>

  </div>

))}

      </div>

    </div>

  );
}

export default LiveEventFeed;