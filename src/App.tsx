import './index.css';
import Countdown from './components/Countdown';

function App() {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-black">
      {/* CRT scanlines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_50%,transparent_50%)] bg-[length:100%_10px] animate-scan z-40" />
      <Countdown />
    </div>
  );
}

export default App;
