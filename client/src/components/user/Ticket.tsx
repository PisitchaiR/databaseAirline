import { useEffect, useState } from "react";
import History from "./History";
import axios from "axios";
import useAxios from "@/hook/useAxios";
import { SkeletonCard } from "../SkeletonCard";

type Props = {
  flightId: string;
  history: any;
};

const Ticket = ({ flightId, history }: Props) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [flight, error, loading, refetch] = useAxios({
    axiosInstance: axios,
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/flight/${flightId}`,
    method: "GET",
    requestConfig: {
      headers: {
        "Content-Type": "application/json",
      },
    },
  });

  const convertTime = (date: string) => {
    return new Date(date).toLocaleString("th-TH", {
      timeZone: "Asia/Bangkok",
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    });
  };
  const convertDate = (date: string) => {
    return new Date(date).toLocaleString("th-TH", {
      timeZone: "Asia/Bangkok",
      hour12: false,
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const data = {
    departAirport: flight?.DepartAirport?.nameTh,
    arriveAirport: flight?.ArriveAirport?.nameTh,
    departDate: convertTime(flight?.departDate),
    arriveDate: convertTime(flight?.arriveDate),
    date: convertDate(flight?.departDate),
    history: history,
  };

  return (
    <>
      <History open={isOpen} setOpen={setOpen} data={data} />
      {loading ? (
        <SkeletonCard />
      ) : (
        <button
          onClick={() => {
            setOpen(true);
          }}
          className="w-full bg-primary p-5 rounded-md shadow-md flex flex-col text-white"
        >
          <p className="w-full text-center mb-2 text-3xl ">
            {flight?.Airline?.nameTh}
          </p>
          <div className="w-full flex justify-between items-center">
            <div className="flex-grow text-left">
              <p className="text-2xl">{convertTime(flight?.departDate)}</p>
              <p className="text-sm">{flight?.DepartAirport?.nameTh}</p>
            </div>
            <div className="material-icons-outlined h-fit border border-dashed rounded-full p-2">
              flight_takeoff
            </div>
            <div className="flex-grow text-right">
              <p className="text-2xl">{convertTime(flight?.arriveDate)}</p>
              <p className="text-sm">{flight?.ArriveAirport?.nameTh}</p>
            </div>
          </div>
          <div className="w-full flex items-center justify-between border-dashed border-t border-white mt-3 pt-3">
            <p>DATE : {convertDate(flight?.departDate)}</p>
            <p>FLIGHT NO : {flight?.flightNo}</p>
          </div>
        </button>
      )}
    </>
  );
};
export default Ticket;
