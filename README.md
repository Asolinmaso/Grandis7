# Grandis7 Next.js App

A Next.js application featuring a custom footer design for Grandis7.

## Features

- Modern Next.js 14+ with App Router
- TypeScript support
- Tailwind CSS for styling
- Responsive footer design matching the provided design
- Custom footer with company information, quick links, and contact details

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
Grandis7/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   └── Footer.tsx      # Footer component
├── public/
│   └── images/
│       ├── logo.png    # Company logo
│       └── footer_img.png  # City skyline image
└── package.json
```

## Footer Design

The footer includes:
- City skyline image at the top
- Company logo and description
- Social media links (Facebook, LinkedIn, Instagram)
- Quick navigation links
- Contact information (phone, email, address)
- Copyright notice

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
