/// <reference types="react-scripts" />

// Tells TypeScript that importing a plain .css file (import "./x.css") is valid.
// Webpack (react-scripts) handles the actual CSS; this only satisfies the type checker.
declare module "*.css";
