import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ExitLens – Turn Cancellations into Product Insights",
  description:
    "Embed customizable exit survey widgets, analyze cancellation feedback with AI, and get actionable product improvement recommendations."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://umami.microtool.dev/script.js"
          data-website-id="6a13d82c-00c3-46f7-a83f-1e5cee15f3a9"
        />
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
