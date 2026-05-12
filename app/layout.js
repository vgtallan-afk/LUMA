import "./globals.css";

export const metadata = {
  title: "LUMA — Bem-estar Digital",
  description: "Aplicativo de foco, respiração e clareza mental com experiência premium em PT-BR."
};

export const viewport = {
  themeColor: "#020807"
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
