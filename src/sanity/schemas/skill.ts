import { defineField, defineType } from "sanity";

export const skill = defineType({
  name: "skill",
  title: "Skill",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Tool / Skill Name",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          "Planning & Delivery",
          "Collaboration",
          "Analytics & Data",
          "Design Adjacency",
          "Dev Awareness",
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "logo",
      title: "Logo Icon",
      type: "image",
    }),
    defineField({
      name: "proficiencyLevel",
      title: "Proficiency Level",
      type: "string",
      options: {
        list: ["Familiar", "Working", "Proficient"],
      },
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "category",
      media: "logo",
    },
  },
});
