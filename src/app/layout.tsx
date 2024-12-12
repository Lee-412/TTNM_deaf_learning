
import '@mantine/core/styles.css';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { Header } from '@/components/header/header';

export const metadata = {
  title: 'SignLearn',
  description: 'I have followed setup instructions carefully',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}