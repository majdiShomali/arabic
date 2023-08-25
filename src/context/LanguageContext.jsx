import React from "react";
import { Children, createContext, useState } from "react";

export const LanguageContext = createContext();
const LanguageProvider = ( {children} ) => {
  const [selectedLanguage, setSelectedLanguage] = useState("AR");


  return (
        <>
            <LanguageContext.Provider
                value={{
                    selectedLanguage,setSelectedLanguage,

                }}
            >
                {children}
            </LanguageContext.Provider>
        </>
    )
};
 export default LanguageProvider;




