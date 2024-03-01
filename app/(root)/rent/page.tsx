import React from 'react';
import { fetchPropertiesForRent } from '@/utils/fetchPropertiesForRent';
import { PropProps, PropertyProps } from '@/types';
import { CustomFilter, ShowMore } from '@/components';
import { PriceRange, SelectRating } from '@/constants';
import Link from 'next/link';
import PropertyCard from '@/components/PropertyCard';

export default async function Home({ searchParams }: PropProps) {
  const response:any = await fetchPropertiesForRent({
    location: searchParams.location || "",
    page: searchParams.page || 1,
   
  });

   

  const isDataEmpty = !response?.home_search?.results || response?.home_search.results.length === 0 || response?.home_search.results.length < 1;

  return (
    <main className='overflow-hidden'>
       

      <div className='hero justify-between relative mt-5 bg-white p-3'>
        <CustomFilter title='rating' options={SelectRating} />
        <CustomFilter title='price' options={PriceRange} />
        <CustomFilter title='empty' options={PriceRange} />
        <CustomFilter title='empty' options={PriceRange} />

        <Link href={"/"}>
          <button className='text-white bg-purple-700 p-2 rounded-md'>
            Apply Filters
          </button>
        </Link>
      </div>

      <div className='mt-16 flex justify-start flex-row gap-2 mx-[6%] text-xl font-extrabold'>
        {response?.home_search?.results?.length > 0
          ? `${response.home_search?.results.length} properties found in `
          : '0 properties found in '}
        <span className='text-purple-700' style={{ textTransform: 'capitalize' }}>
          {searchParams.location}
        </span>
      </div>

      <div className='home__error-container'>
        {isDataEmpty ? (
          <div>
            
            <h2 className='text-black text-xl font-bold'>Oops, no properties found</h2>
          </div>
        ) : (
          <section  className="container mx-auto mt-5">
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
              {response.home_search.results.slice(0,10).map((property: PropertyProps, index: number) => (
                <div key={index}>
                 <PropertyCard property={property} href={''}/>
                </div>
              ))}
            </div>
            <ShowMore
  pageNumber={(searchParams.page || 1) / 10}
  isNext={(searchParams.page || 10) > response.home_search.results.length}
/>

          </section>
        )}
      </div>
    </main>
  );
}
