# Angular 20 + Jest (Zoneless) Starter

This is a starter project for Angular 20 with fully configured **Jest** testing and **zoneless** change detection.

No Karma, no Jasmine – just a modern testing setup ready to go!

## 🧱 Features

- ✅ Angular 20+
- ✅ Jest configured as the test runner
- ✅ `jest-preset-angular` with zoneless testing enabled
- ✅ No usage of deprecated `@angular-builders/jest`
- ✅ TypeScript and tsconfig setup for Jest
- ✅ Fast, stable, and modern testing environment

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/Zenan23/ng20zoneless-jest.git
```

### 2. Install dependencies

```bash
yarn
```

### 3. Run tests

```bash
yarn test
```

## 🧪 Zoneless Testing Explained

Zoneless testing is enabled using Angular's experimental support for change detection without `NgZone`, resulting in faster and more predictable unit tests.

Zoneless setup is located in:

```ts
src/setup-jest.ts
```

It includes:

```ts
import { setupZonelessTestEnv } from 'jest-preset-angular/setup-env/zoneless';

setupZonelessTestEnv();
```

With this setup, you no longer need to use `fakeAsync()` or `tick()` in your tests.

## 🔧 Project Structure

Key files:

- `jest-config.ts` – Main Jest configuration file (in TypeScript)
- `src/setup-jest.ts` – Test environment setup for zoneless testing
- `tsconfig.spec.json` – TypeScript configuration for test files
- No changes required in `angular.json`

## 📦 Common Scripts

- `yarn start` – Run the dev server
- `yarn build` – Build the application
- `yarn test` – Run Jest tests

## 📚 Useful References

- [Angular Docs](https://angular.dev/guide/zoneless)
- [Jest Docs](https://jestjs.io/docs/getting-started)
- [jest-preset-angular](https://github.com/thymikee/jest-preset-angular)
---

## 📄 License

This project is licensed under the MIT License.
