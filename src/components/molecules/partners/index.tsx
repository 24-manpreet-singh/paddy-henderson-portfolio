import ImageWrapper from '@/components/atoms/image';
import { PARTNER_DATA } from '@/constants/partner-data';
import React, { memo } from 'react';

const Partners = () => {
    return (
        <React.Fragment>
            <section className="pb-14 border-t border-b border-gray-100  bg-white">
                <div className="container relative">
                    <div className="grid md:grid-cols-5  justify-center gap-x-7">
                        {PARTNER_DATA.map((item, index: number) => {
                            return (
                                <div className="mx-auto py-4" key={index}>
                                    <ImageWrapper
                                        src={item.imageSrc}
                                        alt={item.imageAlt}
                                        className='h-12 w-auto'
                                    />
                                </div>
                            )
                        })}

                    </div>
                </div>
            </section>



        </React.Fragment >
    )
}

export default memo(Partners)