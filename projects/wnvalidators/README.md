# Wnvalidators

Simple service for your formgroup and formcontrol.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Available Validators](#available-validators)

## Installation

```bash
$ npm i wninputcontrol
```

## Usage
To use Wnvalidators in your Angular project, import the Validators contained in Wnvalidators into your component.ts and add it to your formControl. For example, to use the `CheckBoxValidator` Validator:

```javascript
import { CheckBoxValidator } from 'wninputcontrol';
// ...
    this.formgroup.get('formControlName')?.setValidators(CheckBoxValidator)
// ...
```

If don't have style or anything for invalid form, you can `console.log` to view errors.

## Available Validators

#### 1. `CheckBoxValidator`
Validator to check the checkbox is selected or not.

#### 2. `ValidatorsCitizenId`
Validator to check the citizen ID number with 13 digits and some calculate the citizen ID number.

#### 3. `ValidatorsPassport`
Validator to check passport number using 9 characters.

#### 4. `ValidatorsTaxId`
Validator to check the tax number with 10 or 13 digits.