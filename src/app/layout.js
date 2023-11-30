export const metadata = {
  title: 'Bedrock',
  description: 'Bedrock Protocol',
  icons: {
    icon: ['/favicon.ico?v=4'],
    apple: ['/apple-touch-icon.png?v=4'],
    shortcut: ['/apple-touch-icon.png'],
    other: ['/android-chrome-192x192.png?v=4'],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
