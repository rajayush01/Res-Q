import React, { useEffect, useRef, useState, useCallback } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPin, AlertTriangle, Shield, Loader } from 'lucide-react';

const MapView = () => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const [isMapReady, setIsMapReady] = useState(false);
  const [isLoadingMarkers, setIsLoadingMarkers] = useState(false);
  const apiKey = 'AIzaSyCPcMPsIjKrQoi8nP1KJ-8PAp-aavTKB4U';
  
  const hotspots = [
    { address: 'New Delhi, India', name: 'Delhi', severity: 'High' },
    { address: 'Jaipur, Rajasthan, India', name: 'Jaipur', severity: 'Moderate' },
    { address: 'Mumbai, Maharashtra, India', name: 'Mumbai', severity: 'Low' },
    { address: 'Kolkata, West Bengal, India', name: 'Kolkata', severity: 'High' },
    { address: 'Chennai, Tamil Nadu, India', name: 'Chennai', severity: 'Moderate' },
    { address: 'Valavoor - Chakkampuzha Rd, Valavoor, Nechipuzhoor, Kerala,India', name: 'Kottayam', severity: 'High' },
  ];

  const getCoordinates = useCallback(async (address) => {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      address
    )}&key=${apiKey}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.results.length > 0) {
        const location = data.results[0].geometry.location;
        return { lat: location.lat, lng: location.lng };
      }
    } catch (error) {
      console.error(`Error fetching coordinates for ${address}:`, error);
    }
    return null;
  }, []); // Removed apiKey from the dependencies
  

  const addMarkers = useCallback(async (map) => {
    setIsLoadingMarkers(true);
    try {
      for (const hotspot of hotspots) {
        const coordinates = await getCoordinates(hotspot.address);
        if (coordinates) {
          const color =
            hotspot.severity === 'High' ? '#ef4444' :
            hotspot.severity === 'Moderate' ? '#f97316' : '#22c55e';
            
          // Create marker with custom popup
          const marker = L.circle([coordinates.lat, coordinates.lng], {
            color: color,
            fillColor: color,
            fillOpacity: 0.6,
            radius: 50000,
            weight: 2,
          });

          // Add popup with custom styling
          const popupContent = `
            <div style="font-family: system-ui, sans-serif; padding: 8px;">
              <div style="font-weight: 600; font-size: 16px; margin-bottom: 4px;">${hotspot.name}</div>
              <div style="color: ${color}; font-weight: 500;">
                ${hotspot.severity} Risk Zone
              </div>
            </div>
          `;

          marker.bindPopup(popupContent);
          marker.addTo(map);
        }
      }
    } catch (error) {
      console.error('Error adding markers:', error);
    } finally {
      setIsLoadingMarkers(false);
    }
  }, [getCoordinates, hotspots]);

  // Initialize map after component mounts
  useEffect(() => {
    if (mapRef.current && !mapInstanceRef.current) {
      try {
        mapInstanceRef.current = L.map(mapRef.current).setView([28.6139, 77.2090], 5);
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '© OpenStreetMap contributors',
        }).addTo(mapInstanceRef.current);

        setIsMapReady(true);
      } catch (error) {
        console.error('Error initializing map:', error);
      }
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Add markers after map is initialized
  useEffect(() => {
    if (isMapReady && mapInstanceRef.current) {
      addMarkers(mapInstanceRef.current);
    }
  }, [isMapReady, addMarkers]); 

  const getTotalsByZoneType = () => {
    const counts = {
      High: hotspots.filter(h => h.severity === 'High').length,
      Moderate: hotspots.filter(h => h.severity === 'Moderate').length,
      Low: hotspots.filter(h => h.severity === 'Low').length
    };
    return counts;
  };

  const zoneCounts = getTotalsByZoneType();

  return (
    <div className="overflow-hidden flex flex-col">
      <div className="flex-grow">
        {/* Header Section - Responsive Typography */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-0">
            Disaster Hotspots Map
          </h2>
          <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-500">
            {isLoadingMarkers ? (
              <div className="flex items-center space-x-2">
                <Loader className="w-3 h-3 sm:w-4 sm:h-4 animate-spin" />
                <span>Loading markers...</span>
              </div>
            ) : (
              <>
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>Live Updates</span>
              </>
            )}
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-md overflow-hidden h-full">
          <div className="p-4">
            {/* Map Container - Fixed Height */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-inner relative h-full">
              <div 
                ref={mapRef} 
                className="h-full w-full rounded-lg"
                style={{ height: 'calc(100vh - 260px)' }} // Adjust this value based on your header and footer heights
              />
              {!isMapReady && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-50 bg-opacity-75">
                  <Loader className="w-6 h-6 sm:w-8 sm:h-8 animate-spin text-gray-500" />
                </div>
              )}
            </div>
            
            {/* Risk Zones Grid - Responsive Layout */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4">
              {/* High Risk Zone Card */}
              <div className="bg-red-50 rounded-xl p-2 sm:p-3 border border-red-100 transition-transform hover:scale-102">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xs sm:text-sm font-semibold text-red-900">High Risk Zones</h3>
                    <p className="text-lg sm:text-xl font-bold mt-1 text-red-700">{zoneCounts.High}</p>
                  </div>
                  <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
                </div>
              </div>
              
              {/* Moderate Risk Zone Card */}
              <div className="bg-orange-50 rounded-xl p-2 sm:p-3 border border-orange-100 transition-transform hover:scale-102">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xs sm:text-sm font-semibold text-orange-900">Moderate Risk Zones</h3>
                    <p className="text-lg sm:text-xl font-bold mt-1 text-orange-700">{zoneCounts.Moderate}</p>
                  </div>
                  <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500" />
                </div>
              </div>
              
              {/* Low Risk Zone Card */}
              <div className="bg-green-50 rounded-xl p-2 sm:p-3 border border-green-100 transition-transform hover:scale-102">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xs sm:text-sm font-semibold text-green-900">Low Risk Zones</h3>
                    <p className="text-lg sm:text-xl font-bold mt-1 text-green-700">{zoneCounts.Low}</p>
                  </div>
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapView;
