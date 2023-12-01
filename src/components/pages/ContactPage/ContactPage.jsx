'use client';

import content from '@/asset/content.json';
import { ArrowTop } from '@/asset/svg/ArrowTop';
import { FormControl, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';

import BRButton from '@/components/BRButton/BRButton';
import { BRTypography } from '@/components/BRTypography';
import Layout from '@/components/Layout/Layout';
import { Wrapper } from '@/components/Wrapper';
import { BRTextField } from '@/components/pages/ContactPage/BRTextField';

import styles from './contactPage.module.css';

export const ContactPage = () => {
  const {
    contactPage: { title, description, form },
  } = content;
  const [isOpen, setIsOpen] = useState(false);

  const { name, email, service, message } = form.fields;

  const handleClose = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <Layout>
      <Wrapper>
        <div className={`${styles.wrapper} ${isOpen ? 'opened' : ''}`}>
          <div className={styles.textWrapper}>
            <BRTypography text={title} variantMapping="headline4" />
            <BRTypography text={description} variantMapping="bodyM" />
          </div>
          <form
            action="https://formspree.io/f/mbjbrplr"
            method="POST"
            className={styles.form}
            onSubmit={(e) => e.target.reset()}
          >
            <BRTextField label={name.label} name="name" required />
            <BRTextField type="email" label={email.label} name="email" required />
            <FormControl fullWidth>
              <label className={styles.label}>{service.label}</label>
              <Select
                name="service"
                displayEmpty
                onOpen={handleClose}
                required
                defaultValue=""
                IconComponent={ArrowTop}
                onClose={handleClose}
                className={styles.selectWrapper}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return <span className={styles.selectPlaceholder}>{service.placeholder}</span>;
                  }

                  return selected;
                }}
                sx={{
                  '&& fieldset': { borderColor: '#E3E3E8' },
                  '&.Mui-focused fieldset.MuiOutlinedInput-notchedOutline': { border: '1px solid #E3E3E8' },
                  '&:hover': {
                    '&& fieldset': {
                      borderColor: '#E3E3E8',
                    },
                  },
                }}
              >
                {service.options.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <BRTextField label={message.label} name="message" multiline required />
            <div className={styles.button}>
              <BRButton text={form.buttonText} variant="contained" type="submit" />
            </div>
          </form>
        </div>
      </Wrapper>
    </Layout>
  );
};
