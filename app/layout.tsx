import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FeedbackRouter AI — Smart Customer Feedback Routing",
  description: "AI-powered system that automatically categorizes and routes customer feedback to the right team members based on content and urgency."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="3050a3b6-1e5e-48e4-891f-2163c7ab52dd"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
