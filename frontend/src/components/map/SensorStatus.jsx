function SensorStatus() {

  return (

    <div className="absolute bottom-4 right-48 z-[1000]">

      <div className="bg-[#071018]/95 border border-cyan-500/30 rounded-xl p-4 backdrop-blur-md">

        <h2 className="text-cyan-400 font-bold mb-2">

          Sensor Network

        </h2>

        <div className="space-y-1 text-sm">

          <p>🟢 Online Sensors: 12</p>

          <p>📡 Active Nodes: 8</p>

          <p>⏱ Last Update: Live</p>

        </div>

      </div>

    </div>

  );
}

export default SensorStatus;