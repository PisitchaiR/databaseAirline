import AppLayout from "@/components/AppLayout";
import axios from "axios";
import { getCookie } from "cookies-next";
import SideBar from "@/components/admin/SideBar";
import { useEffect, useState } from "react";
import FlightModal from "@/components/admin/FlightModal";
import { ToastContainer, toast } from "react-toastify";
import DataTable from "@/components/admin/DataTable";

const Flight = ({ airlineId }: { airlineId: string }) => {
  const [createOpen, setCreateOpen] = useState<boolean>(false);
  const [flight, setFlight] = useState<any>([]);

  useEffect(() => {
    getFlight();
  }, []);

  const getFlight = async () => {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/flight/airline/${airlineId}`
    );
    setFlight(res.data);
  };

  return (
    <>
      <AppLayout title="จัดการ | เที่ยวบิน">
        <ToastContainer />
        <FlightModal
          open={createOpen}
          setOpen={setCreateOpen}
          airlineId={airlineId}
          getFlight={getFlight}
        />
        <div className="w-full h-screen flex items-center">
          <SideBar />
          <div className="border h-full flex-grow p-5">
            <p className="text-3xl">จัดการเที่ยวบิน</p>
            <button
              onClick={() => setCreateOpen(true)}
              className="mt-10 bg-primary text-white px-6 py-2 rounded-md"
            >
              เพิ่มสายการบิน
            </button>
            <div className="w-full border-t border-primary mt-10 pt-10">
              <DataTable data={flight} getFlight={getFlight}/>
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
      },
    };
  }
};

export default Flight;
