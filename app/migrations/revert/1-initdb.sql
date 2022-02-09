-- Revert tepa:1-initdb from pg

BEGIN;

DROP TABLE "fact";

COMMIT;
