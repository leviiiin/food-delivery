import { useState, useEffect } from "react";

const useScreen = () => {
  const getDeviceType = () => {
    if (window.innerWidth < 768) {
      return "mobile";
    } else if (window.innerWidth < 1024) {
      return "tablet";
    } else {
      return "desktop";
    }
  };

  const [deviceType, setDeviceType] = useState(getDeviceType());

  const handleResize = () => {
    setDeviceType(getDeviceType());
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return deviceType;
};

export default useScreen;
