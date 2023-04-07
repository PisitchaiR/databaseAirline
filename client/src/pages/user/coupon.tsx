import AppLayout from "@/components/AppLayout";
import Navbar from "@/components/user/Navbar";
import BackButton from "@/components/user/BackButton";
import CouponCard from "@/components/user/CouponCard";
import axios from "axios";
import { getCookie } from "cookies-next";
import { useEffect } from "react";

const History = ({ coupon }: { coupon: any }) => {
  return (
    <AppLayout title="หน้าแรก">
      <div className="w-full h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow p-5 flex flex-col">
          <BackButton redirect="/" text="คูปองของฉัน" />
          <div className="flex-grow w-full mt-5 flex flex-col gap-y-5">
            {coupon ? (
              coupon.map((item: any, index: string) => {
                return <CouponCard key={index} coupon={item} />;
              })
            ) : (
              <p className="w-full text-gray-400">
                คูปองอยู่ในหน้าแรก ไปกดรับได้เลย
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
  const resCoupon = await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/users/coupon/${userId}`
  );
  const coupon = resCoupon.data;
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
        coupon,
      },
    };
  }
};

export default History;
