import AppLayout from "@/components/AppLayout";
import axios from "axios";
import { getCookie, setCookie } from "cookies-next";
import SideBar from "@/components/admin/SideBar";
import { useEffect, useState } from "react";
import AreaChart from "@/components/admin/AreaChart";

const Home = ({ airlineId }: { airlineId: string }) => {
  const [airline, setAirline] = useState<any>([]);
  useEffect(() => {
    getAirline();
  }, []);

  const getAirline = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/airlines/${airlineId}`
    );
    setAirline(res.data);
  };

  const countReservation = () => {
    let count = 0;
    airline?.Flight?.map((flight: any) => {
      count += flight.Reservation.length;
    });
    return count;
  };

  const countSeatInReservation = () => {
    let count = 0;
    airline?.Flight?.map((flight: any) => {
      flight.Reservation.map((reservation: any) => {
        count += reservation.seat;
      });
    });
    return count;
  };

  return (
    <>
      <AppLayout title="จัดการ">
        <div className="w-full h-screen flex items-center">
          <SideBar />
          <div className="border h-full flex-grow p-5 bg-[#F7F8FF]">
            <p className="text-3xl">ภาพรวม</p>
            <div className="flex flex-col items-start mt-10 w-full">
              <p className="">ผู้โดยสาร</p>
              <div className="flex gap-x-5 items-center mt-2 w-full">
                <div className="bg-white p-2 shadow rounded-md flex flex-col px-4 w-1/3">
                  <p>จำนวนผู้โดยสารทั้งหมด</p>
                  <p className="text-3xl mt-3">{countSeatInReservation()}</p>
                </div>
                <div className="bg-white p-2 shadow rounded-md flex flex-col px-4 w-1/3">
                  <p>ยอดจอง</p>
                  <p className="text-3xl mt-3">{countReservation()}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start mt-5 w-full">
              <p className="">เครื่องบิน</p>
              <div className="flex gap-x-5 items-center mt-2 w-full">
                <div className="bg-white p-2 shadow rounded-md flex flex-col px-4 w-1/3">
                  <p>เที่ยวบินทั้งหมด</p>
                  <p className="text-3xl mt-3">{airline?.Flight?.length}</p>
                </div>
                <div className="bg-white p-2 shadow rounded-md flex flex-col px-4 w-1/3">
                  <p>จำนวนเครื่องบิน</p>
                  <p className="text-3xl mt-3">{airline?.Plane?.length}</p>
                </div>
              </div>
            </div>
            <div className="">
              <AreaChart airline={airline}/>
            </div>
          </div>
        </div>
      </AppLayout>
    </>
  );
};

export const getServerSideProps = async (context: any) => {
  const userId = getCookie("userId", {
    req: context.req,
    res: context.res,
  });
  const role = getCookie("role", {
    req: context.req,
    res: context.res,
  });

  const resUser = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/${userId}`
  );

  const user = resUser.data;

  if (!userId) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  } else if (userId && role == "customer") {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  } else if (user.airline == null) {
    return {
      redirect: {
        destination: "/admin/createFlight",
        permanent: false,
      },
    };
  } else {
    setCookie("airlineId", user?.airline?.id, {
      req: context.req,
      res: context.res,
    });
    return {
      props: {
        airlineId: user?.airline?.id,
      },
    };
  }
};

export default Home;
