const { test } = require('@playwright/test');
const CarRentalPage = require('../pages/CarRentalPage');

test.describe('Car Rental Tests', () => {
  let carRentalPage;

  test.beforeEach(async ({ page }) => {
    carRentalPage = new CarRentalPage(page);
    await page.goto('/'); // Path relative to the baseURL set in playwright.config.js
  });

  test('user should be able to select car rental options', async () => {
    await carRentalPage.selectCarProduct();
    await carRentalPage.selectWithoutDriver();
    await carRentalPage.selectPickupLocation();
    await carRentalPage.selectRentalDatesAndTimes();
    await carRentalPage.submitSearchRent();
    await carRentalPage.selectCarProvider();
    await carRentalPage.detailRentCar();
    await carRentalPage.booknowCar();
    await carRentalPage.ContactDetail();
    await carRentalPage.driverDetail();
  });

  // ... Additional test cases ...
});