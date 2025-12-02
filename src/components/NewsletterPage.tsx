"use client";

import { css } from '../../styled-system/css'
import { useState } from "react";
import { User } from "@/types/user";
import { Newsletter } from "@/types/newsletter";
import List from "@/components/List";
import UserSelector from "@/components/UserSelector";

type NewsletterPageProps = {
  newsletters: Newsletter[];
  users: Record<string, User>;
};

const pageStyles = css({
  maxWidth: '969px',
  margin: '30px auto',
  padding: '0 15px',
  color: '#212121',
})

const headerStyles = css({
  backgroundColor: '#F4F4F4',
  padding: '20px',
  textAlign: 'center',
  fontSize: '16px',
  fontWeight: '400',
  lineHeight: '1.5',
})

const titleStyles = css({
  fontSize: '30px',
  fontWeight: '700',
  marginBottom: '10px',
  textTransform: 'uppercase',
})

const testingToolStyles = css({
  display: 'block',
  position: 'fixed',
  bottom: 0,
  right: 0,
  width: '200px',
  backgroundColor: 'gainsboro',
  padding: '10px',
  border: '1px solid #ccc',
  fontSize: '14px',
  zIndex: 1,
})

const testingToolUserStyles = css({
  marginTop: '10px',
  fontSize: '14px',
});

export default function NewsletterPage({ newsletters, users }: NewsletterPageProps) {
  const [user, setUser] = useState<User>(users["1 abonnement"]);

  return (
    <main className={pageStyles}>
      <header className={headerStyles}>
        <h1 className={titleStyles}>Newsletters</h1>
        <p>Dans cette page, vous retrouvez l’ensemble des newsletters des Echos et des marques satellites. Ainsi, vous pouvez découvrir toutes nos newsletters selon vos centres d’intérêt et gérer plus facilement l’inscription à vos newsletters.</p>
      </header>
      <div className={testingToolStyles}>
        <UserSelector onUserChange={setUser} users={users} />
        <div className={testingToolUserStyles}>
          <p>
            Abonnements actuels :<br/>
            {user.subscriptions.length > 0
              ? user.subscriptions.join(", ")
              : "Aucun"}
          </p>
        </div>
      </div>
      <List newsletters={newsletters} user={user} />
    </main>
  );
}
