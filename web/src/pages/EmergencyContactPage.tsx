import {useContext, useEffect, useState} from "react";
import {AppLanguage, AppLanguageContext} from "@/context/AppLanguageContext.ts";
import {BackendContext} from "@/components/backend/BackendContext.tsx";
import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs.tsx";
import {MedicalCenter} from "@/models/MedicalCenter.ts";
import {TabsContent} from "@radix-ui/react-tabs";
import SearchBar from "@/components/search/SearchBar.tsx";
import {Button} from "@/components/ui/button.tsx";
import {BanIcon, FilterIcon, MapPinIcon} from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog.tsx";
import {Input} from "@/components/ui/input.tsx";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import MapComponent, {MapMarker} from "@/components/map/MapComponent.tsx";


export default function EmergencyContactPage() {

    return (
        <div className="w-full h-full flex flex-col">
            <Tabs defaultValue="mapview" className="grow my-2 flex flex-col">
                <TabsList className="w-full mx-auto lg:w-[400px] grid grid-cols-2">
                    <TabsTrigger value="mapview">Map</TabsTrigger>
                    <TabsTrigger value="listview">List</TabsTrigger>
                </TabsList>
                <TabsContent value="mapview" className="grow">
                    <MapView />
                </TabsContent>
                <TabsContent value="listview">
                    <ListView />
                </TabsContent>
            </Tabs>
        </div>
    )
}

type MedicalCenterLocation = {
    latitude: number;
    longitude: number;
}

interface MedicalCenterFilterCriterion {}

interface MedicalCenterNearestFilter extends MedicalCenterFilterCriterion {
    location?: MedicalCenterLocation;
    number_of_centers?: number;
}

interface MedicalCenterLocationSearch extends MedicalCenterFilterCriterion {
    location?: MedicalCenterLocation;
    distance_km?: number;
}

function ListView() {
    const { backendCache } = useContext(BackendContext);

    const [userLocation, setUserLocation] = useState<MedicalCenterLocation | null>(null)
    const [nearestFilter, setNearestFilter] = useState<MedicalCenterNearestFilter>({});
    const [locationSearchFilter, setLocationSearchFilter] = useState<MedicalCenterLocationSearch>({});

    const [allMedicalCenters, setAllMedicalCenters] = useState<MedicalCenter[]>([])
    const [filteredMedicalCenters, setFilteredMedicalCenters] = useState<MedicalCenter[]>([])
    const [searchFilteredMedicalCenters, setSearchFilteredMedicalCenters] = useState<MedicalCenter[]>([])

    useEffect(() => {
        backendCache.getAllMedicalCenters().then((allMedCenters) => {
            if (allMedCenters !== undefined) {
                setAllMedicalCenters(allMedCenters)
                setFilteredMedicalCenters(allMedCenters)
                setSearchFilteredMedicalCenters(allMedCenters)
            }
        })
    }, [])

    const applySearchFilterMedicalCenters = (searchTerm: string) => {
        if (searchTerm.trim() === "") {
            setSearchFilteredMedicalCenters(filteredMedicalCenters);
        } else {
            const filtered = filteredMedicalCenters.filter((medicalCenter) =>
                medicalCenter.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                (medicalCenter.description?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false)
            );
            setSearchFilteredMedicalCenters(filtered);
        }
    };

    const getClosestMedicalCenters = (location: MedicalCenterLocation, number_of_centers: number = 3) => {
        backendCache.getClosestMedicalCenters(location.latitude, location.longitude, number_of_centers).then((result) => {
            if (result) {
                setFilteredMedicalCenters(result);
                setSearchFilteredMedicalCenters(result); // Update the search filter as well
            }
        });
    };

    const getMedicalCentersByLocation = (location: MedicalCenterLocation, distance_km: number = 3) => {
        backendCache.filterMedicalCentersByDistance(location.latitude, location.longitude, distance_km).then((result) => {
            if (result) {
                setFilteredMedicalCenters(result);
                setSearchFilteredMedicalCenters(result); // Update the search filter as well
            }
        });
    };

    const resetSearchFilters = () => {
        setFilteredMedicalCenters(allMedicalCenters)
        setSearchFilteredMedicalCenters(allMedicalCenters)
        setNearestFilter({})
        setLocationSearchFilter({})
    }

    const handleGrantLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            const location: MedicalCenterLocation = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            };
            setUserLocation(location);
            setNearestFilter({ ...nearestFilter, location });
            setLocationSearchFilter({ ...locationSearchFilter, location });
        });
    };

    const isNearestFilterValid = nearestFilter.location && nearestFilter.number_of_centers;
    const isLocationSearchFilterValid = locationSearchFilter.location && locationSearchFilter.distance_km;

    const LocationDialogComponents = () => {
        return (
            <>
                {userLocation === null && (
                    <div className="w-full my-2 p-3 rounded-xl border border-gray-300">
                        <h6 className="andika-bold mb-1">Grant Location</h6>
                        <p>Grant the website location access to use this filter</p>
                        <div className="w-full mt-2 flex flex-row justify-center">
                            <Button
                                className="mx-auto"
                                onClick={handleGrantLocation}
                            >
                                <MapPinIcon className="w-4 h-4 me-2"/>
                                Grant Location Access
                            </Button>
                        </div>
                    </div>
                )}

                {userLocation !== null && (

                    <div className="w-full my-2 rounded-xl p-2 border border-gray-300">
                        <div className="w-full flex flex-row justify-center">
                            <h6 className="andika-bold">Your Location</h6>
                        </div>

                        <div className="my-2 grid grid-cols-2 space-x-2">
                            <div>
                                <p>Latitude:</p>
                                <Input
                                    readOnly
                                    value={userLocation?.latitude || ''}
                                    placeholder="Latitude"
                                    className="w-full my-1"
                                />
                            </div>
                            <div>
                                <p>Latitude:</p>
                                <Input
                                    readOnly
                                    value={userLocation?.longitude || ''}
                                    placeholder="Longitude"
                                    className="w-full my-1"
                                />
                            </div>
                        </div>

                        <div className="my-2 w-full flex flex-row justify-center">
                            <Button
                                className="mx-auto"
                                onClick={handleGrantLocation}
                            >
                                <MapPinIcon className="w-4 h-4 me-2"/>
                                Refresh Location
                            </Button>
                        </div>
                    </div>
                )}

            </>
        )
}

    return (
        <div className="flex flex-col w-full h-full">
            <div className="w-full justify-between flex flex-row my-2 px-1">
                <div></div>
                <SearchBar
                    onSearch={(searchTerm) => applySearchFilterMedicalCenters(searchTerm)}
                />
                <div className="">
                    <Dialog>
                        <DialogTrigger>
                            <Button>
                                <FilterIcon className="w-4 h-4 me-2" />
                                <span>Filters</span>
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Medical Center Filters</DialogTitle>
                                <DialogDescription>Filter the medical centers</DialogDescription>
                            </DialogHeader>

                            <div className="w-full">
                                <Tabs>
                                    <TabsList className="w-full grid grid-cols-2">
                                        <TabsTrigger value="closest">Closest</TabsTrigger>
                                        <TabsTrigger value="distance">By Distance</TabsTrigger>
                                    </TabsList>

                                    {/* Tab for closest medical centers */}
                                    <TabsContent value="closest">
                                        <div className="mt-2">
                                            <div className="w-full flex flex-row justify-center">
                                                <h5 className="mx-auto">Find Medical Centers closest to you</h5>
                                            </div>

                                            {LocationDialogComponents()}

                                            <div className="my-3 w-full flex flex-row justify-between items-center space-x-3">
                                                <h6 className="">Number of centers</h6>
                                                <Input
                                                    placeholder="Enter number"
                                                    inputMode="numeric"
                                                    className="grow w-48 text-end"
                                                    onChange={(e) => setNearestFilter({
                                                        ...nearestFilter,
                                                        number_of_centers: parseInt(e.target.value)
                                                    })}
                                                />
                                            </div>

                                            <div className="flex flex-row justify-evenly">
                                                <Button
                                                    disabled={!isNearestFilterValid}
                                                    onClick={() => {
                                                        if (nearestFilter.location) {
                                                            getClosestMedicalCenters(nearestFilter.location, nearestFilter.number_of_centers || 3);
                                                        }
                                                    }}
                                                >
                                                    <FilterIcon className="w-4 h-4 me-2"/>
                                                    <span>Apply Filter</span>
                                                </Button>
                                            </div>
                                        </div>
                                    </TabsContent>

                                    {/* Tab for filtering by distance */}
                                    <TabsContent value="distance">
                                        <div className="my-2">
                                            <div className="w-full flex flex-row justify-center">
                                                <h5>Find Medical Centers within a certain distance</h5>
                                            </div>

                                            {LocationDialogComponents()}

                                            <div className="my-2 flex flex-row items-center justify-between space-x-4">
                                                <h6>Distance in Kilometers</h6>
                                                <Input
                                                    placeholder="Distance"
                                                    inputMode="numeric"
                                                    className="grow w-48"
                                                    onChange={(e) => setLocationSearchFilter({ ...locationSearchFilter, distance_km: parseInt(e.target.value) })}
                                                />
                                            </div>

                                            <div className="flex flex-row justify-evenly">
                                                <Button
                                                    disabled={!isLocationSearchFilterValid}
                                                    onClick={() => {
                                                        if (locationSearchFilter.location) {
                                                            getMedicalCentersByLocation(locationSearchFilter.location, locationSearchFilter.distance_km || 3);
                                                        }
                                                    }}
                                                >
                                                    <FilterIcon className="w-4 h-4 me-2"/>
                                                    <span>Apply Filter</span>
                                                </Button>
                                            </div>
                                        </div>
                                    </TabsContent>
                                </Tabs>
                            </div>
                        </DialogContent>
                    </Dialog>
                    <Button
                        className="ms-3"
                        variant="outline"
                        onClick={() => resetSearchFilters()}
                    >
                        <BanIcon className="text-red-500 w-4 h-4 me-2" />
                        <span>Reset</span>
                    </Button>
                </div>
            </div>
            <div className="items-center grow w-full py-2 px-2 overflow-y-auto gap-3 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                {searchFilteredMedicalCenters.map((medicalCenter) => (
                    <MedicalCenterCard
                        className="h-full"
                        key={medicalCenter.medical_center_id}
                        medicalCenter={medicalCenter}
                    />
                ))}
            </div>
        </div>
    );
}


function MedicalCenterCard(
    {
        id,
        className,
        medicalCenter
    }: {
        id?: string
        className?: string
        medicalCenter: MedicalCenter
    }
) {
    
    const { appLanguage } = useContext(AppLanguageContext)

    const printCenterDescription = (appLanguage: AppLanguage) => {
        switch (appLanguage) {
            case AppLanguage.English:
                return medicalCenter.description
            case AppLanguage.Swahili:
                if (medicalCenter.swahili_description) {
                    return medicalCenter.swahili_description
                } else {
                    return medicalCenter.description
                }

            case AppLanguage.Kikuyu:
                if (medicalCenter.kikuyu_description) {
                    return medicalCenter.kikuyu_description
                } else {
                    return medicalCenter.description
                }
        }
    }
    
    
    return (
        <Card id={id} className={className}>
            <CardHeader>
                <CardTitle>{medicalCenter.name}</CardTitle>
                <CardDescription>{printCenterDescription(appLanguage)}</CardDescription>
            </CardHeader>
            <CardContent>
                <div>
                    <h6>Emergency Contact</h6>
                    <Input
                        value={medicalCenter.emergency_mobile_number}
                        className="w-full my-1"
                        readOnly
                    />
                </div>
                <div>
                    <h6>Secondary Emergency Contact</h6>
                    <Input
                        value={medicalCenter.secondary_emergency_mobile_number}
                        className="w-full my-1"
                        readOnly
                    />
                </div>
            </CardContent>
        </Card>
    )
}

function MapView() {

    const [isLoading, setIsLoading] = useState(true);
    const [currentMarkers, setCurrentMarkers] = useState<MapMarker[]>([])

    const { backendCache } = useContext(BackendContext)

    useEffect(() => {
        backendCache.getAllMedicalCenters().then((medicalCenters) => {
            if (medicalCenters !== undefined) {
                const markers = medicalCenters.map((medicalCenter) => {
                    return {
                        id: medicalCenter.medical_center_id!!,
                        position: {
                            lat: medicalCenter.latitude,
                            lng: medicalCenter.longitude
                        },
                        title: medicalCenter.name,
                        descriptions: [
                            medicalCenter.description,
                            "Emergency Contact: " + medicalCenter.emergency_mobile_number
                        ]
                    }
                })
                setCurrentMarkers(markers)
                setIsLoading(false)
            }
        })
    }, [])

    return (
        <div className="w-full h-full flex flex-col pb-4 mt-2">
            {!isLoading && (
                <MapComponent
                    className="grow min-h-0 mx-3 mb-4"
                    markers={currentMarkers}
                />
            )}

            {isLoading && (
                <div className="w-full h-full flex flex-col items-center justify-center">
                    <p>The map is loading...</p>
                </div>
            )}
        </div>
    )
}
