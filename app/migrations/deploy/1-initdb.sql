-- Deploy tepa:1-initdb to pg

BEGIN;

CREATE TABLE "fact" (
    "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "content" text NOT NULL UNIQUE,
    "note" int NOT NULL DEFAULT 0,
    "created_at" timestamptz NOT NULL DEFAULT now(),
    "updated_at" timestamptz
);

COMMIT;