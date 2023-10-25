# Wninputpattern

Simple directive for your input pattern.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Available Directives](#available-directives)

## Installation

```bash
  npm i wninputpattern
```

## Usage
To use WninputpatternDirective in your Angular project, import the WninputpatternModule into your module and add it to your template.For example, to use the `Number` directive:

```bash
    import { WninputpatternModule } from 'wninputpattern';

    @NgModule({
        // ...
        imports: [
            // ...
            WninputpatternModule,
        ],
        // ...
    })
export class AppModule { }
```

In your component's template:

```bash
  <input Number/>
```

## Available Directives

#### 1. `Number`
Directive to make input field will only accept numeric values.

#### 2. `Thai`
Directive to make input field will only accept Thai Alphabet.

#### 3. `English`
Directive to make input field will only accept English Alphabet.

#### 4. `Special`
Directive to make input field will only don't accept some special characters (accept ; , . () ' : - / + # @ & _ [ ] % *).

#### 5. `SpecialAll`
Directive to make input field will only don't accept all special characters.

#### 6. `Email`
Directive to make input field will only accept email pattern.
