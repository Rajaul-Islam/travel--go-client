import React from 'react';
import useAuth from '../../Hook/useAuth';
import Banner from './Banner/Banner';
import Services from './Services/Services';


const Home = () => {
    const {elements}=useAuth();

    return (
        <div>
            
            <div>
                <Banner></Banner>
            </div>
            <div>
                <Services></Services>
            </div>
            
        </div>
    );
};

export default Home;