import { Card, Skeleton } from "@nextui-org/react";
import React from "react";

const loading = () => {
  return (
    <div className="w-full">
      <div className="flex w-full justify-center ">
        <Skeleton className="mb-5 mt-20 h-[270px]  w-10/12 rounded-lg">
          <div className="h-4 w-5/12 rounded-lg bg-default-200"></div>
        </Skeleton>
      </div>

      <div className="flex w-full justify-center">
        <Skeleton className="mb-10 mt-10 h-10  w-10/12 md:w-6/12 rounded-lg">
          <div className="h-4 w-6/12 rounded-lg bg-default-200"></div>
        </Skeleton>
      </div>

      <div className="flex w-full flex-wrap justify-around">
        {[1, 2, 3].map((index) => {
          return (
            <Card key={index} className=" w-10/12 md:w-3/12 space-y-5 p-4" radius="lg">
              <Skeleton className="rounded-lg">
                <div className="h-[250px] rounded-lg bg-default-300"></div>
              </Skeleton>
              <div className="space-y-3">
                <Skeleton className="w-3/5 rounded-lg">
                  <div className="h-4 w-3/5 rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-4/5 rounded-lg">
                  <div className="h-4 w-4/5 rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-2/5 rounded-lg">
                  <div className="h-4 w-2/5 rounded-lg bg-default-300"></div>
                </Skeleton>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default loading;
