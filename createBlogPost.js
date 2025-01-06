#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const toKebabCase = (str) =>
  str
    .replace(/([a-z])([A-Z])/g, "$1-$2") // Handle camelCase
    .replace(/[\s_]+/g, "-") // Replace spaces and underscores
    .toLowerCase();

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

const fileName = toKebabCase(nameArg);
const title = toTitleCase(nameArg.replace(/-/g, " ")); // Replace dashes with spaces for title case

const contentDir = path.join(__dirname, "content");
const blogFilePath = path.join(contentDir, `blog/${fileName}.md`);
const imagesDir = path.join(__dirname, "public/images/blog", fileName);

// Create the content directory if it doesn't exist
if (!fs.existsSync(contentDir)) {
  fs.mkdirSync(contentDir, { recursive: true });
}

const frontmatter = `---
title: ${title}
mainImage: 
description: >
  exerpt or summary
date: "Mar 16, 2020"
datetime: "2020-03-16"
category:
  title: "Marketing"
  href: "#"
author:
  name: "Tony Green"
  role: "Co-Founder / CTO"
  href: "#"
  imageUrl: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
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
