# iOS wifi settings page clone Application

A clone for the iOS 12 wifi settings page using ionic, originally made to get the wifi password from my uni cafeteria but never continued this project

**created July 10, 2019**


## Table of Contents
- [App Preview](#app-preview)
- [Getting Started](#getting-started)
- [Deploying](#deploying)
  - [Progressive Web App](#progressive-web-app)
  - [Android](#android)
  - [iOS](#ios)


  ## App Preview

  ### [iOS 12 Settings/Wifi](https://github.com/julescript/ios-wifi-settings-ionic.git/src/pages/home)

  | DEMO  | Wifi settings Page  |  Password Page  |
  | -----------------| -----| -----|
  | ![GIF](/demo/ios-wifi-settings-demo.gif) | ![Wifi settings Page  ](/demo/ios-wifi-settings-screenshot-1.png) | ![Password Page](/demo/ios-wifi-settings-screenshot-2.png) |


## Getting Started

* [Download the installer](https://nodejs.org/) for Node LTS.
* Install the ionic CLI globally: `npm install -g ionic`
* Clone this repository: `git clone https://github.com/ionic-team/ionic-conference-app.git`.
* Run `npm install` from the project root.
* Run `ionic serve` in a terminal from the project root.
* Profit. :tada:

_Note: See [How to Prevent Permissions Errors](https://docs.npmjs.com/getting-started/fixing-npm-permissions) if you are running into issues when trying to install packages globally._


## Deploying

### Progressive Web App

1. Un-comment [these lines](https://github.com/ionic-team/ionic2-app-base/blob/master/src/index.html#L21)
2. Run `npm run ionic:build --prod`
3. Push the `www` folder to your hosting service

### Android

1. Run `ionic cordova run android --prod`

### iOS

1. Run `ionic cordova run ios --prod`
