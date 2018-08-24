import { Injectable } from "@angular/core";

/**Defining the locale attributes in the form key and value pairs*/
export class Locale {
    Name: string;
    Value: string;
}

/**Collection of all local attributes we can mention here other wise we can maintain in a json */
let locales: Locale[] = [
                        {
                            "Name": "English",
                            "Value": "en"
                        },
                        {
                            "Name": "Deutsch",
                            "Value": "de"
                        },
                        {
                            "Name": "Русский",
                            "Value": "ru"},
                        {
                            "Name": "French",
                            "Value": "fr"
                        }];
                            
    /**Custome message formate to support localization */
    export class CostumView {
        Start: string;
        End: string;
        DATETIME: string;
    }

    /**localization equvalent messages */
    export class Dictionary {
        [key: string]: CostumView;
    }

    let dictionary: Dictionary = {
        "fr": {
            "Start": "frstart",
            "End":"frend",
            "DATETIME":"frdtm"
        
        },
        "en": {
            "Start": "START",
            "End":"END",
            "DATETIME":"DATETIME"
        
        }
    
    };
@Injectable()
export class LocaleServices{
    /**
     * getting local attributes
     */    
    getLocales() {
        return locales;
    }
    /**getting all dictionary words which we defined in Dictionary class */
    getDictionary() {
        return dictionary;
    }
}