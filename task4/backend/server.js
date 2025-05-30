const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
app.get('/api', (_, res) => res.json({ message: 'Hello from API' }));
app.listen(port, () => console.log(\`API listening on \${port}\`));
