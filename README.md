# MGI Movement Register Android App
This project converts the supplied `MGI Movement Register-2026.xlsx` into a standalone Android app.
- Dashboard with performance indicators
- Separate button for each populated Excel sheet: JAN, FEB, MAR, APR
- Searchable register tables
- Portrait/mobile-first UI
- Android back button asks Yes/No before exit
- Source workbook values are embedded in `app/src/main/assets/data.json`

Build with Android Studio (JDK 17+ and Android SDK 35). Open this folder as a project and Build > Build APK(s).
Note: this environment does not include the Android SDK/Gradle toolchain, so an APK binary could not be compiled here. The app logic and embedded data were validated separately against the supplied workbook.
