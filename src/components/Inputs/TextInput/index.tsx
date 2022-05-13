import { Input as HookFormInput } from "../ControlledInputs";
import { InputPropsType, InputControllerProps } from "../types";

type EmailInputProps = InputControllerProps & InputPropsType;

export default function TextInput({
  control,
  validationRules,
  ...props
}: EmailInputProps) {
  return (
    <HookFormInput
      control={control}
      validationRules={validationRules}
      type="text"
      {...props}
    />
  );
}
