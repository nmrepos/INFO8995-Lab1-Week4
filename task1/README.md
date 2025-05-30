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
![Docker Compose Up](/task1/Screenshots/Screenshot_(770).png)

### MySQL Container Running
![MySQL container up](/task1/Screenshots/Screenshot_(771).png)

### phpMyAdmin Login Page
![phpMyAdmin login](/task1/Screenshots/Screenshot_(772).png)

### Connecting via CLI
![MySQL CLI connection](/task1/Screenshots/Screenshot_(774).png)

### Stopping
![Stopping](/task1/Screenshots/Screenshot_(775).png)
