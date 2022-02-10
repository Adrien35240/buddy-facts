-- Deploy tepa:1-initdb to pg

BEGIN;

CREATE TABLE "fact" (
    "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "content" text NOT NULL UNIQUE
);

COMMIT;
