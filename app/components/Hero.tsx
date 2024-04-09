import Image from "next/image"


const Hero = () => {
  return (
    <section className=" max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
        <div className='hero-map'>


            {/* LEFT */}

            <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>
                <Image 
                src="/camp.svg"
                alt="camp"
                width={50}
                height={50}
                className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
                />
                <h1 className="bold52 lg:bold-88">Parthav Destination</h1>
                <p> Some text here</p>
                <div className="my-11 flex flex-wrap gap-5">
                    <div className="flex items-center gap-2">
                        {Array(5).fill(1).map((_, index) => (
                            <Image
                                src ="/star.svg"
                                key={index}
                                alt="star"
                                width={24}
                                height={24}
                                />
                        ))}
                    </div>
                </div>
            </div>

        </div>

    </section>
  )
}

export default Hero
