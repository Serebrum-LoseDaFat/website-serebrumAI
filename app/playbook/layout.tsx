import PlaybookNav from "./PlaybookNav";

export default function PlaybookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div data-playbook>
      <PlaybookNav />
      {children}
    </div>
  );
}
