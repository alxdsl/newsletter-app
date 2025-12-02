"use client";

import { css } from '../../styled-system/css'
import { User } from "@/types/user";

type UserSelectorProps = {
  onUserChange: (user: User) => void;
  users: Record<string, User>;
};

const selectorStyles = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
})

const selectorButtonStyles = css({
  backgroundColor: 'white',
  border: 'none',
  borderRadius: '5px',
  padding: '8px 12px',
  cursor: 'pointer',
  _hover: {
    backgroundColor: 'gray',
    color: 'white',
  }
})

export default function UserSelector({ onUserChange, users }: UserSelectorProps) {
  return (
    <div className={selectorStyles}>
      {Object.entries(users).map(([key, u]) => (
        <button key={key} onClick={() => onUserChange(u)} className={selectorButtonStyles}>
          {key}
        </button>
      ))}
    </div>
  );
}
