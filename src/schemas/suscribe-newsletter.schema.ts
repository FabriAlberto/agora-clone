import { MasterDictionaryType } from "@/context/main.context";
import { z } from "zod";

export const suscribeFormSchema = (dictionary: MasterDictionaryType) =>
  z.object({
    firstName: z

      .string({ required_error: dictionary.common.error_required_field })
      .min(1, { message: dictionary.common.error_required_field })
      .max(20, { message: dictionary.common.error_max_characters }),
    lastName: z
      .string({ required_error: dictionary.common.error_required_field })
      .min(1, { message: dictionary.common.error_required_field })
      .max(20, { message: dictionary.common.error_max_characters }),
    email: z
      .string({ required_error: dictionary.common.error_required_field })
      .email({ message: dictionary.common.error_invalid_email }),
    country: z
      .string({ required_error: dictionary.common.error_required_field })
      .min(1, { message: dictionary.common.error_required_field })
      .max(20, { message: dictionary.common.error_max_characters }),
    business: z.string({ required_error: dictionary.common.error_required_field }),
    company: z.string({ required_error: dictionary.common.error_required_field }),
  });
