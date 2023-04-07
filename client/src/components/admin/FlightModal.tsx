import { Dialog, Transition } from "@headlessui/react";
import { useState, Fragment, useRef, useEffect } from "react";
import Input from "@/components/Input";
import axios from "axios";
import AutonInput from "../AutonInput";

type Props = {
  open: boolean;
  setOpen: any;
  airlineId: string;
  getFlight: any;
};

const Flight = ({ open, setOpen, airlineId, getFlight }: Props) => {
  const cancelButtonRef = useRef(null);
  const [airport, setAirport] = useState<any>([]);
  const [plane, setPlane] = useState<any>([]);
  const [flightState, setFlightState] = useState<any>({
    airlineId: airlineId,
    flightNo: "",
    departDate: "",
    arriveDate: "",
    departAirport: {},
    arriveAirport: {},
    price: 0,
    seat: 0,
    planeId: "",
  });

  useEffect(() => {
    getAirport();
    getPlane();
  }, []);

  const handlerSubmit = async () => {
    try {
      const data = {
        airlineId: airlineId,
        flightNo: flightState.flightNo,
        departDate: new Date(flightState.departDate).toISOString(),
        arriveDate: new Date(flightState.arriveDate).toISOString(),
        departAirportId: flightState.departAirport.id,
        arriveAirportId: flightState.arriveAirport.id,
        price: flightState.price,
        seat: flightState.seat,
        planeId: flightState.planeId,
      };
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/flight`,
        data
      );
      getFlight();
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getPlane = async () => {
    try {
      const resPlane = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/plane`
      );
      setPlane(resPlane.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAirport = async () => {
    try {
      const resAirport = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/airport`
      );
      setAirport(resAirport.data);
    } catch (error) {
      console.log(error);
    }
  };

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
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 flex flex-col gap-y-5">
                  <div className="">
                    <label htmlFor="plane" className="text-primary">
                      หมายเลขเที่ยวบิน
                    </label>
                    <Input
                      label={"หมายเลขเที่ยวบิน"}
                      type={"text"}
                      name={"fightNo"}
                      value={flightState.flightNo}
                      onChange={(e) =>
                        setFlightState({
                          ...flightState,
                          flightNo: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="">
                    <label htmlFor="plane" className="text-primary">
                      วันที่ออกเดินทาง
                    </label>
                    <Input
                      label={"วันที่ออกเดินทาง"}
                      type={"datetime-local"}
                      name={"departDate"}
                      value={flightState.departDate}
                      onChange={(e) =>
                        setFlightState({
                          ...flightState,
                          departDate: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="">
                    <label htmlFor="plane" className="text-primary">
                      วันที่ถึงปลายทาง
                    </label>
                    <Input
                      label={"วันที่ถึงปลายทาง"}
                      type={"datetime-local"}
                      name={"arriveDate"}
                      value={flightState.arriveDate}
                      onChange={(e) =>
                        setFlightState({
                          ...flightState,
                          arriveDate: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="">
                    <label htmlFor="plane" className="text-primary">
                      สนามบินต้นทาง
                    </label>
                    <AutonInput
                      data={airport}
                      setInputState={setFlightState}
                      inputState={flightState}
                      name="departAirport"
                    />
                  </div>
                  <div className="">
                    <label htmlFor="plane" className="text-primary">
                      สนามบินปลายทาง
                    </label>
                    <AutonInput
                      data={airport}
                      setInputState={setFlightState}
                      inputState={flightState}
                      name="arriveAirport"
                    />
                  </div>
                  <div className="">
                    <label htmlFor="plane" className="text-primary">
                      เครื่องบินประจำเที่ยวบิน
                    </label>
                    <select
                      className="w-full border border-primary py-1 rounded-md shadow-sm focus:outline-none sm:text-sm"
                      name="plane"
                      value={flightState.planeId}
                      onChange={(e) =>
                        setFlightState({
                          ...flightState,
                          planeId: e.target.value,
                        })
                      }
                    >
                      <option selected disabled>
                        เลือกเครื่องบิน
                      </option>
                      {plane.map((item: any) => (
                        <option key={item.id} value={item.id}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="">
                    <label htmlFor="plane" className="text-primary">
                      ราคาตั๋ว
                    </label>
                    <Input
                      label={"ราคาตั๋ว"}
                      type={"number"}
                      name={"price"}
                      value={flightState.price}
                      onChange={(e) =>
                        setFlightState({
                          ...flightState,
                          price: Number(e.target.value),
                        })
                      }
                    />
                  </div>
                  <div className="">
                    <label htmlFor="plane" className="text-primary">
                      จำนวนที่นั่ง
                    </label>
                    <Input
                      label={"จำนวนที่นั่ง"}
                      type={"float"}
                      name={"seat"}
                      value={flightState.seat}
                      onChange={(e) =>
                        setFlightState({
                          ...flightState,
                          seat: Number(e.target.value),
                        })
                      }
                    />
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-primary px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-bg-secondary sm:ml-3 sm:w-auto"
                    onClick={handlerSubmit}
                  >
                    สร้าง
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
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

export default Flight;
