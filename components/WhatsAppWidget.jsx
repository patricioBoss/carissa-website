import React, { useState } from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const WhatsAppWidget = () => {
  const [open, setOpen] = useState(false);
  return (
    <FloatingWhatsApp
      accountName="Carissa Barney"
      avatar="/img/Carissa Barney avatar.png"
      buttonClassName=" left-[2rem] "
      onClose={() => setOpen(false)}
      onClick={() => setOpen(true)}
      phoneNumber="14242793916"
      chatboxClassName={`left-[2rem]  ${
        open ? "animate-bounce-in" : " animate-bounce-out"
      }`}
    />
  );
};

export default WhatsAppWidget;
