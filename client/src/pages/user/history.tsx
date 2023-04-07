import AppLayout from "@/components/AppLayout";
import Navbar from "@/components/user/Navbar";
import { getCookie } from "cookies-next";
import BackButton from "../../components/user/BackButton";
import axios from "axios";
import Ticket from "../../components/user/Ticket";
import { useEffect } from "react";

const History = ({ history }: { history: any }) => {
  
  return (
    <AppLayout title="หน้าแรก">
      <div className="w-full h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow p-5 flex flex-col">
          <BackButton redirect="/" text="ประวัติการจอง" />
          <div className="flex-grow w-full mt-5 flex flex-col gap-y-5">
            {history ? (
              history.map((item: any, index: string) => {
                return <Ticket key={index} flightId={item.flightId} history={item} />;
              })
            ) : (
              <p className="w-full text-gray-400">
                คุณยังไม่มีตั๋วเลย ไปจองกันเลย!
              </p>
            )}
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export const getServerSideProps = async (context: any) => {
  const userId = getCookie("userId", {
    req: context.req,
    res: context.res,
  });
  const resHistory = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/history/${userId}`
  );
  const history = resHistory.data;
  if (!userId) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  } else {
    return {
      props: {
        history,
      },
    };
  }
};

export default History;
