# enercity Icons Package

## How to use Icons

```ts

import { ArrowDown } from "@neoskop/enercity-icons/action"


return <ArrowDown />
```

## How to add new Icons?

> Attention! 🚨 You need to create an .env file. The secrets are in 1PW.

1. Start downloading the latest icons from Figma.<br />
```shell
npm run download-figma-icons
```
2. Then you need to convert the SVGs to React components using:
```shell
npm run create-icons
```
3. Create a Pull Request and merge the new icons into `main`.
4. Start a new run of the `Release package` workflow in https://github.com/neoskop/enercity-icons/actions.


### Features ℹ️

Automated Changelog generation

tbd...



### Todo

Maybe change Cache to Download only the newest icons old icons wont be updated?
