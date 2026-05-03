import PlaybookNav from "./PlaybookNav";

export default function PlaybookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PlaybookNav />
      {children}
    </>
  );
}
