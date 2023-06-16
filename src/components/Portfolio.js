import React from "react";
import G3 from "../images/orange-g3.png";
import Ipad from "../images/orange-ipad.png";
import Phone from "../images/orange-phone.png";
import Html from "../images/html.svg";
import Css from "../images/css.svg";
import Javascript from "../images/java-script.svg";
import ReactImage from "../images/react.svg";
import GitImage from "../images/git.svg";
import Vscode from "../images/vs-code.svg";
import Figma from "../images/figma.svg";
import Openai from "../images/open-ai.svg";
import Photoshop from "../images/photoshop.svg";
import Illustrator from "../images/adobe-illustrator.svg";
import Sheets from "../images/sheets.svg";

function Portfolio() {
  return (
    <div className="portfolio">
      <div className="hh3 project-header">Most Recent Project</div>
      <div className="project-link">
        <a
          href="https://positiveoutlookstherapy.com/"
          target="_blank"
          rel="noreferrer"
        >
          positiveoutlookstherapy.com
        </a>
      </div>
      <div className="desktop-box">
        <img
          src={G3}
          className="g3"
          alt="cartoonized apple imac g3 displaying a yellowe webpage featuring a mans face and the name Chris Young"
        />
        <p className="caption">Desktop</p>
      </div>

      <p className="text-block-1 portfolio-text">
        I collaborated with hypnotherapist - Chris Young to transform his
        business by creating a comprehensive website. The goal was to establish
        an online presence, showcase his expertise, and generate client
        bookings.
      </p>
      <div className="portfolio-text-block text-block-2">
        <div className="hh4">Context and Challenge:</div>
        <p className="portfolio-text">
          Before the project, Chris relied solely on word-of-mouth marketing. We
          identified the need to bring his business into the digital age and
          create a website that reflected his personality and style. The
          challenge was to design a site that conveyed trust and provided an
          intuitive user experience.
        </p>
      </div>
      <div className="portfolio-text-block text-block-3">
        <div className="hh4">Process and Insight:</div>
        <p className="portfolio-text">
          I developed the website from scratch, including UI design, branding,
          copywriting, and custom artwork. The site features a responsive design
          that adapts to all screen sizes. Notably, it incorporates a stunning
          7-layer custom artwork scroll effect, symbolizing the idea that "your
          mind can move mountains."
        </p>
      </div>
      <div className="tablet-box">
        {" "}
        <img
          src={Ipad}
          className="ipad"
          alt="cartoonized apple ipad displaying a blue webpage featuring mountain ranges of palm springs"
        />
        <p className="caption">Tablet</p>
      </div>

      <div className="portfolio-text-block text-block-4">
        <div className="hh4">Tools used:</div>
        <p className="portfolio-text">
          The process included HTML 5, CSS Grid, JavaScript, React, Git, APIs,
          VS Code, Figma, OpenAI, Adobe Photoshop, Adobe Illustrator, and API
          Spreadsheets.
        </p>
      </div>
      <div className="tool-belt">
        <div className="tool">
          <img src={Html} className="tool-icon" alt="universal HTML icon" />
          <p className="caption">HTML</p>
        </div>
        <div className="tool">
          <img src={Css} className="tool-icon" alt="universal CSS icon" />
          <p className="caption">CSS</p>
        </div>
        <div className="tool">
          <img src={Javascript} className="tool-icon" alt="universal JS icon" />
          <p className="caption">JS</p>
        </div>
        <div className="tool">
          <img
            src={ReactImage}
            className="tool-icon"
            alt="universal React logo"
          />
          <p className="caption">React</p>
        </div>
        <div className="tool">
          <img src={GitImage} className="tool-icon" alt="universal Git logo" />
          <p className="caption">Git</p>
        </div>
        <div className="tool">
          <img src={Vscode} className="tool-icon" alt="universal Vscode logo" />
          <p className="caption">VS Code</p>
        </div>
        <div className="tool">
          <img src={Figma} className="tool-icon" alt="universal Figma logo" />
          <p className="caption">Figma</p>
        </div>
        <div className="tool">
          <img src={Openai} className="tool-icon" alt="universal Openai logo" />
          <p className="caption">Open AI</p>
        </div>
        <div className="tool">
          <img
            src={Photoshop}
            className="tool-icon"
            alt="universal Photoshop logo"
          />
          <p className="caption">Photoshop</p>
        </div>
        <div className="tool">
          <img
            src={Illustrator}
            className="tool-icon"
            alt="universal Illustrator logo"
          />
          <p className="caption">Illustrator</p>
        </div>
        <div className="tool">
          <img
            src={Sheets}
            className="tool-icon"
            alt="universal Google Sheets icon"
          />
          <p className="caption">API Spreadsheets</p>
        </div>
      </div>
      <div className="portfolio-text-block text-block-5">
        <div className="hh4">Solution:</div>
        <p className="portfolio-text">
          The website successfully reflects Chris's individuality, expertise,
          and style. It provides visitors a modern yet timeless experience and
          an intuitive user interface. The custom artwork scroll effect adds a
          unique touch, captivating users and fostering a sense of calm and
          trust. The website encourages visitors to book hypnotherapy sessions
          by building trust and showcasing Chris's capabilities.
        </p>
      </div>
      <div className="phone-box">
        {" "}
        <img
          src={Phone}
          className="phone"
          alt="cartoonized pixel phone displaying the FAQ page of the positive outlooks website but its intentionally too tiny to be readable"
        />
        <p className="caption">Mobile</p>
      </div>

      <div className="portfolio-text-block text-block-6">
        <div className="hh4">Results:</div>
        <p className="portfolio-text">
          Since the website's launch, Chris has experienced a significant
          increase in online visibility and client inquiries. The modern design
          and intuitive user experience have helped establish trust and
          credibility with visitors. Incorporating captivating visuals and
          engaging content has led to a higher conversion rate and increased
          bookings. Client feedback has been overwhelmingly positive,
          highlighting the website's effectiveness in promoting Chris's
          hypnotherapy business.
        </p>
      </div>
      <p className="text-block-7 portfolio-text">
        By showcasing Chris's expertise and providing an engaging user
        experience, the website has successfully brought his business into the
        digital age and positioned him as a trusted hypnotherapist within his
        target audience.
      </p>

      <div className="polygon-3"></div>
    </div>
  );
}

export default Portfolio;
