import React, { useCallback, useState } from "react";
import Axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const api = Axios.create({ baseURL: process.env.REACT_APP_API_BASE_URL });

// eslint-disable-next-line @typescript-eslint/ban-types
type IJSONParsable = string | number | boolean | object;

type IApiConfig = {
  endPoint?: string;
  formData?: any;
  method?: "GET" | "POST" | "DELETE" | "PUT";
  params?: {
    [key: string]: IJSONParsable | Array<IJSONParsable>;
  };
  caller?: (callData?: any) => Promise<any>;
};

type IProps = (config: IApiConfig) => {
  isLoading: boolean;
  isSending: boolean;
  response: any;
  error: any;
  call: (callData?: any) => Promise<any>;
  status: "pending" | "success" | "error";
};

const useHttp: IProps = ({
  endPoint,
  method = "GET",
  params,
  formData,
  caller,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSending, setIsSending] = useState<boolean>(false);
  const [axiosResponse, setAxiosResponse] = useState<any>();
  const [error, setError] = useState<any | null>(null);
  const [status, setStatus] = useState<"pending" | "success" | "error">(
    "pending",
  );

  const call = useCallback(
    // eslint-disable-next-line consistent-return
    async (callData: any | null = null) => {
      const requestConfig: AxiosRequestConfig = {
        headers: {
          Accept: "application/json",
        },
        params,
        responseType: "json",
      };

      let response: AxiosResponse;
      try {
        setIsSending(true);
        setIsLoading(true);
        if (caller) {
          response = await caller();
          setAxiosResponse(response);
          return response;
        }
        switch (method) {
          case "POST":
            response = await api.post(endPoint || "", callData, requestConfig);
            break;
          case "DELETE":
            response = await api.delete(endPoint || "", requestConfig);
            break;
          case "PUT":
            response = await api.put(endPoint || "", callData, requestConfig);
            break;
          case "GET":
          default:
            response = await api.get(endPoint || "", requestConfig);
            break;
        }
        setAxiosResponse(response);
        setError(false);
        setStatus("success");
        return response;
      } catch (err) {
        const axiosError = err as any;
        if (axiosError) {
          setError(axiosError.response?.data.errors);
        } else {
          setError("unknownError");
          setStatus("error");
        }
      } finally {
        setIsLoading(false);
        setIsSending(false);
      }
    },
    [caller, endPoint, method, params],
  );

  React.useEffect(() => {
    if (method === "GET") {
      if (formData) {
        call(formData);
      } else {
        call();
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData, method]);

  return {
    isLoading,
    isSending,
    response: axiosResponse,
    error,
    call,
    status,
  };
};

export default useHttp;
