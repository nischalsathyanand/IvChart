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
  Segment,
  Table,
} from "semantic-ui-react";

const HomePage = () => {
  const scriptOptions = [
    { key: "script1", text: "NIFTY", value: "NIFTY" },
    { key: "script2", text: "TCS", value: "TCS" },
    { key: "script3", text: "HDFCBANK", value: "HDFCBANK" },
  ];

  return (
    <Grid
      stackable
      style={{ minHeight: "100vh", backgroundColor: "#071F39", color: "white" }}
    >
      <Grid.Row>
        <Grid.Column>
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
                    style={{ marginRight: "1em" }}
                  />
                  <label className="heading">First Bench</label>
                </Header>
              </Menu.Item>
            </Container>
          </Menu>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row style={{ marginTop: "3em" }}>
        <Grid.Column>
          <Container text>
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
        </Grid.Column>
      </Grid.Row>

      <Grid.Row>
        <Grid.Column>
          <Segment style={{ backgroundColor: "#071F39" }}>
            <Grid stackable columns={3}>
              <Grid.Column>
                <Dropdown
                  fluid
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
              </Grid.Column>
              <Grid.Column>
                <Input
                  fluid
                  action={{
                    style: {
                      backgroundColor: "#07192D",
                      color: "white",
                      fontWeight: "bold",
                    },
                    content: "IV Percentile",
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
              </Grid.Column>
              <Grid.Column>
                <Input
                  fluid
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
              </Grid.Column>
            </Grid>
          </Segment>
        </Grid.Column>
      </Grid.Row>

      <Grid.Row style={{ height: "calc(100vh - 150px)" }}>
        <Grid.Column>
          <Segment style={{ backgroundColor: "#071F39", marginTop: "-2em" }}>
            <Grid columns={2} stackable style={{ height: "100%" }}>
              <Grid.Column width={12} style={{ height: "100%" }}>
                <Segment
                  style={{
                    backgroundColor: "#07192D",
                    height: "100%",
                    color: "#FE9D01",
                  }}
                >
                  Chart
                </Segment>
              </Grid.Column>
              <Grid.Column width={4} style={{ height: "100%" }}>
                <Segment style={{ backgroundColor: "#07192D", height: "100%" }}>
                  <Table basic inverted selectable>
                    <Table.Header>
                      <Table.Row>
                        <Table.HeaderCell>Date</Table.HeaderCell>
                        <Table.HeaderCell>IV</Table.HeaderCell>
                        <Table.HeaderCell>Combined Premium</Table.HeaderCell>
                      </Table.Row>
                    </Table.Header>

                    <Table.Body>
                      <Table.Row>
                        <Table.Cell>20 Apr 24</Table.Cell>
                        <Table.Cell>100</Table.Cell>
                        <Table.Cell>10</Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>20 Apr 24</Table.Cell>
                        <Table.Cell>100</Table.Cell>
                        <Table.Cell>10</Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>20 Apr 24</Table.Cell>
                        <Table.Cell>100</Table.Cell>
                        <Table.Cell>10</Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  </Table>
                </Segment>
              </Grid.Column>
            </Grid>
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default HomePage;
