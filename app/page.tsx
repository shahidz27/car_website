import { Carcard, ShowMore } from '@/components'
import CustomFilter from '@/components/CustomFilter'
import SearchBar from '@/components/SearchBar'
import Hero from '@/components/hero'
import { fuels, yearsOfProduction } from '@/constants/constants'
import { FilterProps } from '@/types'
import { fetchCars } from '@/utils'
import Image from 'next/image'



export default  async function Home( searchParams) {
  const allCars=await fetchCars({
    manufacturer:searchParams.manufacturer||'',
    year:searchParams.year||'2020',
    limit:searchParams.limit||'10',
    fuel:searchParams.fuel||'',
    model:searchParams.model||'',

  });
  console.log(allCars);

  const isDataEmpty =!Array.isArray(allCars)||allCars.length<1||!allCars;
  return (
    <main className='overflow-hidden'>
     
        <Hero/>
      <div className='mt-12 padding-x padding-y max-width id="discover"'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'> Car catelogue</h1>
          <p>Explore the car you might like.</p>
        </div>
        <div className='home__filters'>
          <SearchBar />
          <div  className='home__filter-container'>
            <CustomFilter title=" fuel" options={fuels}/>
            <CustomFilter title=" year" options={yearsOfProduction}/> 
          </div>
        </div>
        {!isDataEmpty ? (
  <section>
    <div className='home__cars-wrapper'>
      {allCars?.map((car) => <Carcard car={car} />)}
    </div>
    <ShowMore 
    pageNumber={(searchParams.pageNumber||10)/10}
    isNext={(searchParams.limit||10)>allCars.length}
    />
  </section>
) : (
  <div className='home__error-container'>
    <h2 className='text-black text-xl font-bold'>oops no result</h2>
    <p>{allCars?.message}</p> 
  </div>
)}

      </div>
    
    </main>
  )
}
