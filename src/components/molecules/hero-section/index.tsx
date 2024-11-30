import { memo } from 'react';

type HeroSectionProps = {
    title: string;
    description: string;
    name: string
}

const HeroSection = (props: HeroSectionProps) => {
    const { title, description, name } = props;

    return (
        <>
            <section className="relative table w-full py-32 lg:py-40  bg-no-repeat bg-top bg-cover">
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black" />
                <div className="container relative">
                    <div className="grid grid-cols-1 pb-8 text-center mt-10">
                        <h3 className="mb-3 text-3xl leading-normal font-medium text-white">{title}</h3>
                        <p className="text-white/70 text-base max-w-xl mx-auto">{description} </p>
                    </div>{/*end grid*/}
                </div>{/*end container*/}
                <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
                    <ul className="tracking-[0.5px] mb-0 inline-block">

                        <li className="inline-block capitalize text-[14px] duration-500 ease-in-out text-white " aria-current="page">{name}</li>
                    </ul>
                </div>
            </section>
            <div className="relative">
                <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
                    <svg className="w-full h-auto scale-[2.0] origin-top" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor" />
                    </svg>
                </div>
            </div>
        </>
    )
}

export default memo(HeroSection)