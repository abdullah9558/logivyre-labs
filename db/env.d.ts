declare namespace Cloudflare {
  interface Env {
    DB: D1Database;
    FILES: R2Bucket;
    RELEASE_ADMIN_KEY?: string;
  }
}
