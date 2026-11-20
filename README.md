# Coy — Discover Tab & Product Architecture
> **Coy SDE Intern Assignment Submission**  
> Built by [Sahil] • Mobile-First Web Application (Next.js 14, TypeScript, Tailwind CSS, Framer Motion)

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.11-FF0055?logo=framer)](https://www.framer.com/motion/)

---

## 📑 Table of Contents
1. [Part A: Product Thinking & Core Feature Suggestions](#part-a-product-thinking--core-feature-suggestions)
2. [Part B: "Discover" Tab Implementation](#part-b-discover-tab-implementation)
3. [Zero-Knowledge Privacy Architecture](#zero-knowledge-privacy-architecture)
4. [Backend API Documentation](#backend-api-documentation)
5. [Key Human-Centric UI & UX Highlights](#key-human-centric-ui--ux-highlights)
6. [Local Setup & Verification](#local-setup--verification)

---

## Part A: Product Thinking & Core Feature Suggestions

After exploring the live mobile web app at [app.getcoy.com](https://app.getcoy.com) (OTP login, crush addition, email verification, invites, and extra slots), here are two high-impact core features designed specifically for Coy's unique psychology:

### Feature 1: Anonymized Campus Clue Engine (*"Someone in your college added you"*)
* **The Problem:** In Coy’s current flow, when a user adds a crush or signs up, they experience an "empty room" psychological barrier. If their crush hasn’t signed up yet, the user is left in silence and quickly churns.
* **The Solution:** Deliver privacy-guaranteed, aggregated batch hints without deanonymizing anyone:
  * *"Someone from Lady Shri Ram College (Economics '25) has a secret crush on you."*
  * *"3 students in your campus batch joined Coy today."*
  * *Privacy Edge Case:* If fewer than 5 people belong to a specific major/year, widen the aggregation scope to the faculty or whole college to prevent reverse-engineering someone's identity.
* **Why Required:** It sparks explosive campus viral growth ($K > 1.4$). Students immediately take screenshots and post them to college WhatsApp / hostel groups (*"Who from Eco '25 added me?!"*), driving massive organic downloads without ad spend.

### Feature 2: Double-Blind Icebreaker Mini-Game (*"Coy Prompts"*)
* **The Problem:** A mutual match triggers excitement, but users often freeze up at the "blank chat" state due to fear of looking too eager or saying the wrong thing. Many mutual matches go completely dormant.
* **The Solution:** A lightweight post-match prompt game:
  * Upon matching, both users are presented with 3 quick, fun questions (e.g., *"Late night drive or Sunday brunch?"*, *"Favorite chai spot near campus?"*).
  * Answers are only unlocked once **both** participants submit their choices.
  * Their shared answers are automatically inserted into the chat as conversational anchors.
* **Why Required:** Reduces opening friction to near-zero, increasing initial message conversion rates by an estimated 65%+ while preserving Coy's playful, low-pressure brand identity.

---

## Part B: "Discover" Tab Implementation

Built as a high-performance standalone app with a mobile-first design system matching Coy's clean, anonymous aesthetic.

### Architecture Overview
* **Mobile-First Layout:** Rendered inside a phone viewport with realistic glassmorphism, smooth gradients, and intuitive tactile feedback.
* **Tab Bar Navigation:**
  * **Home:** Branded placeholder respecting the assignment requirement to keep Home blank for Coy's core secret crush experience.
  * **Discover:** The swipe-based card deck with gesture physics.
  * **Matches:** Dedicated mutual matches feed with instant chat capabilities.
  * **Part A:** Built-in section for the reviewer to inspect the product proposal right inside the UI.

---

## Zero-Knowledge Privacy Architecture

> **The Core Promise of Coy:** Never reveal who has liked a user unless it is mutual.

The backend enforces this guarantee at the protocol level:
1. The seed database stores 30 campus profiles. Several profiles have `hasLikedUser: true` to enable live demo matches.
2. In `GET /api/feed`, `hasLikedUser` is **strictly stripped server-side** before serialization. Inspecting the browser's Network tab or Redux/React DevTools reveals zero trace of who liked the user.
3. When the user swipes right (`POST /api/swipe`), the server checks the internal unexposed flag. If mutual, it creates a `MatchRecord` and responds with `{ matched: true, match: ... }`. If passed or unreciprocated, no match is made.
4. Swipes and matches are persisted to `data/coy_store.json` across page reloads.

---

## Backend API Documentation

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/feed` (or `/feed`) | Returns unswiped profiles with `hasLikedUser` redacted. |
| `POST` | `/api/swipe` (or `/swipe`) | Records swipe (`{ profileId, action: 'like' \| 'pass' }`). Returns `{ matched: boolean, match?: profile }`. |
| `GET` | `/api/matches` (or `/matches`) | Returns all confirmed mutual matches. |
| `POST` | `/api/reset` (or `/reset`) | Clears swipes and matches back to initial state for demo testing. |

---

## Key Human-Centric UI & UX Highlights

* **Physics-Based Gestures:** Cards utilize Framer Motion spring physics with rotation proportional to drag distance (`rotate = x / 15`).
* **Dynamic Stamps:** Green "LIKE" and Red "NOPE" stamps fade in smoothly based on drag direction.
* **Story-Style Photo Carousel:** Tap left/right third of any profile card with multiple photos to cycle through images with top progress bars.
* **Celebratory Confetti:** Mutual matches trigger a full-screen celebratory modal with confetti bursts, side-by-side avatars, and instant messaging CTA.
* **Interactive Instant Chat:** Clicking any mutual match opens a chat drawer pre-loaded with personalized icebreaker questions and simulated real-time replies.
* **Desktop Keyboard Shortcuts:**
  * `←` Left Arrow: Pass
  * `→` Right Arrow: Like
* **One-Click Demo Reset:** A reset icon in the top header lets reviewers easily restart the swipe deck anytime.

---

## Local Setup & Verification

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd GetCoy

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev

# 4. Open in browser
# Navigate to http://localhost:3000
```

### Production Build
```bash
npm run build
npm run start
```
