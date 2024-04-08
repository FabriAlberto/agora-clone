"use server";

import { ActionResponse } from "@/types/common.type";
import { SuscribeNewsletterFields } from "@/types/home";
import { sleep } from "@/utils/common-functions";
import { getResponseAction } from "@/utils/server-response-handler";

export async function suscribeNewsletter(data: SuscribeNewsletterFields): Promise<ActionResponse> {
  try {
    await sleep(3);
    return await getResponseAction(true, JSON.stringify(data));
  } catch (err) {
    console.log(err);
    return await getResponseAction(false);
  }
}
