import React from 'react';

const Video = () => {
    return (
        <div className=''>

            <div className=' from-gray-900 via-gray-400 to-gray-900 bg-gradient-to-tr p-10'>
                <h1 className='text-white text-center text-4xl font-bold font-serif p-5'>how to build up your typing skill....!!!!!</h1>
                <iframe className='aspect-video mx-auto hover:aspect-square' width="900" height="450" src="https://www.youtube.com/embed/QIlI7YquuRY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    );
};

export default Video;