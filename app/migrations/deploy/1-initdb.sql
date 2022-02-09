-- Deploy tepa:1-initdb to pg

BEGIN;

CREATE TABLE "table" (
    "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "message" text NOT NULL,
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz
);

COMMIT;
