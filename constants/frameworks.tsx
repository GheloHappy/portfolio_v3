import { RiNextjsFill } from 'react-icons/ri'
import { 
    SiNodedotjs, 
    SiReact, 
    SiTailwindcss, 
    SiLaravel, 
} from 'react-icons/si'
import { TbBrandReactNative } from 'react-icons/tb'

export const Frameworks = {
    node: {
        title: 'Node.js',
        icon: SiNodedotjs
    },
    reactjs: {
        title: 'React',
        icon: SiReact
    },
    reactnative: {
        title: 'React Native',
        icon: TbBrandReactNative
    },
    nextjs: {
        title: 'NextJs',
        icon: RiNextjsFill
    },
    tailwind: {
        title: 'Tailwind CSS',
        icon: SiTailwindcss
    },
    laravel: {
        title: 'Laravel',
        icon: SiLaravel
    },
}