import { DiMsqlServer } from 'react-icons/di'
import { 
    SiPostgresql, 
    SiSqlite, 
    SiMysql, 
    SiMongodb 
} from 'react-icons/si'

export const Databases = {
    sqlserver: {
        title: 'SQL Server',
        icon: DiMsqlServer
    },
    postgre: {
        title: 'PostgreSQL',
        icon: SiPostgresql
    },
    sqlite: {
        title: 'SQLite',
        icon: SiSqlite
    },
    mysql: {
        title: 'MySQL',
        icon: SiMysql
    },
    mongodb: {
        title: 'MongoDB',
        icon: SiMongodb
    }
}