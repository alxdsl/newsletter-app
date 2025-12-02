import {
  USER_WITH_ONE_SUBSCRIPTION,
  USER_WITHOUT_SUBSCRIPTION,
  USER_WITH_MULTIPLE_SUBSCRIPTION,
} from "@/mocks/user";
import { fetchNewsletters } from "@/utils/api";
import NewsletterPage from "@/components/NewsletterPage";

export default async function Page() {
  const newsletters = await fetchNewsletters();

  const users = {
    "1 abonnement": USER_WITH_ONE_SUBSCRIPTION,
    "Aucun abonnement": USER_WITHOUT_SUBSCRIPTION,
    "Plusieurs abonnements": USER_WITH_MULTIPLE_SUBSCRIPTION,
  };

  return (
    <NewsletterPage
      newsletters={newsletters}
      users={users}
    />
  );
}
