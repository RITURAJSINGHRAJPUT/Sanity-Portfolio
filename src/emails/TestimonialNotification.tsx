import {
  Body,
  Button,
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

interface TestimonialNotificationProps {
  submitterName: string;
  role: string;
  organisation: string;
  relationship: string;
  quote: string;
}

export const TestimonialNotification = ({
  submitterName,
  role,
  organisation,
  relationship,
  quote,
}: TestimonialNotificationProps) => (
  <Html>
    <Head />
    <Preview>New Testimonial for Review: {submitterName}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New Testimonial Submission</Heading>
        <Section style={section}>
          <Text style={text}>
            <strong>From:</strong> {submitterName}
          </Text>
          <Text style={text}>
            <strong>Role:</strong> {role} at {organisation}
          </Text>
          <Text style={text}>
            <strong>Relationship:</strong> {relationship}
          </Text>
          <Hr style={hr} />
          <Section style={quoteSection}>
            <Text style={quoteText}>&ldquo;{quote}&rdquo;</Text>
          </Section>
          <Hr style={hr} />
          <Section style={btnContainer}>
            <Button
              style={button}
              href={`${process.env.NEXT_PUBLIC_SITE_URL}/studio/structure/testimonial`}
            >
              Review & Approve
            </Button>
          </Section>
        </Section>
        <Hr style={hr} />
        <Text style={footer}>
          This submission is currently pending in your Sanity CMS.
        </Text>
      </Container>
    </Body>
  </Html>
);

export default TestimonialNotification;

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

const quoteSection = {
  backgroundColor: "#f9f9f9",
  borderRadius: "4px",
  padding: "24px",
  fontStyle: "italic",
};

const quoteText = {
  color: "#333",
  fontSize: "16px",
  lineHeight: "26px",
  margin: 0,
};

const btnContainer = {
  textAlign: "center" as const,
  margin: "32px 0",
};

const button = {
  backgroundColor: "#3B82F6", // Blue accent color from PRD
  borderRadius: "6px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "inline-block",
  padding: "12px 24px",
  fontWeight: "bold",
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
