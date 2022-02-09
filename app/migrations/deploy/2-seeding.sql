-- Deploy tepa:2-seeding to pg

BEGIN;

INSERT INTO "fact" ("content","note") VALUES
('5% of the ocean floor has been mapped in detail.',1),
('Sharks only attack humans when they mistake them for fish.',4),
('Sea turtle shells are made up of plates called scutes.',2),
('Large baleen whales typically need 3 individuals involved to successfully reproduce.',3),
('Octopi are a type of mollusk.',6),
('Great white sharks use body language to communicate with one another.',7),
('15% of the oceans are covered by sea ice.',2);


COMMIT;
