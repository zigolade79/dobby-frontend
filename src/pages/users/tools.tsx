import React from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { Button } from "../../components/button";

interface IFormProps {
  nodeFile: FileList;
  linkFile: FileList;
}

export const Tools = () => {
  const {
    register,
    getValues,
    errors,
    handleSubmit,
    formState,
  } = useForm<IFormProps>({
    mode: "onChange",
  });

  const onSubmit = async () => {
    try {
      //lodaing data
      const { nodeFile, linkFile } = getValues();
      const actualNodeFile = nodeFile[0];
      const actuallinkFile = linkFile[0];
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="container">
      <Helmet>
        <title>Tools | Dobby project</title>
      </Helmet>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col px-14"
      >
        <div className="mt-8 border-b-2 border-blue-400 py-2 bg-transparent flex">
          <input
            ref={register({
              required: true,
            })}
            className="focus:outline-none pl-2 w-full"
            name="nodeFile"
            type="file"
            accept="cvs/*"
          ></input>
        </div>
        <div className="mt-8 border-b-2 border-blue-400 py-2 bg-transparent flex">
          <input
            ref={register({
              required: true,
            })}
            className="focus:outline-none pl-2 w-full"
            name="linkFile"
            type="file"
            accept="cvs/*"
          ></input>
        </div>
        <Button
          className="mt-12"
          canClick={formState.isValid}
          loading={false}
          actionText="Create chart"
        />
      </form>
      <div>chart area</div>
    </div>
  );
};
