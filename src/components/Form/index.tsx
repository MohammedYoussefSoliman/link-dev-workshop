import React, { HTMLProps } from "react";
import {
  useForm,
  Mode,
  SubmitHandler,
  UseFormReturn,
  FormProvider,
  DefaultValues,
} from "react-hook-form";

interface FormProps<T> extends Omit<HTMLProps<HTMLFormElement>, "onSubmit"> {
  validateOn?: Mode;
  reValidateOn?: Exclude<Mode, "onTouched" | "all">;
  defaultValues?: DefaultValues<any>;
  onSubmit: SubmitHandler<T>;
  children: React.ReactNode | ((api: UseFormReturn<T>) => React.ReactNode);
  className?: string;
}

export default function Form<T>({
  defaultValues,
  onSubmit,
  children,
  validateOn = "onSubmit",
  reValidateOn = "onChange",
  className,
  ...htmlProps
}: FormProps<T>) {
  const methods = useForm<T>({
    mode: validateOn,
    reValidateMode: reValidateOn,
    defaultValues,
  });

  return (
    <FormProvider {...methods}>
      <form
        className={className}
        onSubmit={methods.handleSubmit(onSubmit)}
        {...htmlProps}
      >
        {typeof children === "function"
          ? children({
              ...methods,
            })
          : children}
      </form>
    </FormProvider>
  );
}
