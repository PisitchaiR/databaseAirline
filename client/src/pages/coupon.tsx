import AppLayout from "@/components/AppLayout";
import Navbar from "@/components/user/Navbar";
import BackButton from "@/components/user/BackButton";
import CouponCard from "@/components/user/CouponCard";
import axios from "axios";
import { getCookie } from "cookies-next";
import { useEffect } from "react";

const Coupon = ({ coupon, userId }: { coupon: any; userId: string }) => {
  return (
    <AppLayout title="หน้าแรก">
      <div className="w-full h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow p-5 flex flex-col">
          <BackButton redirect="/" text="คูปอง" />
          <div className="flex-grow w-full mt-5 flex flex-col gap-y-5">
            {coupon ? (
              coupon.map((item: any, index: string) => {
                return (
                  <CouponCard key={index} coupon={item} claim userId={userId} />
                );
              })
            ) : (
              <p className="w-full text-gray-400">
                ยังไม่มีคูปองในระบบ
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
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/coupon`
  );
  const coupon = resCoupon.data.filter((item: any) => item.expiredAt > Date.now());
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
        userId,
      },
    };
  }
};

export default Coupon;
