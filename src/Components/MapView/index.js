import MapView, { Marker, Polyline } from 'react-native-maps';
export const Map = ({ lat, lng, delta }) =>
    lat &&
    lng && (
        <MapView
            style={{ flex: 1 }}
            region={{
                latitude: lat,
                longitude: lng,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05,
            }}
        >
            <Marker
                coordinate={{
                    latitude: lat,
                    longitude: lng,
                }}
            />
            <Polyline
                coordinates={[
                    { latitude: 20.97858, longitude: 105.78526 },
                    { latitude: 20.97993, longitude: 105.78535 },
                    { latitude: 20.97902, longitude: 105.78616 },
                    { latitude: 20.98501, longitude: 105.7942 },
                    { latitude: 20.98902, longitude: 105.79992 },
                    { latitude: 20.99378, longitude: 105.80671 },
                    { latitude: 21.00114, longitude: 105.81766 },
                    { latitude: 21.00459, longitude: 105.8221 },
                    { latitude: 21.00809, longitude: 105.82386 },
                    { latitude: 21.01028, longitude: 105.82497 },
                    { latitude: 21.01346, longitude: 105.82694 },
                    { latitude: 21.01888, longitude: 105.83017 },
                    { latitude: 21.03041, longitude: 105.83608 },
                    { latitude: 21.03492, longitude: 105.83682 },
                    { latitude: 21.03497, longitude: 105.83696 },
                    { latitude: 21.03519, longitude: 105.83668 },
                    { latitude: 21.03891, longitude: 105.83702 },
                    { latitude: 21.03913, longitude: 105.83572 },
                    { latitude: 21.04242, longitude: 105.83627 },
                    { latitude: 21.04272, longitude: 105.83599 },
                    { latitude: 21.05061, longitude: 105.84008 },

                    { latitude: 21.05904, longitude: 105.83435 },
                    { latitude: 21.06488, longitude: 105.82918 },
                    { latitude: 21.06496, longitude: 105.82925 },
                    { latitude: 21.06551, longitude: 105.82879 },
                ]}
                strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
                strokeColors={[
                    '#7F0000',
                    '#00000000', // no color, creates a "long" gradient between the previous and next coordinate
                    '#B24112',
                    '#E5845C',
                    '#238C23',
                    '#7F0000',
                ]}
                strokeWidth={6}
            />
        </MapView>
    );
