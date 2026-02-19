# inventory-monorepo

This is a monorepo containing a web, mobile, and desktop application for inventory management.

## Prerequisites

- [Node.js](https://nodejs.org/) (Use the version specified in `package.json` engines if available, or the latest LTS)
- [npm](https://www.npmjs.com/) (Distributed with Node.js)
- For Mobile (Android):
  - [Android Studio](https://developer.android.com/studio) configured with the Android SDK and a virtual device or physical device connected.
- For Mobile (iOS) (macOS only):
  - [Xcode](https://developer.apple.com/xcode/) installed.
  - [CocoaPods](https://cocoapods.org/) installed.

## Setup

1.  Clone the repository:

    ```bash
    git clone <repository-url>
    cd electronWebDeskMobileTemplate
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

## Running the Applications

### Web Application

To run the web application in development mode:

```bash
npm run dev:web
```

This will start the Vite dev server, usually at `http://localhost:5173`.

### Mobile Application

#### Android

To run the Android application:

1.  Ensure an Android emulator is running or a physical device is connected.
2.  Run the following command:

    ```bash
    npm run dev:mobile:android
    ```

> [!TIP]
> If the build fails with an error about missing SDK, ensure the `ANDROID_HOME` environment variable is set to your Android SDK location
> (e.g., `C:\Users\<User>\AppData\Local\Android\Sdk`).
> See [troubleshooting](#troubleshooting)

#### iOS (macOS only)

To run the iOS application:

1.  Ensure you have Xcode and CocoaPods installed.
2.  Run the following command to install pods (first time only):
    ```bash
    cd apps/mobile/ios && pod install && cd ../../..
    ```
3.  Run the application:
    ```bash
    npm run dev:mobile:ios
    ```

### Desktop Application

To run the desktop application (Electron):

```bash
npm run dev:desktop
```

## Troubleshooting

### Android: SDK Location Not Found

If you encounter the error `SDK location not found`, follow these steps to fix it on Windows:

1.  **Check if Android Studio is installed**:
    - Download from [Android Studio](https://developer.android.com/studio).
    - Ensure "Android SDK", "Android SDK Platform", "Android Virtual Device", and "Android SDK Command-line tools" are selected during installation.

2.  **Find your SDK path**:
    - Default location: `C:\Users\<YourUsername>\AppData\Local\Android\Sdk`

3.  **Add `ANDROID_HOME` Environment Variable**:
    - Open Windows Search -> "Environment Variables" -> "Edit the system environment variables".
    - Click "Environment Variables".
    - Under "System variables", click "New".
    - Variable name: `ANDROID_HOME`
    - Variable value: `C:\Users\<YourUsername>\AppData\Local\Android\Sdk` (Replace `<YourUsername>` with your actual username).
    - Click OK.

4.  **Add Platform Tools to Path**:
    - In "System variables", find `Path` and click "Edit".
    - Add the following entries:
      - `%ANDROID_HOME%\platform-tools`
      - `%ANDROID_HOME%\emulator`
      - `%ANDROID_HOME%\tools`
      - `%ANDROID_HOME%\tools\bin`
    - Click OK and restart your terminal.

5.  **Verify Setup**:
    - Run `adb --version` in a new terminal.

6.  **Alternative Quick Fix (Project Level)**:
    - Create a file `local.properties` in `apps/mobile/android/`.
    - Add the line: `sdk.dir=C:\\Users\\<YourUsername>\\AppData\\Local\\Android\\Sdk` (Note the double backslashes).
    - Example: `sdk.dir=C:\\Users\\HKRP\\AppData\\Local\\Android\\Sdk`

7.  **Run Doctor**:
    - Run `npx react-native doctor` from the root directory and fix any issues.

8.  **Re-run the Android App**:
    - `npm run dev:mobile:android`

## Production Build

### Web Application

To build the web application for production:

```bash
npm run build:web
```

The build artifacts will be in `apps/web/dist`.

### Desktop Application

To create a distributable desktop application (installer/executable):

```bash
npm run build:desktop
```

### Desktop: EPERM: operation not permitted

If you encounter an `EPERM` error during the desktop build (e.g., `rename ... .webpack`), it usually means a file is locked by another process (like a running instance of the app or a terminal).

1.  **Close all running instances** of the inventory app.
2.  **Close any other terminals** that might be open in the `apps/desktop` directory.
3.  Run the clean script:
    ```bash
    cd apps/desktop
    npm run clean
    cd ../..
    ```
4.  Retry the build:
    ```bash
    npm run build:desktop
    ```

The output will be in `apps/desktop/out`.

### Mobile Application

#### Android

To build the release APK for Android:

```bash
npm run build:android
```

The APK will be generated at `apps/mobile/android/app/build/outputs/apk/release/app-release.apk`.

> [!NOTE]
> The current setup uses the default debug keystore for signing the release build. For a true production release, you must generate a private keystore and configure `signingConfigs` in `apps/mobile/android/app/build.gradle`.

#### iOS (macOS only)

To build the release app for iOS:

```bash
npm run build:ios
```

This commands requires Xcode and proper code signing certificates to be set up in the project.
