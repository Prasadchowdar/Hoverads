# HoverAds - Aerial Drone Advertising

Next-gen aerial advertising service website for drone-based LED advertising in Hyderabad, India.

## 🚁 Overview

HoverAds offers high-impact flying digital advertising drones for events and brand promotions. Our platform provides:

- **Product Launches** - Unforgettable aerial advertising for product debuts
- **Political Campaigns** - Mobile aerial messaging for rallies and events
- **Concerts & Festivals** - Dynamic flying advertisements
- **Real Estate Marketing** - Aerial property showcases
- **Wedding Grand Entries** - Personalized aerial celebrations
- **Mall Activations** - Eye-catching aerial promotions

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React 19, TailwindCSS, Radix UI |
| Backend | FastAPI (Python) |
| Database | MongoDB |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- Python 3.9+
- MongoDB

### Frontend Setup

```bash
cd frontend
npm install --legacy-peer-deps
npm start
```

The app runs at `http://localhost:3000`

### Backend Setup

```bash
cd backend
pip install -r requirements.txt
uvicorn server:app --reload
```

API runs at `http://localhost:8000`

### Environment Variables

Create `.env` files in both `frontend/` and `backend/` directories:

**backend/.env:**
```
MONGO_URL=mongodb://localhost:27017
DB_NAME=hoverads
CORS_ORIGINS=http://localhost:3000
```

## 📁 Project Structure

```
├── frontend/          # React frontend
│   ├── public/        # Static assets
│   └── src/
│       ├── components/ # UI components
│       ├── hooks/      # Custom React hooks
│       └── lib/        # Utilities
│
└── backend/           # FastAPI backend
    └── server.py      # Main API server
```

## 📦 Build for Production

```bash
cd frontend
npm run build
```

## 📄 License

MIT License

## 📞 Contact

- Phone: +91 755 757 7999
- Email: contact@hoverads.in
- Location: Hyderabad, Telangana, India
