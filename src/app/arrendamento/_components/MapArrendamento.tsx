'use client';

import { useState } from 'react';
import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';
import LocationModal from './LocationModal';
import { PropertyArrendamento } from '@/lib/types';

interface MapArrendamentoProps {
    locations: PropertyArrendamento[];
}

export default function MapArrendamento({ locations }: MapArrendamentoProps) {
    const position = { lat: 38.7223, lng: -9.1393 };

    const [selectedLocations, setSelectedLocations] = useState<PropertyArrendamento[] | null>(null);

    const groupLocationsByLatLng = (lat: number, lng: number) => {
        return locations.filter(loc => loc.lat === lat && loc.lng === lng);
    };

    const handleMarkerClick = (location: PropertyArrendamento) => {
        const grouped = groupLocationsByLatLng(location.lat, location.lng);
        setSelectedLocations(grouped);
    };

    const handleCloseModal = () => {
        setSelectedLocations(null);
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
                                <Pin
                                    background={location.segment === "Comercial" ? '#003366' : '#007FCA'}
                                    borderColor={location.segment === "Comercial" ? '#003366' : '#007FCA'}
                                    glyphColor={'white'}
                                />
                            </AdvancedMarker>
                        );
                    })}
                </Map>
            </div>

            {selectedLocations && (
                <LocationModal locations={selectedLocations} onClose={handleCloseModal} />
            )}
        </APIProvider>
    );
}
