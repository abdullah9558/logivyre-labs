# Logivyre Labs Portfolio

Portfolio and software download hub for Mera Markaz, TestMind AI and SimplePOS.

## Architecture

- `app/` — public Next.js portfolio and project pages.
- `app/api/releases/` — Node-compatible TypeScript API routes for installer publishing and downloads.
- `apps/release-console/` — private Angular interface for uploading Windows installers.
- D1 stores release metadata; R2 stores installer files.

## Run the website

Use Node.js 22.13 or newer.

```powershell
npm install
$env:RELEASE_ADMIN_KEY='your-long-secret'
npm run dev
```

Open `http://localhost:3000`.

## Run the Angular release console

```powershell
cd apps/release-console
npm install
npm start
```

Open the console URL, enter the portfolio API URL and the same release admin key, then select a signed `.exe` or `.msi` installer.

The existing SimplePOS installer is at `E:\Projects\POS-System\release\SimplePOS-Setup-1.0.6.exe`. It is intentionally not committed; publish it through the console so its bytes live in object storage.
