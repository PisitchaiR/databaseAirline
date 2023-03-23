import Meta from "./Meta";

type Props = {
  title: string;
  child: React.ReactNode;
};

const AppLayout = ({ title, child }: Props) => {
  return (
    <>
      <Meta title={title} />
      <main className="w-full ">{child}</main>
    </>
  );
};

export default AppLayout;
