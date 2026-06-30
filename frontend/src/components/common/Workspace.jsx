import GlassCard from "./GlassCard";

function Workspace({ children }) {
  return (
    <GlassCard
      hover={false}
      className="
      h-full
      p-3
      overflow-hidden
      "
    >
      {children}
    </GlassCard>
  );
}

export default Workspace;