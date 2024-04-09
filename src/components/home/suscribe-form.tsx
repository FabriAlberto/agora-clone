"use client";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import InputCustomRHF from "../common/ui/custom-input-rhf";
import { SuscribeNewsletterFields } from "@/types/home";
import { Button } from "@nextui-org/react";
import { MasterDictionaryType } from "@/context/main.context";
import { suscribeFormSchema } from "@/schemas/suscribe-newsletter.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { suscribeNewsletter } from "@/actions/home.action";

const configToast = {
  duration: 10000,
  style: {
    maxWidth: "none",
  },
};
type Props = {
  dictionary: MasterDictionaryType;
};
const SuscribeForm = ({ dictionary }: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const schema = suscribeFormSchema(dictionary);
  const methods = useForm<SuscribeNewsletterFields>({
    resolver: zodResolver(schema),
  });
  
  const dictionaryHome = dictionary.home;
  const { handleSubmit } = methods;

  const onSubmit = async (data: SuscribeNewsletterFields) => {
    setIsLoading(true);
    const { success, message, data: responseData } = await suscribeNewsletter(data);
    if (!success) {
      toast.error(message);
      setIsLoading(false);
      return;
    }
    toast.success(`${message} \n ${responseData}`, configToast);
    setIsLoading(false);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-wrap">
        <div className="w-full px-4 py-1 md:w-1/2">
          <InputCustomRHF name="firstName" label={dictionaryHome.label_first_name} />
        </div>
        <div className="w-full px-4 py-1 md:w-1/2">
          <InputCustomRHF name="lastName" label={dictionaryHome.label_last_name} />
        </div>
        <div className="w-full px-4 py-1 md:w-1/2">
          <InputCustomRHF name="business" label={dictionaryHome.label_business_name} />
        </div>
        <div className="w-full px-4 py-1 md:w-1/2">
          <InputCustomRHF name="company" label={dictionaryHome.label_company} />
        </div>
        <div className="w-full px-4 py-1 md:w-1/2">
          <InputCustomRHF name="email" label={dictionaryHome.label_email} />
        </div>
        <div className="w-full px-4 py-1 md:w-1/2">
          <InputCustomRHF name="country" label={dictionaryHome.label_country} />
        </div>
        <div className="mt-12 w-full px-4">
          <Button color="primary" type="submit" className="rounded-xl" isLoading={isLoading}>
            {dictionaryHome.btn_suscribe}
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default SuscribeForm;
