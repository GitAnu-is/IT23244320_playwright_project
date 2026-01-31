const { test, expect } = require('@playwright/test');

test('Neg_Fun_0001 - Fail to correctly convert sentence with fully joined words', async ({ page }) => {

  // Step 1: Open Singlish to Sinhala translator
  await page.goto('https://www.swifttranslator.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  await page.waitForTimeout(2000);

  // Step 2: Locate Singlish input textarea
  const singlishInput = page.locator(
    'textarea[placeholder="Input Your Singlish Text Here."]'
  );

  // Step 3: Enter fully joined Singlish input
  await singlishInput.fill(
    'matabadaginiyimamakannayanavaaoyaaenavadha?'
  );

  // Step 4: Locate Sinhala output area
  const sinhalaOutput = page.locator('div').first();

  // Step 5: EXPECT correct output (system will NOT produce this)
  await expect(sinhalaOutput).toContainText(
    'මට බඩගිනියි මම කන්න යනවා ඔයා එනවද'
  );
});
test('Neg_Fun_0002 - Fail to accurately convert English-dominant mixed-language sentence', async ({ page }) => {

  // Step 1: Open Singlish to Sinhala translator
  await page.goto('https://www.swifttranslator.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  // Small wait for stability
  await page.waitForTimeout(2000);

  // Step 2: Locate Singlish input textarea
  const singlishInput = page.locator(
    'textarea[placeholder="Input Your Singlish Text Here."]'
  );

  // Step 3: Enter English-dominant mixed-language input
  await singlishInput.fill(
    'tommorrow party eka reschedule karanna plan karanavaa because general manager unavailable.'
  );

  // Step 4: Locate Sinhala output area
  const sinhalaOutput = page.locator('div').first();

  // Step 5: EXPECT a fully coherent Sinhala sentence
  // (System will NOT produce this → test will FAIL)
  await expect(sinhalaOutput).toContainText(
    'හෙට පාටිය නැවත කාලසටහන්ගත කරන්න සැලසුම් කරනවා'
  );
});
test('Neg_Fun_0003 - Fail to correctly convert sentence containing special symbols', async ({ page }) => {

  // Step 1: Open Singlish to Sinhala translator
  await page.goto('https://www.swifttranslator.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  // Small wait for stability
  await page.waitForTimeout(2000);

  // Step 2: Locate Singlish input textarea
  const singlishInput = page.locator(
    'textarea[placeholder="Input Your Singlish Text Here."]'
  );

  // Step 3: Enter Singlish input containing special symbol '@'
  await singlishInput.fill(
    'mama hospital inne @adha office yannee naehae.'
  );

  // Step 4: Locate Sinhala output area
  const sinhalaOutput = page.locator('div').first();

  // Step 5: EXPECT a fully clean Sinhala sentence without special symbols
  // (System will NOT handle '@' correctly → test FAILS)
  await expect(sinhalaOutput).toContainText(
    'මම රෝහලේ ඉන්නේ අද office යන්නේ නැහැ'
  );
});
test('Neg_Fun_0004 - Fail to accurately convert sentence with ambiguous pronoun references', async ({ page }) => {

  // Step 1: Open Singlish to Sinhala translator
  await page.goto('https://www.swifttranslator.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  // Small wait for stability
  await page.waitForTimeout(2000);

  // Step 2: Locate Singlish input textarea
  const singlishInput = page.locator(
    'textarea[placeholder="Input Your Singlish Text Here."]'
  );

  // Step 3: Enter Singlish input with ambiguous pronoun references
  await singlishInput.fill(
    'eyaa eyaa ekka eyaata baennee iiyee.'
  );

  // Step 4: Locate Sinhala output area
  const sinhalaOutput = page.locator('div').first();

  // Step 5: EXPECT a clear, disambiguated Sinhala sentence
  // (System cannot resolve pronoun ambiguity → test FAILS)
  await expect(sinhalaOutput).toContainText(
    'ඔහු ඇයට ඊයේ බැන්නේය'
  );
});
test('Neg_Fun_0005 - Fail to correctly convert sentence with incomplete grammatical structure', async ({ page }) => {

  // Step 1: Open Singlish to Sinhala translator
  await page.goto('https://www.swifttranslator.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  // Small wait for stability
  await page.waitForTimeout(2000);

  // Step 2: Locate Singlish input textarea
  const singlishInput = page.locator(
    'textarea[placeholder="Input Your Singlish Text Here."]'
  );

  // Step 3: Enter grammatically incomplete Singlish input
  await singlishInput.fill(
    'mama adha kaempas namuth vaessa.'
  );

  // Step 4: Locate Sinhala output area
  const sinhalaOutput = page.locator('div').first();

  // Step 5: EXPECT a grammatically complete Sinhala sentence
  // (System cannot infer missing structure → test FAILS)
  await expect(sinhalaOutput).toContainText(
    'මම අද කැම්පස් ගියා නමුත් වැස්ස නිසා'
  );
});
test('Neg_Fun_0006 - Fail to correctly convert sentence with inconsistent numeric and unit formatting', async ({ page }) => {

  // Step 1: Open Singlish to Sinhala translator
  await page.goto('https://www.swifttranslator.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  // Small wait for stability
  await page.waitForTimeout(2000);

  // Step 2: Locate Singlish input textarea
  const singlishInput = page.locator(
    'textarea[placeholder="Input Your Singlish Text Here."]'
  );

  // Step 3: Enter input with inconsistent numeric and unit formatting
  await singlishInput.fill(
    'iguru 1kg k RS 500 k venavaa.!'
  );

  // Step 4: Locate Sinhala output area
  const sinhalaOutput = page.locator('div').first();

  // Step 5: EXPECT a fully normalized, clear Sinhala sentence
  // (System will NOT normalize repeated "k" and punctuation → test FAILS)
  await expect(sinhalaOutput).toContainText(
    'ඉගුරු 1 කිලෝග්‍රෑම් එකක් රුපියල් 500ක් වෙනවා'
  );
});
test('Neg_Fun_0007 - Fail to correctly convert sentence containing special symbols within words', async ({ page }) => {

  // Step 1: Open Singlish to Sinhala translator
  await page.goto('https://www.swifttranslator.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  // Small wait for stability
  await page.waitForTimeout(2000);

  // Step 2: Locate Singlish input textarea
  const singlishInput = page.locator(
    'textarea[placeholder="Input Your Singlish Text Here."]'
  );

  // Step 3: Enter Singlish input with symbols embedded in words
  await singlishInput.fill(
    'api $maathara innee %heta ennee naee.'
  );

  // Step 4: Locate Sinhala output area
  const sinhalaOutput = page.locator('div').first();

  // Step 5: EXPECT a clean, symbol-free Sinhala sentence
  // (System fails to normalize embedded symbols → test FAILS)
  await expect(sinhalaOutput).toContainText(
    'අපි මාතර ඉන්නේ හෙට එන්නේ නෑ'
  );
});
test('Neg_Fun_0008 - Fail to accurately convert slang-heavy informal question sentence', async ({ page }) => {

  // Step 1: Open Singlish to Sinhala translator
  await page.goto('https://www.swifttranslator.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  // Small wait for stability
  await page.waitForTimeout(2000);

  // Step 2: Locate Singlish input textarea
  const singlishInput = page.locator(
    'textarea[placeholder="Input Your Singlish Text Here."]'
  );

  // Step 3: Enter slang-heavy informal question
  await singlishInput.fill(
    'adoo ban avulak naee needha?'
  );

  // Step 4: Locate Sinhala output area
  const sinhalaOutput = page.locator('div').first();

  // Step 5: EXPECT a fully clean, standardized Sinhala question
  // (System will not normalize heavy slang consistently → test FAILS)
  await expect(sinhalaOutput).toContainText(
    'අඩෝ බන් අවුලක් නැහැ නේද'
  );
});
test('Neg_Fun_0009 - Fail to accurately convert long joined paragraph-style Singlish input', async ({ page }) => {

  // Step 1: Open Singlish to Sinhala translator
  await page.goto('https://www.swifttranslator.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  // Small wait for stability
  await page.waitForTimeout(2000);

  // Step 2: Locate Singlish input textarea
  const singlishInput = page.locator(
    'textarea[placeholder="Input Your Singlish Text Here."]'
  );

  // Step 3: Enter long, fully joined Singlish paragraph (no spaces)
  await singlishInput.fill(
    'mamaiiyeehospitalyannakalindha meeting ekathiyannahitiyeepatangannakalin oyaata call ekakdhennathibunanaeeehenammama phone ekenhari meeting ekata enavaa.'
  );

  // Step 4: Locate Sinhala output area
  const sinhalaOutput = page.locator('div').first();

  // Step 5: EXPECT a clean, well-segmented Sinhala paragraph
  // (System cannot segment long joined input → test FAILS)
  await expect(sinhalaOutput).toContainText(
    'මම ඊයේ හොස්පිටල් යන්න කලින් meeting එක තියන්න හිටියේ'
  );
});
test('Neg_Fun_0010 - Fail to correctly convert sentence containing emoji with action verb', async ({ page }) => {

  // Step 1: Open Singlish to Sinhala translator
  await page.goto('https://www.swifttranslator.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  // Small wait for stability
  await page.waitForTimeout(2000);

  // Step 2: Locate Singlish input textarea
  const singlishInput = page.locator(
    'textarea[placeholder="Input Your Singlish Text Here."]'
  );

  // Step 3: Enter Singlish input containing emoji
  await singlishInput.fill(
    'mama 😊 naanavaa'
  );

  // Step 4: Locate Sinhala output area
  const sinhalaOutput = page.locator('div').first();

  // Step 5: EXPECT a clean Sinhala sentence without emoji
  // (System does NOT normalize/remove emoji → test FAILS)
  await expect(sinhalaOutput).toContainText(
    'මම නානවා'
  );
});
