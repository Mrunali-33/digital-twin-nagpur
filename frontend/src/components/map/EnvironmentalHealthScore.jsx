function EnvironmentalHealthScore({ data }) {

  const aqi = data?.aqi || 80;

  const score = Math.max(
    0,
    Math.min(100, 100 - Math.floor(aqi / 3))
  );

  return (

    <div className="absolute bottom-4 right-4 z-[1000]">

      <div className="bg-[#071018]/95 border border-cyan-500/30 rounded-xl p-4 backdrop-blur-md text-center">

        <h2 className="text-cyan-400 font-bold mb-2">
          Environmental Health
        </h2>

        <div className="text-4xl font-bold text-green-400">

          {score}

        </div>

        <div className="text-gray-400 text-sm">

          /100

        </div>

      </div>

    </div>

  );
}

export default EnvironmentalHealthScore;