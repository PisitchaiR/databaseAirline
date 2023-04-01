import AppLayout from "@/components/AppLayout";
import axios from "axios";
import { getCookie } from "cookies-next";

const Home = () => {
  return (
    <>
      <AppLayout title="จัดการ">
        <div className="w-full h-screen">

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
      props: {},
    };
  }
};

export default Home;
