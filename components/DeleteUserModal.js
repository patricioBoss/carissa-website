import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Button } from "./buttons";

export default function ComingSoonModal({
  open,
  setOpen,
  loading,
  handleDelete,
  type,
  details,
}) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
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

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full justify-center p-4 text-center items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-[32rem] sm:p-6">
                <div className="w-full flex flex-col justify-center items-center p-6 text-center">
                  <h6 className=" font-medium text-[21px]">
                    You&apos;re about delete {type} with details: {details} .Are
                    you sure.
                  </h6>
                  <div className="flex justify-center gap-10 mt-14">
                    <button
                      className="containedButton bg-indigo-700 hover:bg-indigo-600 font-normal text-xs xl:text-sm text-center items-center py-[.8rem] px-6 transition-all w-full"
                      onClick={handleDelete}
                    >
                      Yes
                    </button>
                    <button
                      className="containedButton bg-[#EB5757] hover:bg-[#ef5d5d] font-normal text-xs xl:text-sm text-center items-center py-[.8rem] px-6 transition-all w-full"
                      onClick={() => setOpen(false)}
                    >
                      Cancel
                    </button>
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
