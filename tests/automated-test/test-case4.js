require('../../nightwatch.conf.js');

module.exports = {
    
    'Visit axa adventure page and title should be AXA’s adventure | AXA': function(browser) {
    // Browser is the browser that is being controlled
    browser
        .url(browser.launchUrl) // Navigate to the url
        .waitForElementVisible('body', 500) // Wait until you can see the body element.
        .verify.title('AXA’s adventure | AXA') // Verify that the title is 'AXA’s adventure | AXA'
    },
    
    'it should accept cookie': function(browser) {
    browser
        .waitForElementVisible('.cookie-banner__button', 500)
        .click('.cookie-banner__button')
    },
    
    'it should see 2000-2010 period, text below and progress bar color should be rgba(241, 175, 198, 1)': function(browser) {
    browser
        .waitForElementVisible('.period-4 > .periods-list__button > .container > .periods-list__button-surtitle')
        .assert.visible('.period-4 > .periods-list__button > .container > .periods-list__button-surtitle')
        .waitForElementVisible('.period-4 > .periods-list__button > .container > .hidden-xs')
        .assert.visible('.period-4 > .periods-list__button > .container > .hidden-xs')
    browser
        .expect.element('.period-4 > .periods-list__button > .container > .periods-list__button-surtitle').text.to.equal('2000 - 2010')
    browser
        .expect.element('.period-4 > .periods-list__button > .container > .hidden-xs').text.to.equal('Faced with the crises, AXA strengthens its organization ')
    browser
        .assert.cssProperty(".periods-list__period.period-4 .progress-bar", "background-color", "rgba(241, 175, 198, 1)")
    },
    
    'it should click on 2000-2010 and see information': function(browser) {
    browser
        .waitForElementVisible('.period-4 > .periods-list__button > .container')
        .assert.visible('.period-4 > .periods-list__button > .container')
        .click('.period-4 > .periods-list__button > .container')
        .pause(2000)
    },
    
    'it should see 2000-2010 title, same progress bar and same text': function(browser) {
    browser
        .waitForElementVisible('#period-2000-2010 > .container > .period-cover__wrapper > .period-cover__surtitle > h3')
        .assert.visible('#period-2000-2010 > .container > .period-cover__wrapper > .period-cover__surtitle > h3')
        .waitForElementVisible('#period-2000-2010 > .container > .period-cover__wrapper > .period-cover__title-desktop > h2')
        .assert.visible('#period-2000-2010 > .container > .period-cover__wrapper > .period-cover__title-desktop > h2')
    browser
        .expect.element('#period-2000-2010 > .container > .period-cover__wrapper > .period-cover__surtitle > h3').text.to.equal('2000 - 2010')
    browser
        .expect.element('#period-2000-2010 > .container > .period-cover__wrapper > .period-cover__title-desktop > h2').text.to.equal('Faced with the crises, AXA strengthens its organization ')
    browser
        .assert.cssProperty(".period-cover.period-cover-4 .period-cover__surtitle-border", "background-color", "rgba(241, 175, 198, 1)")
    },
    
    'it should see contrib text and should be equal': function(browser) {
    browser
        .waitForElementVisible(':nth-child(23) > .container > .row > .col-sm-10 > .contrib-text > p')
        .assert.visible(':nth-child(23) > .container > .row > .col-sm-10 > .contrib-text > p')
    browser
        .expect.element(':nth-child(23) > .container > .row > .col-sm-10 > .contrib-text > p').text.to.equal('2001 is marked by the bursting of the dot-com bubble and the tragic September 11 terrorist attacks. A perfect storm…')
    },
    
    'it should see Key dates title': function(browser) {
    browser
        .waitForElementVisible(':nth-child(24) > .container > .key-dates__title > h3')
        .assert.visible(':nth-child(24) > .container > .key-dates__title > h3')
    browser
        .expect.element(':nth-child(24) > .container > .key-dates__title > h3').text.to.equal('Key dates')
    },
 
    'it should see image of 2000, text and badge color': function(browser) {
    browser //2000
        .assert.visible('.period-cover-4 ~ .key-dates .react-slider .react-slider__pagination-item.active .react-slider__dot')
    browser
        .expect.element(':nth-child(24) > .container > .key-dates__slider > .react-slider > .react-slider__items > .active > .key-dates__content > .key-dates__content-text').text.to.equal('Henri de Castries takes over from Claude Bébéar.')
    browser
        .waitForElementVisible('.period-cover-4 ~ .key-dates .react-slider .react-slider__item.active .key-dates__content-year', 500)
        .assert.cssProperty('.period-cover-4 ~ .key-dates .react-slider .react-slider__item.active .key-dates__content-year', 'background-color', 'rgba(241, 175, 198, 1)')
    },
        
    'it should see image of 2006, text and badge color': function(browser) {
    browser //2006
        .assert.visible(':nth-child(24) > .container > .key-dates__slider > .react-slider > .react-slider__pagination > :nth-child(2) > .react-slider__dot')
        .click(':nth-child(24) > .container > .key-dates__slider > .react-slider > .react-slider__pagination > :nth-child(2) > .react-slider__dot')
    browser
        .assert.visible(':nth-child(24) > .container > .key-dates__slider > .react-slider > .react-slider__pagination > .active > .react-slider__dot')
    browser
        .expect.element(':nth-child(24) > .container > .key-dates__slider > .react-slider > .react-slider__items > :nth-child(2) > .key-dates__content > .key-dates__content-text').text.to.equal('The Swiss firm Winterthur is acquired. The quality of the integration process highlights AXA’s expertise in this area. ')
    browser
        .waitForElementVisible(':nth-child(24) > .container > .key-dates__slider > .react-slider > .react-slider__items > .active > .key-dates__content > .key-dates__content-year', 1000)
        .pause(500)
        .assert.cssProperty(':nth-child(24) > .container > .key-dates__slider > .react-slider > .react-slider__items > .active > .key-dates__content > .key-dates__content-year', 'background-color', 'rgba(241, 175, 198, 1)')
    },
    
    'it should see image of 2008, text and badge color': function(browser) {
    browser //2008
        .assert.visible(':nth-child(24) > .container > .key-dates__slider > .react-slider > .react-slider__pagination > :nth-child(3) > .react-slider__dot')
        .click(':nth-child(24) > .container > .key-dates__slider > .react-slider > .react-slider__pagination > :nth-child(3) > .react-slider__dot')    
    browser 
        .assert.visible(':nth-child(24) > .container > .key-dates__slider > .react-slider > .react-slider__pagination > .active > .react-slider__dot')
    browser
        .expect.element(':nth-child(24) > .container > .key-dates__slider > .react-slider > .react-slider__items > :nth-child(3) > .key-dates__content > .key-dates__content-text').text.to.equal('The AXA Research Fund is created.')
    browser
        .waitForElementVisible('.period-cover-4 ~ .key-dates .react-slider .react-slider__item.active .key-dates__content-year', 1000)
        .pause(500)
        .assert.cssProperty('.period-cover-4 ~ .key-dates .react-slider .react-slider__item.active .key-dates__content-year', 'background-color', 'rgba(241, 175, 198, 1)')
    },
    
    'it should see image of 2009, text and badge color': function(browser) {
    browser //2009
        .assert.visible(':nth-child(24) > .container > .key-dates__slider > .react-slider > .react-slider__pagination > :nth-child(4) > .react-slider__dot')
        .click(':nth-child(24) > .container > .key-dates__slider > .react-slider > .react-slider__pagination > :nth-child(4) > .react-slider__dot')
    browser
        .assert.visible(':nth-child(24) > .container > .key-dates__slider > .react-slider > .react-slider__pagination > .active > .react-slider__dot')
    browser
        .expect.element(':nth-child(24) > .container > .key-dates__slider > .react-slider > .react-slider__items > :nth-child(4) > .key-dates__content > .key-dates__content-text').text.to.equal('AXA is the number 1 global insurance brand in the Interbrand rankings.')
    browser
        .waitForElementVisible('.period-cover-4 ~ .key-dates .react-slider .react-slider__item.active .key-dates__content-year', 1000)
        .pause(500)
        .assert.cssProperty('.period-cover-4 ~ .key-dates .react-slider .react-slider__item.active .key-dates__content-year', 'background-color', 'rgba(241, 175, 198, 1)')
    }, 
    
    'it should see first paragraph of contrib text': function(browser) {
    browser
        .assert.visible(':nth-child(25) > .container > .row > .col-sm-10 > .contrib-text > :nth-child(1)')
        .expect.element(':nth-child(25) > .container > .row > .col-sm-10 > .contrib-text > :nth-child(1)').text.to.equal('As soon as he takes office, Henri de Castries chooses to sell off the US investment bank Donaldson, Lufkin & Jenrette (DLJ) and target operational excellence for the Group’s core business areas (insurance and asset management).')
    },
    
    'it should see second paragraph of contrib text': function(browser) {
    browser
        .assert.visible(':nth-child(25) > .container > .row > .col-sm-10 > .contrib-text > :nth-child(2)')
        .expect.element(':nth-child(25) > .container > .row > .col-sm-10 > .contrib-text > :nth-child(2)').text.to.equal('The Group organizes itself to weather this storm: rolling out a plan to reduce spending, turning around its technical results and further strengthening its risk management, with the creation of Group Risk Management which objective is to analyze the Group’s risk exposure and appetite with a more in-depth approach and to prepare for future new regulations (Solvency 2).')
    },
    
    'it should see the third paragraph of contrib text': function(browser) {
    browser
        .assert.visible(':nth-child(25) > .container > .row > .col-sm-10 > .contrib-text > :nth-child(3)')
        .expect.element(':nth-child(25) > .container > .row > .col-sm-10 > .contrib-text > :nth-child(3)').text.to.equal('In 2006, the economic environment is positive again. AXA returns to profitable growth, acquires the Swiss firm Winterthur and starts investing in emerging markets.')
    },
    
    'it should see the fourth paragraph of contrib text': function(browser) {
    browser
        .assert.visible(':nth-child(25) > .container > .row > .col-sm-10 > .contrib-text > :nth-child(4)')
        .expect.element(':nth-child(25) > .container > .row > .col-sm-10 > .contrib-text > :nth-child(4)').text.to.equal('When the subprime financial crisis breaks out in summer 2007, AXA has learned the lessons from 2001. Thanks to its efficient internal risk management system (GRM), the Group is affected, but shows its resilience, without public bailouts.')
    },
    
    'it should see the fifth paragraph of contrib text': function(browser) {
    browser
        .assert.visible(':nth-child(25) > .container > .row > .col-sm-10 > .contrib-text > :nth-child(5)')
        .expect.element(':nth-child(25) > .container > .row > .col-sm-10 > .contrib-text > :nth-child(5)').text.to.equal('In this volatile environment, AXA remains convinced of the importance of its long-term commitments to its customers and society in general. In line with this spirit, AXA launches the AXA Research Fund to improve the understanding and prevention of major risks around the world.  ')
    },

    'it should click on header bar in order to see the others periods': function(browser) {
    browser
        .assert.visible('.timeline-sticky-header-4 > .timeline-sticky-header__button > .container > .timeline-sticky-header__wrapper > .hidden-xs.hidden-sm')
        .click('.timeline-sticky-header-4 > .timeline-sticky-header__button > .container > .timeline-sticky-header__wrapper > .hidden-xs.hidden-sm')
    },
    
    'it should close periods list': function(browser) {
    browser
        .assert.visible('.icon-cross-gap')
        .click('.icon-cross-gap')
    },
    
    'it should click on Discover our values': function(browser) {
    browser
        .assert.visible('.link')
        .click('.link')
        .end()
    }
}