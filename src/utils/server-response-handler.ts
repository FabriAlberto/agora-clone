import { getDictionary } from "./dictionary";
import { getLocaleFromHeader } from "./utils.server";

export const getResponseAction = async (success: boolean, data?: any) => {
  const locale = getLocaleFromHeader();
  const dictionary = await getDictionary(locale);
  return {
    data,
    success,
    message: success ? dictionary.common.message_success : dictionary.common.message_error,
  };
};
