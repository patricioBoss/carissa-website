import { useRef } from "react";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

export default function TawkMessenger() {
  const tawkMessengerRef = useRef();

  // const handleMinimize= () => {
  //     tawkMessengerRef.current.minimize();
  // };

  return (
    <TawkMessengerReact
      propertyId="643c36a231ebfa0fe7f89fee"
      widgetId="1gu5jarc0"
      ref={tawkMessengerRef}
    />
  );
}
