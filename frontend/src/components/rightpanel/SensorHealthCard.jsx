import { sensors } from "../../data/sensors";
import { Cpu } from "lucide-react";

function SensorHealthCard() {

  const online =
    sensors.filter(
      s => s.status === "ONLINE"
    ).length;

  const warning =
    sensors.filter(
      s => s.status === "WARNING"
    ).length;

  const offline =
    sensors.filter(
      s => s.status === "OFFLINE"
    ).length;

  const healthScore = Math.round(
    (online / sensors.length) * 100
  );

  return (

    <div
      className="
      bg-[#0B1622]/70
      border
      border-cyan-500/20
      rounded-xl
      p-4
      "
    >

      <div className="flex items-center gap-2 mb-3">

        <Cpu
          size={18}
          className="text-cyan-400"
        />

        <h2 className="text-cyan-400 font-bold">
          Sensor Network
        </h2>

      </div>

      <div className="space-y-3">

        <div className="flex justify-between">
          <span>🟢 Online</span>
          <span>{online}</span>
        </div>

        <div className="flex justify-between">
          <span>🟡 Warning</span>
          <span>{warning}</span>
        </div>

        <div className="flex justify-between">
          <span>🔴 Offline</span>
          <span>{offline}</span>
        </div>

        <div className="pt-2 border-t border-cyan-500/10">

          <p className="text-gray-400 text-sm">
            Network Health
          </p>

          <h2 className="text-green-400 text-2xl font-bold">
            {healthScore}%
          </h2>

        </div>

      </div>

    </div>

  );
}

export default SensorHealthCard;