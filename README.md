# MGI Movement Register — Android Build

This project is configured for GitHub Actions / Android Studio builds.

## GitHub build
1. Upload the complete project to a GitHub repository.
2. Push to `main` or `master`, or run **Actions → Build Android APK → Run workflow**.
3. The workflow uses JDK 17 and Gradle 8.7 and builds `app-debug.apk`.
4. Download the APK from the workflow's **Artifacts** section.

## Important fixes in this version
- Corrected Android asset directory to `app/src/main/assets`.
- Added explicit Android Gradle Plugin 8.6.1 configuration.
- Added explicit repositories in `settings.gradle`.
- Added a valid debug/release build configuration.
- Updated GitHub Actions to provision Gradle 8.7 directly, so a Gradle wrapper is not required.
- Added WebViewClient/WebChromeClient configuration.
- Kept portrait orientation and Android Back → Yes/No exit confirmation.
- Verified `data.json` parses correctly and every data row matches the 16-column header structure.

## Current scope
The supplied register data and dashboard are embedded in the app. A real cloud backup service requires a cloud provider/backend and authentication configuration; this build does not pretend that local storage is cloud backup.
