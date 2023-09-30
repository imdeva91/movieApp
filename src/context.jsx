import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

//base url..

const BASE_URL = `http://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_API_KEY}&s=titanic`;

const AppContext = React.createContext();

// provider......

const AppProvider = ({ children }) => {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState({ show: "false", msg: "" })


    const getMovies = async (url) => {

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
        getMovies(BASE_URL);
    }, []);
    console.log(movies)
    return <AppContext.Provider value={{
        isLoading,
        isError,
        movies
    }}>{children}</AppContext.Provider>;
};

/// custom hook

const useGlobleContext = () => {
    return useContext(AppContext);
};

// Export

export { AppContext, AppProvider, useGlobleContext };
