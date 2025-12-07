# 📊 Email Collection System - Architecture Overview

## System Flow Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                         USER INTERFACE                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────────────┐      ┌─────────────────────────┐   │
│  │   /contact Page      │      │  /eduwarrior Page       │   │
│  │                      │      │                         │   │
│  │  ┌────────────────┐ │      │  ┌──────────────────┐  │   │
│  │  │ Subscription   │ │      │  │  EduWarrior      │  │   │
│  │  │ Form Component │ │      │  │  Application     │  │   │
│  │  │                │ │      │  │  Form Component  │  │   │
│  │  │ - Webinar      │ │      │  │                  │  │   │
│  │  │ - Newsletter   │ │      │  │  - Full Profile  │  │   │
│  │  └────────────────┘ │      │  └──────────────────┘  │   │
│  └──────────────────────┘      └─────────────────────────┘   │
│           │                               │                    │
└───────────┼───────────────────────────────┼────────────────────┘
            │                               │
            ▼                               ▼
┌─────────────────────────────────────────────────────────────────┐
│                         API LAYER                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌───────────────────────┐      ┌─────────────────────────┐   │
│  │  /api/subscribe       │      │  /api/eduwarrior/apply  │   │
│  │                       │      │                         │   │
│  │  POST Handler         │      │  POST Handler           │   │
│  │  - Validates data     │      │  - Validates data       │   │
│  │  - Sanitizes input    │      │  - Sanitizes input      │   │
│  │  - Formats response   │      │  - Formats response     │   │
│  └───────────────────────┘      └─────────────────────────┘   │
│           │                               │                    │
└───────────┼───────────────────────────────┼────────────────────┘
            │                               │
            └───────────────┬───────────────┘
                            │
                            ▼
┌─────────────────────────────────────────────────────────────────┐
│                      UTILITY LAYER                              │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                    ┌─────────────────┐                         │
│                    │  src/lib/       │                         │
│                    │  sheets.ts      │                         │
│                    │                 │                         │
│                    │  - Format data  │                         │
│                    │  - Send to API  │                         │
│                    │  - Handle errors│                         │
│                    └─────────────────┘                         │
│                            │                                    │
└────────────────────────────┼────────────────────────────────────┘
                             │
                             ▼
┌─────────────────────────────────────────────────────────────────┐
│                     DATA STORAGE                                │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────────────┐      ┌─────────────────────────┐   │
│  │  Google Sheets       │      │  Console Logs           │   │
│  │                      │      │                         │   │
│  │  - Subscriptions     │      │  - Development          │   │
│  │  - EduWarrior Apps   │      │  - Debugging            │   │
│  │  - Automatic backup  │      │  - Monitoring           │   │
│  └──────────────────────┘      └─────────────────────────┘   │
│                                                                 │
│  Future Options:                                                │
│  ┌──────────────────────┐      ┌─────────────────────────┐   │
│  │  Supabase Database   │      │  Email Notifications    │   │
│  │  (PostgreSQL)        │      │  (Resend/SendGrid)      │   │
│  └──────────────────────┘      └─────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Data Flow Example: Newsletter Subscription

```
1. User Action
   └─> User fills out form on /contact page
       - Name: "John Doe"
       - Email: "john@example.com"
       - City: "Mumbai"
       - Role: "Parent"
       - Type: "subscribe"

2. Client-Side Validation
   └─> SubscriptionForm.tsx validates:
       ✓ All required fields filled
       ✓ Email format is valid
       ✓ No empty strings

3. Form Submission
   └─> Sends POST request to /api/subscribe
       {
         "name": "John Doe",
         "email": "john@example.com",
         "city": "Mumbai",
         "role": "parent",
         "type": "subscribe"
       }

4. Server-Side Processing
   └─> /api/subscribe/route.ts:
       a) Validates data again (security)
       b) Checks email format with regex
       c) Logs to console
       d) Formats data with timestamp
       e) Calls sendToGoogleSheets()

5. Data Storage
   └─> Google Sheets Apps Script:
       a) Receives POST request
       b) Parses JSON data
       c) Appends row to sheet:
          [2025-12-07 10:30:00, John Doe, john@example.com, ...]
       d) Returns success response

6. User Feedback
   └─> Success message displayed:
       "Successfully subscribed!"
       Form resets for next submission
```

---

## Component Hierarchy

```
App Root
│
├── /contact page
│   └── SubscriptionForm
│       ├── Form Fields (name, email, city, role)
│       ├── Validation Logic
│       ├── Submit Handler
│       └── Success/Error Messages
│
└── /eduwarrior page
    └── EduWarriorApplicationForm
        ├── Form Fields (name, email, education, etc.)
        ├── Validation Logic
        ├── Submit Handler
        └── Success/Error Messages
```

---

## API Endpoints

### POST /api/subscribe
```typescript
Request Body:
{
  name: string;
  email: string;
  mobile?: string;
  city: string;
  role: string;
  type: 'subscribe' | 'webinar';
  message?: string;
}

Response (Success):
{
  success: true;
  message: "Successfully subscribed!"
}

Response (Error):
{
  success: false;
  error: "Invalid email format"
}
```

### POST /api/eduwarrior/apply
```typescript
Request Body:
{
  name: string;
  email: string;
  mobile: string;
  city: string;
  education: string;
  expertise: string;
  experience?: string;
  motivation: string;
  availability: string;
}

Response (Success):
{
  success: true;
  message: "Application submitted successfully!"
}

Response (Error):
{
  success: false;
  error: "Missing required fields"
}
```

---

## Environment Configuration

```
Development (.env.local)
├── GOOGLE_SHEETS_SUBSCRIBE_URL
├── GOOGLE_SHEETS_EDUWARRIOR_URL
├── ADMIN_EMAIL (optional)
└── RESEND_API_KEY (optional)

Production (Vercel Environment Variables)
├── GOOGLE_SHEETS_SUBSCRIBE_URL
├── GOOGLE_SHEETS_EDUWARRIOR_URL
├── ADMIN_EMAIL (optional)
└── RESEND_API_KEY (optional)
```

---

## Google Sheets Structure

### Subscriptions Sheet
```
| Timestamp           | Name      | Email           | Mobile         | City   | Role   | Type     | Message    |
|---------------------|-----------|-----------------|----------------|--------|--------|----------|------------|
| 2025-12-07 10:30:00 | John Doe  | john@email.com  | +919876543210  | Mumbai | parent | subscribe| Hello...   |
| 2025-12-07 11:45:00 | Jane Smith| jane@email.com  | +919876543211  | Delhi  | student| webinar  |            |
```

### EduWarrior Applications Sheet
```
| Timestamp           | Name      | Email           | Mobile         | City   | Education | Expertise  | Experience | Motivation    | Availability |
|---------------------|-----------|-----------------|----------------|--------|-----------|------------|------------|---------------|--------------|
| 2025-12-07 10:30:00 | John Doe  | john@email.com  | +919876543210  | Mumbai | graduate  | education  | 2 years... | I want to...  | immediately  |
```

---

## Security Layers

```
┌─────────────────────────────────────┐
│   Client-Side Validation            │
│   - Required fields                 │
│   - Email format                    │
│   - Input sanitization              │
└─────────────────────────────────────┘
              ↓
┌─────────────────────────────────────┐
│   Server-Side Validation            │
│   - Re-validate all fields          │
│   - Check data types                │
│   - Verify email format             │
│   - Prevent injection               │
└─────────────────────────────────────┘
              ↓
┌─────────────────────────────────────┐
│   Environment Variables             │
│   - Protected API keys              │
│   - Not in version control          │
│   - Server-side only                │
└─────────────────────────────────────┘
              ↓
┌─────────────────────────────────────┐
│   Google Sheets Access Control      │
│   - Web app deployment              │
│   - Limited scope                   │
│   - Append-only access              │
└─────────────────────────────────────┘
```

---

## Future Enhancements

### Phase 1 (Current) ✅
- [x] Working forms
- [x] API endpoints
- [x] Google Sheets integration
- [x] Basic validation

### Phase 2 (Next) 🚧
- [ ] Email notifications
- [ ] Admin dashboard
- [ ] Export functionality
- [ ] Duplicate prevention

### Phase 3 (Future) 📅
- [ ] Database migration
- [ ] CAPTCHA integration
- [ ] Analytics dashboard
- [ ] Email marketing integration
- [ ] Advanced filtering/search

---

## Tech Stack

```
Frontend:
├── Next.js 16
├── React 19
├── TypeScript
└── Tailwind CSS v4

Backend:
├── Next.js API Routes
├── Server Actions
└── Environment Variables

Data Storage:
├── Google Sheets (Current)
└── Supabase/Prisma (Future)

Optional Services:
├── Resend (Email)
├── reCAPTCHA (Security)
└── Vercel Analytics
```

---

## Deployment Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    GitHub Repository                    │
│                                                         │
│  Source Code + .env.example (no secrets)                │
└─────────────────────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────┐
│                   Vercel Platform                       │
│                                                         │
│  ┌────────────────┐         ┌────────────────┐        │
│  │  Build Process │  ────▶  │  Production    │        │
│  │                │         │  Deployment    │        │
│  └────────────────┘         └────────────────┘        │
│         │                           │                  │
│         ▼                           ▼                  │
│  Environment Variables      Edge Functions             │
│  (from Vercel dashboard)    (API Routes)               │
└─────────────────────────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────┐
│                  Google Sheets                          │
│                                                         │
│  Apps Script Web App (receives data)                    │
└─────────────────────────────────────────────────────────┘
```

---

**System Status**: ✅ Fully Implemented and Ready to Use
**Last Updated**: December 7, 2025
