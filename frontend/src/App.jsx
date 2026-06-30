import Dashboard from "./pages/Dashboard";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="h-screen overflow-y-auto bg-[#071018]">

      {/* Dashboard occupies exactly one screen */}
      <div className="h-screen">
        <Dashboard />
      </div>

      {/* Footer appears after scrolling */}
      <Footer />

    </div>
  );
}

export default App;