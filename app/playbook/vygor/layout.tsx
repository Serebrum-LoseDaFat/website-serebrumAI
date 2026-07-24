import VygorNav from "./VygorNav";

export default function VygorLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <VygorNav />
      {children}
    </>
  );
}
