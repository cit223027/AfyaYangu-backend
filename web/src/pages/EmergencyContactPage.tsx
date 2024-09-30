import {useContext, useState} from "react";
import {AppLanguage, AppLanguageContext} from "@/context/AppLanguageContext.ts";
import {BackendContext} from "@/components/backend/BackendContext.tsx";
import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs.tsx";
import {MedicalCenter} from "@/models/MedicalCenter.ts";
import {TabsContent} from "@radix-ui/react-tabs";
import SearchBar from "@/components/search/SearchBar.tsx";
import {Button} from "@/components/ui/button.tsx";
import {FilterIcon} from "lucide-react";
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
import MapComponent from "@/components/map/MapComponent.tsx";


export default function EmergencyContactPage() {

    return (
        <div className="w-full h-full flex flex-col">
            <Tabs defaultValue="mapview" className="grow my-2 flex flex-col">
                <TabsList className="w-full lg:w-[400px] grid grid-cols-2">
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

    const [filteredMedicalCenters, setFilteredMedicalCenters] = useState<MedicalCenter[]>([])
    const [searchFilteredMedicalCenters, setSearchFilteredMedicalCenters] = useState<MedicalCenter[]>([])

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

    return (
        <div className="flex flex-col w-full h-full">
            <div className="flex flex-row my-2 px-1">
                <div></div>
                <SearchBar onSearch={(searchTerm) => applySearchFilterMedicalCenters(searchTerm)} />
                <div className="">
                    <Dialog>
                        <DialogTrigger>
                            <Button>
                                <span>Filters</span>
                                <FilterIcon />
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Medical Center Filters</DialogTitle>
                                <DialogDescription>Filter the medical centers</DialogDescription>
                            </DialogHeader>

                            <div>
                                <Tabs>
                                    <TabsList>
                                        <TabsTrigger value="closest">Closest</TabsTrigger>
                                        <TabsTrigger value="distance">By Distance</TabsTrigger>
                                    </TabsList>

                                    {/* Tab for closest medical centers */}
                                    <TabsContent value="closest">
                                        <div className="">
                                            <h5>Find Medical Centers closest to you</h5>

                                            <div className="w-full my-2 rounded-xl px-1 mx-2 border border-gray-300">
                                                <h6>Grant Location</h6>
                                                <p>Grant the website location access to use this filter</p>
                                                <Button onClick={handleGrantLocation}>
                                                    Grant Location Access
                                                </Button>
                                            </div>

                                            <div className="w-full my-2 rounded-xl px-1 mx-2 border border-gray-300">
                                                <h6>Your Location</h6>
                                                <Input
                                                    readOnly
                                                    value={userLocation?.latitude || ''}
                                                    placeholder="Latitude"
                                                    className="w-full my-1"
                                                />
                                                <Input
                                                    readOnly
                                                    value={userLocation?.longitude || ''}
                                                    placeholder="Longitude"
                                                    className="w-full my-1"
                                                />
                                            </div>

                                            <div className="my-2">
                                                <h6>Number Of Centers</h6>
                                                <Input
                                                    placeholder="Enter number"
                                                    inputMode="numeric"
                                                    className="w-full"
                                                    onChange={(e) => setNearestFilter({ ...nearestFilter, number_of_centers: parseInt(e.target.value) })}
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
                                                    <span>Apply Filter</span>
                                                    <FilterIcon />
                                                </Button>
                                            </div>
                                        </div>
                                    </TabsContent>

                                    {/* Tab for filtering by distance */}
                                    <TabsContent value="distance">
                                        <div className="">
                                            <h5>Find Medical Centers within a certain distance</h5>

                                            <div className="w-full my-2 rounded-xl px-1 mx-2 border border-gray-300">
                                                <h6>Your Location</h6>
                                                <Input
                                                    readOnly
                                                    value={locationSearchFilter.location?.latitude || ''}
                                                    placeholder="Latitude"
                                                    className="w-full my-1"
                                                />
                                                <Input
                                                    readOnly
                                                    value={locationSearchFilter.location?.longitude || ''}
                                                    placeholder="Longitude"
                                                    className="w-full my-1"
                                                />
                                            </div>

                                            <div className="my-2">
                                                <h6>Distance in Kilometers</h6>
                                                <Input
                                                    placeholder="Distance"
                                                    inputMode="numeric"
                                                    className="w-full"
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
                                                    <span>Apply Filter</span>
                                                    <FilterIcon />
                                                </Button>
                                            </div>
                                        </div>
                                    </TabsContent>
                                </Tabs>
                            </div>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
            <div className="grow w-full py-2 px-2 overflow-y-auto grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {searchFilteredMedicalCenters.map((medicalCenter) => (
                    <MedicalCenterCard
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
        medicalCenter
    }: {
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
        <Card>
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

    return (
        <div className="w-full h-full flex flex-col pb-4">
            <MapComponent
                className="grow min-h-0 mx-3 mb-4"
            />
        </div>
    )
}
