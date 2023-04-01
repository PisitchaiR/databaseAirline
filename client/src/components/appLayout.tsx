import Meta from "./Meta";

type Props = {
  title: string;
  children: React.ReactNode;
};

const AppLayout = ({ title, children }: Props) => {
  return (
    <>
      <Meta title={title} />
      <main className="max-w-full min-h-screen">{children}</main>
    </>
  );
};

export default AppLayout;
