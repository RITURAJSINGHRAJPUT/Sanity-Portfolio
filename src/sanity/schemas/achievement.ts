import { defineField, defineType } from "sanity";

export const achievement = defineType({
  name: "achievement",
  title: "Achievement",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Achievement Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "organization",
      title: "Issuing Organization",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "date",
      title: "Date of Achievement",
      type: "date",
      options: {
        dateFormat: "MMMM YYYY",
      },
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Academic", value: "academic" },
          { title: "Professional", value: "professional" },
          { title: "Leadership", value: "leadership" },
          { title: "Competition/Hackathon", value: "competition" },
          { title: "Community", value: "community" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "Brief summary of the achievement and your role/impact.",
    }),
    defineField({
      name: "image",
      title: "Award/Achievement Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "link",
      title: "Reference Link",
      type: "url",
      description: "External link to proof, news, or details.",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "organization",
      media: "image",
    },
  },
});
