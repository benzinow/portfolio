import React from "react";
import G3orange from "../images/orange-g3.png";
import snake from "../images/snake.png";
import G3green from "../images/green-g3.png";
import Ipad from "../images/orange-ipad.png";
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
      <div className="hh3 project-header">Projects</div>
      <div className="portfolio-section-1">
        <div className="desktop-box">
          <img
            src={G3orange}
            className="g3"
            alt="cartoonized apple imac g3 displaying a yellowe webpage featuring a mans face and the name Chris Young"
          />
          <p className="caption">Desktop</p>
        </div>
        <div>
          <div className="project-link">
            <a
              href="https://positiveoutlookstherapy.com/"
              target="_blank"
              rel="noreferrer"
            >
              positiveoutlookstherapy.com
            </a>
          </div>
          <p className="text-block-1 portfolio-text">
            I collaborated with hypnotherapist - Chris Young to transform his
            business by creating a comprehensive website. The goal was to
            establish an online presence, showcase his expertise, and generate
            client bookings.
          </p>
        </div>
      </div>
      <div className="portfolio-section-2">
        <div className="portfolio-text-block text-block-3">
          <p className="portfolio-text">
            I developed the website from scratch, including UI design, branding,
            copywriting, and custom artwork. The site features a responsive
            design that adapts to all screen sizes. Notably, it incorporates a
            stunning 7-layer custom artwork scroll effect, symbolizing the idea
            that "your mind can move mountains."
          </p>
          <p className="portfolio-text">Tools used:</p>
          <div className="tool-belt">
            <div className="tool">
              <img
                src={ReactImage}
                className="tool-icon"
                alt="universal React logo"
              />
              <p className="caption">React</p>
            </div>
            <div className="tool">
              <img
                src={GitImage}
                className="tool-icon"
                alt="universal Git logo"
              />
              <p className="caption">Git</p>
            </div>

            <div className="tool">
              <img
                src={Javascript}
                className="tool-icon"
                alt="universal JS icon"
              />
              <p className="caption">JS</p>
            </div>
            <div className="tool">
              <img src={Html} className="tool-icon" alt="universal HTML icon" />
              <p className="caption">HTML</p>
            </div>
            <div className="tool">
              <img src={Css} className="tool-icon" alt="universal CSS icon" />
              <p className="caption">CSS</p>
            </div>
            <div className="tool">
              <img
                src={Vscode}
                className="tool-icon"
                alt="universal Vscode logo"
              />
              <p className="caption">VS Code</p>
            </div>
            <div className="tool">
              <img
                src={Figma}
                className="tool-icon"
                alt="universal Figma logo"
              />
              <p className="caption">Figma</p>
            </div>
            <div className="tool">
              <img
                src={Openai}
                className="tool-icon"
                alt="universal Openai logo"
              />
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
              <p className="caption">API SS</p>
            </div>
          </div>
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
      </div>
      <div className="portfolio-section-3">
        <div className="desktop-box">
          <img
            src={G3green}
            className="g3"
            alt="cartoonized apple imac g3 displaying a yellowe webpage featuring a mans face and the name Chris Young"
          />
          <p className="caption">Desktop</p>

          <img
            src={snake}
            className="snake"
            alt="cartoonized apple imac g3 displaying a yellowe webpage featuring a mans face and the name Chris Young"
          />
        </div>
        <div>
          <div className="project-link">
            <a href="https://happybasins.com/" target="_blank" rel="noreferrer">
              happybasins.com
            </a>
          </div>
          <p className="text-block-1 portfolio-text">
            Herpetologist and Educator - Amy Powell, has been a valued client
            for many years. Over the course of our collaboration, I’ve created
            posters, t-shirts, and intricate custom artwork to support her work
            and vision. When Amy was preparing for her debut on a podcast, she
            recognized the importance of having a professional website to
            connect with her audience. This project required quick turnaround,
            and I successfully delivered a responsive, functional, fun site
            under tight deadlines, ensuring she was ready to make her mark.
          </p>
        </div>
      </div>
      <div className="portfolio-section-4">
        <div className="project-link">Most recent endeavor:</div>
        <p className=" portfolio-text">
          Starting in 2023, I’ve embraced the opportunity to work in a corporate
          setting, where I’ve gained invaluable experience with larger, more
          complex codebases. This role allowed me to engage with backend
          development, explore advanced CSS libraries, and implement atomic
          design principles to build scalable, maintainable systems. Along the
          way, I’ve added powerful new tools to my professional toolbelt, giving
          me a more holistic view of software development. I’m grateful for the
          growth and perspective this experience has provided, and I’m excited
          to channel these skills into more dynamic and creative endeavors where
          I can make a direct impact.
        </p>
      </div>

      <div className="polygon-3"></div>
    </div>
  );
}

export default Portfolio;
