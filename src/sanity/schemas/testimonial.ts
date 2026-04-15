import { defineField, defineType } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "submitterName",
      title: "Full Name",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "role",
      title: "Role / Title",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "organisation",
      title: "Organisation",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "relationship",
      title: "Relationship",
      type: "string",
      options: {
        list: ["Professor", "Manager", "Peer", "Collaborator", "Other"],
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "linkedinUrl",
      title: "LinkedIn URL",
      type: "url",
    }),
    defineField({
      name: "submitterEmail",
      title: "Email (Private — never displayed)",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "quote",
      title: "Testimonial Text",
      type: "text",
      rows: 5,
      validation: (r) => r.required().min(30).max(600),
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "⏳ Pending", value: "pending" },
          { title: "✅ Approved", value: "approved" },
          { title: "❌ Rejected", value: "rejected" },
        ],
      },
      initialValue: "pending",
    }),
    defineField({
      name: "adminNotes",
      title: "Admin Notes (Private)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "submittedAt",
      title: "Submitted At",
      type: "datetime",
    }),
    defineField({
      name: "approvedAt",
      title: "Approved At",
      type: "datetime",
    }),
  ],
  preview: {
    select: {
      title: "submitterName",
      subtitle: "status",
    },
    prepare({ title, subtitle }) {
      const statusMap: Record<string, string> = {
        pending: "⏳ Pending",
        approved: "✅ Approved",
        rejected: "❌ Rejected",
      };
      return {
        title: title || "Unnamed",
        subtitle: statusMap[subtitle] || subtitle,
      };
    },
  },
});
