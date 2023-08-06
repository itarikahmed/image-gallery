import "@styles/globals.css";

export const metadata = {
  title: "welcome to Image Gallery",
  description: "Unplash Photo Gallery",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="app">{children}</body>
    </html>
  );
}
