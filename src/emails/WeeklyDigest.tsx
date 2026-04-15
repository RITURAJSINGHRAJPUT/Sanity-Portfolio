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

interface WeeklyDigestProps {
  pageViews: number;
  contactSubmissions: number;
  testimonialSubmissions: number;
  topPost?: string;
}

export const WeeklyDigest = ({
  pageViews,
  contactSubmissions,
  testimonialSubmissions,
  topPost,
}: WeeklyDigestProps) => (
  <Html>
    <Head />
    <Preview>Your Portfolio Performance This Week</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Weekly Portfolio Digest</Heading>
        <Section style={section}>
          <Text style={text}>Hi Rituraj,</Text>
          <Text style={text}>
            Here&apos;s a quick overview of how your portfolio performed this past week:
          </Text>

          <Section style={statsGrid}>
            <Section style={statCard}>
              <Text style={statValue}>{pageViews}</Text>
              <Text style={statLabel}>Page Views</Text>
            </Section>
            <Section style={statCard}>
              <Text style={statValue}>{contactSubmissions}</Text>
              <Text style={statLabel}>Messages</Text>
            </Section>
            <Section style={statCard}>
              <Text style={statValue}>{testimonialSubmissions}</Text>
              <Text style={statLabel}>Testimonials</Text>
            </Section>
          </Section>

          {topPost && (
            <Section style={section}>
              <Text style={text}>
                <strong>Top Performing Post:</strong> {topPost}
              </Text>
            </Section>
          )}

          <Hr style={hr} />
          
          <Text style={text}>
            Keep up the great work on your PM journey!
          </Text>
        </Section>
        <Hr style={hr} />
        <Text style={footer}>
          This is an automated weekly summary of your portfolio activity.
        </Text>
      </Container>
    </Body>
  </Html>
);

export default WeeklyDigest;

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

const statsGrid = {
  display: "flex",
  justifyContent: "space-between",
  margin: "32px 0",
  gap: "10px",
};

const statCard = {
  backgroundColor: "#f9f9f9",
  borderRadius: "8px",
  padding: "16px",
  textAlign: "center" as const,
  flex: 1,
  minWidth: "100px",
};

const statValue = {
  fontSize: "28px",
  fontWeight: "bold",
  color: "#0F172A",
  margin: "0",
};

const statLabel = {
  fontSize: "12px",
  color: "#64748B",
  margin: "4px 0 0",
  textTransform: "uppercase" as const,
  letterSpacing: "0.05em",
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
