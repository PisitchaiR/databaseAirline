import AppLayout from "@/components/AppLayout";
import BookingDataTable from "@/components/admin/BookingDataTable";
import SideBar from "@/components/admin/SideBar";
import axios from "axios";
import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";

const Booking = ({ airlineId }: { airlineId: string }) => {
  const [reservation, setReservation] = useState([]);

  useEffect(() => {
    getReservation;
  }, []);

  const getReservation = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/reservation/airline/${airlineId}`
    );
    setReservation(res.data);
  };

  return (
    <>
      <AppLayout title="จัดการ | ยอดการจอง">
        <div className="w-full h-screen flex items-center">
          <SideBar />
          <div className="border h-full flex-grow p-5">
            <p className="text-3xl">จัดการสายการบิน</p>
            <div className="w-full border-t border-primary mt-10 pt-10">
              <BookingDataTable />
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
  const airlineId = getCookie("airlineId", {
    req: context.req,
    res: context.res,
  });

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
  } else {
    return {
      props: {
        airlineId,
        userId,
      },
    };
  }
};

export default Booking;
