import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface ContactAutoReplyProps {
  fullName: string;
}

export const ContactAutoReply = ({ fullName }: ContactAutoReplyProps) => (
  <Html>
    <Head />
    <Preview>Got your message!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Thanks for reaching out!</Heading>
        <Section style={section}>
          <Text style={text}>Hi {fullName.split(" ")[0]},</Text>
          <Text style={text}>
            I&apos;ve received your message through my portfolio contact form. 
            I appreciate you taking the time to connect!
          </Text>
          <Text style={text}>
            I typically respond within 24-48 hours. In the meantime, feel free to 
            explore my latest project case studies or follow me on LinkedIn.
          </Text>
          <Section style={btnContainer}>
            <Link
              style={button}
              href={`${process.env.NEXT_PUBLIC_SITE_URL}/projects`}
            >
              View My Projects
            </Link>
          </Section>
          <Text style={text}>
            Best regards,<br />
            Rituraj
          </Text>
        </Section>
        <Hr style={hr} />
        <Text style={footer}>
          This is an automated reply to confirm receipt of your message.
        </Text>
      </Container>
    </Body>
  </Html>
);

export default ContactAutoReply;

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

const btnContainer = {
  textAlign: "center" as const,
  margin: "32px 0",
};

const button = {
  backgroundColor: "#0F172A", // Navy color from PRD
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
