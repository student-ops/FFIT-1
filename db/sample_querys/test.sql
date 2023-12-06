CREATE DATABASE f_fit1;
use f_fit1;

CREATE TABLE `User`
(
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255)
);

CREATE TABLE Article
(
    id VARCHAR(255) PRIMARY KEY,
    user_id VARCHAR(255),
    content VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES `User`(id)
);


INSERT INTO `User`(id, name)VALUES('1234','test user 1');

INSERT INTO Article(id, user_id, content)VALUES('test article 1', '1234', '# DB 操作\n\n## MySQL\n```\nmysql -u root -p\n\n## password rooot\n\n```\n\nSELECT USER();\n\ncreate database test1;\nuse test1;\n\nSELECT DATABASE();\nSHOW DATABASES;');
