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
    
    'it should see 2010-2018 period, text below and progress bar color should be rgba(0, 173, 198, 1)': function(browser) {
    browser
        .waitForElementVisible('.period-5 > .periods-list__button > .container > .periods-list__button-surtitle')
        .assert.visible('.period-5 > .periods-list__button > .container > .periods-list__button-surtitle')
        .waitForElementVisible('.period-5 > .periods-list__button > .container > .hidden-xs')
        .assert.visible('.period-5 > .periods-list__button > .container > .hidden-xs')
    browser
        .expect.element('.period-5 > .periods-list__button > .container > .periods-list__button-surtitle').text.to.equal('2010 - 2018')
    browser
        .expect.element('.period-5 > .periods-list__button > .container > .hidden-xs').text.to.equal('Creating a new AXA')
    browser
        .assert.cssProperty(".periods-list__period.period-5 .progress-bar", "background-color", "rgba(0, 173, 198, 1)")
    },
    
    'it should click on 2010-2018 and see information': function(browser) {
    browser
        .waitForElementVisible('.period-5 > .periods-list__button > .container')
        .assert.visible('.period-5 > .periods-list__button > .container')
        .click('.period-5 > .periods-list__button > .container')
        .pause(2000)
    },
    
    'it should see 2010-2018 title, same progress bar and same text': function(browser) {
    browser
        .waitForElementVisible('#period-2010-2018 > .container > .period-cover__wrapper > .period-cover__surtitle > h3')
        .assert.visible('#period-2010-2018 > .container > .period-cover__wrapper > .period-cover__surtitle > h3')
        .waitForElementVisible('#period-2010-2018 > .container > .period-cover__wrapper > .period-cover__title-desktop > h2')
        .assert.visible('#period-2010-2018 > .container > .period-cover__wrapper > .period-cover__title-desktop > h2')
    browser
        .expect.element('#period-2010-2018 > .container > .period-cover__wrapper > .period-cover__surtitle > h3').text.to.equal('2010 - 2018')
    browser
        .expect.element('#period-2010-2018 > .container > .period-cover__wrapper > .period-cover__title-desktop > h2').text.to.equal('Creating a new AXA')
    browser
        .assert.cssProperty(".period-cover.period-cover-5 .period-cover__surtitle-border", "background-color", "rgba(0, 173, 198, 1)")
    },
    
    'it should see contrib text and should be equal': function(browser) {
    browser
        .waitForElementVisible(':nth-child(28) > .container > .row > .col-sm-10 > .contrib-text > p')
        .assert.visible(':nth-child(28) > .container > .row > .col-sm-10 > .contrib-text > p')
    browser
        .expect.element(':nth-child(28) > .container > .row > .col-sm-10 > .contrib-text > p').text.to.equal('Earthquakes in Japan and New Zealand, Arab Spring, Eurozone crisis…Early 2010s prove to be a turbulent time.')
    },
    
    'it should see Key dates title': function(browser) {
    browser
        .waitForElementVisible(':nth-child(24) > .container > .key-dates__title > h3')
        .assert.visible(':nth-child(29) > .container > .key-dates__title > h3')
    browser
        .expect.element(':nth-child(29) > .container > .key-dates__title > h3').text.to.equal('Key dates')
    },
 
    'it should see image of 2010, text and badge color': function(browser) {
    browser //2010
        .assert.visible('.period-cover-5 ~ .key-dates .react-slider .react-slider__pagination-item.active .react-slider__dot')
    browser
        .expect.element(':nth-child(29) > .container > .key-dates__slider > .react-slider > .react-slider__items > .active > .key-dates__content > .key-dates__content-text').text.to.equal('The Ambition AXA strategic plan is launched, focused on a selective approach to mature markets, while accelerating emerging markets.')
    browser
        .waitForElementVisible('.period-cover-5 ~ .key-dates .react-slider .react-slider__item.active .key-dates__content-year', 500)
        .assert.cssProperty('.period-cover-5 ~ .key-dates .react-slider .react-slider__item.active .key-dates__content-year', 'background-color', 'rgba(0, 173, 198, 1)')
    },
        
    'it should see image of 2015, text and badge color': function(browser) {
    browser //2015
        .assert.visible(':nth-child(29) > .container > .key-dates__slider > .react-slider > .react-slider__pagination > :nth-child(2) > .react-slider__dot')
        .click(':nth-child(29) > .container > .key-dates__slider > .react-slider > .react-slider__pagination > :nth-child(2) > .react-slider__dot')
    browser
        .assert.visible(':nth-child(29) > .container > .key-dates__slider > .react-slider > .react-slider__pagination > .active > .react-slider__dot')
    browser
        .expect.element(':nth-child(29) > .container > .key-dates__slider > .react-slider > .react-slider__items > :nth-child(2) > .key-dates__content > .key-dates__content-text').text.to.equal('AXA is an official partner of the COP21 climate change event and divests its coal industry assets.')
    browser
        .waitForElementVisible(':nth-child(29) > .container > .key-dates__slider > .react-slider > .react-slider__items > .active > .key-dates__content > .key-dates__content-year', 1000)
        .pause(500)
        .assert.cssProperty(':nth-child(29) > .container > .key-dates__slider > .react-slider > .react-slider__items > .active > .key-dates__content > .key-dates__content-year', 'background-color', 'rgba(0, 173, 198, 1)')
    },
    
    'it should see image of 2016, text and badge color': function(browser) {
    browser //2016
        .assert.visible(':nth-child(29) > .container > .key-dates__slider > .react-slider > .react-slider__pagination > :nth-child(3) > .react-slider__dot')
        .click(':nth-child(29) > .container > .key-dates__slider > .react-slider > .react-slider__pagination > :nth-child(3) > .react-slider__dot')    
    browser 
        .assert.visible(':nth-child(29) > .container > .key-dates__slider > .react-slider > .react-slider__pagination > .active > .react-slider__dot')
    browser
        .expect.element(':nth-child(29) > .container > .key-dates__slider > .react-slider > .react-slider__items > :nth-child(3) > .key-dates__content > .key-dates__content-text').text.to.equal('Thomas Buberl and Denis Duverne take over from Henri de Castries.')
    browser
        .waitForElementVisible('.period-cover-5 ~ .key-dates .react-slider .react-slider__item.active .key-dates__content-year', 1000)
        .pause(500)
        .assert.cssProperty('.period-cover-5 ~ .key-dates .react-slider .react-slider__item.active .key-dates__content-year', 'background-color', 'rgba(0, 173, 198, 1)')
    },
    
    'it should see image of 2017, text and badge color': function(browser) {
    browser //2017
        .assert.visible(':nth-child(29) > .container > .key-dates__slider > .react-slider > .react-slider__pagination > :nth-child(4) > .react-slider__dot')
        .click(':nth-child(29) > .container > .key-dates__slider > .react-slider > .react-slider__pagination > :nth-child(4) > .react-slider__dot')
    browser
        .assert.visible(':nth-child(29) > .container > .key-dates__slider > .react-slider > .react-slider__pagination > .active > .react-slider__dot')
    browser
        .expect.element(':nth-child(29) > .container > .key-dates__slider > .react-slider > .react-slider__items > :nth-child(4) > .key-dates__content > .key-dates__content-text').text.to.equal('An innovation department is created to support the Payer to Partner vision.')
    browser
        .waitForElementVisible('.period-cover-5 ~ .key-dates .react-slider .react-slider__item.active .key-dates__content-year', 1000)
        .pause(500)
        .assert.cssProperty('.period-cover-5 ~ .key-dates .react-slider .react-slider__item.active .key-dates__content-year', 'background-color', 'rgba(0, 173, 198, 1)')
    }, 
    
    'it should see image of 2018, text and badge color': function(browser) {
    browser //2009
        .assert.visible(':nth-child(29) > .container > .key-dates__slider > .react-slider > .react-slider__pagination > :nth-child(5) > .react-slider__dot')
        .click(':nth-child(29) > .container > .key-dates__slider > .react-slider > .react-slider__pagination > :nth-child(5) > .react-slider__dot')
    browser
        .assert.visible(':nth-child(29) > .container > .key-dates__slider > .react-slider > .react-slider__pagination > .active > .react-slider__dot')
    browser
        .expect.element(':nth-child(29) > .container > .key-dates__slider > .react-slider > .react-slider__items > :nth-child(5) > .key-dates__content > .key-dates__content-text').text.to.equal('With the acquisition of the XL Group, AXA becomes the world’s number 1 commercial P&C insurer. ')
    browser
        .waitForElementVisible('.period-cover-5 ~ .key-dates .react-slider .react-slider__item.active .key-dates__content-year', 1000)
        .pause(500)
        .assert.cssProperty('.period-cover-5 ~ .key-dates .react-slider .react-slider__item.active .key-dates__content-year', 'background-color', 'rgba(0, 173, 198, 1)')
    }, 
    
    'it should see first paragraph of contrib text': function(browser) {
    browser
        .assert.visible(':nth-child(30) > .container > .row > .col-sm-10 > .contrib-text > :nth-child(1)')
        .expect.element(':nth-child(30) > .container > .row > .col-sm-10 > .contrib-text > :nth-child(1)').text.to.equal('Faced with a constantly changing world, AXA understands that it needs to adapt. The Group launches Ambition AXA, its new strategy and “transformation” plan. ')
    },
    
    'it should see second paragraph of contrib text': function(browser) {
    browser
        .assert.visible(':nth-child(30) > .container > .row > .col-sm-10 > .contrib-text > :nth-child(2)')
        .expect.element(':nth-child(30) > .container > .row > .col-sm-10 > .contrib-text > :nth-child(2)').text.to.equal('The priority now is to no longer be present everywhere geographically, but to be where the business has added value, closely aligned with its customers’ needs. ')
    },

    'it should see the third paragraph of contrib text': function(browser) {
    browser
        .assert.visible(':nth-child(32) > .container > .row > .col-sm-10 > .contrib-text > :nth-child(1)')
        .expect.element(':nth-child(32) > .container > .row > .col-sm-10 > .contrib-text > :nth-child(1)').text.to.equal('In these segments, AXA will be able to offer new services for its customers. An innovation department is also set up to support the Group’s new Payer to Partner vision.')
    },
    
    'it should see the fourth paragraph of contrib text': function(browser) {
    browser
        .assert.visible(':nth-child(32) > .container > .row > .col-sm-10 > .contrib-text > :nth-child(2)')
        .expect.element(':nth-child(32) > .container > .row > .col-sm-10 > .contrib-text > :nth-child(2)').text.to.equal('In 2018, with the acquisition of the XL Group, a commercial P&C insurance specialist, and the floating of AXA Equitable Holdings, the American life insurance and asset management subsidiary, on the US stock market, the Group’s whole profile is being transformed.')
    },
    
    'it should see the sixth paragraph of contrib text': function(browser) {
    browser
        .assert.visible(':nth-child(32) > .container > .row > .col-sm-10 > .contrib-text > :nth-child(3)')
        .expect.element(':nth-child(32) > .container > .row > .col-sm-10 > .contrib-text > :nth-child(3)').text.to.equal('Less financial risk, more insurance risk – at the dawn of a new golden age for insurance, this is the start of a new adventure for AXA.')
    },
    
    'it should see last text of contrib text': function(browser) {
    browser
        .assert.visible(':nth-child(32) > .container > .row > .col-sm-10 > .contrib-text > :nth-child(4)')
        .expect.element(':nth-child(32) > .container > .row > .col-sm-10 > .contrib-text > :nth-child(4)').text.to.equal('To be continued…')
    },

    'it should click on header bar in order to see the others periods': function(browser) {
    browser
        .assert.visible('.timeline-sticky-header-5 > .timeline-sticky-header__button > .container > .timeline-sticky-header__wrapper > .hidden-xs.hidden-sm')
        .click('.timeline-sticky-header-5 > .timeline-sticky-header__button > .container > .timeline-sticky-header__wrapper > .hidden-xs.hidden-sm')
    },
    
    'it should close periods list': function(browser) {
    browser
        .assert.visible('.icon-cross-gap')
        .click('.icon-cross-gap')
        .end()
    }
}