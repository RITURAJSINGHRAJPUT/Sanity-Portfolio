import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Full Name",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: 'e.g. "PM Intern · Product · SaaS · Agile"',
    }),
    defineField({
      name: "bio",
      title: "Short Bio",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "headshot",
      title: "Headshot",
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
    }),
    defineField({
      name: "roles",
      title: "Typewriter Roles",
      type: "array",
      of: [{ type: "string" }],
      description: "Roles that cycle in the hero typewriter animation",
    }),
    defineField({
      name: "socialLinks",
      title: "Social Links",
      type: "object",
      fields: [
        defineField({ name: "linkedin", type: "url", title: "LinkedIn" }),
        defineField({ name: "github", type: "url", title: "GitHub" }),
        defineField({ name: "calcom", type: "url", title: "Cal.com Link" }),
        defineField({ name: "email", type: "string", title: "Email" }),
      ],
    }),
  ],
  preview: {
    select: { title: "name" },
  },
});
