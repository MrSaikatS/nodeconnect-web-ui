import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import Image from "next/image";
import Link from "next/link";

type ProfileInfoProps = {
  selfProfile: boolean;
};

const ProfileInfo = ({ selfProfile }: ProfileInfoProps) => {
  return (
    <>
      <Card
        as={"section"}
        className="my-4"
      >
        <CardBody>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-4 md:grid-cols-6">
            <div className="col-span-1 grid place-items-center sm:col-span-2 md:col-span-3">
              <div className="">
                <Image
                  src={`https://avatar.iran.liara.run/public/boy?username=Saikat+Sardar`}
                  alt="Profile Image"
                  width={300}
                  height={300}
                  className="h-[300px] w-[300px] rounded-full"
                />
              </div>
            </div>

            <div className="col-span-1 flex flex-col gap-1 sm:col-span-2 sm:gap-2 md:col-span-3">
              <div className="text-center text-4xl font-bold sm:text-start sm:text-5xl">
                Saikat Sardar
              </div>

              <div className="text-center text-2xl font-semibold sm:text-start sm:text-3xl">
                (Nickname)
              </div>

              <div className="text-center text-lg font-medium sm:text-start sm:text-xl">
                Gender: Male
              </div>

              <div className="text-center text-lg font-medium sm:text-start sm:text-xl">
                Email: saikatsardar@gmail.com
              </div>

              <div className="my-1 max-w-[330px] text-center sm:max-w-[360px] sm:text-justify">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aperiam ipsa ipsum maiores? Quasi aperiam commodi iusto nulla?
              </div>

              {selfProfile && (
                <div className="flex justify-center sm:justify-start">
                  <Button
                    type="button"
                    size="lg"
                    variant="ghost"
                  >
                    <Link href="/profile/edit">Edit Profile</Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default ProfileInfo;
