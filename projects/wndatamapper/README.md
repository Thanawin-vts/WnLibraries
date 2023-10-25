# Wndatamapper

Simple pipe for match and transformation data.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Example](#example)

## Installation

```bash
$ npm i wndatamapper
```

## Usage
To use WndatamapperPipe in your Angular project, import the WndatamapperModule into your module and add it to your template.For example, to use the `datamapper` pipe:

```javascript
import { WndatamapperModule } from 'wndatamapper';

    @NgModule({
        // ...
        imports: [
            // ...
            WndatamapperModule,
            // ...
        ],
        // ...
    })
export class AppModule { }
```

In your component's template:

```html
<p>{{ data | datamapper : arg1 : arg2 : arg3 }}</p>
```
`arg1`
Your data list<br>
`arg2`
Key value of input<br>
`arg3`
Key value of output<br>

## Example

In your component's template:

```html
<p>{{ "TH" | datamapper : list : "code" : "name"  }}</p>
```
In your component's script:

```javascript
list = [
    {
        code: 'TH',
        name: 'Thailand',
    },
    {
        code: 'JP',
        name: 'Japan',
    },
    {
        code: 'UK',
        name: 'United Kingdom',
    },
    {
        code: 'UK',
        name: 'United Kingdom',
    },
];
// Pipe Output : Thailand
```
