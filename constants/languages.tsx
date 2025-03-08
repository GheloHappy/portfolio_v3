import { FaJava } from 'react-icons/fa'
import { 
    SiHtml5, 
    SiCss3, 
    SiJavascript,  
    SiPhp, 
    SiXml, 
    SiTypescript
} from 'react-icons/si'
import { TbBrandCSharp, TbSql } from 'react-icons/tb'

export const Languages = {
    html: {
        title: 'HTML',
        icon: SiHtml5
    },
    css: {
        title: 'CSS',
        icon: SiCss3
    },
    js: {
        title: 'JavaScript',
        icon: SiJavascript
    },
    ts: {
        title: 'TypeScript',
        icon: SiTypescript
    },
    java: {
        title: 'Java',
        icon: FaJava
    },
    sql: {
        title: 'SQL',
        icon: TbSql
    },
    csharp: {
        title: 'C#',
        icon: TbBrandCSharp
    },
    php: {
        title: 'PHP',
        icon: SiPhp
    },
    xml: {
        title: 'XML',
        icon: SiXml
    }
}