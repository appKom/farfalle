import QRCode from "react-qr-code";

export default function FormNotification() {
  return (
    <div className="flex justify-center items-center w-full animate-flicker font-glass text-white text-1xl lg:text-5xl">
      <div className="flex-[2] ml-40 mt-30">
        Jubkom trenger deg! Har du et ønske til et arrangement under Jubileumsuka? Trykk{" "}
        <a href="https://forms.gle/MerfxwhLCr5G7mfp7" target="_blank" className="underline hover:text-blue-400">
          HER
        </a>{" "}
        eller scan QR koden!
      </div>
      <div className="flex-[3] flex justify-center mt-30">
        <QRCode value="https://forms.gle/MerfxwhLCr5G7mfp7" size={400}/>
      </div>  
    </div>
  );
}
