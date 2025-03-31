// eslint-disable-next-line no-unused-vars
import React from 'react';
import { motion} from 'framer-motion';
import ProfileSection from './something';
import StartHereSection from './picturesSection';
import NavBar from './Navbar';
const Home = () => {
  return (
<div className='bg-gray-100'>
  <ProfileSection></ProfileSection>
  <StartHereSection></StartHereSection>
  <StartHereSection></StartHereSection>

</div>
  );
};

export default Home;
