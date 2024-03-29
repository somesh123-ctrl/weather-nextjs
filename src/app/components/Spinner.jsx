import Image from 'next/image';
import React from 'react';
import spinner from '../../../public/next.svg';

const Spinner = () => {
  return (
    <>
      <Image className='w-[200px] m-auto block' src={spinner} alt='loading..' />
    </>
  );
};

export default Spinner;