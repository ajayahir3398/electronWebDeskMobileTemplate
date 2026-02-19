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
> If the build fails with an error about missing SDK, ensure the `ANDROID_HOME` environment variable is set to your Android SDK location (e.g., `C:\Users\<User>\AppData\Local\Android\Sdk`).

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
