import { NEWSLETTER_ITEMS } from "@/mocks/newsletter";
import { Newsletter } from "@/types/newsletter";

export const fetchNewsletters = async (): Promise<Newsletter[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return NEWSLETTER_ITEMS;
};
