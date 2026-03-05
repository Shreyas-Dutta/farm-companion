

# 🌾 KisanSathi - Smart Farming App

A mobile-first farming app inspired by the LeafDoctor design, with Hindi + English bilingual UI, tailored for Indian farmers.

## Pages & Features

### 1. Home Page
- **Hero section** with app branding and a "Detect Crop Health" CTA button
- **Weather widget** showing current weather based on user's location (geolocation API) with alerts for bad weather (storms, frost, heavy rain)
- **Major Crops carousel** highlighting key crops for the user's region
- **Quick action cards**: Scan Crop, View Prices, Read News

### 2. News Section (with tab navigation)
- **Monthly Highlights** — Key agricultural trends and seasonal updates
- **Success Stories** — Farmer growth stories with photos and quotes
- **Tips & Insights** — Practical farming advice articles
- **Upcoming Events** — Local fairs, training programs, and exhibitions
- Searchable and filterable article cards

### 3. Market Section
- **Live crop prices** table/cards for major Indian crops (wheat, rice, cotton, etc.)
- Filter by state/mandi
- Price trend charts using Recharts
- Data sourced from user-provided API (to be integrated)

### 4. Profile Page
- User profile with name, location, email
- **My Crops** — Track crop lifecycles, health status, and seasonal trends
- **Scan History** — Past AI crop analyses with results
- Edit profile functionality

### 5. AI Crop Scanner (Core Feature)
- Camera/upload interface for crop photos
- Real AI analysis via Lovable Cloud edge function using Lovable AI (Gemini)
- Returns: plant identification, health assessment, disease detection, treatment recommendations
- Results page with confidence percentage and detailed info (similar to the reference design)

### 6. Bottom Navigation Bar
- Home, News, Scan (center prominent), Market, Profile
- Mobile-first sticky bottom nav with icons and Hindi labels

## Design
- **Color scheme**: Green primary (#2D5A27 / forest green), white background, leaf accents — matching the reference
- **Mobile-first layout** optimized for phone screens
- **Hindi + English** bilingual labels throughout
- Card-based UI with rounded corners and soft shadows

## Backend (Lovable Cloud)
- Edge function for AI crop analysis using Lovable AI gateway
- Edge functions for weather and market price API proxying (once APIs are provided)
- Storage bucket for uploaded crop photos

