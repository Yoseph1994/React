import { useState } from "react";
import "./App.css";
import "./styles.css";
const faqs = [
  {
    title: "someday",
    text: "blah blah",
  },

  {
    title: "someday",
    text: "blah blah",
  },

  {
    title: "someday",
    text: "blah blah",
  },
];

function App() {
  return (
    <>
      <Accordion faqs={faqs} />
    </>
  );
}

function Accordion({ faqs }) {
  return (
    <div>
      {faqs.map((faq, i) => (
        <AccordionItem
          title={faq.title}
          text={faq.text}
          num={i}
          key={Date.now}
        />
      ))}
    </div>
  );
}

function AccordionItem({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false);
  function handleToggle() {
    setIsOpen((prev) => !prev);
  }
  return (
    <div className="item">
      <p className="number">{num}</p>
      <p className="text">{title}</p>

      <p className="icon" onClick={handleToggle}>
        {isOpen ? "-" : "+"}
      </p>

      {isOpen && <div className="content-books">{text}</div>}
    </div>
  );
}

export default App;
