const { expect } = require('@playwright/test');  // Import expect from @playwright/test
const moment = require('moment-timezone');
const SELECTORS = require('../utilities/selectors');

class Utils {
  constructor(page) {
    this.page = page;
  }

  calculateFutureDate(daysOffset, timeZone = 'Asia/Jakarta') {
    const currentDate = moment().tz(timeZone);
    currentDate.add(daysOffset, 'days');
    const formattedDate = currentDate.format('D MMMM YYYY');
    return formattedDate;
  }

  async selectTime() {
        // Click on the time input to bring up the time picker widget
        await this.page.click(SELECTORS.startTimeRent);
    
        // Wait for the 9 AM time slot to be available for clicking
        await this.page.waitForSelector(SELECTORS.startTimeSlotSelector);
    
        // Click on the 9 AM slot
        await this.page.click(SELECTORS.startTimeSlotSelector);
        await this.page.click(SELECTORS.submitTime);
    
        // Click on the time input to bring up the time picker widget
        await this.page.click(SELECTORS.endTimeRent);
    
        // Wait for the 9 AM time slot to be available for clicking
        await this.page.waitForSelector(SELECTORS.endTimeSlotSelector);
    
        // Click on the 9 AM slot
        await this.page.click(SELECTORS.endTimeSlotSelector);
        await this.page.click(SELECTORS.submitTime);
  }

  async validateCurrentUrl(expectedUrlSubstring) {
    // Get the current URL of the page
    const currentUrl = this.page.url();
  
    // Check if the current URL contains the expected substring
    if (!currentUrl.includes(expectedUrlSubstring)) {
      throw new Error(`Current URL does not contain the expected substring. Expected to contain: ${expectedUrlSubstring}, Received: ${currentUrl}`);
    }
  }

  // ... More utility functions can be added here
}

module.exports = Utils;