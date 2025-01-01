#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Helper function: Convert to kebab-case
const toKebabCase = (str) =>
  str
    .replace(/([a-z])([A-Z])/g, "$1-$2") // Handle camelCase
    .replace(/[\s_]+/g, "-") // Replace spaces and underscores
    .toLowerCase();

// Helper function: Convert to Title Case
const toTitleCase = (str) =>
  str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const isKebabCase = (str) => /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(str);


// Get the current directory (__dirname equivalent in ESM)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get the name argument from the command line
const nameArg = process.argv[2];

if (!nameArg) {
    console.error("Error: Please provide a name as an argument.");
    console.error("Usage: node createBlogPost.js <kebab-case-name>");
    process.exit(1);
  }
  
  if (!isKebabCase(nameArg)) {
    console.error("Error: The name must be in kebab-case (e.g., 'boost-your-conversion-rate').");
    process.exit(1);
  }

// Convert the name to kebab-case and Title Case
const fileName = toKebabCase(nameArg);
const title = toTitleCase(nameArg.replace(/-/g, " ")); // Replace dashes with spaces for title case

// Paths
const contentDir = path.join(__dirname, "content");
const blogFilePath = path.join(contentDir, `${fileName}.md`);
const imagesDir = path.join(__dirname, "public/images/blog", fileName);

// Create the content directory if it doesn't exist
if (!fs.existsSync(contentDir)) {
  fs.mkdirSync(contentDir, { recursive: true });
}

// Create the Markdown file with frontmatter
const frontmatter = `---
title: ${title}
---

`;

if (fs.existsSync(blogFilePath)) {
  console.error(`Error: File already exists: ${blogFilePath}`);
  process.exit(1);
}

fs.writeFileSync(blogFilePath, frontmatter, "utf8");
console.log(`Created Markdown file: ${blogFilePath}`);

// Create the images directory
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
  console.log(`Created images directory: ${imagesDir}`);
} else {
  console.log(`Images directory already exists: ${imagesDir}`);
}
