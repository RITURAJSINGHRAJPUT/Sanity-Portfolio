import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Project Title",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
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
      name: "tldr",
      title: "TL;DR",
      type: "text",
      rows: 2,
      description: "1–2 sentence project summary shown in the card header",
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
        list: [
          { title: "Agile", value: "agile" },
          { title: "Waterfall", value: "waterfall" },
          { title: "B2B SaaS", value: "b2b-saas" },
          { title: "API/Platform", value: "api-platform" },
          { title: "Growth", value: "growth" },
          { title: "Research", value: "research" },
          { title: "Data", value: "data" },
        ],
      },
    }),
    defineField({
      name: "methodology",
      title: "Methodology",
      type: "string",
      options: {
        list: ["Agile", "Waterfall", "Hybrid", "Discovery-only"],
      },
    }),
    defineField({
      name: "industry",
      title: "Industry",
      type: "string",
      options: {
        list: [
          "B2B SaaS",
          "Consumer Tech",
          "Logistics",
          "FinTech",
          "HealthTech",
          "EdTech",
          "Developer Tools",
        ],
      },
    }),
    defineField({
      name: "duration",
      title: "Duration",
      type: "string",
      description: 'e.g. "8 weeks"',
    }),
    defineField({
      name: "techStack",
      title: "Tech Stack",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "body",
      title: "Full Case Study Body",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Alt Text",
              type: "string",
              validation: (r) => r.required(),
            }),
            defineField({
              name: "caption",
              title: "Caption",
              type: "string",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "phases",
      title: "Project Phases",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "phaseName", type: "string", title: "Phase Name" }),
            defineField({ name: "dateRange", type: "string", title: "Date Range" }),
            defineField({ name: "narrative", type: "text", title: "Phase Narrative", rows: 4 }),
            defineField({
              name: "artifacts",
              type: "array",
              of: [{ type: "string" }],
              title: "Artifacts",
            }),
            defineField({ name: "phaseOutcome", type: "string", title: "Phase Outcome" }),
          ],
          preview: {
            select: { title: "phaseName", subtitle: "dateRange" },
          },
        },
      ],
    }),
    defineField({
      name: "outcomeMetrics",
      title: "Outcome Metrics",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "val", type: "string", title: "Value (e.g. 38%)" }),
            defineField({ name: "label", type: "string", title: "Label (e.g. faster activation)" }),
          ],
          preview: {
            select: { title: "val", subtitle: "label" },
          },
        },
      ],
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: { list: ["draft", "published"] },
      initialValue: "draft",
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "coverImage",
      subtitle: "methodology",
    },
  },
});
