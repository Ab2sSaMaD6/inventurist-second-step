import React, { Suspense, useState } from 'react'

// sections
const SearchForm = React.lazy(() => import('../sections/SearchForm/SearchForm'))
const Result = React.lazy(() => import('../sections/Result'))

const Main = () => {
    const [options, setOptions] = useState([{ contextOptions: [] }])
    
    return (
        <Suspense fallback={<h1>Loading...</h1>}>
            <SearchForm data={options} />
            <Result />
        </Suspense>
    )
}

export default Main
