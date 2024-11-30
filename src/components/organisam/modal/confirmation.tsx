"use client";
import CancleIcon from "@/assets/common/Cancle.svg";
import Image from "next/image";
import React, { forwardRef, useCallback, useImperativeHandle } from "react";

type ConfirmationModalProps = {
  children: React.ReactNode;
  title?: string;
  icon?: string;
};

export interface ConfirmationModalRef {
  onOpenModal: () => void;
  onCloseModal: () => void;
}

const ConfirmationModal = forwardRef((props: ConfirmationModalProps, ref) => {
  const { children, title, icon } = props;
  const [showModal, setShowModal] = React.useState(false);

  const onCloseModal = useCallback(() => {
    setShowModal(false);
  }, [setShowModal]);

  const onOpenModal = useCallback(() => {
    setShowModal(true);
  }, [setShowModal]);

  useImperativeHandle(ref, () => ({
    onCloseModal,
    onOpenModal,
  }));

  return (
    <>
      {showModal && (
        <div className=" ">
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto mx-auto max-w-md ">
              <div className="relative rounded-lg shadow p-4 min-w-[20rem] bg-white ">
                <div className="flex justify-between items-center ">
                  <p className="text-base text-premium-black">{title}</p>
                  <Image
                    src={CancleIcon}
                    alt="left arrow"
                    className="cursor-pointer"
                    onClick={onCloseModal}
                  />
                </div>

                <div className="p-6 md:p-5 text-center">
                  {icon && (
                    <Image
                      src={icon}
                      alt="close icon"
                      className="mx-auto mb-3 "
                    />
                  )}
                  {children}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-15 fixed inset-0 z-40 bg-black"></div>
        </div>
      )}
    </>
  );
});

// Assign a display name for better debugging
ConfirmationModal.displayName = "ConfirmationModal";

export default ConfirmationModal;