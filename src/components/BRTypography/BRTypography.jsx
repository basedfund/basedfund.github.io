import { Typography } from '@mui/material';

import styles from './brTypography.module.css';

const variantMappingList = {
  headlineHero: 'h1',
  headline1: 'h1',
  headline2: 'h2',
  headline3: 'h3',
  headline4: 'h4',
  headline5: 'h5',
  headline6: 'h6',
  subtitle: 'span',
  bodyXL: 'span',
  bodyL: 'span',
  bodyM: 'span',
  bodyS: 'span',
  bodyXS: 'span',
  bodyXXS: 'span',
  labelL: 'span',
  labelM: 'span',
  labelS: 'span',
  descriptionM: 'span',
};

export const BRTypography = ({ text, variantMapping, style, dangerouslySetInnerHTML, theme }) => {
  return (
    <Typography
      variant={variantMappingList[variantMapping]}
      className={`${styles[variantMapping]} ${styles[theme]}`}
      style={style}
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
    >
      {text}
    </Typography>
  );
};
