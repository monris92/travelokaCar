const { expect } = require('@playwright/test');
const SELECTORS = require('../utilities/selectors');
const Utils = require('../utilities/utils'); // Create a new Utils.js file in the utilities directory

class CarRentalPage {
    constructor(page) {
        this.page = page;
        this.utils = new Utils(page);
    }

    async selectCarProduct() {
        await expect(this.page.locator(SELECTORS.languageIcon)).toHaveText("EN | IDR");
        await this.page.click(SELECTORS.tabCarRent);
    }

    async selectWithoutDriver() {
        await expect(this.page.locator(SELECTORS.withoutDriver)).toBeVisible();
        await this.page.click(SELECTORS.withoutDriver_rentLocation);
    }

    async selectPickupLocation(location = 'Bandung') {
        await this.page.fill(SELECTORS.withoutDriver_rentLocation, location);
        await expect(this.page.locator(SELECTORS.rentLocation_result)).toBeVisible();
        await this.page.click(SELECTORS.rentLocation_result);
        await this.page.waitForLoadState('networkidle');
        // Validate that the location input value has changed to Bandung
        await expect(this.page.locator(SELECTORS.withoutDriver_rentLocation)).toHaveValue(location);
    }

    async selectRentalDatesAndTimes() {
        const pickUpDate = this.utils.calculateFutureDate(2); // 2 days from now in WIB
        const dropOffDate = this.utils.calculateFutureDate(4); // 4 days from now in WIB

        await this.utils.selectTime(SELECTORS.startTimeRent); // Time to select is hardcoded in the selector

        // Assert the values of the date inputs
        await expect(this.page.locator(SELECTORS.starDateRent)).toHaveValue(pickUpDate);
        await expect(this.page.locator(SELECTORS.endDateRent)).toHaveValue(dropOffDate);
        await this.utils.selectTime();
        // Assert the values of the date and time inputs
        await expect(this.page.locator(SELECTORS.startTimeRent)).toHaveAttribute('value', "09:00");
        await expect(this.page.locator(SELECTORS.endTimeRent)).toHaveAttribute('value', "11:00");

    }
// CarRentalPage.js

async submitSearchRent() {
    await this.page.click(SELECTORS.submitSearch);
    await this.page.waitForLoadState('networkidle'); // Wait for page navigation to complete
    
    // Pass the substring of the expected URL to validateCurrentUrl
    const expectedUrlSubstring = 'https://www.traveloka.com/en-id/car-rental/search';
    await this.utils.validateCurrentUrl(expectedUrlSubstring);
    
    // Take a screenshot after confirming the page has loaded and the URL has been validated
    await this.page.screenshot({ path: 'carRentResult.png', fullPage: true });
}

    async selectCarProvider() {
        await this.page.click(SELECTORS.carSelect);
        await this.page.waitForLoadState('networkidle');
        await this.page.click(SELECTORS.carSelect_provider);
        await this.page.waitForLoadState('networkidle');
        await this.page.screenshot({ path: 'carRentResult-provider.png', fullPage: true });

    }

    async detailRentCar() {
        //pickup
        await this.page.click(SELECTORS.carSelect_provider_pickup_rent_office);
        await this.page.click(SELECTORS.carSelect_provider_pickup_rent_office_location);
        await this.page.click(SELECTORS.carSelect_provider_pickup_rent_office_location__selected);
        await this.page.screenshot({ path: 'carRentResult-provider_rent_office_pickup_location.png', fullPage: true });
        await this.page.waitForLoadState('networkidle');

        //dropoff
        await this.page.click(SELECTORS.carSelect_provider_dropoff_other_location);
        await this.page.click(SELECTORS.carTextInput_provider_dropoff_other_location);
        await this.page.click(SELECTORS.carSelect_provider_dropoff_other_location_location);
        await this.page.fill(SELECTORS.carTextInput_provider_dropoff_other_location_location_note, "ok please bring ballon 7");
        await this.page.screenshot({ path: 'carRentResult-provider_dropoff_other_location.png', fullPage: true });
        await this.page.waitForLoadState('networkidle');

    }
    async booknowCar() {

        await this.page.click(SELECTORS.carsSelect_submit_booking);

    }

    async ContactDetail() {
        await this.page.waitForLoadState('networkidle');
        await expect(this.page.locator(SELECTORS.contactDetail_fullName)).toBeVisible();
        await this.page.fill(SELECTORS.contactDetail_fullName, "contactFullname Field");
        await this.page.fill(SELECTORS.contactDetail_email, "email@example.com");
        await this.page.fill(SELECTORS.contactDetail_phone, "89000000000");
    }

    async driverDetail() {
        const selectElementHandle = await page.$(SELECTORS.adultFormSelect);

        // Use the element handle with the selectOption method, assuming "MR" is the value you want to select.
        await selectElementHandle.selectOption('MR');
        await this.page.fill(SELECTORS.driverDetail_fullName, "driverFullname Field");
        await this.page.fill(SELECTORS.driverDetail_phone, "8911111111111");
        await this.page.screenshot({ path: 'contact_detail_booking.png', fullPage: true });

    }


}

module.exports = CarRentalPage;