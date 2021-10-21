import React from 'react';
import Loader from 'react-loader-spinner'

const Loading  = () => {
  return (
    <div className="flex justify-center items-center ">
      <Loader type='Bars' color="00BFFF" height={550} width={80}className="dark:text-white" />
    </div>
  )

}

export default Loading;