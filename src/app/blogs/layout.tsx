
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ArticlesLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header/>
      {children}
      <Footer/>
    </div>
  );
}

