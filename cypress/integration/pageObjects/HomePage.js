/// <reference types="Cypress"/>

class HomePage {
  static loadHomePage() {
    cy.visit(Cypress.env("url"));
  }

  static confirmHomePage() {
    cy.get("#wrapper > header > div > div > div > div > a.active > img", {
      timeout: 60000,
    }).then(() => {
      cy.get('img[alt="Uber Eats Home"]').log("Successfully passed");
    });
  }

  static typeDeliveryAddress() {
    cy.screenshot("Initial_Loading");
    cy.xpath('//input[@id="location-typeahead-home-input"]')
      .click({ force: true })
      .type("bamba");
  }

  static selectDeliveryAddress() {
    cy.get(
      "#location-typeahead-home-item-0 > div.hu > div.by.c6.bg.e4.hw.hv.al"
    ).each(($city) => {
      if ($city.text() === "Colombo, Sri Lanka") {
        cy.wrap($city).click({ force: true });
      }
    });
  }

  static verifyRestaturants() {
    const value1 =
      '//*[@id="main-content"]/div/div[3]/div[2]/div/div[2]/div[1]/div/section/div[2]/div[1]/li[1]';
    assert.exists(value1, "No Data");
    cy.screenshot("Location_Query");
    const value2 =
      '//*[@id="main-content"]/div/div[3]/div[2]/div/div[2]/div[2]/div/section/div[2]/div[1]/li[1]';
    assert.exists(value2, "No Data");
    cy.screenshot("Location_Query");
    const value3 =
      '//*[@id="main-content"]/div/div[3]/div[2]/div/div[2]/div[3]/div/section/div[2]/div[1]/li[1]';
    assert.exists(value3, "No Data");
    cy.screenshot("Location_Query");
    const value4 =
      '//*[@id="main-content"]/div/div[3]/div[2]/div/div[2]/div[5]/div/section/div[2]/div[1]/li[1]';
    assert.exists(value4, "No Data");
    cy.screenshot("Location_Query");
    const value5 =
      '//*[@id="main-content"]/div/div[3]/div[2]/div/div[2]/div[6]/div/section/div[2]/div[1]/li[1]';
    assert.exists(value5, "No Data");
    cy.screenshot("Location_Query");
    const value6 =
      '//*[@id="main-content"]/div/div[3]/div[2]/div/div[2]/div[8]/div/section/div[2]/div[1]/li[1]';
    assert.exists(value6, "No Data");
    cy.screenshot("Location_Query");
    const value7 =
      '//*[@id="main-content"]/div/div[3]/div[2]/div/div[2]/div[9]/div/section/div[2]/div[1]/li[1]';
    assert.exists(value7, "No Data");
    cy.screenshot("Location_Query");
    const value8 =
      '//*[@id="main-content"]/div/div[3]/div[2]/div/div[2]/div[10]/div/section/div[2]/div[1]/li[1]';
    assert.exists(value8, "No Data");
    cy.screenshot("Location_Query");
  }
}

export default HomePage;
