import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

const allowedOrigin = process.env.CORS_ORIGIN;
app.use(cors(allowedOrigin ? { origin: allowedOrigin } : undefined));
app.use(express.json());

// Cafe Info Endpoint
app.get('/api/info', (req, res) => {
  res.json({
    name: 'Blue Mug Cafe',
    tagline: 'Artisanal Coffee & Gourmet Bistro',
    address: '1/243 Jodhpur Park, Kolkata-700068',
    phone: '+91 62904 41067',
    googleSearch: 'https://www.google.com/search?q=Blue+Mug+Cafe',
    googleMaps: 'https://maps.google.com/?q=Blue+Mug+Cafe+Jodhpur+Park+Kolkata',
    openingHours: '11:00 AM – 10:30 PM (All 7 Days)',
    delivery: {
      zomato: 'https://www.zomato.com/kolkata/blue-mug-jodhpur-park/order',
      swiggy: 'https://www.swiggy.com/city/kolkata/cafe-blue-mug-jodhpur-park-jadavpur-rest56983',
      magicpin: 'https://magicpin.in/Kolkata/Jodhpur-Park/Restaurant/Blue-Mug/store/16a0734'
    },
    socials: {
      instagram: 'https://www.instagram.com/bluemug_kolkata/',
      facebook: 'https://www.facebook.com/bluemugkolkata/',
      linkedin: 'https://www.linkedin.com/company/blue-mug-coffee-thoughts/'
    }
  });
});

// Download Full Menu Endpoint
app.get('/blue-mug-menu.pdf', (req, res) => {
  const possiblePaths = [
    path.join(__dirname, 'public', 'blue-mug-menu.pdf'),
    path.join(__dirname, 'dist', 'blue-mug-menu.pdf')
  ];

  const menuPath = possiblePaths.find(p => fs.existsSync(p));

  if (menuPath) {
    res.setHeader('Content-Disposition', 'attachment; filename="Blue-Mug-Cafe-Kolkata-Menu.pdf"');
    res.setHeader('Content-Type', 'application/pdf');
    const fileStream = fs.createReadStream(menuPath);
    fileStream.pipe(res);
  } else {
    res.status(404).json({ error: 'Menu PDF not found' });
  }
});

// Health Check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Serve frontend build if dist exists
const distPath = path.join(__dirname, 'dist');
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
  app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
} else {
  // If not built yet, serve public directory
  app.use(express.static(path.join(__dirname, 'public')));
  app.get('/', (req, res) => {
    res.send('Blue Mug Cafe API Server is running. Run `npm run build` to build the frontend.');
  });
}

app.use((err, req, res, next) => {
  console.error('Blue Mug Cafe server error', err);
  if (res.headersSent) {
    next(err);
    return;
  }
  res.status(500).json({ error: 'Internal server error' });
});

const server = app.listen(PORT, () => {
  console.log(`Blue Mug Cafe server running on port ${PORT}`);
});

const shutdown = (signal) => {
  console.log(`${signal} received; shutting down.`);
  server.close((error) => {
    if (error) {
      console.error('Error while shutting down server', error);
      process.exitCode = 1;
    }
  });
};

process.once('SIGTERM', () => shutdown('SIGTERM'));
process.once('SIGINT', () => shutdown('SIGINT'));
