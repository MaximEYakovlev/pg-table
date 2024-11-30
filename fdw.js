// Foreign Data Wrapper; access data stored in external PostgreSQL servers

// install the extension
'CREATE EXTENSION postgres_fdw;'

// create a foreign server
`CREATE SERVER foreign_server FOREIGN DATA WRAPPER postgres_fdw OPTIONS (host '192.83.123.89', port '5432', dbname 'foreign_db');`

// user mapping to identify the role that will be used on the remote server
`CREATE USER MAPPING FOR local_user SERVER foreign_server OPTIONS (user 'foreign_user', password 'password');`

// create a foreign table
`CREATE FOREIGN TABLE foreign_table (id integer NOT NULL, data text) SERVER foreign_server OPTIONS (schema_name 'some_schema', table_name 'some_table');`