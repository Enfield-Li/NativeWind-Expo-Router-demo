import {
  axiosAuthServiceInstance,
  axiosGatewayInstance,
  axiosStatusCategoryServiceInstance,
  axiosTaskServiceInstance,
  axiosTeamServiceInstance,
} from "../utils/AxiosInstance";
import useShowToast from "./useShowToast";

export default function useInterceptError() {
  const toast = useShowToast();

  [
    axiosGatewayInstance,
    axiosAuthServiceInstance,
    axiosTaskServiceInstance,
    axiosTeamServiceInstance,
    axiosStatusCategoryServiceInstance,
  ].forEach((instance) => {
    instance.interceptors.response.use(null, (error) => {
      toast(error.message);
    });
  });
}
