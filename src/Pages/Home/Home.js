import React from 'react';
import useAuth from '../../Hook/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Inspiration from '../Inspiration/Inspiration';
import Banner from './Banner/Banner';
import Services from './Services/Services';


const Home = () => {
    const {elements}=useAuth();

    return (
        <div>
            
            <div>
                <Banner></Banner>
            </div>
            <div className='container'>
                <Services></Services>
            </div>
           <div>
               <Inspiration></Inspiration>
           </div>
            
        </div>
    );
};

export default Home;