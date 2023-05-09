import React from 'react'

import { Card } from 'primereact/card';
// import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
        
const Unauthorized = () => {
    const handleClick = () => {
        window.location.replace('https://ecvrs-main.verxid.site/welcome');
      };
  return (
    <div className='flex justify-content-center align-items-center min-h-screen '>
<Card title="UNAUTHORIZED">
    <p className="m-0 font-bold">
        You are not authorized to access this route.
    </p>
   
    <Button label="Go back" severity="danger" className='bg-danger my-2' onClick={handleClick} />
   
</Card>
    </div>
  )
}

export default Unauthorized