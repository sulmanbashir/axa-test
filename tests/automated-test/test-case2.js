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
    
    'it should see 1980-1990 period, text below and progress bar color should be rgba(252, 211, 133, 1)': function(browser) {
    browser
        .waitForElementVisible('.period-2 > .periods-list__button > .container > .periods-list__button-surtitle')
        .assert.visible('.period-2 > .periods-list__button > .container > .periods-list__button-surtitle')
        .waitForElementVisible('.period-2 > .periods-list__button > .container > .hidden-xs')
        .assert.visible('.period-2 > .periods-list__button > .container > .hidden-xs')
    browser
        .expect.element('.period-2 > .periods-list__button > .container > .periods-list__button-surtitle').text.to.equal('1980 - 1990')
    browser
        .expect.element('.period-2 > .periods-list__button > .container > .hidden-xs').text.to.equal('AXA makes its mark in France')
    browser
        .assert.cssProperty(".periods-list__period.period-2 .progress-bar", "background-color", "rgba(252, 211, 133, 1)")
    },
    
    'it should click on 1980-1990 and see information': function(browser) {
    browser
        .waitForElementVisible('.period-2 > .periods-list__button > .container')
        .assert.visible('.period-2 > .periods-list__button > .container')
        .click('.period-2 > .periods-list__button > .container')
        .pause(2000)
    },
    
    'it should see 1980-1990 title, same progress bar and same text': function(browser) {
    browser
        .waitForElementVisible('#period-1980-1990 > .container > .period-cover__wrapper > .period-cover__surtitle > h3')
        .assert.visible('#period-1980-1990 > .container > .period-cover__wrapper > .period-cover__surtitle > h3')
        .waitForElementVisible('#period-1980-1990 > .container > .period-cover__wrapper > .period-cover__title-desktop > h2')
        .assert.visible('#period-1980-1990 > .container > .period-cover__wrapper > .period-cover__title-desktop > h2')
    browser
        .expect.element('#period-1980-1990 > .container > .period-cover__wrapper > .period-cover__surtitle > h3').text.to.equal('1980 - 1990')
    browser
        .expect.element('#period-1980-1990 > .container > .period-cover__wrapper > .period-cover__title-desktop > h2').text.to.equal('AXA makes its mark in France')
    browser
        .assert.cssProperty(".period-cover.period-cover-2 .period-cover__surtitle-border", "background-color", "rgba(252, 211, 133, 1)")
    },
    
    'it should see contrib text and should be equal': function(browser) {
    browser
        .waitForElementVisible(':nth-child(11) > .container > .row > .col-sm-10 > .contrib-text > p')
        .assert.visible(':nth-child(11) > .container > .row > .col-sm-10 > .contrib-text > p')
    browser
        .expect.element(':nth-child(11) > .container > .row > .col-sm-10 > .contrib-text > p').text.to.equal('In France, after 25 years in opposition, a left-wing government takes power in 1981. This brings the looming possibility of major nationalization programs targeting private insurance companies.')
    },
    
    'it should see Key dates title': function(browser) {
    browser
        .waitForElementVisible(':nth-child(12) > .container > .key-dates__title > h3')
        .assert.visible(':nth-child(12) > .container > .key-dates__title > h3')
    browser
        .expect.element(':nth-child(12) > .container > .key-dates__title > h3').text.to.equal('Key dates')
    },
 
    'it should see image of 1982, text and badge color': function(browser) {
    browser //1982
        .assert.visible('.period-cover-2 ~ .key-dates .react-slider .react-slider__pagination-item.active .react-slider__dot')
    browser
        .expect.element(':nth-child(12) > .container > .key-dates__slider > .react-slider > .react-slider__items > .active > .key-dates__content > .key-dates__content-text').text.to.equal('“Mutuelles Unies” acquires Drouot, which immediately gives it a nationwide presence in France. ')
    browser
        .waitForElementVisible('.period-cover-2 ~ .key-dates .react-slider .react-slider__item.active .key-dates__content-year', 500)
        .assert.cssProperty('.period-cover-2 ~ .key-dates .react-slider .react-slider__item.active .key-dates__content-year', 'background-color', 'rgba(252, 211, 133, 1)')
    },
        
    'it should see image of 1985, text and badge color': function(browser) {
    browser //1985
        .assert.visible(':nth-child(12) > .container > .key-dates__slider > .react-slider > .react-slider__pagination > :nth-child(2) > .react-slider__dot')
        .click(':nth-child(12) > .container > .key-dates__slider > .react-slider > .react-slider__pagination > :nth-child(2) > .react-slider__dot')
    browser
        .assert.visible(':nth-child(12) > .container > .key-dates__slider > .react-slider > .react-slider__pagination > .active > .react-slider__dot')
    browser
        .expect.element(':nth-child(12) > .container > .key-dates__slider > .react-slider > .react-slider__items > :nth-child(2) > .key-dates__content > .key-dates__content-text').text.to.equal('The AXA name, which can be read in all languages, is launched. However, the Group’s various companies do not switch to the AXA brand until the early 1990s.')
    browser
        .waitForElementVisible(':nth-child(12) > .container > .key-dates__slider > .react-slider > .react-slider__items > .active > .key-dates__content > .key-dates__content-year', 1000)
        .pause(500)
        .assert.cssProperty(':nth-child(12) > .container > .key-dates__slider > .react-slider > .react-slider__items > .active > .key-dates__content > .key-dates__content-year', 'background-color', 'rgba(252, 211, 133, 1)')
    },
    
    'it should see image of 1986, text and badge color': function(browser) {
    browser //1986
        .assert.visible(':nth-child(12) > .container > .key-dates__slider > .react-slider > .react-slider__pagination > :nth-child(3) > .react-slider__dot')
        .click(':nth-child(12) > .container > .key-dates__slider > .react-slider > .react-slider__pagination > :nth-child(3) > .react-slider__dot')    
    browser 
        .assert.visible(':nth-child(12) > .container > .key-dates__slider > .react-slider > .react-slider__pagination > .active > .react-slider__dot')
    browser
        .expect.element(':nth-child(12) > .container > .key-dates__slider > .react-slider > .react-slider__items > :nth-child(3) > .key-dates__content > .key-dates__content-text').text.to.equal('The Group holds its first “major” seminar, bringing together 86 executives in Niger’s Ténéré Desert.')
    browser
        .waitForElementVisible('.period-cover-2 ~ .key-dates .react-slider .react-slider__item.active .key-dates__content-year', 1000)
        .pause(500)
        .assert.cssProperty('.period-cover-2 ~ .key-dates .react-slider .react-slider__item.active .key-dates__content-year', 'background-color', 'rgba(252, 211, 133, 1)')
    },
    
    'it should see image of 1989, text and badge color': function(browser) {
    browser //1989
        .assert.visible(':nth-child(12) > .container > .key-dates__slider > .react-slider > .react-slider__pagination > :nth-child(4) > .react-slider__dot')
        .click(':nth-child(12) > .container > .key-dates__slider > .react-slider > .react-slider__pagination > :nth-child(4) > .react-slider__dot')
    browser
        .assert.visible(':nth-child(12) > .container > .key-dates__slider > .react-slider > .react-slider__pagination > .active > .react-slider__dot')
    browser
        .expect.element(':nth-child(12) > .container > .key-dates__slider > .react-slider > .react-slider__items > :nth-child(4) > .key-dates__content > .key-dates__content-text').text.to.equal('Compagnie du Midi is acquired, AXA is now listed on the stock market.')
    browser
        .waitForElementVisible('.period-cover-2 ~ .key-dates .react-slider .react-slider__item.active .key-dates__content-year', 1000)
        .pause(500)
        .assert.cssProperty('.period-cover-2 ~ .key-dates .react-slider .react-slider__item.active .key-dates__content-year', 'background-color', 'rgba(252, 211, 133, 1)')
    }, 

    'it should see second image of 1989, text and badge color': function(browser) {
    browser //second 1989
        .assert.visible(':nth-child(12) > .container > .key-dates__slider > .react-slider > .react-slider__pagination > :nth-child(4) > .react-slider__dot')
        .click(':nth-child(12) > .container > .key-dates__slider > .react-slider > .react-slider__pagination > :nth-child(5) > .react-slider__dot')
    browser
        .assert.visible(':nth-child(12) > .container > .key-dates__slider > .react-slider > .react-slider__pagination > .active > .react-slider__dot')
    browser
        .expect.element(':nth-child(12) > .container > .key-dates__slider > .react-slider > .react-slider__items > :nth-child(5) > .key-dates__content > .key-dates__content-text').text.to.equal('The Group takes its first international steps, moving into the UK, Netherlands and Germany.')
    browser
        .waitForElementVisible('.period-cover-2 ~ .key-dates .react-slider .react-slider__item.active .key-dates__content-year', 1000)
        .pause(500)
        .assert.cssProperty('.period-cover-2 ~ .key-dates .react-slider .react-slider__item.active .key-dates__content-year', 'background-color', 'rgba(252, 211, 133, 1)')
    },
    
    'it should see first paragraph of contrib text': function(browser) {
    browser
        .assert.visible(':nth-child(13) > .container > .row > .col-sm-10 > .contrib-text > :nth-child(1)')
        .expect.element(':nth-child(13) > .container > .row > .col-sm-10 > .contrib-text > :nth-child(1)').text.to.equal('The Drouot Group, France’s leading insurer, is afraid that it might be included in the list of the next firms identified for nationalization and discusses opportunities for an alliance with Claude Bébéar. In 1982, following several incredible developments, AXA – still known as “Mutuelles Unies” – acquires Drouot. This is followed by two further acquisitions – the Présence Group (1986) and Compagnie du Midi (1989) – which propel AXA into second place on the French insurance market, behind UAP.')
    },
    
    'it should see second paragraph of contrib text': function(browser) {
    browser
        .assert.visible(':nth-child(13) > .container > .row > .col-sm-10 > .contrib-text > :nth-child(2)')
        .expect.element(':nth-child(13) > .container > .row > .col-sm-10 > .contrib-text > :nth-child(2)').text.to.equal('However, in 1986, the saying “three’s a crowd” proves right as disputes start to flare up between Drouot, Mutuelles Unies and Présence, as each of the Group’s components looks to take center stage. To bring everyone on board for the strategy, Claude Bébéar and his chief of staff Françoise Colloc’h take all the executives off to the Ténéré Desert. This shared experience paves the way for a truly united group and support for one single name: AXA.')
    },
    
    'it should click on header bar in order to see the others periods': function(browser) {
    browser
        .assert.visible('.timeline-sticky-header-2 > .timeline-sticky-header__button > .container > .timeline-sticky-header__wrapper > .hidden-xs.hidden-sm')
        .click('.timeline-sticky-header-2 > .timeline-sticky-header__button > .container > .timeline-sticky-header__wrapper > .hidden-xs.hidden-sm')
    },
    
    'it should close periods list': function(browser) {
    browser
        .assert.visible('.icon-cross-gap')
        .click('.icon-cross-gap')
    },
    
    'it should click again on header bar and see period list title': function(browser) {
    browser
        .assert.visible('.timeline-sticky-header-2 > .timeline-sticky-header__button > .container > .timeline-sticky-header__wrapper > .hidden-xs.hidden-sm')
        .click('.timeline-sticky-header-2 > .timeline-sticky-header__button > .container > .timeline-sticky-header__wrapper > .hidden-xs.hidden-sm')
        .assert.visible('.periods-list__title > .container > div')
        .expect.element('.periods-list__title > .container > div').text.to.equal("Discover the major periods of AXA's adventure")
    browser
        .end()
    }
}