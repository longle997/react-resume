/**
 * SKILL ICONS MAPPING UTILITY
 * 
 * This file provides a centralized mapping system between skill names and their corresponding
 * SVG icon assets. It imports all available skill icons and exports a function that returns
 * the appropriate icon path based on a skill name string.
 * 
 * Purpose:
 * - Map skill names to their visual icon representations
 * - Support case-insensitive skill matching
 * - Provide consistent icon display across the portfolio
 * - Enable dynamic skill icon rendering based on data
 * 
 * Usage:
 * - Import skillsImage function in components that display skills
 * - Pass skill name as string to get corresponding icon path
 * - Use returned path in img src or icon components
 * 
 * Icon Categories:
 * - Programming Languages (JavaScript, Python, Java, etc.)
 * - Frontend Frameworks (React, Vue, Angular, etc.) 
 * - CSS Frameworks (Bootstrap, Tailwind, MaterialUI, etc.)
 * - Databases (MongoDB, MySQL, PostgreSQL, etc.)
 * - Cloud Services (AWS, Azure, GCP, etc.)
 * - Design Tools (Figma, Photoshop, Adobe XD, etc.)
 * - Development Tools (Git, Docker, Nginx, etc.)
 * 
 * @see data.ts for the list of skills used in the portfolio
 */

// Design and Adobe Creative Suite tools
import adobeXd from '../assets/svg/skills/adobe-xd.svg';
import adobeaudition from '../assets/svg/skills/adobeaudition.svg';
import afterEffects from '../assets/svg/skills/after-effects.svg';
// Frontend frameworks and libraries  
import angular from '../assets/svg/skills/angular.svg';
// Cloud services and platforms
import aws from '../assets/svg/skills/aws.svg';
import azure from '../assets/svg/skills/azure.svg';
// 3D and media tools
import blender from '../assets/svg/skills/blender.svg';
// CSS frameworks and styling
import bootstrap from '../assets/svg/skills/bootstrap.svg';
import bulma from '../assets/svg/skills/bulma.svg';
// Programming languages - C family
import c from '../assets/svg/skills/c.svg';
// Design and creativity tools
import canva from '../assets/svg/skills/canva.svg';
// Mobile development frameworks
import capacitorjs from '../assets/svg/skills/capacitorjs.svg';
// Alternative programming languages
import coffeescript from '../assets/svg/skills/coffeescript.svg';
// Programming languages - C variants
import cplusplus from '../assets/svg/skills/cplusplus.svg';
import csharp from '../assets/svg/skills/csharp.svg';
// Core web technologies
import css from '../assets/svg/skills/css.svg';
// Mobile and systems programming
import dart from '../assets/svg/skills/dart.svg';
// JavaScript runtimes and frameworks
import deno from '../assets/svg/skills/deno.svg';
import django from '../assets/svg/skills/django.svg';
// DevOps and containerization
import docker from '../assets/svg/skills/docker.svg';
// Backend frameworks
import fastify from '../assets/svg/skills/fastify.svg';
// Design and prototyping tools
import figma from '../assets/svg/skills/figma.svg';
// Backend-as-a-Service platforms
import firebase from '../assets/svg/skills/firebase.svg';
// Mobile development frameworks
import flutter from '../assets/svg/skills/flutter.svg';
// Cloud platforms
import gcp from '../assets/svg/skills/gcp.svg';
// Image editing and design
import gimp from '../assets/svg/skills/gimp.svg';
// Version control systems
import git from '../assets/svg/skills/git.svg';
// Programming languages - Systems
import go from '../assets/svg/skills/go.svg';
// API and data technologies
import graphql from '../assets/svg/skills/graphql.svg';
// Alternative programming languages
import haxe from '../assets/svg/skills/haxe.svg';
// Core web technologies
import html from '../assets/svg/skills/html.svg';
// Design and creative tools
import illustrator from '../assets/svg/skills/illustrator.svg';
// Mobile development frameworks
import ionic from '../assets/svg/skills/ionic.svg';
// Programming languages - Enterprise
import java from '../assets/svg/skills/java.svg';
// Core web programming language
import javascript from '../assets/svg/skills/javascript.svg';
// Scientific computing languages
import julia from '../assets/svg/skills/julia.svg';
// Mobile development languages
import kotlin from '../assets/svg/skills/kotlin.svg';
// Photography and image editing
import lightroom from '../assets/svg/skills/lightroom.svg';
// Documentation and markup
import markdown from '../assets/svg/skills/markdown.svg';
// React component libraries
import materialui from '../assets/svg/skills/materialui.svg';
// Scientific computing platforms
import matlab from '../assets/svg/skills/matlab.svg';
// Database technologies
import memsql from '../assets/svg/skills/memsql.svg';
// Productivity software
import microsoftoffice from '../assets/svg/skills/microsoftoffice.svg';
// NoSQL databases
import mongoDB from '../assets/svg/skills/mongoDB.svg';
// Relational databases
import mysql from '../assets/svg/skills/mysql.svg';
// React frameworks
import nextJS from '../assets/svg/skills/nextJS.svg';
// Web servers and infrastructure
import nginx from '../assets/svg/skills/nginx.svg';
// Scientific computing libraries
import numpy from '../assets/svg/skills/numpy.svg';
// Vue.js frameworks
import nuxtJS from '../assets/svg/skills/nuxtJS.svg';
// Computer vision libraries
import opencv from '../assets/svg/skills/opencv.svg';
// Image editing software
import photoshop from '../assets/svg/skills/photoshop.svg';
// Server-side programming languages
import php from '../assets/svg/skills/php.svg';
// Design and editing tools
import picsart from '../assets/svg/skills/picsart.svg';
// Advanced relational databases
import postgresql from '../assets/svg/skills/postgresql.svg';
// Video editing software
import premierepro from '../assets/svg/skills/premierepro.svg';
// Programming languages - General purpose
import python from '../assets/svg/skills/python.svg';
// Machine learning frameworks
import pytorch from '../assets/svg/skills/pytorch.svg';
// Frontend library
import react from '../assets/svg/skills/react.svg';
// Programming languages - Dynamic
import ruby from '../assets/svg/skills/ruby.svg';
// Testing and automation tools
import selenium from '../assets/svg/skills/selenium.svg';
// Design and prototyping tools
import sketch from '../assets/svg/skills/sketch.svg';
// Content management systems
import strapi from '../assets/svg/skills/strapi.svg';
// Frontend frameworks
import svelte from '../assets/svg/skills/svelte.svg';
// Mobile development languages
import swift from '../assets/svg/skills/swift.svg';
// CSS frameworks
import tailwind from '../assets/svg/skills/tailwind.svg';
// Machine learning frameworks
import tensorflow from '../assets/svg/skills/tensorflow.svg';
// Programming languages - Typed JavaScript
import typescript from '../assets/svg/skills/typescript.svg';
// Game development engines
import unity from '../assets/svg/skills/unity.svg';
// Build tools and development
import vitejs from '../assets/svg/skills/vitejs.svg';
// Frontend frameworks
import vue from '../assets/svg/skills/vue.svg';
// Vue.js component libraries
import vuetifyjs from '../assets/svg/skills/vuetifyjs.svg';
// Development frameworks
import webix from '../assets/svg/skills/webix.svg';
// Computational platforms
import wolframalpha from '../assets/svg/skills/wolframalpha.svg';
// Content management systems
import wordpress from '../assets/svg/skills/wordpress.svg';
import fastapi from '../assets/svg/skills/FastAPI.svg';


/**
 * SKILL TO ICON MAPPING FUNCTION
 * 
 * This function maps skill names to their corresponding SVG icon paths.
 * It performs case-insensitive matching and returns the appropriate icon
 * for display in the skills section of the portfolio.
 * 
 * @param skill - The skill name as a string (case-insensitive)
 * @returns The imported SVG icon path or undefined if skill not found
 * 
 * Usage Example:
 * const iconPath = skillsImage("React");
 * <img src={iconPath} alt="React" />
 * 
 * Supported Categories:
 * - Core Web Technologies: HTML, CSS, JavaScript, TypeScript
 * - Frontend Frameworks: React, Vue, Angular, Svelte
 * - CSS Frameworks: Bootstrap, Tailwind, MaterialUI, Bulma  
 * - Programming Languages: Python, Java, Go, PHP, C++, etc.
 * - Databases: MongoDB, MySQL, PostgreSQL, MemSQL
 * - Cloud Platforms: AWS, Azure, GCP, Firebase
 * - Development Tools: Git, Docker, Nginx, Figma
 * - Design Software: Photoshop, Illustrator, Adobe XD
 * - And many more...
 */
export const skillsImage = (skill: string): string | undefined => {
    // Convert skill name to lowercase for case-insensitive matching
    const skillID = skill.toLowerCase();

    // Switch statement mapping skill names to their icon imports
    switch (skillID) {
        // Cloud Platforms
        case 'gcp': // Google Cloud Platform
            return gcp;
        case 'aws': // Amazon Web Services
            return aws;
        case 'azure': // Microsoft Azure
            return azure;
        case 'firebase': // Google Firebase
            return firebase;

        // Core Web Technologies
        case 'html': // HyperText Markup Language
            return html;
        case 'css': // Cascading Style Sheets
            return css;
        case 'javascript': // JavaScript programming language
            return javascript;
        case 'typescript': // TypeScript - typed JavaScript
            return typescript;

        // Frontend Frameworks and Libraries
        case 'react': // React library
            return react;
        case 'angular': // Angular framework
            return angular;
        case 'vue': // Vue.js framework
            return vue;
        case 'svelte': // Svelte framework
            return svelte;
        case 'next js': // Next.js React framework
            return nextJS;
        case 'nuxt js': // Nuxt.js Vue framework
            return nuxtJS;

        // CSS Frameworks and Styling
        case 'bootstrap': // Bootstrap CSS framework
            return bootstrap;
        case 'tailwind': // Tailwind CSS utility framework
            return tailwind;
        case 'bulma': // Bulma CSS framework
            return bulma;
        case 'materialui': // Material-UI React components
            return materialui;
        case 'vuetifyjs': // Vuetify Vue.js components
            return vuetifyjs;

        // Database Technologies
        case 'mongodb': // MongoDB NoSQL database
            return mongoDB;
        case 'mysql': // MySQL relational database
            return mysql;
        case 'postgresql': // PostgreSQL advanced database
            return postgresql;
        case 'memsql': // MemSQL in-memory database
            return memsql;

        // Programming Languages - Systems
        case 'c': // C programming language
            return c;
        case 'c++': // C++ programming language
            return cplusplus;
        case 'c#': // C# programming language
            return csharp;
        case 'go': // Go programming language
            return go;
        case 'java': // Java programming language
            return java;
        case 'python': // Python programming language
            return python;
        case 'ruby': // Ruby programming language
            return ruby;
        case 'php': // PHP server-side language
            return php;

        // Mobile Development
        case 'dart': // Dart programming language
            return dart;
        case 'kotlin': // Kotlin programming language
            return kotlin;
        case 'swift': // Swift programming language
            return swift;
        case 'flutter': // Flutter mobile framework
            return flutter;
        case 'ionic': // Ionic mobile framework
            return ionic;
        case 'capacitorjs': // Capacitor hybrid apps
            return capacitorjs;

        // Development Tools and Version Control
        case 'git': // Git version control
            return git;
        case 'docker': // Docker containerization
            return docker;
        case 'nginx': // Nginx web server
            return nginx;
        case 'vitejs': // Vite build tool
            return vitejs;

        // Design and Creative Tools
        case 'figma': // Figma design tool
            return figma;
        case 'photoshop': // Adobe Photoshop
            return photoshop;
        case 'illustrator': // Adobe Illustrator
            return illustrator;
        case 'adobe xd': // Adobe XD design tool
            return adobeXd;
        case 'after effects': // Adobe After Effects
            return afterEffects;
        case 'adobe audition': // Adobe Audition audio editing
            return adobeaudition;
        case 'premiere pro': // Adobe Premiere Pro video editing
            return premierepro;
        case 'lightroom': // Adobe Lightroom photo editing
            return lightroom;
        case 'canva': // Canva design tool
            return canva;
        case 'sketch': // Sketch design tool
            return sketch;
        case 'picsart': // PicsArt editing tool
            return picsart;
        case 'gimp': // GIMP image editor
            return gimp;
        case 'blender': // Blender 3D software
            return blender;

        // Backend Frameworks and APIs
        case 'django': // Django Python framework
            return django;
        case 'fastify': // Fastify Node.js framework
            return fastify;
        case 'graphql': // GraphQL query language
            return graphql;
        case 'strapi': // Strapi headless CMS
            return strapi;

        // Content Management and Platforms
        case 'wordpress': // WordPress CMS
            return wordpress;
        case 'webix': // Webix JavaScript framework
            return webix;
        case 'unity': // Unity game engine
            return unity;

        // Scientific and Mathematical Computing
        case 'julia': // Julia programming language
            return julia;
        case 'matlab': // MATLAB computing platform
            return matlab;
        case 'numpy': // NumPy Python library
            return numpy;
        case 'opencv': // OpenCV computer vision
            return opencv;
        case 'pytorch': // PyTorch machine learning
            return pytorch;
        case 'tensorflow': // TensorFlow machine learning
            return tensorflow;
        case 'selenium': // Selenium testing framework
            return selenium;
        case 'wolframalpha': // Wolfram Alpha computational engine
            return wolframalpha;

        // Alternative Languages and Runtimes
        case 'coffeescript': // CoffeeScript language
            return coffeescript;
        case 'haxe': // Haxe programming language
            return haxe;
        case 'deno': // Deno JavaScript runtime
            return deno;

        // Documentation and Productivity
        case 'markdown': // Markdown markup language
            return markdown;
        case 'microsoft office': // Microsoft Office suite
            return microsoftoffice;
        case 'fastapi': // FastAPI web framework
            return fastapi;

        // Default case - return undefined for unmatched skills
        default:
            // Return undefined for skills without corresponding icons
            // This allows components to handle missing icons gracefully
            return undefined;
    }
}
