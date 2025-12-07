# 🎓 Skillverse - Transforming Education in India

A Next.js web application for Skillverse, featuring the revolutionary 4L Transformation System and EduWarrior micro-franchise model.

## ✨ Features

- 🏠 **Landing Page** - Introduction to Skillverse mission and vision
- 📚 **4L System** - Detailed explanation of the 4-pillar learning methodology
- 👨‍🏫 **EduWarrior Model** - Information about the micro-franchise opportunity
- 📧 **Newsletter Subscription** - Collect user emails for updates and webinars
- 📝 **Application Forms** - Full-featured forms for EduWarrior applications
- 📊 **Google Sheets Integration** - Automatic data collection and storage

## 🚀 Quick Start

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Environment Setup

1. Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

2. Add your Google Sheets URLs (see [QUICK_START.md](./QUICK_START.md) for setup):
```env
GOOGLE_SHEETS_SUBSCRIBE_URL=your_subscription_sheet_url
GOOGLE_SHEETS_EDUWARRIOR_URL=your_eduwarrior_sheet_url
```

## 📖 Documentation

- **[QUICK_START.md](./QUICK_START.md)** - Get started in 5 minutes
- **[SETUP_EMAIL_COLLECTION.md](./SETUP_EMAIL_COLLECTION.md)** - Complete setup guide for email collection
- **[IMPLEMENTATION_SUMMARY.md](./IMPLEMENTATION_SUMMARY.md)** - Technical implementation details
- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - System architecture and data flow

## 🎯 Key Pages

- `/` - Homepage with hero section and problem statement
- `/about` - About Skillverse and the team
- `/4l-system` - Detailed explanation of the 4L methodology
- `/eduwarrior` - EduWarrior franchise information and application form
- `/contact` - Newsletter subscription and webinar registration

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Deployment**: Vercel
- **Data Storage**: Google Sheets (upgradeable to database)

## 📊 Email Collection System

This project includes a complete email collection system:

### Forms Available
1. **Newsletter Subscription** - `/contact` page
2. **Webinar Registration** - `/contact` page
3. **EduWarrior Application** - `/eduwarrior` page

### API Endpoints
- `POST /api/subscribe` - Handle newsletter/webinar submissions
- `POST /api/eduwarrior/apply` - Handle EduWarrior applications

### Features
- ✅ Client-side validation
- ✅ Server-side validation
- ✅ Google Sheets integration
- ✅ User feedback (success/error messages)
- ✅ Email format validation
- ✅ Required field checking

**Setup Instructions**: See [QUICK_START.md](./QUICK_START.md)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
