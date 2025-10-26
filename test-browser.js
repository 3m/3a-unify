const { chromium } = require('playwright');

async function testApp() {
  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });

  const page = await context.newPage();

  // Routes to test
  const routes = [
    { path: '/timeline', name: 'Timeline' },
    { path: '/chats', name: 'Chats' },
    { path: '/creators', name: 'Creators' },
    { path: '/events', name: 'Events' },
    { path: '/interests', name: 'Interests' },
    { path: '/notifications', name: 'Notifications' },
    { path: '/profile/me', name: 'Profile' }
  ];

  console.log('Starting browser tests...\n');

  for (const route of routes) {
    console.log(`Testing ${route.name} (${route.path})...`);

    try {
      // Navigate to route
      await page.goto(`http://localhost:3000${route.path}`, {
        waitUntil: 'networkidle',
        timeout: 30000
      });

      // Wait for content to load
      await page.waitForTimeout(2000);

      // Take screenshot
      await page.screenshot({
        path: `/home/user/3a-unify/screenshots/${route.name.toLowerCase()}.png`,
        fullPage: true
      });

      console.log(`✓ Screenshot saved: ${route.name.toLowerCase()}.png`);

      // Check for console errors
      page.on('console', msg => {
        if (msg.type() === 'error') {
          console.log(`  ⚠ Console Error: ${msg.text()}`);
        }
      });

      // Test sidebar visibility
      const sidebarVisible = await page.isVisible('[data-sidebar="sidebar"]').catch(() => false);
      console.log(`  Sidebar visible: ${sidebarVisible}`);

      // Test if content is loaded
      const hasContent = await page.locator('body').textContent();
      console.log(`  Page has content: ${hasContent.length > 100}`);

      console.log('');

    } catch (error) {
      console.log(`✗ Error testing ${route.name}: ${error.message}\n`);
    }
  }

  // Test sidebar interactions on timeline page
  console.log('Testing sidebar interactions...');
  await page.goto('http://localhost:3000/timeline', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  // Try to toggle sidebar (mobile)
  const sidebarTrigger = await page.locator('[data-sidebar="trigger"]').first().isVisible().catch(() => false);
  if (sidebarTrigger) {
    console.log('  ✓ Sidebar trigger found');
    await page.screenshot({
      path: '/home/user/3a-unify/screenshots/sidebar-with-trigger.png',
      fullPage: true
    });
  } else {
    console.log('  ⚠ Sidebar trigger not found');
  }

  // Test clicking different sidebar links
  const sidebarLinks = await page.locator('[data-sidebar="menu"] a').count();
  console.log(`  Found ${sidebarLinks} sidebar links`);

  await page.screenshot({
    path: '/home/user/3a-unify/screenshots/sidebar-detail.png',
    fullPage: true
  });

  console.log('\n✓ Browser testing complete!');

  await browser.close();
}

testApp().catch(console.error);
