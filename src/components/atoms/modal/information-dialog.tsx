import React, { ReactNode, memo, useEffect } from "react";
import CLOSE_ICON from '@/assets/images/modal/confirmation-close.svg'
import ImageWrapper from '@/components/atoms/image'

interface InformationDailogProps {
    isOpen: boolean;
    onCancel: () => void;
    children: ReactNode
}

const InformationDailog: React.FC<InformationDailogProps> = ({
    isOpen,
    children,
    onCancel,
}) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);


    return (
        <div
            className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50 transition-opacity ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
        >
            <div
                className={`relative bg-premium-white  rounded-lg shadow-lg text-center w-full max-w-3xl mx-4 md:mx-auto transition-transform ${isOpen ? "scale-100" : "scale-95"
                    }`}
            >
                {/* Firm Name Section */}
                <div className="flex justify-between items-center bg-premium-dark-black rounded-t-md py-3 px-4">
                    {/* <h2 className="text-white text-lg font-semibold flex items-center">
                        Firm Name

                    </h2> */}
                    {/* <Image
                        src={CLOSE_ICON}
                        alt="cancel icon"
                        className="cursor-pointer h-4 w-4"
                        onClick={onCancel}
                    /> */}
                    <ImageWrapper
                        src={CLOSE_ICON}
                        alt={"close logo"}
                        className='cursor-pointer h-4 w-4'
                        onClick={onCancel}
                    />
                    close icon
                </div>

                {children}
            </div>
        </div >
    );
};

export default memo(InformationDailog);
