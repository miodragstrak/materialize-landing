import type { ReactNode } from "react";

export const metadata = {
  title: "Materialize",
  description: "Decentralized Manufacturing / DeFab / Reverse RWA",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}