import Card from './Card';

function Tours( {tours, removeTour} ){
    
    return (
        <div className='font-poppins pb-4 flex flex-col gap-10 justify-center items-center'>
            <div className=''>
                <h1 className='tracking-wide text-center text-4xl font-semibold mt-10 px-10 py-4 border-[5px] border-blue-950 border-dashed rounded-xl'>Plan Your Tour</h1>
            </div>
            <div className='w-11/12 max-w-[1080px] h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    tours.map( (tour) => {
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                    } )
                }
            </div>
        </div>
    )

}

export default Tours;