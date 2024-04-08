import { useMainContext } from "../context/main.context";
import { getFullPath } from "@/utils/common-functions";
import { useRouter } from "next/navigation";

export enum RouterFunction {
  PUSH = "push",
  FORDWARD = "forward",
  REPLACE = "replace",
  REFRESH = "refresh",
  BACK = "back",
  PREFETCH = "prefetch",
}
type RouterFunctionType = `${RouterFunction}`;

const UseRouteCustom = () => {
  const { lang } = useMainContext();
  const router = useRouter();
  const routerCustom = (path: string, key: RouterFunctionType = RouterFunction.PUSH) => {
    router[key](getFullPath(lang, path));
  };  

  return routerCustom;
};

export default UseRouteCustom;
