init database

sequelize db:create --config=db/datasource/postgresql/migration.js

migration

sequelize db:migrate --migrations-path=db/migrations --config=db/datasource/postgresql/migration.js 