import { ArrowTop } from '@/asset/svg/ArrowTop';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import Link from 'next/link';

import mainStyles from '../header.module.css';
import styles from './dropdownModile.module.css';

export const DropdownMobile = ({ title, options, url, activeLinkClass, handleChange, expanded, index }) => {
  return (
    <Accordion
      expanded={expanded === index}
      onChange={handleChange(index)}
      classes={{ expanded: styles.expandedAccordion, root: styles.accordion }}
      sx={{
        '&.Mui-expanded': {
          margin: '0',
        },
      }}
    >
      <AccordionSummary
        classes={{ root: styles.accordionTitle, content: styles.accordionTitle, expandIconWrapper: styles.icon }}
        expandIcon={
          <div>
            <ArrowTop className={expanded === index ? styles.opened : ''} />
          </div>
        }
        sx={{
          '.MuiAccordionSummary-content.Mui-expanded': {
            margin: '0 0 16px',
            minHeight: 0,
          },
        }}
      >
        <Link className={`${mainStyles.link} ${activeLinkClass}`} href={url} prefetch={false}>
          {title}
        </Link>
      </AccordionSummary>
      <AccordionDetails classes={{ root: styles.accordionDescription }}>
        {options.map((menu) => (
          <Link
            href={menu.url}
            prefetch={false}
            className={`${mainStyles.sublink} ${activeLinkClass}`}
            key={menu.title}
          >
            {menu.title}
          </Link>
        ))}
      </AccordionDetails>
    </Accordion>
  );
};
