"use client";

import PackageMap from "./PackageMap";

interface ClientDynamicMapProps {
  position:
    | {
        lat: number;
        lng: number;
      }
    | number[];
}

const ClientDynamicMap = ({ position }: ClientDynamicMapProps) => {
  // Keep position as an array for PackageMap which expects position as number[]
  // If it's already an array, use it directly; if it's an object, convert to array [lat, lng]
  const normalizedPosition = Array.isArray(position)
    ? position
    : [position.lat, position.lng];

  return <PackageMap position={normalizedPosition} />;
};

export default ClientDynamicMap;
