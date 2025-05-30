## Task 1 – MySQL + phpMyAdmin

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

### Docker Compose Up
![Docker Compose Up](/Screenshots/Screenshot_(770).png)

### MySQL Container Running
![MySQL container up](/Screenshots/Screenshot_(771).png)

### phpMyAdmin Login Page
![phpMyAdmin login](/Screenshots/Screenshot_(772).png)

### Connecting via CLI
![MySQL CLI connection](/Screenshots/Screenshot_(774).png)

### Stopping
![Stopping](/Screenshots/Screenshot_(775).png)
