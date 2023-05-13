import Main from "@/layout/Main";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Main>{children}</Main>;
}
