# Task 3 – PostgreSQL + pgAdmin4

This setup spins up a PostgreSQL database and a pgAdmin4 GUI that only starts once PostgreSQL is ready.


## Branch

Make sure you’re on the Task 3 branch:

```bash
git checkout task3
```

## Environment Variables

Copy the sample file and fill in:

```bash
cp .env.sample .env
```

## Launch the Stack

```bash
docker-compose up -d
```

PostgreSQL will start first and run a built-in `pg_isready` healthcheck.

pgAdmin4 will wait until PostgreSQL reports “ready” before it actually starts.

## Verify

### pgAdmin

- Open browser at `http://localhost:5050`
- Log in with the values from `.env`

## Screenshots


### Docker Compose Up
![Docker Compose Up](/task3/screenshots/Screenshot_(787).png)

### pgadmin Container Running
![pgadmin container up](/task3/screenshots/Screenshot_(788).png)

### pgadmin Login Page
![pgadmin login](/task3/screenshots/Screenshot_(789).png)
