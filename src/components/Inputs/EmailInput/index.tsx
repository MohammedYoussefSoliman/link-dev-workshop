import { Input as HookFormInput } from "../ControlledInputs";
import { InputPropsType, InputControllerProps } from "../types";

const emailRegEx =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

type EmailInputProps = InputControllerProps & InputPropsType;

export default function EmailInput({
  control,
  validationRules,
  ...props
}: EmailInputProps) {
  return (
    <HookFormInput
      control={control}
      validationRules={{
        pattern: {
          value: emailRegEx,
          message: "invalidEmail",
        },
        ...validationRules,
      }}
      // type="email"
      {...props}
    />
  );
}
