import React from 'react'
import { CarProps } from '@/types';

interface Car2Props {
    car: CarProps
}

const Pagecard = ({car}: Car2Props) => {
  return (
    <div>{car.model} {car.make}
     <div className='mt-3 flex flex-wrap gap-4'>
                                {Object.entries(car).map(([key, value])=>(
                                    <div className='flex justify-between gap-5 w-full text-right ' key={key}>
                                        <h4 className='text-gray capitalize'>
                                            {key.split("_").join("_")}
                                        </h4>
                                        <p className='text-black-100 font-semibold '>
                                            {value}
                                        </p>
                                    </div>
                                ))}
                            </div>
    </div>
  )
}

export default Pagecard