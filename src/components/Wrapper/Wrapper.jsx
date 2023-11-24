import styles from './wrapper.module.css';

export const Wrapper = ({ className = '', children }) => {
  return <div className={`${styles.wrapper} ${className}`}>{children}</div>;
};
