import { siteSettings } from "./siteSettings";
import { project } from "./project";
import { skill } from "./skill";
import { certification } from "./certification";
import { achievement } from "./achievement";
import { artifact } from "./artifact";
import { blogPost, blogCategory } from "./blogPost";
import { testimonial } from "./testimonial";
import { resume } from "./resume";
import { experience } from "./experience";

export const schemaTypes = [
  siteSettings,
  project,
  skill,
  certification,
  achievement,
  artifact,
  experience,
  blogPost,
  blogCategory,
  testimonial,
  resume,
];
