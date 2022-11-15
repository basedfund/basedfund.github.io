import React, { useEffect, useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import { getFAQs } from '../../../api';
import SvgPlus from '../../../assets/images/plus.svg';
import SvgMinus from '../../../assets/images/minus.svg';
import SvgOval from '../../../assets/images/Oval.svg';
import styles from './SectionFAQ.module.css';

export function SectionFAQ() {
  const [faqs, setFaqs] = useState<{ question: string, answer: string }[]>([]);
  const [expandedId, setExpandedId] = useState(-1);

  useEffect(() => {
    setFaqs(getFAQs());
  }, []);

  return (
    <Box className={styles.root} id='section-faq'>
      <Box className={styles.title}>
        <Typography variant='h2' color='text.primary'>
          Frequently asked questions
        </Typography>
        <img className={styles.oval} src={SvgOval} />
      </Box>
      <Typography className={styles.description} variant='body1' color='secondary.main'>
        browse our faq's below, if you can not find the answer to you're looking for please contact us.
      </Typography>
      <Box className={styles.faqList}>
        {faqs.map((faq, id) => (
          <Accordion className={styles.faqAccordion} expanded={expandedId === id} key={id} sx={{bgcolor: 'transparent'}}>
            <AccordionSummary className={styles.faqQuestion}
              expandIcon={expandedId === id ? <img src={SvgMinus} /> : <img src={SvgPlus} />}
              onClick={(event) => {
                setExpandedId(expandedId === id ? -1 : id);
                event.stopPropagation();
              }}
            >
              <Typography className={styles.question} variant='body2' color='text.primary'>
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={styles.faqAnswer}>
              <Typography className={styles.answer} variant='body1' color='text.primary'>
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
}
