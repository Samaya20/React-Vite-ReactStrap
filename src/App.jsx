import { Container, Row, Col } from "reactstrap";
import "./App.css";
import AccordionItem from "./components/AccordionItems.jsx";
import Navigation from "./components/Navigation.jsx";
import Content from "./components/Content.jsx";
import { createContext, useState } from "react";
import {
  CiHome,
  CiCircleInfo,
  CiViewTimeline,
  CiCircleQuestion,
  CiGrid42,
  CiPhone,
} from "react-icons/ci";

export const MAIN_CONTEXT = createContext("");

function App() {
  const [state, setState] = useState(1);

  const values = {
    state,
    setState,
  };

  let listItems = [
    {
      id: "0",
      title: "Home",
      subtitles: ["Home1", "Home2", "Home3"],
      icon: <CiHome />,
    },
    {
      id: "1",
      title: "About",
      subtitles: ["About1", "About2"],
      icon: <CiCircleInfo />,
    },
    {
      id: "2",
      title: "Pages",
      subtitles: ["Page1", "Page2", "Page3"],
      icon: <CiGrid42 />,
    },
    {
      id: "3",
      title: "Portfolio",
      subtitles: ["Final-Project", "Games", "Applications"],
      icon: <CiViewTimeline />,
    },
    {
      id: "4",
      title: "FAQ",
      subtitles: ["Information"],
      icon: <CiCircleQuestion />,
    },
    {
      id: "5",
      title: "Contact",
      subtitles: ["Phone", "Email", "Address"],
      icon: <CiPhone />,
    },
  ];

  //

  return (
    <MAIN_CONTEXT.Provider value={values}>
      <div className="main">
        <Container>
          <Row>
            <Col xs="3">
              <AccordionItem items={listItems} />
            </Col>
            <Col xs="9">
              <Navigation />
              <Content />
            </Col>
          </Row>
        </Container>
      </div>
    </MAIN_CONTEXT.Provider>
  );
}

export default App;
