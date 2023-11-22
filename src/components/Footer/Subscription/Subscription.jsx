'use client';

import content from '@/asset/content.json';
import mailIcon from '@/asset/svg/mail.svg';
import { InputBase } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';

import BRButton from '@/components/BRButton/BRButton';
import { BRTypography } from '@/components/BRTypography';
import { IconBlock } from '@/components/IconBlock';

import styles from './subscription.module.css';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const Subscription = () => {
  const {
    subscription: {
      title,
      description,
      inputLabel,
      buttonText,
      subscriptionText,
      privacyPolicy,
      placeholder,
      privacyPolicyLink,
    },
  } = content;
  const [email, setEmail] = useState('');

  const subscribe = () => {
    const isValid = emailRegex.test(email);

    if (isValid) {
      console.log('subscribed');
    }
  };

  return (
    <>
      <IconBlock icon={mailIcon} />
      <div className={styles.wrapper}>
        <div className={styles.boxWrapper}>
          <BRTypography
            text={title}
            variantMapping="headline2"
            style={{ color: '#FFF', textAlign: 'start', marginBottom: 24 }}
          />
          <BRTypography text={description} variantMapping="bodyS" style={{ color: 'rgba(215, 219, 229, 0.50)' }} />
        </div>
        <form action="https://formspree.io/f/mbjbrplr" method="POST">
          <div className={styles.inputWrapper}>
            <label className={styles.inputLabel}>{inputLabel}</label>
            <div className={styles.inputBlock}>
              <InputBase
                fullWidth
                placeholder={placeholder}
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                classes={{ root: styles.input }}
                required
              />
              <BRButton text={buttonText} variant="contained" type="submit" />
            </div>
            <div className={styles.subscriptionTextWrapper}>
              <span className={styles.subscriptionText}>{subscriptionText}</span>{' '}
              <Link href={privacyPolicyLink}>{privacyPolicy}</Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
