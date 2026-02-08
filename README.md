# SauceDemo Automation Test Suite

## Overview

This project contains a **TypeScript Playwright automation test suite** for [SauceDemo](https://www.saucedemo.com/), a sample e-commerce website. The suite demonstrates automated testing of critical e-commerce flows including login, product management, cart, and checkout.

The tests are **modular**, **maintainable**, and follow **QA best practices**.

---

### Example GitHub Actions Integration

- Workflow file: `.github/workflows/playwright.yml`
- Steps included:
 - Checkout repository
 - Setup Node.js and dependencies
 - Install Playwright browsers
 - Run tests with `list`, `html`, and `junit` reporters
 - Upload HTML and JUnit reports as artifacts

This ensures tests are run automatically on every push or PR, and results are available for review without manual execution.

---

## Test Strategy

### 1. Identify Key Functionality

| Feature / Flow         | Priority | Reason |
|------------------------|---------|--------|
| Login                  | High    | Required to access the application |
| Product listing & Cart | High    | Core e-commerce functionality |
| Checkout process       | High    | Ensures orders can be placed |
| Logout / session       | Medium  | Security, lower impact |

### 2. Design Principles

- **Page Object Model (POM)** in TypeScript for reusable and maintainable code.
- **Dynamic selectors** to reduce flakiness and avoid XPath.
- **Assertions included** to validate key outcomes.
- **Modular tests** to allow independent execution.

---

## Folder Structure

```
PLAYWRIGHT-DEMO/
├─ pages/                 # Page Object classes (TypeScript)
│  ├─ LoginPage.ts
│  ├─ ProductsPage.ts
│  ├─ CartPage.ts
│  └─ CheckoutPage.ts
├─ tests/                 # TypeScript test files
│  ├─ login.spec.ts
│  ├─ products.spec.ts
│  ├─ cart.spec.ts
│  └─ checkout.spec.ts
├─ package.json
├─ playwright.config.ts
└─ README.md
```

---

## Test Cases

| Test Case ID | Feature  | Description                       | Expected Result                      | Priority |
|--------------|---------|-----------------------------------|--------------------------------------|---------|
| TC001        | Login    | Valid login                       | Redirect to inventory page           | High    |
| TC002        | Login    | Invalid login                     | Error message displayed              | High    |
| TC003        | Products | Add product to cart               | Product appears in cart              | High    |
| TC004        | Products | Remove product from cart          | Product removed                      | High    |
| TC005        | Cart     | Open cart                         | Shows added products                 | High    |
| TC006        | Checkout | Complete checkout                 | Order success message                | High    |
| TC007        | Checkout | Checkout validation with empty info | Validation error displayed        | Medium  |

---

## How to Run

1. Install dependencies:

```bash
npm install
npx playwright install
```

2. Run all tests:

```bash
npm test
```

3. Run tests in headed mode (browser visible):

```bash
npx playwright test --headed
```

4. Run a specific test file:

```bash
npx playwright test tests/login.spec.ts
```

5. View test report:

```bash
npx playwright show-report
```

6. CI/CD Execution

- Once pushed to GitHub, the workflow `.github/workflows/playwright.yml` automatically runs tests on every push or pull request.
- Reports are uploaded as artifacts and can be downloaded or integrated into dashboards.

---

## Key Takeaways

- TypeScript ensures **strong typing and better maintainability**.
- Modular **Page Objects** make tests reusable and easy to scale.
- Dynamic selectors improve **stability and reduce flakiness**.
- Assertions validate that **automation verifies functional behavior**, not just actions.
- CI/CD integration ensures tests are **automatically run and reported** on every commit.
