# Task 4 – Scaling ReactJS + NodeJS with Docker Compose

Using Docker Compose to build and run a multi-stage ReactJS frontend, a NodeJS API backend, and an Nginx load-balancer in front of three React replicas.

---


## Branch

Switch to the Task 4 branch:

```bash
git checkout task4
```


## 🏃 Launching the Stack

From the `task4/` directory:

1. Build images, start the services, and scale frontend to 3 replicas:

   ```bash
   docker-compose up -d --build --scale frontend=3
   ```

2. we should see three `frontend` containers, one `api` container, and one `proxy` container.

---

- **Container status**:

  ```bash
  docker-compose ps
  ```

---

To stop and remove everything:

```bash
docker-compose down --volumes
```


## Screenshots

### Docker Compose Up
![Docker Compose Up](/task4/screenshots/Screenshot_(795).png)

### docker Containers status
we can see three `frontend` containers, one `api` container, and one `proxy` container.
![docker container up](/task4/screenshots/Screenshot_(796).png)

### react App Page
![React App Page](/task4/screenshots/Screenshot_(798).png)

### load-balanced across the replicas with appropriate port mappings (X-Upstream-Server: 172.20.0.X:80)
![React App Page](/task4/screenshots/Screenshot_(797).png)
