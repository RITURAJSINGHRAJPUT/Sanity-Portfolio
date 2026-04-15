import { defineField, defineType } from "sanity";

export const certification = defineType({
  name: "certification",
  title: "Certification",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Certification Name",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "issuer",
      title: "Issuing Body",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "logo",
      title: "Issuer Logo",
      type: "image",
    }),
    defineField({
      name: "dateEarned",
      title: "Date Earned",
      type: "date",
    }),
    defineField({
      name: "credentialId",
      title: "Credential ID",
      type: "string",
    }),
    defineField({
      name: "verifyUrl",
      title: "Verification URL",
      type: "url",
    }),
    defineField({
      name: "inProgress",
      title: "In Progress?",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "issuer",
      media: "logo",
    },
  },
});
