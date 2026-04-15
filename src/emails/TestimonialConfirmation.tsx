import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface TestimonialConfirmationProps {
  submitterName: string;
}

export const TestimonialConfirmation = ({
  submitterName,
}: TestimonialConfirmationProps) => (
  <Html>
    <Head />
    <Preview>Your testimonial submission has been received!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Testimonial Received</Heading>
        <Section style={section}>
          <Text style={text}>Hi {submitterName.split(" ")[0]},</Text>
          <Text style={text}>
            Thank you so much for leaving a testimonial on my portfolio. I truly 
            appreciate your kind words and the time we spent working together.
          </Text>
          <Text style={text}>
            I review all submissions manually to ensure formatting and privacy. 
            Once approved, it will be visible on the Testimonials page, and you&apos;ll 
            receive a short notification.
          </Text>
          <Text style={text}>
            Thanks again for your support!
          </Text>
          <Text style={text}>
            Best,<br />
            Rituraj
          </Text>
        </Section>
        <Hr style={hr} />
        <Text style={footer}>
          This is an automated confirmation of your testimonial submission.
        </Text>
      </Container>
    </Body>
  </Html>
);

export default TestimonialConfirmation;

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const section = {
  padding: "0 48px",
};

const h1 = {
  color: "#333",
  fontSize: "24px",
  fontWeight: "bold",
  textAlign: "center" as const,
  margin: "30px 0",
};

const text = {
  color: "#333",
  fontSize: "16px",
  lineHeight: "26px",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
  textAlign: "center" as const,
  marginTop: "24px",
};
