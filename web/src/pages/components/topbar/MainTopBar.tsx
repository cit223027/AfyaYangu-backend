import { useContext } from "react";
import {AppLanguage, AppLanguageContext} from "@/pages/context/AppLanguageContext.ts";
import {Button} from "@/components/ui/button.tsx";
import {LanguageTranslations} from "@/pages/utils/LanguageTranslations.ts";
import {CircleUser} from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu.tsx";

type MainTopBarProps = {
    className?: string
    isShowingSearchBar: boolean;
}

export default function MainTopBar({
    className,
    isShowingSearchBar,
}: MainTopBarProps) {

    const {appLanguage, setAppLanguage} = useContext(AppLanguageContext);


    return (
        <div className={`flex flex-row items-center justify-between ${className}`}>
            <p className="text-2xl font-bold">AfyaYangu</p>

            {isShowingSearchBar && (
                <div>

                </div>
            )}

            <div>
                <div className="flex flex-row items-center">
                    <div className="mx-2 px-2 my-1 flex flex-row items-center">
                        <p className="font-bold me-2">{LanguageTranslations.language.getTranslation(appLanguage)}</p>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline">{LanguageTranslations.languageName.getTranslation(appLanguage)}</Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-48">
                                <DropdownMenuLabel>{LanguageTranslations.chooseLanguage.getTranslation(appLanguage)}</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem className="hover:cursor-pointer py-1" onClick={() => { setAppLanguage(AppLanguage.English) }}>
                                    <span>{LanguageTranslations.languageName.english}</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="hover:cursor-pointer py-1" onClick={() => { setAppLanguage(AppLanguage.Swahili) }}>
                                    <span>{LanguageTranslations.languageName.swahili}</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="hover:cursor-pointer py-1" onClick={() => { setAppLanguage(AppLanguage.Kikuyu) }}>
                                    <span>{LanguageTranslations.languageName.kikuyu}</span>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>

                    <div className="mx-2">
                        <CircleUser />
                    </div>
                </div>
            </div>


        </div>
    )
}
