'use client';
import { contactsPageContent } from '@/lib/constants';
import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';


export default function MapContacts() {
  const coordinates = contactsPageContent[0]?.coordinates;

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
      <div style={{ height: '60vh', width: '100%' }}>
        <Map defaultCenter={coordinates} defaultZoom={15} mapId={process.env.NEXT_PUBLIC_GOOGLE_MAPS_ID!}>
          <AdvancedMarker position={coordinates}>
            <Pin
              background={'#007FCA'}
              borderColor={'#007FCA'}
              glyphColor={'white'}
            />
          </AdvancedMarker>
        </Map>
      </div>
    </APIProvider>
  );
}
