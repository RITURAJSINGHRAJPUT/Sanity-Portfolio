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

interface ContactNotificationProps {
  fullName: string;
  email: string;
  subject: string;
  message: string;
  source?: string;
}

export const ContactNotification = ({
  fullName,
  email,
  subject,
  message,
  source,
}: ContactNotificationProps) => (
  <Html>
    <Head />
    <Preview>New Message from {fullName}: {subject}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New Contact Form Submission</Heading>
        <Section style={section}>
          <Text style={text}>
            <strong>From:</strong> {fullName} ({email})
          </Text>
          <Text style={text}>
            <strong>Subject:</strong> {subject}
          </Text>
          <Text style={text}>
            <strong>Source:</strong> {source || "Not specified"}
          </Text>
          <Hr style={hr} />
          <Text style={messageText}>{message}</Text>
        </Section>
        <Hr style={hr} />
        <Text style={footer}>
          This message was sent from your PM Portfolio contact form.
        </Text>
      </Container>
    </Body>
  </Html>
);

export default ContactNotification;

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

const messageText = {
  color: "#333",
  fontSize: "16px",
  lineHeight: "26px",
  whiteSpace: "pre-wrap" as const,
  padding: "16px",
  backgroundColor: "#f9f9f9",
  borderRadius: "4px",
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
