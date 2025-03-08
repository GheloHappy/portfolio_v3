import { DiVisualstudio } from 'react-icons/di'
import { TbBrandCSharp, TbSql } from 'react-icons/tb'
import { FaJava } from 'react-icons/fa'
import { RiNextjsFill } from 'react-icons/ri'
import { TbBrandReactNative } from 'react-icons/tb'
import {
    SiAndroidstudio,
    SiTypescript,
    SiJavascript,
    SiReact,
    SiNodedotjs,
    SiMysql,
    SiEclipseide,
    SiSqlite
} from 'react-icons/si'

export const projectDetails = [
    {
        label: "CMDI Ordering System",
        summary: "A comprehensive web and mobile solution that streamlines the ordering process between agents and invoicers. The system features a responsive web interface and a React Native mobile app with offline synchronization capabilities, significantly reducing manual order processing time and improving operational efficiency.",
        link: "https://cmdiorder.monheim.app",
        stacks: [
            { icon: DiVisualstudio, name: 'Visual Studio' },
            { icon: TbSql, name: 'SQL Server' },
            { icon: SiMysql, name: 'MySQL' },
            { icon: TbBrandReactNative, name: 'React Native' },
            { icon: SiTypescript, name: 'TypeScript' },
            { icon: SiJavascript, name: 'Javascrpt' },
            { icon: SiNodedotjs, name: 'Node.js' }
        ]
    },
    {
        label: "MLDI Ordering System",
        summary: "An enterprise-level ordering system tailored for MLDI's business processes. Features include real-time inventory tracking, automated order processing, and a React Native mobile application with offline capabilities. The system has significantly improved order accuracy and reduced processing time by eliminating manual data entry.",
        link: "https://mldiorder.monheim.app",
        stacks: [
            { icon: DiVisualstudio, name: 'Visual Studio' },
            { icon: TbSql, name: 'SQL Server' },
            { icon: SiReact, name: 'React' },
            { icon: SiJavascript, name: 'Javascript' },
            { icon: SiNodedotjs, name: 'Node.js' }
        ]
    },
    {
        label: "Online Timekeeping Monitoring",
        summary: "A web-based time tracking solution that enables employees to monitor their daily attendance records, view time logs, and manage leave requests in real-time. Built with React for a responsive interface and Node.js backend, the system provides transparent attendance tracking and streamlines the leave management process.",
        link: "https://timekeeping.monheim.app",
        stacks: [
            { icon: DiVisualstudio, name: 'Visual Studio' },
            { icon: TbSql, name: 'SQL Server' },
            { icon: SiReact, name: 'React' },
            { icon: SiJavascript, name: 'Javascript' },
            { icon: SiNodedotjs, name: 'Node.js' }
        ]
    },
    {
        label: "Barcode System",
        summary: "Crafted to streamline the monitoring of inbound and outbound shipments, as well as inventory status. This system leverages tablets and barcode scanners connected via both Wi-Fi and local networks, complemented by an API integration. Additionally, a dedicated desktop application extends its functionality to remote warehouses beyond the primary facility.",
        stacks: [
            { icon: SiAndroidstudio, name: 'Android Studio' },
            { icon: FaJava, name: 'Java' },
            { icon: SiNodedotjs, name: 'Node.js' },
            { icon: DiVisualstudio, name: 'VS Code' },
            { icon: TbBrandCSharp, name: 'C#' },
            { icon: TbSql, name: 'SQL Server' }
        ]
    },
    {
        label: "Van Sales",
        summary: "A Sales Force Automation (SFA) app developed to facilitate paperless sales transactions conducted from delivery vans, using tablets paired with Bluetooth printers for seamless and eco-friendly order processing.",
        stacks: [
            { icon: SiEclipseide, name: 'Eclipse' },
            { icon: FaJava, name: 'Java' },
            { icon: SiSqlite, name: 'SQLite' }
        ]
    },
    {
        label: "Timekeeping",
        summary: "A desktop application that efficiently tracks employee attendance, offering the choice of either barcode ID or biometric verification for clocking in and out.",
        stacks: [
            { icon: DiVisualstudio, name: 'VS Code' },
            { icon: TbBrandCSharp, name: 'C#' },
            { icon: TbSql, name: 'SQL Server' }
        ]
    },
    {
        label: "Warehouse Delivery Schedule System",
        summary: "Desktop application designed to streamline the management of invoices, simplifying the manual assignment of delivery trucks or wing vans and optimizing the routing of deliveries for a smoother and more efficient process.",
        stacks: [
            { icon: DiVisualstudio, name: 'VS Code' },
            { icon: TbBrandCSharp, name: 'C#' },
            { icon: TbSql, name: 'SQL Server' }
        ]
    },
    {
        label: "B2B Converter",
        summary: "Converts .csv, .xml files from Client Portals or Iconnect for directly processing of Purchase Order",
        stacks: [
            { icon: DiVisualstudio, name: 'Visual Studio' },
            { icon: TbBrandCSharp, name: 'C#' },
            { icon: TbSql, name: 'SQL Server' }
        ]
    },
]