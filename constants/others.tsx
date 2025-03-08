import { DiVisualstudio } from 'react-icons/di'
import { FaWindows } from 'react-icons/fa'
import { 
    SiNginx, 
    SiCloudflare, 
    SiAndroidstudio, 
    SiEclipseide,
    SiDocker,
    SiLinux,
    SiProxmox,
    SiJenkins
} from 'react-icons/si'

export const Others = {
    nginx: {
        title: 'Nginx',
        icon: SiNginx
    },
    cloudflare: {
        title: 'Cloudflare',
        icon: SiCloudflare
    },
    androidstudio: {
        title: 'Android Studio',
        icon: SiAndroidstudio
    },
    vs: {
        title: 'Visual Studio',
        icon: DiVisualstudio
    },
    eclipse: {
        title: 'Eclipse',
        icon: SiEclipseide
    },
    docker: {
        title: 'Docker',
        icon: SiDocker
    },
    linux: {
        title: 'Linux',
        icon: SiLinux
    },
    proxmox: {
        title: 'Proxmox',
        icon: SiProxmox
    },
    windows: {
        title: 'Windows',
        icon: FaWindows
    },
    jenkins: {
        title: 'Jenkins',
        icon: SiJenkins
    }
}