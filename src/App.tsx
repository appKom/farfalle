import './index.css';
import Countdown from './components/Countdown';
import ScrollIndicator from './components/ScrollIndicator';
import FormNotification from './components/FormNotification';
import { useRef } from 'react';

function App() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div ref={scrollContainerRef} className="w-full h-screen overflow-y-scroll snap-y snap-mandatory">
      {/* CRT scanlines */}
      <div className="fixed inset-0 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.1)_50%,transparent_50%)] bg-[length:100%_10px] animate-scan z-40" /> 

      {/* Countdown section */}
      <div className="w-full min-h-screen flex flex-col justify-center items-center bg-black snap-start">
        <div className='flex justify-end flex-[20]'>
          <Countdown containerRef={scrollContainerRef}/>
        </div>
        <div className='flex flex-col justify-end flex-[1]'>
          <ScrollIndicator containerRef={scrollContainerRef}/>
        </div>
      </div>

      {/* Form link section */}
      <div className="w-full min-h-screen flex justify-center items-center bg-black snap-start">
        <FormNotification />
      </div>
    </div>
  );
}



export default App;
