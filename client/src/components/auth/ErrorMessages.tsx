import React from "react";
import { ErrorProps } from "../../interfaces/auth";

const ErrorMessages = (props: ErrorProps) => {
  return (
    <>
      {props.errors.length > 0
        ? props.errors.map((error, index) => (
            <p key={index} className="mt-1 w-full text-red-600">
              {error}
            </p>
          ))
        : ""}
    </>
  );
};

export default ErrorMessages;
