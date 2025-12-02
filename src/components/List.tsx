import { css } from '../../styled-system/css'

import { Newsletter } from "@/types/newsletter";
import { User } from "@/types/user";
import Card from "./Card";

type ListProps = {
  newsletters: Newsletter[];
  user: User;
};

const containerStyles = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '61px',
  width: '100%',
  marginBlock: '20px',
})

const listStyles = css({
  display: 'grid',
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: '32px',
  marginTop: '32px',
})

const siteHeaderStyles = css({
  fontSize: '22px',
  fontWeight: '700',
  paddingBottom: '16px',
  width: 'fit-content',
  position: 'relative',

  _after: {
    content: '""',
    display: 'block',
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '60%',
    height: '4px',
    backgroundColor: '#B00005',
    borderRadius: '10px',
  }
})

export default function List({ newsletters, user }: ListProps) {
  // Group newsletters by site
  const groupedNewsletters = newsletters.reduce((acc, newsletter) => {
    if (!acc[newsletter.site]) {
      acc[newsletter.site] = [];
    }
    acc[newsletter.site].push(newsletter);
    return acc;
  }, {} as Record<string, Newsletter[]>);

  return (
    <main className={containerStyles}>
      {Object.entries(groupedNewsletters).map(([site, newsletters]) => (
        <section key={site}>
          <h2 className={siteHeaderStyles}>{site}</h2>
          <div className={listStyles}>
            {newsletters.map((newsletter) => (
              <Card
                key={newsletter.id}
                newsletter={newsletter}
                user={user}
              />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
