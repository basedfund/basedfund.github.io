import { Button } from '@mui/material';

import styles from './brButton.module.css';

const BRButton = ({ text, onClick, variant, type = 'button', children, style, className = '' }) => {
  return (
    <Button onClick={onClick} className={`${styles[variant]} ${className}`} style={style} type={type}>
      {text}
      {children}
    </Button>
  );
};

export default BRButton;
