'use client';

import { ArrowUpRight } from '@/asset/svg/ArrowUpRight';
import { sanitizeText } from '@/utils/sanitizer';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { useState } from 'react';

import { BRTypography } from '@/components/BRTypography';

import styles from './faq.module.css';

export const FAQ = ({ faq }) => {
  const { title, description, questions } = faq;
  const [expanded, setExpanded] = useState(null);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div id="faq" className={styles.blockWrapper}>
      <BRTypography
        style={{ textAlign: 'start', color: '#050505', marginBottom: 35 }}
        text={<span dangerouslySetInnerHTML={{ __html: sanitizeText(title) }} />}
        variantMapping="headline2"
      />
      <div className={styles.accordionWrapper}>
        {questions.map((question, index) => {
          return (
            <Accordion
              key={question.title}
              expanded={expanded === index}
              onChange={handleChange(index)}
              classes={{
                expanded: styles.expandedAccordion,
                root: styles.accordion,
              }}
              sx={{
                '&.Mui-expanded': {
                  margin: '0',
                },
              }}
            >
              <AccordionSummary
                classes={{
                  root: styles.accordionTitle,
                  expandIconWrapper: styles.expandIconWrapper,
                  content: styles.summaryContent,
                }}
                expandIcon={<ArrowUpRight />}
                sx={{
                  '.MuiAccordionSummary-content.Mui-expanded': {
                    margin: '0',
                    minHeight: 0,
                  },
                }}
              >
                <div className={styles.summaryWrapper}>
                  <span>{question.title}</span>
                  <span className={`${styles.ellipsisText} ${expanded === index && styles.opened}`}>
                    {question.description}
                  </span>
                </div>
              </AccordionSummary>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
};
