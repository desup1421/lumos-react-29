import React from 'react';

const InfoCard = ({ bgImage, title, number = '', image, desc }) => {
  return (
    <div className=' p-4 flex flex-col sm:flex-row items-center gap-4 rounded-lg w-full bg-accent/10'>
      <div className={`sm:w-auto h-[60px] rounded-md ${bgImage} flex items-center justify-center`}>
        <img src={image} alt='' className='max-w-full h-auto object-contain p-1' />
      </div>
      <div className='text-center'>
        <h3 className='text-accent font-bold'>{title}</h3>
        <p className='text-base'>
          {desc}
          {number && <span className='text-accent ml-3'>{number}</span>}
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
