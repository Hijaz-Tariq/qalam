/*
 **An array of routes that are accessible to the public
 **these routes dont require authentication
 ** @type {string[]}
 */

export const publicRoutes = ["/auth/new-verification","/api/uploadthing","/api/webhooks"];

/*
 **An array of routes that are used for authentication
 **these routes will redirect logged in users to /settings
 ** @type {string[]}
 */
export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
  "/auth/reset",
  "/auth/new-password",
];

/*
 **The prefix for API authentication routes
 **Routes that start with these prefix are used for API authentication purposes
 ** @type {string}
 */

export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after logging in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";