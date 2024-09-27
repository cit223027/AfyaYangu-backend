// Medicine Class
import {AppLanguage} from "@/context/AppLanguageContext.ts";

export default class Medicine {
    medicine_id?: string;
    image_src?: string;
    english_name: string;
    swahili_name?: string;
    kikuyu_name?: string;
    side_effects: string[] = [];
    treats: string[] = [];

    constructor(
        english_name: string,
        side_effects: string[] = [],
        treats: string[] = [],
        medicine_id?: string,
        image_src?: string,
        swahili_name?: string,
        kikuyu_name?: string
    ) {
        this.medicine_id = medicine_id;
        this.image_src = image_src;
        this.english_name = english_name;
        this.swahili_name = swahili_name;
        this.kikuyu_name = kikuyu_name;
        this.side_effects = side_effects;
        this.treats = treats;
    }

    getTranslatedName(appLanguage: AppLanguage): string {
        switch (appLanguage) {
            case AppLanguage.English:
                return this.english_name
            case AppLanguage.Swahili:
                if (this.swahili_name !== undefined) {
                    return this.swahili_name
                } else {
                    return this.english_name
                }
            case AppLanguage.Kikuyu:
                if (this.kikuyu_name !== undefined) {
                    return this.kikuyu_name
                } else {
                    return this.english_name
                }
        }
    }
}
