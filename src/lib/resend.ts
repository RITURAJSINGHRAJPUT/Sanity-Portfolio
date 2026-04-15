import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);

export const EMAIL_FROM = `Portfolio <noreply@${process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || "yourname.dev"}>`;
export const PORTFOLIO_EMAIL = process.env.PORTFOLIO_EMAIL || "hello@yourname.dev";
