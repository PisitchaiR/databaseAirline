import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
  data: any;
};

const History = ({ open, setOpen, data }: Props) => {
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

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative w-full transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="text-primary bg-white px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <div className="rounded-md p-2 flex flex-col gap-y-2 shadow">
                    <p>ชื่อจริง : {data.history.firstName}</p>
                    <p>นามสกุล : {data.history.lastName}</p>
                    <p>เบอร์โทร : {data.history.phone}</p>
                    <p>จำนวนที่นั่ง : {data.history.seat} ที่นั่ง</p>
                    <p>ราคารวม : {data.history.totalPrice} บาท</p>
                  </div>
                  <div className="flex justify-start shadow mt-5 pt-5">
                    <Timeline
                      sx={{
                        [`& .${timelineOppositeContentClasses.root}`]: {
                          flex: 0,
                        },
                      }}
                    >
                      <TimelineItem>
                        <TimelineOppositeContent>
                          {data.departDate}
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineDot />
                          <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>{data.departAirport}</TimelineContent>
                      </TimelineItem>
                      <TimelineItem>
                        <TimelineOppositeContent>
                          {data.arriveDate}
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                          <TimelineDot/>
                        </TimelineSeparator>
                        <TimelineContent>{data.arriveAirport}</TimelineContent>
                      </TimelineItem>
                    </Timeline>
                  </div>
                  <button
                    type="button"
                    className="mt-5 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    ปิด
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default History;
