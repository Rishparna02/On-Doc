import React from 'react';
import paws_team from '../../../assets/doctor.png';

const Team = () => {
  return (
    <div className='flex items-center justify-center flex-col mt-16' id="about">
      <h1 className='text-4xl font-bold font-noto-sans hover:underline'>About Us</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 items-center mt-4'>
        <div className='flex items-center justify-center'>
          <img src={paws_team} className="md:h-96 md:w-96 h-52 w-48 rounded-[100%]" alt="Team" />
        </div>
        <div className=' '>
          <p className='m-2 md:m-2 text-lg font-noto-sans'>
            "Our platform assures patients prompt access to expert medical guidance, effortless appointment scheduling, and secure medical record access.
             By utilizing telemedicine, we overcome geographical constraints, ensuring continuous healthcare delivery. Patients receive tailored support, empowering them to prioritize their health in each interaction."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
