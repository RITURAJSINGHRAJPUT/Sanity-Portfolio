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

interface TestimonialPublishedProps {
  submitterName: string;
}

export const TestimonialPublished = ({
  submitterName,
}: TestimonialPublishedProps) => (
  <Html>
    <Head />
    <Preview>Your testimonial is now live!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Testimonial Published</Heading>
        <Section style={section}>
          <Text style={text}>Hi {submitterName.split(" ")[0]},</Text>
          <Text style={text}>
            Good news! I&apos;ve reviewed and published your testimonial on my 
            portfolio website.
          </Text>
          <Text style={text}>
            You can now see it live on the testimonials page. Thank you again 
            for your support — it means a lot as I build my career in product 
            management.
          </Text>
          <Section style={btnContainer}>
            <Button
              style={button}
              href={`${process.env.NEXT_PUBLIC_SITE_URL}/testimonials`}
            >
              View It On My Site
            </Button>
          </Section>
          <Text style={text}>
            Best regards,<br />
            Rituraj
          </Text>
        </Section>
        <Hr style={hr} />
        <Text style={footer}>
          Thank you for being part of my journey.
        </Text>
      </Container>
    </Body>
  </Html>
);

export default TestimonialPublished;

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
