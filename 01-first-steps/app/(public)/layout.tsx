import { Navbar } from "@/components"

export default function  PublicLayaout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
    <Navbar />
      <div className="flex items-center pt-20 flex-col">
        <h1>Hola mundo </h1>
        {children}
      </div>
    </>
  );
}