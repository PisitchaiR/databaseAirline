import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";

type Props = {
  open: boolean;
  setOpen: any;
};

export default function SideBar({ open, setOpen }: Props) {
  const cancelButtonRef = useRef(null);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto ">
          <div className="flex h-screen items-start justify-center text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 -translate-x-4 sm:translate-x-0 sm:scale-95"
              enterTo="opacity-100 -translate-x-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-x-0 sm:scale-100"
              leaveTo="opacity-0 -translate-x-4 sm:-translate-x-0 sm:scale-95"
            >
              <Dialog.Panel className="w-full h-full relative transform overflow-hidden bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="h-full bg-gray-50 px-4 py-3 pb-5 flex flex-col justify-start items-end text-primary">
                  <button
                    type="button"
                    className="w-10 h-10 flex items-center justify-center material-icons-outlined focus:border focus:rounded-full p-2 text-2xl"
                    onClick={() => setOpen(false)}
                  >
                    close
                  </button>
                  <div className="flex flex-col w-full items-start gap-y-2 mt-2">
                    <Link
                      href="/"
                      className="text-xl flex items-center gap-x-2 w-full rounded-md p-1"
                    >
                      <span className="material-icons-outlined">home</span>
                      หน้าแรก
                    </Link>
                    <Link
                      href="/user/history"
                      className="text-xl flex items-center gap-x-2 w-full rounded-md p-1"
                    >
                      <span className="material-icons-outlined">archive</span>
                      ประวัติการจอง
                    </Link>
                    <Link
                      href="/user/coupon"
                      className="text-xl flex items-center gap-x-2 w-full rounded-md p-1"
                    >
                      <span className="material-icons-outlined">
                        local_offer
                      </span>
                      คูปองของฉัน
                    </Link>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
