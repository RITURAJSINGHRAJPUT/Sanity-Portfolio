import { defineField, defineType } from "sanity";

export const artifact = defineType({
  name: "artifact",
  title: "PM Artifact",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Artifact Title",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "image",
      title: "Artifact Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
          validation: (r) => r.required(),
        }),
      ],
      validation: (r) => r.required(),
    }),
    defineField({
      name: "caption",
      title: "Caption",
      type: "text",
      rows: 2,
      description: "Describe the context and your contribution",
    }),
    defineField({
      name: "downloadUrl",
      title: "Download URL (PDF)",
      type: "file",
    }),
    defineField({
      name: "relatedProject",
      title: "Related Project",
      type: "reference",
      to: [{ type: "project" }],
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
});
