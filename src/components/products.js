import React from 'react';

const Products = (props) => {
    return (
        <>
            <div className='col-4 text-center'>
            <img src={ props.image} alt=''/>
            <h5>{props.className}</h5>
           
            </div>

        </>
    )
}