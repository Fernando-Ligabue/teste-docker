'use client';

import { useState } from 'react';
import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';
import LocationModal from './LocationModal';

interface Property {
  id: number;
  type: string;
  segment: string;
  title: string;
  address: string;
  location: string;
  imageUrl: string;
  lat: number;
  lng: number;
}

interface MapPatrimonioProps {
  locations: Property[]; 
}

export default function MapPatrimonio({ locations }: MapPatrimonioProps) {
  const position = { lat: 38.7223, lng: -9.1393 };

  const [selectedLocation, setSelectedLocation] = useState<Property | null>(null);

  const handleMarkerClick = (location: Property) => {
    setSelectedLocation(location);
  };

  const handleCloseModal = () => {
    setSelectedLocation(null);
  };

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
      <div style={{ height: '60vh', width: '100%' }}>
        <Map defaultCenter={position} defaultZoom={12} mapId={process.env.NEXT_PUBLIC_GOOGLE_MAPS_ID!}>
          {locations.map((location) => {
            return (
              <AdvancedMarker
                key={location.id}
                position={{ lat: location.lat, lng: location.lng }}
                onClick={() => handleMarkerClick(location)} 
              >
                {location.segment === "Comercial" ? (
                    <Pin
                  background={'#003366'} 
                  borderColor={'#003366'} 
                  glyphColor={'white'} 
                />
                ) : (
                    <Pin
                  background={'#007FCA'} 
                  borderColor={'#007FCA'} 
                  glyphColor={'white'} 
                />
                )}
              </AdvancedMarker>
            );
          })}
        </Map>
      </div>

      {selectedLocation && (
        <LocationModal location={selectedLocation} onClose={handleCloseModal} />
      )}
    </APIProvider>
  );
}
