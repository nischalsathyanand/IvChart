import React from "react";
import logoImages from "../images/fb.png";
import "../index.css";
import {
  Container,
  Header,
  Image,
  Menu,
  Grid,
  StepGroup,
  StepTitle,
  StepContent,
  Step,
  Dropdown,
  Input,
  SegmentGroup,
  Segment,
} from "semantic-ui-react";

const HomePage = () => {
  const scriptOptions = [
    { key: "script1", text: "NIFTY", value: "NIFTY" },
    { key: "script2", text: "TCS", value: "TCS" },
    { key: "script3", text: "HDFCBANK", value: "HDFCBANK" },
  ];

  return (
    <Grid
      style={{ minHeight: "100vh", backgroundColor: "#071F39", color: "white" }}
    >
      <Menu fixed="top" inverted style={{ backgroundColor: "#07192D" }}>
        <Container>
          <Menu.Item as="a">
            <Header
              as="h4"
              style={{
                marginRight: "2.0em",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
                fontFamily: "Arial, sans-serif",
                fontWeight: "bold",
                color: "#DFAA36",
                marginTop: "5px",
              }}
            >
              <Image
                src={logoImages}
                size="mini"
                alt="Logo"
                style={{ marginRight: "2.0em" }}
              />
              <label className="heading">First Bench</label>
            </Header>
          </Menu.Item>
        </Container>
      </Menu>

      <Container text style={{ marginTop: "4.9em" }}>
        <StepGroup size="mini">
          <Step
            style={{
              backgroundColor: "#FE9D01",
              color: "white",
              fontWeight: "bold",
            }}
          >
            <StepContent>
              <StepTitle>IV Chart</StepTitle>
            </StepContent>
          </Step>

          <Step disabled>
            <StepContent>
              <StepTitle>Demo</StepTitle>
            </StepContent>
          </Step>
        </StepGroup>
      </Container>

      <Container style={{ marginTop: "-22em" }}>
        <SegmentGroup
          horizontal
          style={{ width: 810, height: 40, backgroundColor: "#071F39" }}
        >
          <Segment>
            <Dropdown
              style={{
                backgroundColor: "#07192D",
                color: "#FE9D01",
                fontWeight: "bold",
                border: "none",
              }}
              placeholder="Script"
              options={scriptOptions}
              selection
            />
          </Segment>
          <Segment>
            <Input
              action={{
                style: {
                  backgroundColor: "#07192D",
                  color: "white",
                  fontWeight: "bold",
                },
                content: "IV Percentage",
              }}
              actionPosition="left"
              defaultValue="52.03"
              input={{
                style: {
                  backgroundColor: "#07192D",
                  color: "#FE9D01",
                  fontWeight: "bold",
                },
              }}
            />
          </Segment>
          <Segment>
            {" "}
            <Input
              action={{
                style: {
                  backgroundColor: "#07192D",
                  color: "white",
                  fontWeight: "bold",
                },
                content: "IV Avg",
              }}
              actionPosition="left"
              defaultValue="00.00"
              input={{
                style: {
                  backgroundColor: "#07192D",
                  color: "#FE9D01",
                  fontWeight: "bold",
                },
              }}
            />
          </Segment>
        </SegmentGroup>
      </Container>
    </Grid>
  );
};

export default HomePage;
