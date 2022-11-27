import React from 'react'
import ReactPlayer from 'react-player'
import './home.css';
import RecentProps from '../recentProps/recentProps';
import Header from '../header/header';
import PropDestacadas from '../contenido/contenido';
import Presentation from '../presentacion/presentation';



const Home = () => {
    return(
        <>
        <Header />
        <div className='tittleVideoSection'>
            <h2>Recorramos juntos lo que nuestra hermosa ciudad nos ofrece</h2>
        </div>
        <section className='containerGenVideo'>
            <div className='videoContainer'>
                <ReactPlayer
                    url='https://www.youtube.com/watch?v=DPTSeXaVU8Q&t=219s'
                    className='videoMDQ'
                    controls='true'
                    width='100%'
                    height='100%'
                />
            </div>
        </section>
        <Presentation />
        <PropDestacadas />
        <RecentProps />
        </>



    )
};

export default Home; 