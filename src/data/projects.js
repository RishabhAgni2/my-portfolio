export const projects = [
  {
    id: "trusttrade",
    featured: true,
    name: "TrustTrade",
    tagline: "Full-stack escrow marketplace with real-time payments & AI fraud detection",
    description:
      "A secure escrow-based marketplace enforcing a 7-state transaction lifecycle (pending → funded → delivered → released → disputed → refunded → cancelled), built with production-grade patterns: idempotent payments, background job automation, and multi-provider auth.",
    stack: [
      "React.js", "Node.js", "Express.js", "MongoDB", "Redis",
      "Bull Queue", "Razorpay", "Socket.io", "Passport.js", "Google Gemini API"
    ],
    github: "https://github.com/RishabhAgni2/TurstTrade",
    demo: "https://turst-trade.vercel.app/",
    highlights: [
      {
        title: "Secure REST API Architecture",
        detail:
          "9 route modules enforcing a 7-state escrow lifecycle with RBAC middleware for buyer/seller/admin roles, global rate limiting (express-rate-limit), Helmet.js security headers, and a dedicated express.raw() parser for Razorpay webhook HMAC-SHA256 signature verification."
      },
      {
        title: "3-Layer Redis Caching System",
        detail:
          "Payment idempotency locks (5-min TTL), webhook deduplication keys (24-hr TTL), and a Bull Queue background job scheduler for automated 7-day escrow auto-release with exponential backoff retry — guaranteeing exactly-once fund processing."
      },
      {
        title: "Multi-Provider Auth + AI Integration",
        detail:
          "Google OAuth 2.0, GitHub OAuth 2.0, and JWT auth via Passport.js with secure httpOnly refresh-token cookies, email OTP verification, and refresh-token rotation with replay attack detection. Google Gemini API powers AI product descriptions and automated dispute fraud detection."
      }
    ],
    // Short chips shown on the compact card view
    keyFeatures: [
      "Redis", "Bull Queue", "JWT", "OAuth 2.0", "Razorpay",
      "Socket.io", "Gemini AI", "RBAC", "Payment Idempotency",
      "Background Jobs", "Webhook Verification"
    ]
  },
  {
    id: "chainverify",
    featured: false,
    name: "ChainVerify",
    tagline: "Blockchain-based document verification system",
    description:
      "A tamper-proof document verification platform storing SHA-256 document hashes on the Sepolia testnet, giving every document an immutable, verifiable audit trail.",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "Solidity", "Ethereum", "Ethers.js"],
    github: "https://github.com/RishabhAgni2/blockchain-identity-security-system",
    demo: "https://chainverify-frontend.vercel.app/login",
    highlights: [
      {
        title: "JWT-Protected REST API",
        detail:
          "7 RESTful endpoints across authRoutes, documentRoutes, and verifyRoutes, protected by custom JWT middleware that authenticates Bearer tokens, injects the authenticated user into req.user, and returns standardized 401 responses on protected routes."
      },
      {
        title: "On-Chain Verification via Ethers.js",
        detail:
          "Singleton blockchain client using JsonRpcProvider and Wallet signer to communicate with deployed Solidity smart contracts on Sepolia testnet. Reduced gas costs by checking on-chain proof existence before every write transaction."
      },
      {
        title: "Schema Design & Deployment",
        detail:
          "MongoDB schemas for User, Document, and Verification with field-level validation, unique indexes, enum constraints, and a soft-delete pattern for audit-trail preservation. Backend on Render, frontend on Vercel, MongoDB Atlas."
      }
    ],
    keyFeatures: ["Solidity", "Ethers.js", "JWT Middleware", "Sepolia Testnet", "Gas Optimization"]
  },
  {
    id: "fintrack",
    featured: false,
    name: "FinTrack",
    tagline: "Stock portfolio tracking dashboard with live market data",
    description:
      "A portfolio management dashboard separating live holdings from immutable transaction history, with efficient third-party market data integration.",
    stack: ["React", "Node.js", "Express.js", "MongoDB", "TailwindCSS", "Recharts"],
    github: "https://github.com/RishabhAgni2/fintrack",
    demo: "https://fintrack-ten-lilac.vercel.app/login",
    highlights: [
      {
        title: "RESTful API with JWT Sessions",
        detail:
          "8 endpoints across authentication and portfolio modules with JWT middleware for stateless session verification and standardized HTTP status codes (200/201/400/401/404/500)."
      },
      {
        title: "Normalized Data Model",
        detail:
          "Separated current portfolio holdings from immutable transaction history using schema-level enums, field-level validation, and a compound index on transaction queries for efficient sorted retrieval."
      },
      {
        title: "Finnhub API Service Layer",
        detail:
          "Reusable backend service with 60-second in-memory TTL caching, symbol normalization (NSE → Finnhub format), request timeout handling, and Promise.all() for concurrent price fetching across holdings."
      }
    ],
    keyFeatures: ["Finnhub API", "Recharts", "Compound Indexing", "In-Memory Caching"]
  }
];