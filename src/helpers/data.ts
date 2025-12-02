/**
 * DATA HELPERS AND CONSTANTS
 * 
 * This file contains all the static data, constants, and configurations used throughout
 * the portfolio application. It serves as the single source of truth for content data,
 * including social media links, project information, work experience, and skills data.
 * 
 * Data Categories:
 * - Social media and platform URLs
 * - Work experience with internationalized content
 * - Project portfolio with images and descriptions
 * - Skills and technologies list
 * 
 * Features:
 * - TypeScript interfaces for type safety
 * - Internationalization support (Vietnamese/English)
 * - Centralized data management for easy maintenance
 * - Structured project and experience data
 * 
 * Usage:
 * - Import specific data objects in components as needed
 * - Use with i18n system for multilingual content
 * - Reference for skill icons and project images
 * 
 * @see skill.image.ts for skill icon mappings
 */

// Import project images for the portfolio showcase
import DjangoReactEcommerce from '../assets/project/django_react_ecommerce.png';
import Django from '../assets/project/django.jpg';
import FastAPI from '../assets/project/fastapi.png';

// TypeScript interface for social media and platform URLs
interface AppData {
    LINKEDLN_URL: string; // LinkedIn profile URL
}

// Social media and platform links configuration
export const APP_DATA: AppData = {
    // YouTube channel for programming tutorials
    LINKEDLN_URL: "https://www.linkedin.com/in/long-le-9b23831b3/"
}

// TypeScript interface for internationalized text content
interface LocalizedText {
    vi: string; // Vietnamese text
    en: string; // English text
}

// TypeScript interface for work experience entries
interface Experience {
    id: number; // Unique identifier for each experience
    title: LocalizedText; // Job title in multiple languages
    company: LocalizedText; // Company name in multiple languages
    duration: LocalizedText; // Employment period in multiple languages
    description: LocalizedText; // Job description in multiple languages
    responsibilities: LocalizedText[]; // Job responsibilities in multiple languages
    technologies: string[]; // Technologies used in the job
}

// Work experience data with internationalization support
export const EXPERIENCES: Experience[] = [
    {
        // Current full-stack developer position
        id: 1,
        title: {
            vi: "Lập Trình Viên", // Vietnamese job title
            en: "Fullstack Developer" // English job title
        },
        company: {
            vi: "Công ty Axon Active Ltd.", // Vietnamese company name
            en: "Axon Active Ltd." // English company name
        },
        duration: {
            vi: "Tháng 7/2025 - Hiện tại", // Vietnamese duration
            en: "July 2025 - Present" // English duration
        },
        description: {
            vi: "Mục tiêu của dự án là bảo tồn các tính năng hiện có trong khi phát triển các chức năng mới theo yêu cầu của khách hàng. Ứng dụng web được cấu trúc thành nhiều dịch vụ, mỗi dịch vụ có trách nhiệm riêng biệt. Các công nghệ nổi bật được sử dụng trong dự án này bao gồm Python, AWS, SqlAlchemy, Redis, SQL và connection pooling, cùng nhiều công nghệ khác.", // Vietnamese description
            en: "The objective of this project is to preserve existing features while developing new functionalities in accordance with client requirements. The web application is structured into multiple services, each with its own dedicated responsibilities. Notable technologies employed in this project include Python, AWS, SqlAlchemy, Redis, SQL, and connection pooling, among others." // English description
        },
        responsibilities: {
            vi: [
                "Phát triển và bảo trì ứng dụng web sử dụng Python và công nghệ AWS",
                "Hợp tác với các nhóm đa chức năng",
                "Triển khai các tính năng và cải tiến mới"
            ],
            en: [
                "Developed and maintained web applications using Python and AWS technologies.",
                "Collaborated with cross-functional teams",
                "Implemented new features and improvements"
            ]
        },
        technologies: ["Python", "JavaScript", "ReactJS", "AWS", "PostgreSQL", "SqlAlchemy", "Pytest"]
    },
    {
        id: 2,
        title: {
            vi: "Lập Trình Viên", // Vietnamese job title
            en: "Backend Developer" // English job title
        },
        company: {
            vi: "Công ty VNG Solution", // Vietnamese company description
            en: "VNG Solution Ltd." // English company description
        },
        duration: {
            vi: "Tháng 7/2024 - Tháng 7/2025", // Vietnamese duration
            en: "Jul 2024 - Jul 2025" // English duration
        },
        description: {
            vi: "Dự án liên quan đến việc phát triển một ứng dụng web dựa trên bản đồ cho thị trường Ả Rập Xê Út. Ứng dụng cho phép người dùng đăng ký doanh nghiệp như các điểm mốc, tìm kiếm địa chỉ và quản lý thông tin cá nhân và gia đình.", // Vietnamese description
            en: "The project involves developing a map-based web application for the Saudi Arabian market. It enables users to register businesses as landmarks, search for addresses, and manage personal and family information." // English description
        },
        responsibilities: {
            vi: [
                "Xây dựng API cho ứng dụng web",
                "Tối ưu hóa cơ sở dữ liệu và truy vấn",
                "Đảm bảo hiệu suất và khả năng mở rộng của hệ thống"
            ],
            en: [
                "Built APIs for web applications",
                "Optimized database and queries",
                "Ensured system performance and scalability"
            ]
        },
        technologies: ["Python", "FastAPI", "Elastic Search", "PostgreSQL", "SQLAlchemy", "Redis"]
    },
    {
        // Previous freelance developer position
        id: 3,
        title: {
            vi: "Lập Trình Viên", // Vietnamese job title
            en: "Backend Developer" // English job title
        },
        company: {
            vi: "Công ty NashTech", // Vietnamese company description
            en: "NashTech Ltd." // English company description
        },
        duration: {
            vi: "Tháng 2/2022 - Tháng 7/2024", // Vietnamese duration
            en: "Feb 2022 - Jul 2024" // English duration
        },
        description: {
            vi: "Mục tiêu của dự án là bảo tồn các tính năng hiện có trong khi phát triển các chức năng mới theo yêu cầu của khách hàng. Ứng dụng web được cấu trúc thành nhiều dịch vụ, mỗi dịch vụ có trách nhiệm riêng biệt. Các công nghệ nổi bật được sử dụng trong dự án này bao gồm Python, FastAPI, SqlAlchemy, Redis, SQL và connection pooling, cùng nhiều công nghệ khác.", // Vietnamese description
            en: "The objective of this project is to preserve existing features while developing new functionalities in accordance with client requirements. The web application is structured into multiple services, each with its own dedicated responsibilities. Notable technologies employed in this project include Python, FastAPI, SqlAlchemy, Redis, SQL, and connection pooling, among others." // English description
        },
        responsibilities: {
            vi: [
                "Nâng cấp các tính năng backend theo yêu cầu của khách hàng",
                "Kiểm tra và điều tra các lỗi hiện có, đề xuất giải pháp cho trưởng nhóm kỹ thuật",
                "Hợp tác với đồng nghiệp để thảo luận về các tính năng mới và xác định các giải pháp tốt nhất"
            ],
            en: [
                "Enhance backend features in accordance with client requirements.",
                "Examine and investigate existing bugs, and propose solutions to the technical leader.",
                "Collaborate with colleagues to discuss new features and determine the best solutions."
            ]
        },
        technologies: ["Python", "FastAPI", "PostgreSQL", "SqlAlchemy", "Pytest"]
    },
    {
        // Previous freelance developer position
        id: 4,
        title: {
            vi: "Lập Trình Viên", // Vietnamese job title
            en: "Backend Developer" // English job title
        },
        company: {
            vi: "Công ty Hitachi Vantara", // Vietnamese company description
            en: "Hitachi Vantara Ltd." // English company description
        },
        duration: {
            vi: "Tháng 8/2019 - Tháng 2/2022", // Vietnamese duration
            en: "Aug 2019 - Feb 2022" // English duration
        },
        description: {
            vi: "Dự án này nhằm hiện đại hóa dịch vụ back-end bằng cách di chuyển nó từ Flask sang framework FastAPI. Ngoài ra, chúng tôi sẽ làm phong phú chức năng của dịch vụ bằng cách triển khai các API không đồng bộ, hệ thống bộ nhớ đệm và khả năng tìm kiếm mạnh mẽ.", // Vietnamese description
            en: "This project aims to modernize the back-end service by migrating it from Flask to the FastAPI framework. Additionally, we will enrich the service's functionality by implementing asynchronous APIs, a caching system, and robust search capabilities." // English description
        },
        responsibilities: {
            vi: [
                "Thiết kế và triển khai kiến trúc hệ thống",
                "Phát triển các dịch vụ backend cho ứng dụng doanh nghiệp",
                "Tối ưu hóa hiệu suất và bảo mật hệ thống"
            ],
            en: [
                "Constructing the back-end service using the Python FastAPI framework, a modern and performant choice.",
                "Developing asynchronous APIs to ensure efficient request processing and database communication.",
                "Implementing a caching system for optimized performance, utilizing a Redis server for data storage."
            ]
        },
        technologies: ["Python", "Flask", "FastAPI", "PostgreSQL", "SqlAlchemy", "Pytest", "Redis"]
    },
]

// TypeScript interface for project portfolio entries
interface Project {
    id: number; // Unique identifier for each project
    imgPath: string; // Path to project image/thumbnail
    title: string; // Project title/name
    description: string; // Project description and details
    githubLink: string; // Link to source code or course
    demoLink: string; // Link to live demo or course page
}

// Project portfolio data showcasing various development courses and projects
export const PROJECTS_ENGLISH: Project[] = [
    {
        // React Native mobile development course
        id: 1,
        imgPath: DjangoReactEcommerce, // React Native course thumbnail
        title: "Django React Ecommerce", // Course title
        description: "This project is to develop an ecommerce platform using Django and React. The project covers both frontend and backend development, integrating various features for a complete shopping experience.", // Course description
        githubLink: "https://github.com/longle997/vercel-django?tab=readme-ov-file", // Course page URL
        demoLink: "https://react-ecommerce-inky-one.vercel.app/" // Course page URL
    },
    {
        // Java Spring REST API development course
        id: 2,
        imgPath: Django, // Spring REST course thumbnail
        title: "Django Blog Web Application", // Course title
        description: "This project is to develop a blog platform using Django. The project focuses on backend development with Django's robust features for content management and user interaction.", // Course description
        githubLink: "https://github.com/longle997/Python_Django_Blog?tab=readme-ov-file", // Course page URL
        demoLink: "https://blogapplongle.herokuapp.com/" // Course page URL
    },
    {
        // FastAPI backend development course
        id: 3,
        imgPath: FastAPI, // FastAPI course thumbnail
        title: "FastAPI Blog Web Application", // Course title
        description: "This project involves building a web application using FastAPI. It covers the development of RESTful APIs, database integration, and catching service.", // Course description
        githubLink: "https://github.com/longle997/fast_api", // Course page URL
        demoLink: "https://fastapiwebapp.herokuapp.com/" // Course page URL
    }
]

export const PROJECTS_VIETNAMESE = [
    {
        id: 1,
        imgPath: DjangoReactEcommerce,
        title: "Django React Ecommerce",
        description: "Project này nhằm phát triển một nền tảng thương mại điện tử sử dụng Django và React. Dự án bao gồm cả phát triển frontend và backend, tích hợp các tính năng khác nhau để mang lại trải nghiệm mua sắm hoàn chỉnh.",
        githubLink: "https://github.com/longle997/vercel-django?tab=readme-ov-file",
        demoLink: "https://react-ecommerce-inky-one.vercel.app/"
    },
    {
        id: 2,
        imgPath: Django,
        title: "Django Blog Web Application",
        description: "Dự án này nhằm phát triển một nền tảng blog sử dụng Django. Dự án tập trung vào phát triển backend với các tính năng mạnh mẽ của Django để quản lý nội dung và tương tác người dùng.",
        githubLink: "https://github.com/longle997/Python_Django_Blog?tab=readme-ov-file",
        demoLink: "https://blogapplongle.herokuapp.com/"
    },
    {
        id: 3,
        imgPath: FastAPI,
        title: "FastAPI Blog Web Application",
        description: "Dự án này liên quan đến việc xây dựng một ứng dụng web sử dụng FastAPI. Nó bao gồm phát triển các API RESTful, tích hợp cơ sở dữ liệu và dịch vụ catching.",
        githubLink: "https://github.com/longle997/fast_api",
        demoLink: "https://fastapiwebapp.herokuapp.com/"
    }
]

// Technical skills and competencies array
// This list represents the portfolio owner's technical expertise across various domains
export const SKILLS_DATA: string[] = [
    'Python',
    'FastAPI',
    'Django',
    'HTML', // Markup language for web structure
    'CSS', // Styling language for web presentation  
    'Javascript', // Core programming language for web development
    'React', // JavaScript library for user interfaces
    'PostgreSQL', // Advanced open-source relational database
    'Git', // Version control system
    'AWS', // Amazon Web Services cloud platform
    'Bootstrap', // CSS framework for responsive design
    'Docker', // Containerization platform
    'Nginx', // Web server and reverse proxy
]

/*
 * SKILLS CONFIGURATION NOTES:
 * 
 * - Skills must match exactly with the available icons in skill.image.ts
 * - Capitalization and spacing must be consistent with the skillsImage function
 * - Each skill in this array should have a corresponding SVG icon
 * - Skills are displayed in the order listed in this array
 * 
 * AVAILABLE SKILL CATEGORIES:
 * 
 * Frontend Technologies:
 * HTML, CSS, JavaScript, TypeScript, React, Next JS, Vue, Angular, Svelte
 * 
 * CSS Frameworks & Libraries:  
 * Bootstrap, Tailwind, MaterialUI, Bulma, VuetifyJS
 * 
 * Backend Technologies:
 * Node JS, PHP, Python, Java, Go, C#, Ruby, Swift, Kotlin
 * 
 * Databases:
 * MongoDB, MySQL, PostgreSQL, MemSQL
 * 
 * Cloud & DevOps:
 * AWS, Azure, GCP, Docker, Nginx
 * 
 * Design & Media:
 * Figma, Photoshop, Illustrator, Adobe XD, After Effects, Canva, Sketch
 * 
 * Mobile Development:
 * React Native, Flutter, Dart, Ionic, CapacitorJs
 * 
 * Other Tools & Frameworks:
 * Git, Firebase, Strapi, Django, Unity, Wordpress, ViteJS
 * 
 * For the complete list of available skills, see the switch statement in skill.image.ts
 * To request new skill icons, create an issue in the project repository
 */