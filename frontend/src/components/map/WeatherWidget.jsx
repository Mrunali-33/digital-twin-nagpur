function WeatherWidget() {

  return (

    <div className="absolute bottom-4 left-48 z-[1000]">

      <div className="bg-[#071018]/95 border border-cyan-500/30 rounded-xl p-4 backdrop-blur-md">

        <h2 className="text-cyan-400 font-bold mb-2">

          Weather

        </h2>

        <div className="space-y-1 text-sm">

          <p>🌡 31°C</p>

          <p>💧 Humidity: 68%</p>

          <p>🌬 Wind: 12 km/h</p>

        </div>

      </div>

    </div>

  );
}

export default WeatherWidget;
