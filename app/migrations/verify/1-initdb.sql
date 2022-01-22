-- Verify tepa:1-initdb on pg
-- verify if no errors 
BEGIN;


INSERT INTO "dummy" ("message") VALUES
('messsage0'),
('messsage1'),
('messsage2'),
('messsage3'),
('messsage4'),
('messsage5'),
('messsage6');


SELECT "message" FROM "dummy";

ROLLBACK;
