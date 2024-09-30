import { Card, CardBody } from "@nextui-org/card";

const NoPosts = () => {
  return (
    <>
      <Card
        as={"section"}
        className="mb-20 mt-4 py-4 sm:mb-4"
      >
        <CardBody className="flex items-center">
          <div className="text-3xl">No Posts Yet 🙁</div>
        </CardBody>
      </Card>
    </>
  );
};

export default NoPosts;
