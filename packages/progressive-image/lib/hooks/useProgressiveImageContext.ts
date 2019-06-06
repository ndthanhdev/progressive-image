import { useContext } from "react";
import { PIContext } from "../components/Context";

export function usePIContext() {
  return useContext(PIContext);
}
// export const usePIContext = usePgrogessiveImageContext;

export default usePIContext;
