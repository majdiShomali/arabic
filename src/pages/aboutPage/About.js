import React from 'react'
import BackimgAbout from './BackimgAbout'
import AboutUsed from './AboutUsed'
import Testimonials from './Testimonials'
import TeamMember from './TeamMember'
import { AboutNum } from './AboutNum'
import axios from 'axios'
import { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserNew } from '../../actions/UserActions';
import { fetchRecipes } from '../../actions/GetRecipes';

const About = () => {
  const { loading, data, error } = useSelector((state) => state.fetchRecipes);



  const dispatch = useDispatch();
  // useEffect(() => {
  //   if(localStorage.auth != null){ 
  //     const token = localStorage.getItem("auth");
  //     dispatch(fetchUserNew(token));
  // }
  // }, [dispatch]);
  useEffect(() => {
      dispatch(fetchRecipes());
  }, [dispatch]);

  console.log(data);
  return (
    <>









    
    <BackimgAbout/>
    {/* <AboutUsed/> */}
    {/* <Testimonials/> */}
    {/* <TeamMember/>  */}
    <AboutNum/>
    </>
  )
}

export default About