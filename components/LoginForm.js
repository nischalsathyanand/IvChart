import React, { useState } from "react";
import { Grid, Form, Button, Input, Image } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import "../index.css";

const LoginForm = () => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOTP] = useState("");
  const [showOTPField, setShowOTPField] = useState(false); // State to toggle OTP field
  const navigate = useNavigate(); // Initialize navigate hook

  const handleGetOTP = () => {
    // Implement your logic to get OTP
    console.log("Requesting OTP for mobile number:", mobileNumber);
    // Simulating OTP verification in this example
    setShowOTPField(true); // Set to true to display OTP field
  };

  const handleSubmitOTP = () => {
    // Implement your logic to verify OTP
    console.log("Verifying OTP:", otp);
    // Navigate to home page on successful OTP verification
    navigate("/home");
  };

  return (
    <Grid
      textAlign="center"
      style={{ height: "100vh", backgroundColor: "#EBE8E3" }}
      verticalAlign="middle"
    >
      <Grid.Column style={{ maxWidth: 450 }}>
        <h2
          style={{
            marginBottom: "2rem",
            color: "#F39B13",
            textAlign: "left",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Image
            src="../images/fb.png"
            //alt="App Logo"
            style={{ marginRight: "0.5rem" }}
          />
          FirstBench
        </h2>
        <h3
          style={{ marginBottom: "2rem", color: "#424242", textAlign: "left" }}
        >
          Login
        </h3>
        <Form size="large">
          <Form.Field>
            <Input
              fluid
              icon="phone"
              iconPosition="left"
              placeholder="Mobile Number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              disabled={showOTPField} // Disable input field when OTP field is displayed
            />
          </Form.Field>
          {showOTPField ? (
            <>
              <Form.Field>
                <Input
                  fluid
                  icon="key"
                  iconPosition="left"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOTP(e.target.value)}
                />
              </Form.Field>
              <Button
                style={{
                  backgroundColor: "#FBA500",
                  color: "white",
                  marginTop: "1rem",
                }}
                fluid
                size="large"
                onClick={handleSubmitOTP}
              >
                Submit OTP
              </Button>
            </>
          ) : (
            <Button
              style={{
                backgroundColor: "#FBA500",
                color: "white",
                marginTop: "1rem",
              }}
              fluid
              size="large"
              onClick={handleGetOTP}
            >
              Get OTP
            </Button>
          )}
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default LoginForm;
