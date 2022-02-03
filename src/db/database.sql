create TABLE view(
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  path VARCHAR(255),
  timestamp VARCHAR(255)
)

create TABLE link(
  id SERIAL PRIMARY KEY,
  href VARCHAR(255),
  anchor VARCHAR(255),
  source VARCHAR(255),
  timestamp VARCHAR(255),
  view_id INTEGER,
  FOREIGN KEY (view_id) REFERENCES view (id)
)