import { useRef } from "react";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

export default function TawkMessenger() {
  const tawkMessengerRef = useRef();

  // const handleMinimize= () => {
  //     tawkMessengerRef.current.minimize();
  // };

  return (
    <TawkMessengerReact
      propertyId="648fb3b9cc26a871b0235545"
      widgetId="1h38lc3i9"
      ref={tawkMessengerRef}
    />
  );
}
