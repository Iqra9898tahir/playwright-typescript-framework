# Playwright TypeScript Automation Framework

![Playwright Tests](https://github.com/Iqra9898tahir/playwright-typescript-framework/actions/workflows/playwright.yml/badge.svg)

## 📋 Overview
A production-ready end-to-end test automation framework built with Playwright and TypeScript, following FAANG engineering best practices.

## 🛠️ Tech Stack
- **Playwright** — E2E testing framework
- **TypeScript** — Type-safe JavaScript
- **GitHub Actions** — CI/CD pipeline
- **Node.js** — Runtime environment

## 🏗️ Framework Architecture
src/
  fixtures/     — Custom Playwright fixtures
  pages/        — Page Object Model classes
  tests/        — Test specifications
  types/        — TypeScript interfaces

## 📐 Design Patterns Used
- Page Object Model (POM)
- Encapsulation
- Inheritance
- Abstraction
- Polymorphism
- DRY Principle

## 🧪 Test Coverage
| Page | Tests |
|------|-------|
| Login Page | Valid login, Invalid login, Page title |
| Inventory Page | Add items, Remove items, Badge count |
| Cart Page | Item names, Navigation, Checkout |
| Checkout Page | Form filling, Continue, Cancel |

## ⚙️ Setup & Installation

### Install dependencies
npm ci

### Install browsers
npx playwright install

### Environment Variables
Create .env file in root:
BASE_URL=https://www.saucedemo.com
TEST_USERNAME=standard_user
TEST_PASSWORD=secret_sauce

##  Run Tests

### Run all tests
npx playwright test

### Run specific file
npx playwright test cart

### Run with browser visible
npx playwright test --headed

### View report
npx playwright show-report

##  CI/CD Pipeline
Tests run automatically on every push via GitHub Actions.

## 👩‍💻 Author
Iqra Tahir — QA Engineer transitioning to SDET
GitHub: @Iqra9898tahir
