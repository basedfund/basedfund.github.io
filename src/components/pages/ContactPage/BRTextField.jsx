import { FormControl, TextField } from '@mui/material';

import styles from './contactPage.module.css';

export const BRTextField = ({ name, label, type = 'text', multiline, required }) => {
  return (
    <FormControl fullWidth>
      <label className={styles.label}>{label}</label>
      <TextField
        name={name}
        variant="outlined"
        type={type}
        multiline={multiline}
        rows={6}
        required={required}
        fullWidth
        className={`${styles.inputBox} ${styles[name]}`}
        sx={{
          '& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button': {
            display: 'none',
          },
          '& input[type=number]': {
            MozAppearance: 'textfield',
          },
        }}
        inputProps={{
          sx: {
            color: '#000',
            paddingLeft: '14px',
            paddingRight: '14px',
            fontSize: '14px',
            fontFamily: 'Urbanist Medium, sans-serif',
          },
        }}
        InputProps={{
          sx: {
            '& fieldset': {
              border: 'none',
              padding: '8px 12px',
              minHeight: multiline ? '160px' : '46px',
            },
            '&:hover fieldset': {
              border: 'none',
              borderRadius: '3px',
            },
            '&:focus-within fieldset, &:focus-visible fieldset': {
              border: 'none',
            },
          },
        }}
      />
    </FormControl>
  );
};
