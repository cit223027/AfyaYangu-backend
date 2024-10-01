import {
    AdvancedMarker,
    AdvancedMarkerAnchorPoint,
    APIProvider,
    InfoWindow,
    Map, Pin,
    useAdvancedMarkerRef
} from "@vis.gl/react-google-maps";
import {useCallback, useState} from "react";
import {Card, CardFooter, CardHeader} from "@/components/ui/card.tsx";
import {Button} from "@/components/ui/button.tsx";

type MapMarker = {
    id: string;
    position: google.maps.LatLngLiteral;
    title: string;
    description: string;
};

type SelectedMapMarker = {
    marker: any
    markerData: MapMarker;
}

type MapComponentProps = {
    className?: string;
    defaultZoom?: number;
    defaultCenter?: google.maps.LatLngLiteral;
    disableDefaultUI?: boolean;
    markers?: MapMarker[];
};

export default function MapComponent({
    className,
    defaultZoom = 15,
    defaultCenter = { lat: -1.286389, lng: 36.817223 },
    markers = []
}: MapComponentProps) {


    const API_KEY1 = "AIzaSyAdlt"
    const API_KEY2 = "64hJKov4nBGnU"
    const API_KEY3 = "617wkjoRdIUlSjM"

    const [_hoveredMarkerId, setHoveredMarkerId] = useState<string | null>(null)
    const [selectedMarker, setSelectedMarker] = useState<SelectedMapMarker | null>(null);
    const [infoWindowShown, setInfoWindowShown] = useState(false);
    const [userLocation, setUserLocation] = useState<google.maps.LatLngLiteral | null>(null);
    const [showPermissionCard, setShowPermissionCard] = useState(true);

    const [mapCenter, setMapCenter] = useState(defaultCenter)

    const onMarkerClick = (marker: any, markerData: MapMarker) => {
        setSelectedMarker({marker: marker, markerData: markerData});
        setInfoWindowShown(true);
    }

    const onMarkerMouseEnter = (id: string) => {
        setHoveredMarkerId(id);
    }

    const onMarkerMouseLeave = () => {
        setHoveredMarkerId(null);
    }

    const onMapClick= () => {
        setSelectedMarker(null);
        setInfoWindowShown(false);
    }

    const handleInfoWindowCloseClick = useCallback(() => {
        setInfoWindowShown(false);
        setSelectedMarker(null);
    }, []);

    const handleLocationPermission = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const {latitude, longitude} = position.coords;
                    setUserLocation({lat: latitude, lng: longitude});
                    setShowPermissionCard(false); // Dismiss permission card
                },
                () => {
                    console.error('Location access denied');
                    setShowPermissionCard(false); // Dismiss permission card
                }
            );
        }
    };

    const handleDismissPermissionCard = () => {
        setShowPermissionCard(false);
    };

    return (
        <>
        {showPermissionCard && (
            <div>
                <Card className="w-fit mx-auto my-2">
                    <CardHeader>
                        <p>Would you like to center the map to your current location?</p>
                    </CardHeader>
                    <CardFooter className="flex flex-row justify-evenly">
                        <Button onClick={handleLocationPermission}>Allow Location</Button>
                        <Button variant="outline" onClick={handleDismissPermissionCard}>
                            Dismiss
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        )}

        {userLocation && (
            <div className="w-full">
                <Card className="w-fit mx-auto my-2">
                    <CardHeader>
                        <p>Your location has been found! Do you want to move the map to your current location?</p>
                    </CardHeader>
                    <CardFooter className="flex flex-row justify-evenly">
                        <Button
                            onClick={() => {
                                setMapCenter({ lat: userLocation.lat, lng: userLocation.lng })
                                setUserLocation(null)
                            }}
                        >
                            Move to My Location
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        )}

        <APIProvider apiKey={`${API_KEY1}${API_KEY2}-${API_KEY3}`} libraries={['marker']}>
            <Map
                className={`${className}`}
                defaultZoom={defaultZoom}
                defaultCenter={mapCenter}
                disableDefaultUI={false}
                onClick={() => onMapClick()}
                clickableIcons={true}
            >
                {markers.map((markerData) => {
                    const [markerRef, marker] = useAdvancedMarkerRef()

                    return (
                        <AdvancedMarker
                            key={markerData.id}
                            position={markerData.position}
                            ref={markerRef}
                            onMouseEnter={() => onMarkerMouseEnter(markerData.id)}
                            onMouseLeave={() => onMarkerMouseLeave()}
                            anchorPoint={AdvancedMarkerAnchorPoint.CENTER}
                            onClick={() => onMarkerClick(marker, markerData)}
                        >
                            <Pin
                                background={selectedMarker && selectedMarker.markerData.id === markerData.id ? '#22ccff' : null}
                                borderColor={selectedMarker && selectedMarker.markerData.id === markerData.id ? '#1e89a1' : null}
                                glyphColor={selectedMarker && selectedMarker.markerData.id === markerData.id ? '#0f677a' : null}
                            />
                        </AdvancedMarker>
            )
            })}

            {infoWindowShown && selectedMarker && (
                <InfoWindow
                    anchor={selectedMarker.marker}
                    onCloseClick={handleInfoWindowCloseClick}
                >
                    <div>
                        <h2>{selectedMarker?.markerData?.title}</h2>
                        <p>{selectedMarker?.markerData?.description}</p>
                    </div>
                </InfoWindow>
            )}
        </Map>
        </APIProvider>
</>
)
}
