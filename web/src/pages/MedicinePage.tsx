import {useContext, useState} from "react";
import {UserInformationContext} from "@/context/UserInformationContext.ts";
import Medicine from "@/models/Medicine.ts";
import SearchBar from "@/components/search/SearchBar.tsx";
import {Button} from "@/components/ui/button.tsx";
import {GridIcon} from "@radix-ui/react-icons";
import {ListIcon} from "lucide-react";
import {Skeleton} from "@/components/ui/skeleton.tsx";

export default function MedicinePage() {

    const { isLoggedIn, userInformation } = useContext(UserInformationContext)

    const [isLoading, setIsLoading] = useState(false)
    const [isGridMode, setIsGridMode] = useState<boolean>(true);
    const [allMedicines, setAllMedicines] = useState<Medicine[]>([])
    const [filteredMedicines, setFilteredMedicines] = useState<Medicine[]>([])

    const filterMedicines = (searchTerm: string = "") => {

    }

    return (
        <div className="h-full w-full flex flex-col">
            <div className="w-full mx-2 overflow-x-auto flex flex-row">

            </div>

            <div className="grow flex flex-col">
                <div className="w-full justify-between flex flex-row items-center">
                    <div></div>
                    <SearchBar
                        onSearch={filterMedicines}
                    />
                    <div className="hidden md:flex md:flex-row space-x-2 ms-4">
                        <Button
                            variant={isGridMode ? "default" : "ghost"}
                            className="rounded-xl"
                            onClick={() => setIsGridMode(true)}
                        >
                            <GridIcon/>
                        </Button>

                        <Button
                            variant={!isGridMode ? "default" : "ghost"}
                            className="rounded-xl"
                            onClick={() => setIsGridMode(false)}
                        >
                            <ListIcon/>
                        </Button>
                    </div>
                </div>

                <div className="md:hidden flex flex-row w-full">
                    <div className={"grow"}></div>

                    <div className="md:hidden flex md:flex-row space-x-2">
                        <Button
                            variant={isGridMode ? "default" : "ghost"}
                            className="rounded-xl"
                            onClick={() => setIsGridMode(true)}
                        >
                            <GridIcon/>
                        </Button>

                        <Button
                            variant={!isGridMode ? "default" : "ghost"}
                            className="rounded-xl"
                            onClick={() => setIsGridMode(false)}
                        >
                            <ListIcon/>
                        </Button>
                    </div>
                </div>

                {/* Filtered Medicine */}
            </div>
        </div>
    )
}

function MedicineGridLayout(
    {
        id,
        className,
        isLoading = false,
        medicine = []
    }:{
        id?: string
        className?: string
        isLoading?: boolean
        medicine?: Medicine[]
    }
) {

    const renderItems = () => {
        if (isLoading) {
            const shimmers = []

            for (let i = 0; i < 20; i++) {
                shimmers.push((<Skeleton key={i} className="h-72" />))
            }

            return (
                <>
                    {shimmers.map((shimmer) => ({shimmer}))}
                </>
            )
        } else {

            return (
                <>
                    {medicine!!.map((med, index) => (<div></div>))}
                </>
            )
        }
    }

    return (
        <div id={id} className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 overflow-y-auto mt-2 ${className}`}>
            {renderItems()}
        </div>
    )
}
