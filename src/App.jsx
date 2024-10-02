import "./App.css";
import ConactHeader from "./components/ConactHeader/ConactHeader";
import ContactForm from "./components/ContactForm/ContactForm";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <div>
      <Navigation />
      <main className="main_container">
        <ConactHeader />
        <ContactForm />
      </main>
    </div>
  );
}

export default App;
