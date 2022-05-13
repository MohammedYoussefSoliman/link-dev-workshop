import NativeInput from "../NativeInput";
import Select from "../SelectInput";
import WithInputFormHook from "./WithInputFormHook";
import WithSelectFormHook from "./WithSelectFormHook";
import { InputPropsType, SelectProps, InputControllerProps } from "../types";

// eslint-disable-next-line import/prefer-default-export
export const Input = WithInputFormHook<InputPropsType & InputControllerProps>(
  NativeInput,
);
export const SelectInput = WithSelectFormHook<
  SelectProps & InputControllerProps
>(Select);
