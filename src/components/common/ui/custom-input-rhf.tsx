"use client";
import { Input, InputProps } from "@nextui-org/react";
import { Controller, useFormContext } from "react-hook-form";

interface Props extends InputProps {
  label: string;
  name: string;
  type?: "text" | "email" | "password" | "date";
}

const InputCustomRHF = ({ name, type, label, placeholder, readOnly, ...rest }: Props) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Input
          {...field}
          type={type ?? "text"}
          id={name}
          placeholder={placeholder}
          variant="underlined"
          value={typeof field.value === "number" && field.value === 0 ? "" : field.value}
          error={!!error}
          label={label}
          readOnly={readOnly}
          errorMessage={error?.message && <p className="text-red-500">{error.message}</p>}
          classNames={{
            label: "!text-white",
            input: ["focus-within:!text-white", "!text-white", "!border-sucess"],
            inputWrapper: [
              "focus:!border-primary",
              "focus-within:!border-white",
              "group-data-[focus=true]:after:bg-primary",
            ],
          }}
          {...rest}
        />
      )}
    />
  );
};

export default InputCustomRHF;
