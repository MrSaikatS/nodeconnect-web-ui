import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feed | NodeSocial",
  description: "NodeSocial Feed Page",
};

const page = () => {
  return (
    <>
      <div className="grid gap-4 py-4">
        <div className="h-[50dvh] rounded-lg bg-teal-500"></div>
        <div className="h-[50dvh] rounded-lg bg-teal-500"></div>
        <div className="h-[50dvh] rounded-lg bg-teal-500"></div>
        <div className="h-[50dvh] rounded-lg bg-teal-500"></div>
      </div>
    </>
  );
};

export default page;
