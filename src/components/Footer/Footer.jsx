import content from '@/asset/content.json';
import logo from '@/asset/svg/logo_footer.svg';
import { Divider } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import { BRTypography } from '@/components/BRTypography';
import { CustomLink } from '@/components/Footer/CustomLink';
import { Subscription } from '@/components/Footer/Subscription';

import styles from './footer.module.css';

export const Footer = () => {
  const {
    footer: { description, blocks },
    allRights,
    socialNetworks,
  } = content;

  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.whiteBlock}></div>
      <div className={styles.content}>
        <div className={styles.footer}>
          <Subscription />
          <Divider style={{ borderColor: 'rgba(135, 146, 161, 0.20' }} />

          <div className={styles.bottomContent}>
            <div className={styles.logoWrapper}>
              <Image src={logo} alt="Bedrock logo" width={207} height={43} />
              <BRTypography variantMapping="bodyS" text={description} style={{ color: 'rgba(215, 219, 229, 0.50)' }} />
            </div>
            <div className={styles.listWrapper}>
              {blocks.map((item) => (
                <div key={item.title} className={styles.itemList}>
                  <div className={styles.title}>{item.title}</div>
                  {item.links.map((link) => (
                    <CustomLink text={link.text} link={link.url} key={link.text} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.socialMediaWrapper}>
          <span className={styles.allRights}>{allRights}</span>
          <div className={styles.socialMediaList}>
            {socialNetworks.map((social) => (
              <Link key={social.alt} href={social.url} target="_blank" className={styles.socialMedia}>
                <Image src={social.icon} alt={social.alt} width={20} height={20} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
