INSERT INTO gamesandkeys_users
    (google_id, first_name, last_name, avatar)
VALUES($1, $2, $3, $4)
RETURNING  id, google_id, first_name, last_name, avatar