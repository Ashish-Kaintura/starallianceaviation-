// LocationTracker.jsx
import { useEffect } from "react";

const LocationTracker = () => {
  useEffect(() => {
    const fetchAndSendLocation = async () => {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();

        // Console log the location data
        console.log("Location data:", data);

        // Send to your backend
        await fetch("http://localhost:5000/api/store-location", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ip: data.ip,
            city: data.city,
            region: data.region,
            country: data.country_name,
            latitude: data.latitude,
            longitude: data.longitude,
            timestamp: new Date().toISOString(),
          }),
        });
      } catch (err) {
        console.error("Failed to send location", err);
      }
    };

    fetchAndSendLocation();
  }, []);

  return null; // No UI needed
};

export default LocationTracker;
