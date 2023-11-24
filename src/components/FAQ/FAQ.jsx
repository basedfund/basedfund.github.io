'use client';

import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { useState } from 'react';

import { BRTypography } from '@/components/BRTypography';
import { ContentBlock } from '@/components/ContentBlock';

import styles from './faq.module.css';

export const FAQ = ({ faq }) => {
  const { title, description, questions } = faq;

  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div id="faq" className={styles.blockWrapper}>
      <ContentBlock title={title} description={description}>
        <div className={styles.accordionWrapper}>
          {questions.map((question, index) => {
            return (
              <Accordion
                key={question.title}
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
                  classes={{ root: styles.accordionTitle }}
                  expandIcon={<span className={styles.expandedIcon}>{expanded === index ? '-' : '+'}</span>}
                  sx={{
                    '.MuiAccordionSummary-content.Mui-expanded': {
                      margin: '0 0 16px',
                      minHeight: 0,
                    },
                  }}
                >
                  {question.title}
                </AccordionSummary>
                <AccordionDetails classes={{ root: styles.accordionDescription }}>
                  <BRTypography variantMapping="bodyS" text={question.description} />
                </AccordionDetails>
              </Accordion>
            );
          })}
        </div>
      </ContentBlock>
    </div>
  );
};
