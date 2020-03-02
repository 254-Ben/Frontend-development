import React from 'react';
import ReactDOM from 'react-dom';
import SearchParams from './searchParams';

const App = () => {
    return (
        <div>
            <h1>Adopt pets!</h1>
            <SearchParams/>
        </div>
    )
}

ReactDOM.render (<App/>,document.getElementById("root"))