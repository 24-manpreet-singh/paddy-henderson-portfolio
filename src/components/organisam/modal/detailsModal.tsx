import ImageWrapper from '@/components/atoms/image';
import { Context } from '@/store/provider';
import React, { ReactNode, useContext, useEffect } from "react";

interface ConfirmationDialogProps {
    data: {
        imageSrc: string,
        imageAlt: string,
        title: string,
        technologies: string,
        description: string
    },
    isOpen: boolean;
    heading?: string;
    message: string;
    onConfirm?: () => void;
    onCancel?: () => void;
    children?: ReactNode;
}

const DetailsModal: React.FC<ConfirmationDialogProps> = ({
    isOpen,
    onConfirm,
    onCancel,
    heading,
    children,
    data
}) => {
    const context = useContext(Context);
    if (!context) {
        throw new Error('Context must be used within a ContextProvider');
    }

    const { isDark } = context;


    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className={`${isDark ? 'bg-[#0d0d0d]' : 'bg-white'} rounded-lg overflow-hidden shadow-lg w-11/12 md:w-1/2 lg:w-1/2 min-w-md `}>
                <div className="flex justify-end p-2 pr-4">
                    <button
                        onClick={onCancel}
                        className="text-gray-400 hover:text-gray-600 z-50 text-2xl"
                    >
                        <i className="far fa-times"></i>
                    </button>
                </div>
                <div className="p-4 overflow-y-auto max-h-[80vh] no-scrollbar">
                    {heading && <h2 className="text-xl font-bold mb-4">{heading}</h2>}
                    {/* <p className="mb-4">{message}</p> */}
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className="modal-body">
                                    <div className="h1-modal-img
                                     mb-2">
                                        <ImageWrapper
                                            src={data.imageSrc}
                                            alt={data.imageAlt}
                                        />
                                    </div>

                                    <span className="blog-date font-bold "> {data.title} </span>
                                    {/* <span className="blog-cetagory">{data.technologies}</span> */}
                                </div>

                                <h6 className="blog-title">
                                    <span className={`blog-date font-bold ${isDark ? 'text-[#a6a3a6]' : 'text-black'}`}>Technologies: </span>
                                    <span className={`${isDark ? 'text-white' : 'text-black'} `} > {data.technologies}</span>
                                </h6>

                                <div className="h1-modal-paragraph ">
                                    <p className={`font-medium ${isDark ? 'text-white modal-desc' : 'text-black'}`}>
                                        {data.description}
                                    </p>

                                </div>



                                {children}
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end mt-4">
                        {onCancel && (
                            <button
                                onClick={onCancel}
                                className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded mr-2"
                            >
                                Cancel
                            </button>
                        )}
                        {onConfirm && (
                            <button
                                onClick={onConfirm}
                                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
                            >
                                Confirm
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DetailsModal;
