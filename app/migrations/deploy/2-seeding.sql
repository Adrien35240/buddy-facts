-- Deploy tepa:2-seeding to pg

BEGIN;

INSERT INTO "table" ("message") VALUES
('messsage0'),
('messsage1'),
('messsage2'),
('messsage3'),
('messsage4'),
('messsage5'),
('messsage6');


COMMIT;
