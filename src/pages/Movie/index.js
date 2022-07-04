import React from 'react';
import {useParams} from "react-router";

const Movie = () => {
    const {id} = useParams();
    console.log(id);
    return (
        <section>
            movie
        </section>
    );
};

export default Movie;