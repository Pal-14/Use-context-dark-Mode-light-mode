import { createContext, useState } from "react";
// initialisation du context

export const ThemeContext = createContext();

// celui qui apporte le contexte
const ThemeContextProvider = props => {


    const[theme, setTheme] = useState(false);
   
    
    const toggleTheme=()=> {
        setTheme(!theme)
    }
    if(theme){
        document.body.classList.add('dark-body');
       

    }
    else{
        document.body.classList.remove('dark-body');
    }

    

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {props.children}    
        </ThemeContext.Provider>
    )

}

export default ThemeContextProvider;