import { defineType, defineField } from "sanity";
import { Briefcase } from "lucide-react";

export const experience = defineType({
  name: "experience",
  title: "Experience & Education",
  type: "document",
  icon: Briefcase as any,
  fields: [
    defineField({
      name: "title",
      title: "Title / Degree",
      type: "string",
      description: "e.g. Product Manager, B.S. in Computer Science",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "organization",
      title: "Organization / University",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "type",
      title: "Experience Type",
      type: "string",
      options: {
        list: [
          { title: "Work", value: "work" },
          { title: "Internship", value: "internship" },
          { title: "Education", value: "education" },
        ],
        layout: "radio",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "startDate",
      title: "Start Date",
      type: "date",
      options: {
        dateFormat: "YYYY-MM",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "isCurrent",
      title: "Currently Here?",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "endDate",
      title: "End Date",
      type: "date",
      options: {
        dateFormat: "YYYY-MM",
      },
      hidden: ({ parent }) => parent?.isCurrent === true,
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      description: "e.g. Remote, San Francisco, CA",
    }),
    defineField({
      name: "description",
      title: "Description / Bullet Points",
      type: "text",
      description: "Details of your responsibilities, achievements, or GPA.",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "organization",
      type: "type",
    },
    prepare({ title, subtitle, type }) {
      const typeLabel = type ? `[${type.toUpperCase()}]` : "";
      return {
        title: title,
        subtitle: `${typeLabel} ${subtitle}`,
        icon: Briefcase as any,
      };
    },
  },
});
