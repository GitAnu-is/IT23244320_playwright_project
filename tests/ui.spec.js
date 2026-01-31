const { test, expect } = require('@playwright/test');

test('Pos_UI_0001 - Verify Sinhala output clears automatically when input field is cleared', async ({ page }) => {

  // Step 1: Open Singlish to Sinhala translator
  await page.goto('https://www.swifttranslator.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  // Small wait for UI stability
  await page.waitForTimeout(2000);

  // Step 2: Locate Singlish input textarea
  const singlishInput = page.locator(
    'textarea[placeholder="Input Your Singlish Text Here."]'
  );

  // Step 3: Enter Singlish input
  await singlishInput.fill(
    'mama match eka balalaa naendhalagee gedhara yanavaa.'
  );

  // Step 4: Locate Sinhala output area and confirm output appears
  const sinhalaOutput = page.locator('div').filter({ hasText: 'මම' }).first();
  await expect(sinhalaOutput).toBeVisible({ timeout: 10000 });

  // Step 5: Clear the Singlish input field
  await singlishInput.fill('');

  // Step 6: Verify Sinhala output clears automatically
  await expect(sinhalaOutput).not.toBeVisible();
});
