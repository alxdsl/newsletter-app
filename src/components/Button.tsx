import { css } from '../../styled-system/css'

type ButtonProps = {
  color?: 'primary' | 'secondary';
  children: React.ReactNode;
};

export default function Button({
  color = 'primary',
  children,
}: ButtonProps) {
  const styles = css({
    borderRadius: '40px',
    fontSize: '14px',
    fontWeight: '700',
    padding: '8px 30px',
    width: 'fit-content',
    margin: '0 auto',
    cursor: 'pointer',
    backgroundColor: color === 'primary' ? '#B00005' : '#FAEC70',
    color: color === 'primary' ? '#FFFFFF' : '#212121',
  })

  return (
    <button className={styles}>
      {children}
    </button>
  );
}
