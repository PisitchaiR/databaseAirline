import axios from "axios";

type Props = {
  coupon: any;
  claim?: boolean;
  userId?: string;
};
const Coupon = ({ coupon, claim, userId }: Props) => {
  const converDate = (date: string) => {
    return new Date(date).toLocaleString("th-TH", {
      timeZone: "Asia/Bangkok",
      hour12: false,
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
  const handlerCliam = async () => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/coupon/claim`,
        {
          userId: userId,
          couponId: coupon._id,
        }
      );
    } catch (error: any) {
      console.log(error?.resopne?.data?.message);
    }
  };

  return (
    <>
      <div className=" bg-gradient-to-r from-[#A9C8A1] to-primary text-white rounded-md">
        <section className="p-5 flex items-center">
          <div className="flex-grow flex items-end gap-x-2">
            <p className="text-5xl">{coupon.discount}%</p>
            <p className="text-3xl">{coupon.name}</p>
          </div>
          {claim && (
            <button
              onClick={handlerCliam}
              className="rounded bg-white text-black px-2"
            >
              รับคูปอง
            </button>
          )}
        </section>
        <footer className="p-1 px-5 bg-primary rounded-b-md text-sm">
          หมดอายุ : {converDate(coupon.expiredAt)}
        </footer>
      </div>
    </>
  );
};

export default Coupon;
