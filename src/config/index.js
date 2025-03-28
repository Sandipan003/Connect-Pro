// Firebase Configuration
export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

// API Keys
export const apiKeys = {
  googleMaps: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  stripe: process.env.REACT_APP_STRIPE_PUBLIC_KEY,
};

// App Configuration
export const appConfig = {
  apiUrl: process.env.REACT_APP_API_URL,
  environment: process.env.REACT_APP_ENVIRONMENT,
  isDevelopment: process.env.REACT_APP_ENVIRONMENT === 'development',
  isProduction: process.env.REACT_APP_ENVIRONMENT === 'production',
};

// Database Collections
export const collections = {
  users: 'users',
  posts: 'posts',
  jobs: 'jobs',
  messages: 'messages',
  notifications: 'notifications',
  connections: 'connections',
};

// Storage Paths
export const storagePaths = {
  profileImages: 'profile-images',
  postImages: 'post-images',
  jobImages: 'job-images',
};

// API Endpoints
export const apiEndpoints = {
  auth: {
    login: '/auth/login',
    register: '/auth/register',
    logout: '/auth/logout',
    resetPassword: '/auth/reset-password',
  },
  users: {
    profile: '/users/profile',
    updateProfile: '/users/profile/update',
    connections: '/users/connections',
  },
  jobs: {
    list: '/jobs',
    create: '/jobs/create',
    apply: '/jobs/apply',
  },
  messages: {
    conversations: '/messages/conversations',
    send: '/messages/send',
  },
};

// Validation Rules
export const validationRules = {
  password: {
    minLength: 8,
    requireUppercase: true,
    requireLowercase: true,
    requireNumber: true,
    requireSpecialChar: true,
  },
  username: {
    minLength: 3,
    maxLength: 20,
    pattern: /^[a-zA-Z0-9_]+$/,
  },
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
};

// UI Configuration
export const uiConfig = {
  theme: {
    primary: '#3B82F6',
    secondary: '#10B981',
    accent: '#F59E0B',
    background: '#F3F4F6',
    text: '#1F2937',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  maxWidth: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
};

// Error Messages
export const errorMessages = {
  auth: {
    invalidEmail: 'Please enter a valid email address',
    invalidPassword: 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character',
    emailInUse: 'This email is already registered',
    userNotFound: 'No account found with this email',
    wrongPassword: 'Incorrect password',
    tooManyRequests: 'Too many attempts. Please try again later',
  },
  profile: {
    updateFailed: 'Failed to update profile. Please try again',
    imageUploadFailed: 'Failed to upload image. Please try again',
  },
  jobs: {
    createFailed: 'Failed to create job posting. Please try again',
    applyFailed: 'Failed to apply for job. Please try again',
  },
  messages: {
    sendFailed: 'Failed to send message. Please try again',
  },
};

// Success Messages
export const successMessages = {
  auth: {
    login: 'Successfully logged in',
    register: 'Account created successfully',
    logout: 'Successfully logged out',
    resetPassword: 'Password reset email sent',
  },
  profile: {
    update: 'Profile updated successfully',
    imageUpload: 'Profile image updated successfully',
  },
  jobs: {
    create: 'Job posting created successfully',
    apply: 'Application submitted successfully',
  },
  messages: {
    send: 'Message sent successfully',
  },
}; 