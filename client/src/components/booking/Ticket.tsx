import { useRouter } from "next/router";

type Props = {
  data: any;
};

const Ticket = ({ data }: Props) => {
  const router = useRouter();
  const convertTime = (time: string) => {
    return new Date(time).toLocaleString("th-TH", {
      timeZone: "Asia/Bangkok",
      hour12: false,
      hour: "numeric",
      minute: "numeric",
    });
  };

  const handlerClick = () => {
    localStorage.setItem("departFlight", JSON.stringify(data));
    router.push('/booking/booking');
  };
  //   const
  return (
    <button
      onClick={() => {
        handlerClick();
      }}
      className="w-full bg-primary text-white rounded-md p-3"
    >
      <div className="flex items-center border-b border-dashed border-white pb-5 mb-5 justify-between">
        <p className="text-3xl">{convertTime(data?.departDate)}</p>
        <p className="flex-grow flex items-center mx-5">
          <span className="w-4 h-3 rounded-full bg-white"></span>
          <span className="w-full h-0.5 bg-white"></span>
          <span className="w-4 h-3 rounded-full bg-white"></span>
        </p>
        <p className="text-3xl">{convertTime(data?.arriveDate)}</p>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-xl">{data?.Airline?.nameTh}</div>
        <div className="p-0.5 text-primary bg-white rounded-full px-4 text-lg">
          {data.price} บาท/ที่นั่ง
        </div>
      </div>
    </button>
  );
};

export default Ticket;
