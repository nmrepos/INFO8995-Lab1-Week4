## Task 2 – MySQL + phpMyAdmin + Persistent Storage

### Prerequisites

- Docker & Docker Compose installed

### Start

1. **Open** the repo in codespaces:

2. **Create** the .env from the sample:
   ```bash
   cp .env.sample .env

3. **Bring up** the services:
   ```bash
   docker-compose up -d

4. **Verify**:
   ```bash
   phpMyAdmin → http://localhost:8081 → login with sample / sample

5. **Stop**:
   ```bash
   docker-compose down


## Screenshots


### MySQL Container Running
![MySQL container up](/task2/Screenshots/Screenshot_(775).png)

### phpMyAdmin Login Page
![phpMyAdmin login](/task2/Screenshots/Screenshot_(776).png)

### Adding data to the mysql
![Stopping](/task2/Screenshots/Screenshot_(781).png)

### Stopping
![Stopping](/task2/Screenshots/Screenshot_(777).png)

### Starting the container
![Stopping](/task2/Screenshots/Screenshot_(782).png)

### Data remain same
![Stopping](/task2/Screenshots/Screenshot_(783).png)
