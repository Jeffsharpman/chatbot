import ChatMessages from "../components/ChatMessages";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./SharpmanAi.css";
const SharpmanAi = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <Header />

      {/* Chat transcript */}
      <ChatMessages  />

      {/* Footer */}
      <Footer
      />
    </div>
  );
};

export default SharpmanAi;
