/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  features: string[];
  githubUrl: string;
  liveUrl: string;
  imageUrl: string;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: number; icon?: string }[];
}

export interface Education {
  institution: string;
  degree: string;
  duration: string;
  score: string;
  achievements?: string[];
}

export interface Internship {
  company: string;
  role: string;
  duration: string;
  description: string;
  highlights: string[];
}

export interface Activity {
  role: string;
  organization: string;
  description?: string;
}
