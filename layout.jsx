export const metadata = {
  title: "Nike Reimagined | Future Interns",
  description: "AI-inspired Nike website redesign built by Sourav Guha for Future Interns Full Stack Internship Task 3.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-nikeGray text-nikeBlack">{children}</body>
    </html>
  );
}