import React from 'react';
import { useNavigation } from 'react-router';
import Loader from '../Pages/Loader';
import Active from '../Pages/Active';

const Challenges = () => {
    const navigation = useNavigation();
   if(navigation.state==='loading'){
    return <Loader></Loader>
   }
    return (
        <div>
            <Active></Active>
        </div>
    );
};

export default Challenges;