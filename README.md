📌 Project Overview

This repository contains an automated test suite developed using Playwright to evaluate the Singlish to Sinhala transliteration system available at:

👉 https://www.swifttranslator.com/

The project focuses on:

Functional correctness of Singlish ➜ Sinhala conversion

Robustness against invalid or irregular inputs

UI behavior such as real-time output updates and cleared input handling

This work is completed as part of Assignment 1 for IT3040 – ITPM (Semester 1).

🧪 Test Coverage

The automated tests cover the following areas:

✅ Positive functional test cases (correct Singlish inputs)

❌ Negative functional test cases (invalid, noisy, or irregular inputs)

🖥️ UI test cases:

Real-time Sinhala output update while typing

Clearing input clears the output automatically

All test cases are aligned with the Excel test case document (Appendix 2 format).

🛠️ Technologies Used

Node.js (LTS)

Playwright

JavaScript

📂 Project Structure
IT23244320_PLAYWRIGHT_PROJECT/
│
├── node_modules/
│
├── playwright-report/
│
├── test-results/
│
├── tests/
│   ├── pos_fun.spec.js
│   ├── neg_fun.spec.js
│   └── ui.spec.js
│
├── .gitignore
├── package.json
├── package-lock.json
└── playwright.config.js


⚙️ Prerequisites

Ensure the following are installed on your machine:

Node.js (LTS version)

npm (comes with Node.js)

Check installation:

node -v
npm -v

📥 Installation

Clone the repository and install dependencies:

npm install

▶️ Running the Tests

Run all Playwright tests using:

▶️ Run ONLY UI tests
npx playwright test tests/ui.spec.js --headed

▶️ STEP 3️⃣: Run negative tests
npx playwright test tests/neg_fun.spec.js --headed

▶️ Run the tests:Run positive tests
npx playwright test tests/pos_fun.spec.js --headed

npx playwright test

📊 Viewing Test Reports

Generate and view the HTML report:

npx playwright test --reporter=html
npx playwright show-report

🌐 Browser Support

Playwright tests are executed using the browsers installed during setup:

Chromium

Firefox

WebKit
