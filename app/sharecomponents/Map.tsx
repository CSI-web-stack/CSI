"use client";
import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const center = {
  lat: 31.44501590585735,
  lng: 74.20135073807467,
};
const handleMarkerClick = () => {
  const mapUrl =
    "https://www.google.com/maps/place/Central+School+International/@31.4441555,74.2009645,15z/data=!4m2!3m1!1s0x0:0xe6acc4b83abfee9d?sa=X&ved=1t:2428&ictx=111";
  window.open(mapUrl, "_blank");
};

const Map = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        console.log("mobile");
        setIsMobile(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const dynamicContainerStyle = {
    width: "100%",
    height: isMobile ? "calc(140vh)" : "calc(50vh)",
  };

  return (
    <div className="w-full">
      <LoadScript
        googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
      >
        <GoogleMap
          mapContainerStyle={dynamicContainerStyle}
          center={center}
          zoom={14}
          options={{
            styles: [{ stylers: [{ saturation: -100 }] }],
            disableDefaultUI: true,
            gestureHandling: "greedy",
            scrollwheel: false,
            zoomControl: true,
          }}
        >
          <Marker position={center} onClick={handleMarkerClick} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
