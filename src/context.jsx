import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

//base url..

export const BASE_URL = `http://www.omdbapi.com?apikey=${import.meta.env.VITE_API_KEY}`;

const AppContext = React.createContext();

// provider......

const AppProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState({ show: "false", msg: "" })
    const [query,setQuery] = useState("titanic")


    const getMovies = async (url) => {

        setIsLoading(true)

        try {
            const { data } = await axios.get(url);

            if (data.Response === "True") {
                setIsLoading(false)
                setMovies(data.Search);

            }

        } catch (error) {
            setIsError({
                show: "true",
                // msg: data.error
            })
            console.log(error)
        }

    };

    useEffect(() => {
        const timerOut = setTimeout(()=>{getMovies(`${BASE_URL}&i=tt3896198&s=${query}`)},800)
        return ()=> clearTimeout(timerOut)
    }, [query]);


    // console.log(movies)
    return <AppContext.Provider value={{
        isLoading,
        isError,
        movies,
        query,
        setQuery
    }}>{children}</AppContext.Provider>;
};

/// custom hook

const useGlobleContext = () => {
    return useContext(AppContext);
};

// Export

export { AppContext, AppProvider, useGlobleContext };
