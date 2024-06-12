import Footer from "./Footer";
import Header from "./Header";

function AppLayout({ children }) {
  return (
    <>
      <Header />
      <div style={{ minHeight: "700px" }}>{children}</div>
      <Footer />
    </>
  );
}

export default AppLayout;
