import React from 'react'
// import { useContext } from 'react'
import { useGlobleContext } from '../context'

const Search = () => {
    const {query,setQuery,isError} = useGlobleContext();
    return <>
    <section className='search-section'>
<h2>Search Movie</h2> 
<form action='#' onSubmit={(e)=>e.preventDefault()}> 
    <div>
        <input type='text' placeholder='search here' value={query} onChange={(e)=>setQuery(e.target.value)} />
    </div>
</form>
<div className='card-error'>
    <p>{isError.show && isError.msg}</p>
</div>
    </section>

    </>
 
}

export default Search