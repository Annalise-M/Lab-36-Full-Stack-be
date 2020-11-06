DROP TABLE IF EXISTS instruments;

CREATE TABLE instruments (
  id BIGINT GENERATED ALWAYS AS IDENTITY,
  make_model TEXT NOT NULL,
  make_year TEXT NOT NULL,
  style TEXT NOT NULL,
  scale TEXT NOT NULL,
  condition TEXT NOT NULL,
  price INT NOT NULL,
  url VARCHAR(max) NOT NULL
)
