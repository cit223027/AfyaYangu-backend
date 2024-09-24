import {AfyaYanguArticle} from "@/pages/components/article/AfyaYanguArticles.tsx";
import {useContext, useState} from "react";
import {AppLanguageContext} from "@/pages/context/AppLanguageContext.ts";
import SearchBar from "@/pages/components/search/SearchBar.tsx";
import {Button} from "@/components/ui/button.tsx";
import {GridIcon} from "@radix-ui/react-icons";
import {ListIcon} from "lucide-react";

type SearchArticleSectionProps = {
    id?: string;
    className?: string;
    articles: AfyaYanguArticle[];
};

export default function SearchArticleSection({ id, className, articles }: SearchArticleSectionProps) {
    const { appLanguage } = useContext(AppLanguageContext);

    const [filteredArticles, setFilteredArticles] = useState<AfyaYanguArticle[]>(articles);
    const [isGridLayout, setIsGridLayout] = useState(true);

    const performSearch = async (searchTerm: string) => {
        const lowercasedSearchTerm = searchTerm.toLowerCase();
        const filtered = articles.filter(article =>
            /* Always consider the english search */
            article.title.english.toLowerCase().includes(lowercasedSearchTerm) ||
            article.title.getTranslation(appLanguage).toLowerCase().includes(lowercasedSearchTerm)
        );
        setFilteredArticles(filtered);
    };

    return (
        <div id={id} className={`${className} w-full flex flex-col`}>
            <div className="w-full md:flex flex-row mt-3 mb-2">
                <SearchBar className="md:grow" onSearch={performSearch} />
                <div className="hidden md:flex md:flex-row space-x-2 ms-4">
                    <Button
                        variant={isGridLayout ? "default" : "ghost"}
                        className="rounded-xl"
                        onClick={() => setIsGridLayout(true)}
                    >
                        <GridIcon />
                    </Button>

                    <Button
                        variant={!isGridLayout ? "default" : "ghost"}
                        className="rounded-xl"
                        onClick={() => setIsGridLayout(false)}
                    >
                        <ListIcon />
                    </Button>
                </div>
            </div>

            <div className="md:hidden flex flex-row w-full">
                <div className={"grow"}></div>

                <div className="md:hidden flex md:flex-row space-x-2">
                    <Button
                        variant={isGridLayout ? "default" : "ghost"}
                        className="rounded-xl"
                        onClick={() => setIsGridLayout(true)}
                    >
                        <GridIcon />
                    </Button>

                    <Button
                        variant={!isGridLayout ? "default" : "ghost"}
                        className="rounded-xl"
                        onClick={() => setIsGridLayout(false)}
                    >
                        <ListIcon />
                    </Button>
                </div>
            </div>

            {/* Conditional rendering for Grid or List Layout */}
            {isGridLayout ? (
                <ArticlesGridLayout className="grow ps-2 pe-4 flex-shrink" articles={filteredArticles} />
            ) : (
                <ArticlesListLayout className="grow ps-2 pe-4 pb-20 flex-shrink min-h-0" articles={filteredArticles} />
            )}
        </div>
    );
}

type ArticleSectionProps = {
    id?: string;
    className?: string;
    articles: AfyaYanguArticle[];
};

function ArticlesGridLayout({ id, className, articles }: ArticleSectionProps) {
    return (
        <div id={id} className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 overflow-y-auto mt-2 ${className}`}>
            {articles.map((article, index) => (
                <div key={index} className="col-span-1">
                    {article.preview(false)}
                </div>
            ))}
        </div>
    );
}

function ArticlesListLayout({ id, className, articles }: ArticleSectionProps) {
    return (
        <div id={id} className={`flex flex-col space-y-4 overflow-y-auto mt-2 ${className}`}>
            {articles.map((article, index) => (
                <div key={index} className="w-full">
                    {article.preview(true)}
                </div>
            ))}
        </div>
    );
}
