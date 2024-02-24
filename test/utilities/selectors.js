const SELECTORS = {
    loginButton: 'xpath=/html/body/cl-root/ng-component/cl-toolbar/div[2]/div[1]/a/span[1]',
    emailInput: 'input[formcontrolname="email"]',
    submitSignIn: 'xpath=/html/body/cl-root/ng-component/cl-login-screen/div[2]/div/div[1]/form/div[2]/button',
    // Add other selectors as needed
    languageIcon: 'div[data-testid="language-currency-dropdown"]',
    tabCarRent: `xpath=//div[text()='Car Rental']`,
    withoutDriver: `xpath=//h4[text()='Without Driver']`, //validate if tab is display 
    withoutDriver_rentLocation: 'input[data-testid="rental-search-form-location-input"]',//validate if tab is display 
    rentLocation_result: 'div[data-testid="rental-search-form-location-group"]:nth-of-type(1) div[aria-label="Bandung"] h3 span', //validate result is display and click after that element withoutDriver_rentLocation should be validate value is change into value="Bandung"
    starDateRent: 'input[data-testid="rental-search-form-date-input-start"]', // input value element change into value="27 February 2024" example input[data-testid="rental-search-form-date-input-start"][value="27 February 2024"]
    startTimeRent: 'input[data-testid="rental-search-form-time-input-start"]', // input value element change into value="09:00" example input[data-testid="rental-search-form-time-input-start"][value="09:00"]
    startTimeSlotSelector: `div[data-testid="rental-search-form"] div:nth-child(5) > div > div:nth-child(2) > div > div:nth-child(1) div[tabindex="0"]:nth-of-type(10)`,
    submitTime: `xpath=//div[text()='Done']`,
    endDateRent: 'input[data-testid="rental-search-form-date-input-end"]',
    endTimeRent: 'input[data-testid="rental-search-form-time-input-end"]',
    endTimeSlotSelector: 'div[data-testid="rental-search-form"] div:nth-child(9) > div > div:nth-child(2) > div > div:nth-child(1) div[tabindex="0"]:nth-of-type(12)',
    submitSearch: 'svg[data-id="IcSystemSearch"]',

    carSelect: `//*[@id="__next"]/div/div[5]/div[2]/div[2]/div/div/div[1]/div/div[2]/div[3]/div[3]/div/div[2]/div`, //user click button car select
    carSelect_provider: `//*[@id="__next"]/div/div[5]/div/div[4]/div[2]/div[2]/div[2]/div/div[2]`, //continue for detail car
    carSelect_provider_pickup_rent_office: `//*[@id="RENTAL_PICKUP_LOCATION"]/div/div/div[3]/div[1]/div[2]/div`,
    carSelect_provider_pickup_rent_office_location: `//*[@id="RENTAL_PICKUP_LOCATION"]/div/div/div[3]/div[2]/div/div/div[1]/div[1]/div/div[1]/div`,
    carSelect_provider_pickup_rent_office_location__selected: `//*[@id="RENTAL_PICKUP_LOCATION"]/div/div/div[3]/div[2]/div/div/div[1]/div[2]/div/div/div/div[1]/div[1]/div/div[1]`,
    
    carSelect_provider_dropoff_other_location : `//*[@id="RENTAL_DROPOFF_LOCATION"]/div/div/div[5]/div[1]/div[2]/div/div/div[2]`,
    carTextInput_provider_dropoff_other_location: `//*[@id="RENTAL_DROPOFF_LOCATION"]/div/div/div[5]/div[2]/div/div/div[1]/div/div[1]/input`,
    carSelect_provider_dropoff_other_location_location: `//*[@id="RENTAL_DROPOFF_LOCATION"]/div/div/div[5]/div[2]/div/div/div[1]/div/div[2]/div/div/div/div[3]`,
    carTextInput_provider_dropoff_other_location_location_note: `//*[@id="RENTAL_DROPOFF_LOCATION"]/div/div/div[5]/div[2]/div/div[2]/div/textarea`,
    carsSelect_submit_booking: `//*[@id="__next"]/div/div[5]/div/div[1]/div/div[5]/div[3]/div`,

    contactDetail_fullName: `//*[@id="__next"]/div[2]/div[2]/div[1]/div[2]/div/div/div/div[2]/div[1]/div/div[1]/input`,
    contactDetail_phone: `//*[@id="__next"]/div[2]/div[2]/div[1]/div[2]/div/div/div/div[2]/div[2]/div[1]/div[1]/input`,
    contactDetail_email: `//*[@id="__next"]/div[2]/div[2]/div[1]/div[2]/div/div/div/div[2]/div[2]/div[2]/div/div[1]/input`,

    adultFormSelect: '//*[@id="adultForm0"]/div/div/div[2]/div[1]/div/div/select',
    driverDetail_fullName: '//*[@id="adultForm0"]/div/div/div[2]/div[2]/div/div[1]/input',
    driverDetail_phone: '//*[@id="adultForm0"]/div/div/div[2]/div[3]/div[1]/input'


  };
  
  module.exports = SELECTORS;