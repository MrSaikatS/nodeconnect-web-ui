import LoginForm from "@/components/forms/LoginForm";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Login | NodeSocial",
  description: "NodeSocial Login Page",
};

const page = () => {
  return (
    <>
      <div className="grid h-dvh place-items-center">
        <Card className="mx-auto w-[310px] sm:w-[390px]">
          <CardHeader className="flex justify-center text-3xl font-bold tracking-wide">
            <Link href="/">NodeConnect</Link>
          </CardHeader>

          <Divider />

          <CardBody>
            <LoginForm />
          </CardBody>

          <Divider />

          <CardFooter className="flex justify-center">
            <span>
              Don't have an account?{" "}
              <Link
                href="/auth/register"
                className="font-medium text-blue-500 underline hover:text-blue-700"
              >
                Register
              </Link>
            </span>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default page;
