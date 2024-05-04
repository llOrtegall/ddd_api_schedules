import app from './app/app';
import 'dotenv/config';

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
