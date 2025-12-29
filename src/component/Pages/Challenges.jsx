import React from 'react';
import { useNavigation } from 'react-router';
import Loader from '../Pages/Loader';

const Challenges = () => {
    const navigation = useNavigation();
   if(navigation.state==='loading'){
    return <Loader></Loader>
   }
    return (
        <div>
            
        </div>
    );
};

export default Challenges;