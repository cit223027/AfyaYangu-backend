import {Input} from "@/components/ui/input.tsx";
import {useContext, useState} from "react";
import {AppLanguageContext} from "@/context/AppLanguageContext.ts";
import {LanguageTranslations} from "@/utils/LanguageTranslations.ts";
import {Button} from "@/components/ui/button.tsx";
import {SearchIcon} from "lucide-react";

type SearchBarProps = {
    id?: string;
    className?: string;
    onSearch: (searchTerm: string) => void;
};

export default function SearchBar({ id, className, onSearch }: SearchBarProps) {
    const [searchTerm, setSearchTerm] = useState("");
    const {appLanguage} = useContext(AppLanguageContext);

    const performSearch = () => {
        onSearch(searchTerm);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    };

    return (
        <div id={id} className={`${className} flex flex-row items-center justify-center`}>
            <Input
                placeholder={`${LanguageTranslations.search.getTranslation(appLanguage)}...`}
                value={searchTerm}
                className="rounded-xl max-w-3xl"
                onChange={e => setSearchTerm(e.target.value)} // Correct event handling
                onKeyDown={handleKeyDown} // Submit on Enter key
            />

            <Button className="ms-4 rounded-lg" variant="default" onClick={performSearch}>
                <SearchIcon className="w-4 h-4"/>
                <span className="ms-2">{LanguageTranslations.search.getTranslation(appLanguage)}</span>
            </Button>
        </div>
    )
}