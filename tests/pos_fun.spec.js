const { test, expect } = require('@playwright/test');

test('Pos_Fun_0001 - Convert present tense daily activity sentence', async ({ page }) => {

  // Step 1: Open the Singlish to Sinhala translator
  await page.goto('https://www.swifttranslator.com/');

  // Step 2: Locate Singlish input textarea explicitly
  const singlishInput = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');

  // Step 3: Enter Singlish input
  await singlishInput.fill('mama dhaen kaeema kanagaman inne.');

  // Step 4: Locate Sinhala output area (div)
  const sinhalaOutput = page.locator('div').filter({ hasText: 'මම' }).first();

  // Step 5: Wait until Sinhala output appears
  await expect(sinhalaOutput).toBeVisible({ timeout: 10000 });

  // Step 6: Validate expected Sinhala meaning
  await expect(sinhalaOutput).toContainText('මම දැන් කෑම');
});
test('Pos_Fun_0002 - Convert polite request sentence with formal wording', async ({ page }) => {

  // Step 1: Open Singlish to Sinhala translator
  await page.goto('https://www.swifttranslator.com/', {
  waitUntil: 'domcontentloaded',
  timeout: 60000
});

// Small buffer for Firefox stability
await page.waitForTimeout(2000);


  // Step 2: Locate Singlish input textarea
  const singlishInput = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');

  // Step 3: Enter Singlish polite request
  await singlishInput.fill(
    'karunaakaralaa mata obagee haedhunumpatha labaa dhenna puluvandha?'
  );

  // Step 4: Locate Sinhala output area
  const sinhalaOutput = page.locator('div').filter({ hasText: 'කරුනාකරලා' }).first();

  // Step 5: Wait until Sinhala output appears
  await expect(sinhalaOutput).toBeVisible({ timeout: 10000 });

  // Step 6: Validate expected Sinhala output
  await expect(sinhalaOutput).toContainText('කරුනාකරලා මට ඔබගේ හැදුනුම්පත');
});
test('Pos_Fun_0003 - Convert imperative command sentence with positional instruction', async ({ page }) => {

  // Step 1: Open Singlish to Sinhala translator
  await page.goto('https://www.swifttranslator.com/');

  // Step 2: Locate Singlish input textarea
  const singlishInput = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');

  // Step 3: Enter imperative command input
  await singlishInput.fill('pitipassee poolimee aya issarahata yanna.');

  // Step 4: Locate Sinhala output area
  const sinhalaOutput = page.locator('div').filter({ hasText: 'පිටිපස්සේ' }).first();

  // Step 5: Wait until Sinhala output appears
  await expect(sinhalaOutput).toBeVisible({ timeout: 10000 });

  // Step 6: Validate expected Sinhala output
  await expect(sinhalaOutput).toContainText('පිටිපස්සේ පෝලිමේ අය ඉස්සරහට යන්න');
});
test('Pos_Fun_0004 - Convert compound sentence with activity and weather-related cause', async ({ page }) => {

  // Step 1: Open Singlish to Sinhala translator
  await page.goto('https://www.swifttranslator.com/');

  // Step 2: Locate Singlish input textarea
  const singlishInput = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');

  // Step 3: Enter compound sentence input
  await singlishInput.fill(
    'mama sellan karanna enavaa, namuth vaessa nisaa poddak pahu venavaa.'
  );

  // Step 4: Locate Sinhala output area
  const sinhalaOutput = page.locator('div').filter({ hasText: 'මම සෙල්ලන්' }).first();

  // Step 5: Wait until Sinhala output appears
  await expect(sinhalaOutput).toBeVisible({ timeout: 10000 });

  // Step 6: Validate expected Sinhala output
  await expect(sinhalaOutput).toContainText(
    'මම සෙල්ලන් කරන්න එනවා, නමුත් වැස්ස නිසා පොඩ්ඩක් පහු වෙනවා'
  );
});
test('Pos_Fun_0005 - Convert mixed Singlish and English sentence with work-related context', async ({ page }) => {

  // Step 1: Open Singlish to Sinhala translator
  await page.goto('https://www.swifttranslator.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  // Small wait for browser stability
  await page.waitForTimeout(2000);

  // Step 2: Locate Singlish input textarea
  const singlishInput = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');

  // Step 3: Enter mixed Singlish + English input
  await singlishInput.fill(
    'heta office ekee zoom meeting ekak thiyenavaa, eeka mama calendar eke note karalaa thiyenavaa.'
  );

  // Step 4: Locate Sinhala output area
  const sinhalaOutput = page.locator('div').filter({ hasText: 'හෙට office' }).first();

  // Step 5: Wait until Sinhala output appears
  await expect(sinhalaOutput).toBeVisible({ timeout: 10000 });

  // Step 6: Validate expected Sinhala output
  await expect(sinhalaOutput).toContainText(
    'හෙට office එකේ zoom meeting එකක් තියෙනවා'
  );
});
test('Pos_Fun_0006 - Convert short polite interrogative request sentence', async ({ page }) => {

  // Step 1: Open Singlish to Sinhala translator
  await page.goto('https://www.swifttranslator.com/', {
    waitUntil: 'domcontentloaded',
    timeout: 60000
  });

  // Small wait for stability
  await page.waitForTimeout(2000);

  // Step 2: Locate Singlish input textarea
  const singlishInput = page.locator('textarea[placeholder="Input Your Singlish Text Here."]');

  // Step 3: Enter short polite interrogative request
  await singlishInput.fill('oyaata kudee allaganna puluvandha?');

  // Step 4: Locate Sinhala output area
  const sinhalaOutput = page.locator('div').filter({ hasText: 'ඔයාට කුඩේ' }).first();

  // Step 5: Wait until Sinhala output appears
  await expect(sinhalaOutput).toBeVisible({ timeout: 10000 });

  // Step 6: Validate expected Sinhala output
  await expect(sinhalaOutput).toContainText('ඔයාට කුඩේ අල්ලගන්න පුලුවන්ද');
});
test('Pos_Fun_0007 - Convert past-tense sentence describing a completed activity', async ({ page }) => {

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

  // Step 3: Enter past-tense Singlish input
  await singlishInput.fill('mama iiyee madol dhuuva potha kiyevvaa.');

  // Step 4: Locate Sinhala output area
  const sinhalaOutput = page.locator('div').filter({ hasText: 'මම ඊයේ' }).first();

  // Step 5: Wait until Sinhala output appears
  await expect(sinhalaOutput).toBeVisible({ timeout: 10000 });

  // Step 6: Validate expected Sinhala output
  await expect(sinhalaOutput).toContainText(
    'මම ඊයේ මඩොල් දූව පොත කියෙව්වා'
  );
});
test('Pos_Fun_0008 - Convert simple future-tense sentence with a place name', async ({ page }) => {

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

  // Step 3: Enter future-tense sentence with place name
  await singlishInput.fill('api heta siigiriyee yamu.');

  // Step 4: Locate Sinhala output area
  const sinhalaOutput = page.locator('div').filter({ hasText: 'අපි හෙට' }).first();

  // Step 5: Wait until Sinhala output appears
  await expect(sinhalaOutput).toBeVisible({ timeout: 10000 });

  // Step 6: Validate expected Sinhala output
  await expect(sinhalaOutput).toContainText('අපි හෙට සීගිරියේ යමු');
});
test('Pos_Fun_0009 - Convert informal slang-based command sentence', async ({ page }) => {

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

  // Step 3: Enter informal slang-based command
  await singlishInput.fill('ado machan, vaeda hariyata karapan.');

  // Step 4: Locate Sinhala output area
  const sinhalaOutput = page.locator('div').filter({ hasText: 'ado' }).first();

  // Step 5: Wait until Sinhala output appears
  await expect(sinhalaOutput).toBeVisible({ timeout: 10000 });

  // Step 6: Validate expected Sinhala output
  await expect(sinhalaOutput).toContainText('ado මචන්, වැඩ හරියට කරපන්');
});
test('Pos_Fun_0010 - Convert sentence with joined words while preserving intended meaning', async ({ page }) => {

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

  // Step 3: Enter joined-word Singlish input (no spaces)
  await singlishInput.fill(
    'mamahetakaempasyannakalinvaedakaralaagiyaanamhodhayi.'
  );

  // Step 4: Locate Sinhala output area
  const sinhalaOutput = page.locator('div').filter({ hasText: 'මම' }).first();

  // Step 5: Wait until Sinhala output appears
  await expect(sinhalaOutput).toBeVisible({ timeout: 10000 });

  // Step 6: Validate expected Sinhala output (joined words preserved)
  await expect(sinhalaOutput).toContainText(
    'මමහෙටකැම්පස්යන්නකලින්වැඩකරලාගියානම්හොදයි'
  );
});
test('Pos_Fun_0011 - Convert polite request sentence containing currency and time formats', async ({ page }) => {

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

  // Step 3: Enter Singlish input with currency and time formats
  await singlishInput.fill(
    'oyaagee baduvala mila RS. 5000k venavaa heta 8.30 AM kalin salli dhaanna puluvandha?'
  );

  // Step 4: Locate Sinhala output area
  const sinhalaOutput = page.locator('div').filter({ hasText: 'RS. 5000' }).first();

  // Step 5: Wait until Sinhala output appears
  await expect(sinhalaOutput).toBeVisible({ timeout: 10000 });

  // Step 6: Validate expected Sinhala output
  await expect(sinhalaOutput).toContainText(
    'RS. 5000ක් වෙනවා හෙට 8.30 AM කලින් සල්ලි දාන්න පුලුවන්ද'
  );
});
test('Pos_Fun_0012 - Convert formal request sentence with English abbreviation and address details', async ({ page }) => {

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

  // Step 3: Enter Singlish input with English abbreviation
  await singlishInput.fill(
    'oyaagee NIC eka saha Address details sadhahankara lipikaruta labaa dhenna.'
  );

  // Step 4: Locate Sinhala output area
  const sinhalaOutput = page.locator('div').filter({ hasText: 'NIC' }).first();

  // Step 5: Wait until Sinhala output appears
  await expect(sinhalaOutput).toBeVisible({ timeout: 10000 });

  // Step 6: Validate expected Sinhala output
  await expect(sinhalaOutput).toContainText(
    'NIC එක සහ Address details'
  );
});
test('Pos_Fun_0013 - Convert multi-line input containing a statement and a question', async ({ page }) => {

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

  // Step 3: Enter multi-line Singlish input
  await singlishInput.fill(
    'mama malagedhara inne.\noyaa heta malagedhara enavadha?'
  );

  // Step 4: Locate Sinhala output area
  const sinhalaOutput = page.locator('div').filter({ hasText: 'මම මලගෙදර' }).first();

  // Step 5: Wait until Sinhala output appears
  await expect(sinhalaOutput).toBeVisible({ timeout: 10000 });

  // Step 6: Validate expected Sinhala output (line breaks preserved)
  await expect(sinhalaOutput).toContainText(
    'මම මලගෙදර ඉන්නේ'
  );
  await expect(sinhalaOutput).toContainText(
    'ඔයා හෙට මලගෙදර එනවද'
  );
});
test('Pos_Fun_0014 - Convert polite future-tense request sentence with place reference', async ({ page }) => {

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

  // Step 3: Enter polite future-tense request with place reference
  await singlishInput.fill(
    'oyaata heta podi velaavakata pansalata yanna enna puluvandha?'
  );

  // Step 4: Locate Sinhala output area
  const sinhalaOutput = page.locator('div').filter({ hasText: 'ඔයාට හෙට' }).first();

  // Step 5: Wait until Sinhala output appears
  await expect(sinhalaOutput).toBeVisible({ timeout: 10000 });

  // Step 6: Validate expected Sinhala output
  await expect(sinhalaOutput).toContainText(
    'ඔයාට හෙට පොඩි වෙලාවකට පන්සලට යන්න එන්න පුලුවන්ද'
  );
});
test('Pos_Fun_0015 - Convert sentence expressing cause-and-effect with natural condition', async ({ page }) => {

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

  // Step 3: Enter cause-and-effect Singlish input
  await singlishInput.fill(
    'muhudha ralu nisaa mama adha gedhara inna hadhannee.'
  );

  // Step 4: Locate Sinhala output area
  const sinhalaOutput = page.locator('div').filter({ hasText: 'මුහුද' }).first();

  // Step 5: Wait until Sinhala output appears
  await expect(sinhalaOutput).toBeVisible({ timeout: 10000 });

  // Step 6: Validate expected Sinhala output
  await expect(sinhalaOutput).toContainText(
    'මුහුද රලු නිසා මම අද ගෙදර ඉන්න හදන්නේ'
  );
});
test('Pos_Fun_0016 - Convert conversational response sentence with negation and follow-up action', async ({ page }) => {

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

  // Step 3: Enter conversational Singlish input with negation
  await singlishInput.fill(
    'monavaa veyidha dhannee naehae, mama balalaa kiyannam.'
  );

  // Step 4: Locate Sinhala output area
  const sinhalaOutput = page.locator('div').filter({ hasText: 'මොනවා' }).first();

  // Step 5: Wait until Sinhala output appears
  await expect(sinhalaOutput).toBeVisible({ timeout: 10000 });

  // Step 6: Validate expected Sinhala output
  await expect(sinhalaOutput).toContainText(
    'මොනවා වෙයිද දන්නේ නැහැ, මම බලලා කියන්නම්'
  );
});
test('Pos_Fun_0017 - Convert simple daily descriptive sentence', async ({ page }) => {

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

  // Step 3: Enter simple daily descriptive Singlish input
  await singlishInput.fill('magee kondhee kaekkumak thiyenavaa.');

  // Step 4: Locate Sinhala output area
  const sinhalaOutput = page.locator('div').filter({ hasText: 'මගේ කොන්දේ' }).first();

  // Step 5: Wait until Sinhala output appears
  await expect(sinhalaOutput).toBeVisible({ timeout: 10000 });

  // Step 6: Validate expected Sinhala output
  await expect(sinhalaOutput).toContainText(
    'මගේ කොන්දේ කැක්කුමක් තියෙනවා'
  );
});
test('Pos_Fun_0018 - Convert future-tense sentence describing an event at a specific place', async ({ page }) => {

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

  // Step 3: Enter future-tense sentence with place and event
  await singlishInput.fill(
    'apee maalabee kaempas ekee musical show ekak heta thiyenavaa.'
  );

  // Step 4: Locate Sinhala output area
  const sinhalaOutput = page.locator('div').filter({ hasText: 'අපේ මාලබේ' }).first();

  // Step 5: Wait until Sinhala output appears
  await expect(sinhalaOutput).toBeVisible({ timeout: 10000 });

  // Step 6: Validate expected Sinhala output
  await expect(sinhalaOutput).toContainText(
    'අපේ මාලබේ කැම්පස් එකේ musical show එකක් හෙට තියෙනවා'
  );
});
test('Pos_Fun_0019 - Convert sentence containing repeated words used for emphasis', async ({ page }) => {

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

  // Step 3: Enter Singlish input with repeated words for emphasis
  await singlishInput.fill('podi podi dheeval valata randu venna epaa.');

  // Step 4: Locate Sinhala output area
  const sinhalaOutput = page.locator('div').filter({ hasText: 'පොඩි පොඩි' }).first();

  // Step 5: Wait until Sinhala output appears
  await expect(sinhalaOutput).toBeVisible({ timeout: 10000 });

  // Step 6: Validate expected Sinhala output
  await expect(sinhalaOutput).toContainText(
    'පොඩි පොඩි දේවල් වලට රන්ඩු වෙන්න එපා'
  );
});
test('Pos_Fun_0020 - Convert sentence containing date and time information', async ({ page }) => {

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

  // Step 3: Enter Singlish input with date and time
  await singlishInput.fill(
    'samugaenimee saadhaya 2026.03.02 dhina 11.00 ta patan gannavaa.'
  );

  // Step 4: Locate Sinhala output area
  const sinhalaOutput = page.locator('div').filter({ hasText: '2026.03.02' }).first();

  // Step 5: Wait until Sinhala output appears
  await expect(sinhalaOutput).toBeVisible({ timeout: 10000 });

  // Step 6: Validate expected Sinhala output
  await expect(sinhalaOutput).toContainText(
    '2026.03.02 දින 11.00 ට පටන් ගන්නවා'
  );
});
test('Pos_Fun_0021 - Convert formal polite request sentence for an official document', async ({ page }) => {

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

  // Step 3: Enter formal polite request input
  await singlishInput.fill(
    'karunaakaralaa magee service letter eka labaa dhenna.'
  );

  // Step 4: Locate Sinhala output area
  const sinhalaOutput = page.locator('div').filter({ hasText: 'service letter' }).first();

  // Step 5: Wait until Sinhala output appears
  await expect(sinhalaOutput).toBeVisible({ timeout: 10000 });

  // Step 6: Validate expected Sinhala output
  await expect(sinhalaOutput).toContainText(
    'කරුනාකරලා මගේ service letter එක ලබා දෙන්න'
  );
});
test('Pos_Fun_0022 - Convert imperative sentence with academic work-related instructions', async ({ page }) => {

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

  // Step 3: Enter academic imperative instruction
  await singlishInput.fill(
    'okkomala final project report eka submit karanna kalin double check karalaa adupaadu kiyanna.'
  );

  // Step 4: Locate Sinhala output area
  const sinhalaOutput = page.locator('div').filter({ hasText: 'final project' }).first();

  // Step 5: Wait until Sinhala output appears
  await expect(sinhalaOutput).toBeVisible({ timeout: 10000 });

  // Step 6: Validate expected Sinhala output
  await expect(sinhalaOutput).toContainText(
    'final project report එක submit කරන්න කලින් double check කරලා අඩුපාඩු කියන්න'
  );
});
test('Pos_Fun_0023 - Convert long paragraph-style Singlish input with real-life work context', async ({ page }) => {

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

  // Step 3: Enter long paragraph-style Singlish input
  await singlishInput.fill(
    'adha project ekee vaedakata yaaluvekgee gedhara yanna giyaa namuth kaduwela traffic thibuna nisaa yanna velaa giyaa.\n' +
    'ee vunath yaaluvagee gedhara giya gaman vaeda karanna patan gaththaa vaeda ivara vedhdhi raee una nisaa kaeemath yaaluvagee gedharin kaala mama enna aavaa.\n' +
    'heta meeting ekak aragena vaeda tika ivara karamu.'
  );

  // Step 4: Locate Sinhala output area
  const sinhalaOutput = page.locator('div').filter({ hasText: 'අද project' }).first();

  // Step 5: Wait until Sinhala output appears
  await expect(sinhalaOutput).toBeVisible({ timeout: 10000 });

  // Step 6: Validate expected Sinhala output (paragraph + line breaks preserved)
  await expect(sinhalaOutput).toContainText(
    'අද project එකේ වැඩකට යාලුවෙක්ගේ ගෙදර යන්න ගියා'
  );
  await expect(sinhalaOutput).toContainText(
    'යාලුවගේ ගෙදර ගිය ගමන් වැඩ කරන්න පටන් ගත්තා'
  );
  await expect(sinhalaOutput).toContainText(
    'හෙට meeting එකක් අරගෙන වැඩ ටික ඉවර කරමු'
  );
});
test('Pos_Fun_0024 - Convert interrogative sentence with conditional suggestion', async ({ page }) => {

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

  // Step 3: Enter interrogative Singlish input with conditional suggestion
  await singlishInput.fill(
    'heta oyaata vaeda naethnam api match eka balanna yamudha?'
  );

  // Step 4: Locate Sinhala output area
  const sinhalaOutput = page.locator('div').filter({ hasText: 'හෙට ඔයාට' }).first();

  // Step 5: Wait until Sinhala output appears
  await expect(sinhalaOutput).toBeVisible({ timeout: 10000 });

  // Step 6: Validate expected Sinhala output
  await expect(sinhalaOutput).toContainText(
    'හෙට ඔයාට වැඩ නැත්නම් අපි match එක බලන්න යමුද'
  );
});
