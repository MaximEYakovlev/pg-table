'CREATE TABLE someName (name varchar(80), location point);'
'SELECT * INTO someTableName FROM anotherTable;'
'CREATE TABLE tableName AS SELECT * FROM someTable;'
'CREATE TEMPORARY TABLE someName (code char(5), title varchar(40), did integer, date_prod date, kind varchar(10), len interval hour to minute, CONSTRAINT code_title PRIMARY KEY(code,title));'

// Foreign Data Wrapper; access data stored in external PostgreSQL servers
`CREATE FOREIGN TABLE myschema.mytable (id integer, name varchar(20)) SERVER foreign_server OPTIONS (table_name 'external_table');`