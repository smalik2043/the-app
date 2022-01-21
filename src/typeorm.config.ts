import { TypeOrmModuleOptions } from "@nestjs/typeorm";

const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'postgres-db',
    port: 5432,
    username: 'THE',
    password: 'supersecretpassword',
    database: 'THE',
    schema: 'the_schema',
    entities: [__dirname + '/**/*.entity.ts', __dirname + '/**/*.entity.js'],
    migrationsRun: false,
    logging: true,
    migrationsTableName: "migration",
    migrations: [__dirname + '/migration/**/*.ts', __dirname + '/migration/**/*.js'],
    synchronize: true,
    cli: {
        migrationsDir: 'src/migration'
    }
}

export = typeOrmConfig