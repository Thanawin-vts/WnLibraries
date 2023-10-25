# Wninputcontrol

Simple service for your formgroup and formcontrol.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Available Functions](#available-functions)

## Installation

```bash
$ npm i wninputcontrol
```

## Usage
To use WninputcontrolService in your Angular project, import the WninputcontrolService into your component.ts and add it to your function. For example, to use the `disable` function:

```javascript
import { WninputcontrolService } from 'wninputcontrol';
// ...
constructor(private fb: FormBuilder, private ws: WninputcontrolService)
// ...
    this.ws.disableControl(arg1, arg2, arg3)
// ...
```

`arg1`
Your formgroup which you want to access formContol<br>
`arg2`
List of formControl's name that you want to disable<br>
`arg3`
List of formControl's name that you don't want to disable<br>

## Available Functions
Every function takes the same parameters.

#### 1. `clearValidatorControl`
Functions to clear all validators in formControl.

#### 2. `resetControl`
Functions to reset value in formControl.

#### 3. `enableControl`
Functions to enable the formControl.

#### 4. `disableControl`
Functions to disable the formControl.