import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function WebsiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-[73px] page-transition">{children}</main>
      <Footer />
    </>
  );
}
