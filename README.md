# An Opinionated Vue and Supabase Boilerplate

## Status

[![Netlify Status](https://api.netlify.com/api/v1/badges/f4982a72-e155-4fb3-86b1-0881d3fb170c/deploy-status)](https://app.netlify.com/sites/vue-and-supabase-boilerplate-demo/deploys)

Current branch deployed: `templates/with-manual-form-and-vee-validate`

## Introduction

This template should help get you started developing with Vue 3 in Vite.

It is an opinionated template that uses:

- Vue 3
- Vue Router with Unplugin Vue Router
- Pinia
- VeeValidate for the forms
- VueUse
- and the awesome Supabase for the backend

## Custom Commands

The boilerplate contains `.bashrc` file with handy commands for Supabase CLI and more. To use it, run:

```sh
source .bashrc
```

## Supabase

You can [install Supabase CLI with Scoop](https://scoop.sh/#/apps?q=supabase).

## Environment Variables

You'll need to create and fill a `.env` file from the `.env.prod` available.

You'll need to create an account on Supabase to fill the following variables.

The values for Supabase variables are found under `Project Settings blade > API blade` in your project dashboard:

- _URL_ = variable `VITE_SUPABASE_URL`
- _anon public_ = variable `VITE_SUPABASE_KEY`
- _service_role secret_ = variable `VITE_SUPABASE_PROJECT_SERVICE_ROLE`

IMPORTANT: [some changes are planned in 2025](https://github.com/orgs/supabase/discussions/29260) regarding API keys.

The `VITE_TESTING_USER_EMAIL` is used to seed the database.
The `SUPABASE_PROJECT_ID` is used to run the custom commands `sp-link-env` and `sp-gen-types` on your local machine. See `.bashrc`.
The `SUPABASE_PROJECT_PASSWORD` is used to run the custom command `sp-link-env` on your local machine. See `.bashrc`.

The values for hCaptcha variables are found on your account:

- _Secret_ under the settings page or at account creation = variable `VITE_HCAPTCHA_SECRET`
- _Site key_ under the sites page = variable `VITE_HCAPTCHA_SITEKEY`

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
# Or
npm i
```

### Compile and Hot-Reload for Development

```sh
npm run dev
# Or, if using the .bashrc
nd
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
# Or, if using the .bashrc
nb
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Semantic Release setup

To use Semantic Release, you need to follow [this complete guide](https://gonzalohirsch.com/blog/semantic-release-and-branch-protection-rules/) to create your GitHub App installed on your account only to give it force-push rights when `semantic-release` workflow runs.

Or you can simply use the `tag-release.sh` script in the repository root, for a simplier but manual step.
