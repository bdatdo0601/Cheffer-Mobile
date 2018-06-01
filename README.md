# Cheffer-Mobile

Mobile interface for Project Green. Built with React Native.

## Pre-requirement

Since the project also target IOS, a MacOSX machine is a **MUST**

-   [Homebrew](https://brew.sh/)
-   [Node](https://nodejs.org/) > v8.0.0
-   [Watchman](https://facebook.github.io/watchman/) (`brew install watchman`)
-   [Yarn Package Manger](https://yarnpkg.com/)
-   **React Native CLI** (`yarn global add react-native-cli`)
-   [JDK](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) > 8
-   For Android:
    -   [Android Studio](https://developer.android.com/studio/#downloads) Follow [the installation from official React Native](https://facebook.github.io/react-native/docs/getting-started.html)
-   For IOS:
    -   [XCode](https://developer.apple.com/xcode/downloads/) Follow [the installation from official React Native](https://facebook.github.io/react-native/docs/getting-started.html)

## Installation

After clone the project simply run `yarn` to install dependencies.

## Develop

Once all dependencies are met, you can run the app on simulator device using `yarn run-android` and `yarn run-ios` respectively. To attempt to run the app on physical devices, refer to [React-Native](https://facebook.github.io/react-native/docs/getting-started.html) to configure your machines.

# File Structure

Below are the details of our file structure:

```
|-- android/                        # Contain Android native code (Android Studio/Kotlin)
|-- ios/                            # Contain IOS native code (XCode/Swift)
|-- docs/                           # Documentation
|-- src/
    |-- app/
    |   |-- index.js                # Entry point of our app
    |-- assets/                     # Storing static resources
    |-- config/                     # Configuration data
    |   |-- static/
    |-- components/                 # Reusable components
    |   |-- ExampleComponent/
    |   |   |--index.js             # Component itself
    |   |   |--style.js             # Styling for the component
    |-- containers/                 # Complex components (pages)
    |   |-- ExampleContainer/
    |   |   |--index.js
    |   |   |--style.js
    |-- layout/                     # Container wrapper
    |-- routes/                     # routing to pages
    |-- utils/                      # General functions of the app
|-- index.js                        # Entry point of project
```

-   **Component**: React component that takes in props and renders views.
    They are reusable, small and used by **Containers** and **Layouts**. (_Ex: DashboardCard - takes in `title` and `value`
    as props and renders it_)
-   **Containers**: React component that are more complex and have ability to communicate with Redux.
    They are combinations of multiple **Component** (_Ex: Dashboard Container - contains multiple DashboardCard and pass in
    props to them_)
-   **Layouts**: A combination of multiple **Components** for easy wrapping of **Containers** (_Ex: BasicLayout - contain
    SideBar and GlobalHeader Components and wraps it around Dashboard Container_).

**Containers** and **Layout** should always be independence from each other. That means they a **Container**
will never reference another **Container** and so does **Layout**. Only **Components** can be nest with each other in
this new structure.
