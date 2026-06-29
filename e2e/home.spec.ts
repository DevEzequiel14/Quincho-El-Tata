import { expect, test, type Page } from '@playwright/test';

const navigation = '#primary-navigation';

async function openMobileMenu(page: Page): Promise<void> {
  const toggle = page.getByRole('button', { name: 'Abrir menú de navegación' });
  await expect(toggle).toBeVisible();
  await toggle.click();
  await expect(toggle).toHaveAttribute('aria-expanded', 'true');
  await expect(page.locator(`${navigation}.open`)).toBeVisible();
}

test.describe('Quincho El Tata', () => {
  test('loads the home page with main content', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/Quincho El Tata/i);
    await expect(page.locator('main#main-content')).toBeVisible();
    await expect(page.getByRole('heading', { level: 1, name: 'Quincho El Tata' })).toBeVisible();
  });

  test('navigates to a section through anchor links', async ({ page }) => {
    await page.goto('/');

    await page.locator(`${navigation} a[href="#contact"]`).click();

    await expect(page).toHaveURL(/#contact$/);
    await expect(page.locator('#contact')).toBeVisible();
  });

  test('opens the mobile menu and navigates to a section', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');

    await openMobileMenu(page);
    await page.locator(`${navigation} a[href="#precios"]`).click();

    await expect(page).toHaveURL(/#precios$/);
    await expect(page.locator('#precios')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Abrir menú de navegación' })).toHaveAttribute(
      'aria-expanded',
      'false',
    );
  });

  test('exposes the floating WhatsApp link', async ({ page }) => {
    await page.goto('/');

    const whatsAppLink = page.getByRole('link', { name: 'WhatsApp - Enviar mensaje' });
    await whatsAppLink.scrollIntoViewIfNeeded();

    await expect(whatsAppLink).toBeVisible();
    await expect(whatsAppLink).toHaveAttribute('href', /wa\.me\/\+?5493885054451/);
    await expect(whatsAppLink).toHaveAttribute('target', '_blank');
  });

  test('closes the mobile menu with Escape', async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');

    await openMobileMenu(page);
    await page.keyboard.press('Escape');

    await expect(page.getByRole('button', { name: 'Abrir menú de navegación' })).toHaveAttribute(
      'aria-expanded',
      'false',
    );
    await expect(page.locator(`${navigation}.open`)).toHaveCount(0);
  });
});
