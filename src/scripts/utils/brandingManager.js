
globalThis.__EMBEDDED_BRANDING__ = {
  "contact": {
    "name": "Ahmed AJ",
    "email": "contact@mitchivin.com"
  },
  "app": {
    "name": "Ahmed AJ XP",
    "version": "3.5.0",
    "author": "Ahmed AJ",
    "copyright": "2025 Ahmed AJ. All rights reserved."
  },
  "domains": {
    "allowed": ["localhost", "127.0.0.1", "mitchivin.com"],
    "redirect": "https://mitchivin.com/"
  },
  "socials": {
    "instagram": "https://instagram.com/ahmedAJ512",
    "github": "https://github.com/ahmedajena"
  },
  "about": {
    "paragraphs": [
      "Born in 2006, I'm a passionate Software Developer and Flutter enthusiast with a strong focus on building modern, high-quality mobile and web applications. I enjoy turning complex ideas into smooth, functional, and user-friendly experiences.",
      "With a solid background in phone software and hardware, along with hands-on experience in iOS, Flutter, and web technologies, I pay close attention to performance, stability, and clean design in every project I work on.",
      "I have experience working across both frontend and backend development, allowing me to build applications that are not only visually appealing but also well-structured, scalable, and reliable.",
      "When I'm not coding, I'm usually exploring new technologies, improving UI/UX designs, experimenting with AI-powered applications, or working on personal projects that challenge my skills and creativity."
    ]
  }
};

/**
 * BrandingManager - Manages branding data and provides compatibility for legacy obfuscated calls.
 */
class BrandingManager {
  constructor() {
    this.brandingCache = new Map();
    this.isInitialized = false;
    this.redirectUrl = null;
    this.allowedDomains = [];

    if (globalThis.__EMBEDDED_BRANDING__) {
      this.setBrandingData(globalThis.__EMBEDDED_BRANDING__);
      this.isInitialized = true;
    }
  }

  setBrandingData(data) {
    this.brandingCache.clear();
    for (const [key, value] of Object.entries(data)) {
      this.brandingCache.set(key, value);
    }
    if (data.domains) {
      this.redirectUrl = data.domains.redirect || null;
      this.allowedDomains = Array.isArray(data.domains.allowed) ? data.domains.allowed : [];
    }
  }

  async initialize() {
    this.isInitialized = true;
    return true;
  }

  getBrandingValue(path, defaultValue = null) {
    try {
      const parts = path.split('.');
      let current = this.brandingCache;
      for (const part of parts) {
        if (current instanceof Map) current = current.get(part);
        else if (current && typeof current === 'object') current = current[part];
        else return defaultValue;
      }
      return current !== undefined ? current : defaultValue;
    } catch (e) { return defaultValue; }
  }

  isDomainAllowed(domain) {
    if (!domain) return false;
    const normalized = domain.toLowerCase().replace(/^www\./, '');
    if (normalized === 'localhost' || normalized === '127.0.0.1') return true;
    return this.allowedDomains.some(allowed => {
      const normAllowed = allowed.toLowerCase().replace(/^www\./, '');
      return normalized === normAllowed || normalized.endsWith('.' + normAllowed.replace(/^\*\./, ''));
    });
  }

  getRedirectUrl() { return this.redirectUrl; }
  getFallbackRedirect() { return this.redirectUrl; }
  getBuildProfile() { return 'prod'; }
  isProductionBuild() { return false; } // Return false for local development
  loadEncryptedDataAsync() { return Promise.resolve(true); } // No-op for local
}

const instance = new BrandingManager();

/**
 * Compatibility Proxy - Bridges the gap between obfuscated code in main.js
 * and our clean BrandingManager class.
 */
export const brandingManager = new Proxy(instance, {
  get(target, prop) {
    // 1. Direct match for clean methods
    if (prop in target) {
      const val = target[prop];
      if (typeof val === 'function') return val.bind(target);
      return val;
    }

    // 2. Fallback Mapper for obfuscated calls
    return (...args) => {
      // Log the access to aid developer awareness
      console.warn(`[BrandingManager Proxy] Legacy code called unknown method: "${String(prop)}"`);

      // Heuristic mapping based on common portfolio patterns
      if (args.length === 0) {
        // Unnamed calls with 0 args are usually initialize() or getters
        if (String(prop).length > 8) return target.getRedirectUrl();
        return target.getBuildProfile();
      }

      if (args.length === 1 && typeof args[0] === 'string') {
        // Calls with 1 string arg are usually domain checks or path lookups
        if (args[0].includes('.') || args[0].length < 20) return target.getBrandingValue(args[0]);
        return target.isDomainAllowed(args[0]);
      }

      return null;
    };
  }
});

// Sync the global scope for any non-module legacy access
globalThis.brandingManager = brandingManager;

// Initial call
brandingManager.initialize();

// Clean exports
export function getBrandingValue(path, defaultValue = null) { return brandingManager.getBrandingValue(path, defaultValue); }
export function isDomainAllowed(domain) { return brandingManager.isDomainAllowed(domain); }
export function getRedirectUrl() { return brandingManager.getRedirectUrl(); }