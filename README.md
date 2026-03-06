# 🚀 Playwright Automation Framework (TypeScript)

A **production-ready Playwright automation testing framework** built using **TypeScript**, **Page Object Model (POM)**, and **industry best practices**.

This project demonstrates how to build a **scalable UI automation framework** suitable for **real-world enterprise testing**.

The framework is part of the tutorials available at
👉 **QATestAcademy**

---

# 📚 What You Will Learn

This project demonstrates:

✔ Playwright setup with TypeScript
✔ Page Object Model (POM) implementation
✔ Reusable fixtures
✔ Data-driven testing
✔ Screenshot comparison
✔ Parallel test execution
✔ CI/CD with GitHub Actions
✔ Reporting with Playwright HTML reports

---

# 🏗 Framework Architecture

```
playwright-framework
│
├── tests
│   └── order.spec.ts
│
├── pages
│   ├── LoginPage.ts
│   ├── ProductsPage.ts
│   └── CartPage.ts
│
├── fixtures
│   └── loginFixtures.ts
│
├── utils
│   └── alertUtils.ts
│
├── playwright.config.ts
├── package.json
└── README.md
```

---

# 🧩 Key Design Patterns Used

### 1️⃣ Page Object Model (POM)

Each page is implemented as a **separate class**.

Example:

```ts
export class Products {

  readonly page: Page;

  constructor(page: Page){
    this.page = page;
  }

  async addToCart(productName: string){
    await this.page.getByText(productName).click();
  }
}
```

Benefits:

* Better code maintainability
* Reusable locators
* Clean test structure

---

# ⚙️ Installation

### 1️⃣ Clone Repository

```bash
git clone https://github.com/ArunPzd/playwrightProject.git
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Install Playwright Browsers

```bash
npx playwright install
```

---

# ▶️ Run Tests

Run all tests

```bash
npx playwright test
```

Run in headed mode

```bash
npx playwright test --headed
```

Run specific test

```bash
npx playwright test tests/order.spec.ts
```

---

# 📊 View Test Report

After execution:

```bash
npx playwright show-report
```

Playwright generates a **rich HTML report** including:

✔ Screenshots
✔ Videos
✔ Trace viewer
✔ Execution logs

---

# 📸 Screenshot Comparison

Playwright supports **visual regression testing**.

Example:

```ts
await expect(page).toHaveScreenshot();
```

Useful for:

* UI regression
* Layout validation
* Pixel comparison

---

# 🔄 CI/CD Integration

This framework supports **GitHub Actions CI pipeline**.

Example workflow:

```
.github/workflows/playwright.yml
```

Pipeline steps:

1️⃣ Install dependencies
2️⃣ Install browsers
3️⃣ Run Playwright tests
4️⃣ Publish report

---

# 🧪 Example Test

```ts
test('verify ordering product', async ({ page }) => {

  await page.goto("https://demo.qatestacademy.com");

  await page.getByTestId("menu-products").click();

  await page.getByTestId("add-to-cart-1").click();

  await page.getByTestId("menu-cart").click();

  await page.getByTestId("buy-now").click();

});
```

---

# 🌐 Demo Website Used for Automation

This project uses the **automation demo platform**:

👉 [https://demo.qatestacademy.com](https://demo.qatestacademy.com)

The site includes:

* Login workflow
* Product ordering
* Forms
* Alerts
* Dynamic elements
* File uploads
* Cart functionality

Perfect for **Selenium, Playwright, and Cypress automation practice**.

---

# 📖 Tutorials

Full step-by-step tutorials available at:

👉 [https://qatestacademy.com](https://qatestacademy.com)

Topics covered:

* Playwright Framework Design
* Page Object Model
* Fixtures
* CI/CD with GitHub Actions
* Automation Best Practices

---

# 🧑‍💻 Author

**Arun Prasad**

Automation Engineer | QA Educator

🌐 [https://qatestacademy.com](https://qatestacademy.com)

---

# ⭐ Support the Project

If this repository helped you:

⭐ Star the repo
🍴 Fork the project
📢 Share with other testers

---

# 📜 License

This project is licensed under the **MIT License**.
