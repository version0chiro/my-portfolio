import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiHtml5,
  DiJava,
  DiCss3,
  DiGit,
  DiSqllite,
} from "react-icons/di";
import {
  SiPytorch,
  SiTensorflow,
  SiAmazonaws,
  SiFlask,
  SiMysql,
  SiRaspberrypi,
  SiAndroid,
  SiArduino,
  SiNativescript,
  SiKeras,
  SiC,
  SiSvelte,
  SiTypescript,
} from "react-icons/si";

import styles from "./styles.module.css";

function Techstack() {
  return (
    <Container id="stack" fluid className={styles["about-section"]}>
      <h1 className={styles["project-heading"]}>
        <strong className={styles["color-a"] + " p-7"}>
          Some Other Stuff I know{" "}
        </strong>
      </h1>
      <h1 className={styles["project-heading"]}>
        <strong className={styles["color-a"] + " text-3xl md:text-4xl"}>
          Languages
        </strong>
      </h1>
      <Row
        style={{ justifyContent: "center", paddingBottom: "50px" }}
        className="flex flex-wrap"
      >
        <Col xs={4} md={2} className={styles["tech-icons"]}>
          <CgCPlusPlus />
        </Col>
        <Col xs={4} md={2} className={styles["tech-icons"]}>
          <DiJavascript1 />
        </Col>
        <Col xs={4} md={2} className={styles["tech-icons"]}>
          <SiTypescript />
        </Col>
        <Col xs={4} md={2} className={styles["tech-icons"]}>
          <DiPython />
        </Col>
        <Col xs={4} md={2} className={styles["tech-icons"]}>
          <DiJava />
        </Col>
        <Col xs={4} md={2} className={styles["tech-icons"]}>
          <DiHtml5 />
        </Col>
        <Col xs={4} md={2} className={styles["tech-icons"]}>
          <DiCss3 />
        </Col>
        <Col xs={4} md={2} className={styles["tech-icons"]}>
          <SiC />
        </Col>
      </Row>
      <h1 className={styles["project-heading"]}>
        <strong className={styles["color-a"] + " text-3xl md:text-4xl"}>
          Framework/Technologies
        </strong>
      </h1>
      <Row
        style={{ justifyContent: "center", paddingBottom: "50px" }}
        className="flex flex-wrap"
      >
        <Col xs={4} md={2} className={styles["tech-icons"]}>
          <SiTensorflow />
        </Col>
        <Col xs={4} md={2} className={styles["tech-icons"]}>
          <DiReact />
        </Col>
        <Col xs={4} md={2} className={styles["tech-icons"]}>
          <DiNodejs />
        </Col>
        <Col xs={4} md={2} className={styles["tech-icons"]}>
          <SiPytorch />
        </Col>
        <Col xs={4} md={2} className={styles["tech-icons"]}>
          <SiSvelte />
        </Col>
        <Col xs={4} md={2} className={styles["tech-icons"]}>
          <SiAmazonaws />
        </Col>
        <Col xs={4} md={2} className={styles["tech-icons"]}>
          <SiFlask />
        </Col>
        <Col xs={4} md={2} className={styles["tech-icons"]}>
          <SiKeras />
        </Col>
        <Col xs={4} md={2} className={styles["tech-icons"]}>
          <SiNativescript />
        </Col>
        <Col xs={4} md={2} className={styles["tech-icons"]}>
          <SiAndroid />
        </Col>
        <Col xs={4} md={2} className={styles["tech-icons"]}>
          <SiRaspberrypi />
        </Col>
        <Col xs={4} md={2} className={styles["tech-icons"]}>
          <SiArduino />
        </Col>
        <Col xs={4} md={2} className={styles["tech-icons"]}>
          <DiGit />
        </Col>
      </Row>
      <h1 className={styles["project-heading"]}>
        <strong className={styles["color-a"] + " text-3xl md:text-4xl"}>
          Databases
        </strong>
      </h1>
      <Row
        style={{ justifyContent: "center", paddingBottom: "50px" }}
        className="flex flex-wrap"
      >
        <Col xs={4} md={2} className={styles["tech-icons"]}>
          <DiMongodb />
        </Col>
        <Col xs={4} md={2} className={styles["tech-icons"]}>
          <DiSqllite />
        </Col>
        <Col xs={4} md={2} className={styles["tech-icons"]}>
          <SiMysql />
        </Col>
      </Row>
    </Container>
  );
}

export default Techstack;
