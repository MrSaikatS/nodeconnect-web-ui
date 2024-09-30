import RegisterForm from "@/components/forms/RegisterForm";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Register | NodeSocial",
  description: "NodeSocial Register Page",
};

const page = () => {
  return (
    <>
      <div className="grid h-dvh place-items-center">
        <Card className="mx-auto w-[86dvw] max-w-screen-sm">
          <CardHeader className="flex justify-center text-3xl font-bold tracking-wide">
            <Link href="/">NodeConnect</Link>
          </CardHeader>

          <Divider />

          <CardBody>
            <RegisterForm />
          </CardBody>

          <Divider />

          <CardFooter className="flex justify-center">
            <span>
              Already have an account?{" "}
              <Link
                href="/auth/login"
                className="font-medium text-blue-500 underline hover:text-blue-700"
              >
                Login
              </Link>
            </span>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default page;
