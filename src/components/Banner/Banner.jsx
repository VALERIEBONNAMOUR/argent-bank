import React from 'react';
import './Banner.css';
import PlantImage from '../../assets/images/bank-tree.jpeg'; 

function Banner () {
    return (
        <div className='banner'>
            <section className='introduction'>
                <p className='subtitle'>No fees.</p>
                <p className='subtitle'>No minimum deposit.</p>
                <p className='subtitle'>High interest rates.</p>
                <p className='text'>Open a savings account with Argent Bank today!</p>
            </section>
        </div>
    )
}

export default Banner;
