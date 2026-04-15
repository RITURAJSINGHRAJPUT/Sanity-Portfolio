import { groq } from "next-sanity";

// ── Site Settings ──
export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    name,
    tagline,
    bio,
    headshot,
    roles,
    socialLinks,
    "projectCount": count(*[_type == "project" && status == "published"]),
    "certCount": count(*[_type == "certification"]),
    "blogCount": count(*[_type == "blogPost" && status == "published"]),
    "testimonialCount": count(*[_type == "testimonial" && status == "approved"])
  }
`;

// ── Projects ──
export const allProjectsQuery = groq`
  *[_type == "project"] | order(order asc) {
    _id,
    title,
    slug,
    coverImage,
    tldr,
    tags,
    methodology,
    industry,
    duration,
    techStack,
    phases[] {
      phaseName,
      dateRange,
      narrative,
      artifacts,
      phaseOutcome
    },
    outcomeMetrics[] {
      val,
      label
    }
  }
`;

export const projectBySlugQuery = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    coverImage,
    tldr,
    tags,
    methodology,
    industry,
    duration,
    techStack,
    body,
    "realArtifacts": *[_type == "artifact" && relatedProject._ref == ^._id] {
      title,
      "fileUrl": downloadUrl.asset->url
    },
    phases[] {
      phaseName,
      dateRange,
      narrative,
      artifacts,
      phaseOutcome
    },
    outcomeMetrics[] {
      val,
      label
    },
    "relatedProjects": *[_type == "project" && status == "published" && slug.current != $slug && count(tags[@ in ^.^.tags]) > 0][0..1] {
      _id, title, slug, coverImage, tldr, tags, methodology
    }
  }
`;

// ── Blog Posts ──
export const allBlogPostsQuery = groq`
  *[_type == "blogPost" && status == "published"] | order(featured desc, publishedAt desc) {
    _id,
    title,
    slug,
    coverImage,
    excerpt,
    category->{name, slug},
    tags,
    publishedAt,
    estimatedReadTime,
    featured
  }
`;

export const blogPostBySlugQuery = groq`
  *[_type == "blogPost" && slug.current == $slug && status == "published"][0] {
    _id,
    title,
    slug,
    coverImage,
    body,
    category->{name, slug},
    tags,
    publishedAt,
    estimatedReadTime,
    featured,
    seoTitle,
    seoDescription,
    ogImage,
    "headings": body[style in ["h2", "h3"]]{
      "text": children[0].text,
      "style": style,
      "key": _key
    },
    "relatedPosts": *[_type == "blogPost" && status == "published" && slug.current != $slug && category._ref == ^.category._ref][0..2] {
      _id, title, slug, coverImage, excerpt, publishedAt, estimatedReadTime, category->{name}
    }
  }
`;

export const blogCategoriesQuery = groq`
  *[_type == "blogCategory"] | order(name asc) {
    _id, name, slug
  }
`;

// ── Testimonials ──
export const approvedTestimonialsQuery = groq`
  *[_type == "testimonial" && status == "approved"] | order(approvedAt desc) {
    _id,
    submitterName,
    role,
    organisation,
    relationship,
    linkedinUrl,
    quote,
    approvedAt
  }
`;

// ── Skills ──
export const allSkillsQuery = groq`
  *[_type == "skill"] | order(category asc, name asc) {
    _id,
    name,
    category,
    logo,
    proficiencyLevel
  }
`;

// ── Certifications ──
export const allCertificationsQuery = groq`
  *[_type == "certification"] | order(dateEarned desc) {
    _id,
    name,
    issuer,
    logo,
    dateEarned,
    credentialId,
    verifyUrl,
    inProgress
  }
`;

// ── Artifacts ──
export const allArtifactsQuery = groq`
  *[_type == "artifact"] | order(_createdAt desc) {
    _id,
    title,
    image,
    caption,
    downloadUrl,
    relatedProject->{title, slug}
  }
`;

// ── Resume ──
export const resumeQuery = groq`
  *[_type == "resume"][0] {
    "fileUrl": file.asset->url,
    lastUpdated
  }
`;
