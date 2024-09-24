import {APIProvider, Map} from "@vis.gl/react-google-maps";

type MapComponentProps = {
    className?: string;
    defaultZoom: number;
    defaultCenter: any;
    disableDefaultUI: boolean;
}

export default function MapComponent({
    className,
    defaultZoom,
    defaultCenter
}: MapComponentProps) {

    const API_KEY = (process.env.GOOGLE_MAPS_API_KEY as string || '');

    return (
        <>
            <APIProvider apiKey={API_KEY}>
                <Map
                    className={`${className}`}
                    defaultZoom={defaultZoom ? defaultZoom : 15}
                    defaultCenter={defaultCenter}

                />
            </APIProvider>
        </>
    )
}
