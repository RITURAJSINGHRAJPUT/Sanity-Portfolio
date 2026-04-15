import { defineField, defineType } from "sanity";

export const resume = defineType({
  name: "resume",
  title: "Resume",
  type: "document",
  fields: [
    defineField({
      name: "file",
      title: "Resume PDF",
      type: "file",
      options: { accept: ".pdf" },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "lastUpdated",
      title: "Last Updated",
      type: "date",
    }),
  ],
});
