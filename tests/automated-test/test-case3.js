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
    
    'it should see 1990-2000 period, text below and progress bar color should be rgba(181, 208, 238, 1)': function(browser) {
    browser
        .waitForElementVisible('.period-3 > .periods-list__button > .container > .periods-list__button-surtitle')
        .assert.visible('.period-3 > .periods-list__button > .container > .periods-list__button-surtitle')
        .waitForElementVisible('.period-3 > .periods-list__button > .container > .hidden-xs')
        .assert.visible('.period-3 > .periods-list__button > .container > .hidden-xs')
    browser
        .expect.element('.period-3 > .periods-list__button > .container > .periods-list__button-surtitle').text.to.equal('1990 - 2000')
    browser
        .expect.element('.period-3 > .periods-list__button > .container > .hidden-xs').text.to.equal('AXA, world leader for insurance')
    browser
        .assert.cssProperty(".periods-list__period.period-3 .progress-bar", "background-color", "rgba(181, 208, 238, 1)")
    },
    
    'it should click on 1990-2000 and see information': function(browser) {
    browser
        .waitForElementVisible('.period-3 > .periods-list__button > .container')
        .assert.visible('.period-3 > .periods-list__button > .container')
        .click('.period-3 > .periods-list__button > .container')
        .pause(2000)
    },
    
    'it should see 1990-2000 title, same progress bar and same text': function(browser) {
    browser
        .waitForElementVisible('#period-1990-2000 > .container > .period-cover__wrapper > .period-cover__surtitle > h3')
        .assert.visible('#period-1990-2000 > .container > .period-cover__wrapper > .period-cover__surtitle > h3')
        .waitForElementVisible('#period-1990-2000 > .container > .period-cover__wrapper > .period-cover__title-desktop > h2')
        .assert.visible('#period-1990-2000 > .container > .period-cover__wrapper > .period-cover__title-desktop > h2')
    browser
        .expect.element('#period-1990-2000 > .container > .period-cover__wrapper > .period-cover__surtitle > h3').text.to.equal('1990 - 2000')
    browser
        .expect.element('#period-1990-2000 > .container > .period-cover__wrapper > .period-cover__title-desktop > h2').text.to.equal('AXA, world leader for insurance')
    browser
        .assert.cssProperty(".period-cover.period-cover-3 .period-cover__surtitle-border", "background-color", "rgba(181, 208, 238, 1)")
    },
    
    'it should see contrib text and should be equal': function(browser) {
    browser
        .waitForElementVisible(':nth-child(16) > .container > .row > .col-sm-10 > .contrib-text > p')
        .assert.visible(':nth-child(16) > .container > .row > .col-sm-10 > .contrib-text > p')
    browser
        .expect.element(':nth-child(16) > .container > .row > .col-sm-10 > .contrib-text > p').text.to.equal('The early 90s are marked by three main events: the fall of the Berlin Wall, the Gulf War and a major economic recession. This challenging period also opens up opportunities for those who know how to capitalize on them. ')
    },
    
    'it should see Key dates title': function(browser) {
    browser
        .waitForElementVisible(':nth-child(17) > .container > .key-dates__title > h3')
        .assert.visible(':nth-child(17) > .container > .key-dates__title > h3')
    browser
        .expect.element(':nth-child(17) > .container > .key-dates__title > h3').text.to.equal('Key dates')
    },
 
    'it should see image of 1991, text and badge color': function(browser) {
    browser //1991
        .assert.visible('.period-cover-3 ~ .key-dates .react-slider .react-slider__pagination-item.active .react-slider__dot')
    browser
        .expect.element(':nth-child(17) > .container > .key-dates__slider > .react-slider > .react-slider__items > .active > .key-dates__content > .key-dates__content-text').text.to.equal('A majority interest is acquired in the US life insurance firm Equitable.')
    browser
        .waitForElementVisible('.period-cover-3 ~ .key-dates .react-slider .react-slider__item.active .key-dates__content-year', 500)
        .assert.cssProperty('.period-cover-3 ~ .key-dates .react-slider .react-slider__item.active .key-dates__content-year', 'background-color', 'rgba(181, 208, 238, 1)')
    },
        
    'it should see second image of 1991, text and badge color': function(browser) {
    browser //1991
        .assert.visible(':nth-child(17) > .container > .key-dates__slider > .react-slider > .react-slider__pagination > :nth-child(2) > .react-slider__dot')
        .click(':nth-child(17) > .container > .key-dates__slider > .react-slider > .react-slider__pagination > :nth-child(2) > .react-slider__dot')
    browser
        .assert.visible(':nth-child(17) > .container > .key-dates__slider > .react-slider > .react-slider__pagination > .active > .react-slider__dot')
    browser
        .expect.element(':nth-child(17) > .container > .key-dates__slider > .react-slider > .react-slider__items > :nth-child(2) > .key-dates__content > .key-dates__content-text').text.to.equal('AXA Hearts In Action is created, AXA’s employee volunteering program. ')
    browser
        .waitForElementVisible(':nth-child(17) > .container > .key-dates__slider > .react-slider > .react-slider__items > .active > .key-dates__content > .key-dates__content-year', 1000)
        .pause(500)
        .assert.cssProperty(':nth-child(17) > .container > .key-dates__slider > .react-slider > .react-slider__items > .active > .key-dates__content > .key-dates__content-year', 'background-color', 'rgba(181, 208, 238, 1)')
    },
    
    'it should see image of 1994, text and badge color': function(browser) {
    browser //1994
        .assert.visible(':nth-child(17) > .container > .key-dates__slider > .react-slider > .react-slider__pagination > :nth-child(3) > .react-slider__dot')
        .click(':nth-child(17) > .container > .key-dates__slider > .react-slider > .react-slider__pagination > :nth-child(3) > .react-slider__dot')    
    browser 
        .assert.visible(':nth-child(17) > .container > .key-dates__slider > .react-slider > .react-slider__pagination > .active > .react-slider__dot')
    browser
        .expect.element(':nth-child(17) > .container > .key-dates__slider > .react-slider > .react-slider__items > :nth-child(3) > .key-dates__content > .key-dates__content-text').text.to.equal('The “Ambitions 2001” strategic plan is launched. Objective: to be the world number 1 by 2001.')
    browser
        .waitForElementVisible('.period-cover-3 ~ .key-dates .react-slider .react-slider__item.active .key-dates__content-year', 1000)
        .pause(500)
        .assert.cssProperty('.period-cover-3 ~ .key-dates .react-slider .react-slider__item.active .key-dates__content-year', 'background-color', 'rgba(181, 208, 238, 1)')
    },
    
    'it should see image of 1995, text and badge color': function(browser) {
    browser //1995
        .assert.visible(':nth-child(17) > .container > .key-dates__slider > .react-slider > .react-slider__pagination > :nth-child(4) > .react-slider__dot')
        .click(':nth-child(17) > .container > .key-dates__slider > .react-slider > .react-slider__pagination > :nth-child(4) > .react-slider__dot')
    browser
        .assert.visible(':nth-child(17) > .container > .key-dates__slider > .react-slider > .react-slider__pagination > .active > .react-slider__dot')
    browser
        .expect.element(':nth-child(17) > .container > .key-dates__slider > .react-slider > .react-slider__items > :nth-child(4) > .key-dates__content > .key-dates__content-text').text.to.equal('The Group takes its first steps in Asia, acquiring an interest in the Australian group National Mutual and its Hong Kong-based subsidiary.')
    browser
        .waitForElementVisible('.period-cover-3 ~ .key-dates .react-slider .react-slider__item.active .key-dates__content-year', 1000)
        .pause(500)
        .assert.cssProperty('.period-cover-3 ~ .key-dates .react-slider .react-slider__item.active .key-dates__content-year', 'background-color', 'rgba(181, 208, 238, 1)')
    }, 

    'it should see second image of 1996, text and badge color': function(browser) {
    browser //second 1996
        .assert.visible(':nth-child(17) > .container > .key-dates__slider > .react-slider > .react-slider__pagination > :nth-child(4) > .react-slider__dot')
        .click(':nth-child(17) > .container > .key-dates__slider > .react-slider > .react-slider__pagination > :nth-child(5) > .react-slider__dot')
    browser
        .assert.visible(':nth-child(17) > .container > .key-dates__slider > .react-slider > .react-slider__pagination > .active > .react-slider__dot')
    browser
        .expect.element(':nth-child(17) > .container > .key-dates__slider > .react-slider > .react-slider__items > :nth-child(5) > .key-dates__content > .key-dates__content-text').text.to.equal('AXA merges with UAP to become France’s number 1 insurer and considerably strengthens its presence in Europe.')
    browser
        .waitForElementVisible('.period-cover-3 ~ .key-dates .react-slider .react-slider__item.active .key-dates__content-year', 1000)
        .pause(500)
        .assert.cssProperty('.period-cover-3 ~ .key-dates .react-slider .react-slider__item.active .key-dates__content-year', 'background-color', 'rgba(181, 208, 238, 1)')
    },
    
    'it should see first paragraph of contrib text': function(browser) {
    browser
        .assert.visible(':nth-child(18) > .container > .row > .col-sm-10 > .contrib-text > :nth-child(1)')
        .expect.element(':nth-child(18) > .container > .row > .col-sm-10 > .contrib-text > :nth-child(1)').text.to.equal('AXA acquires the US firm Equitable. With this acquisition, AXA establishes itself as a leading international group.')
    },
    
    'it should see second paragraph of contrib text': function(browser) {
    browser
        .assert.visible(':nth-child(18) > .container > .row > .col-sm-10 > .contrib-text > :nth-child(2)')
        .expect.element(':nth-child(18) > .container > .row > .col-sm-10 > .contrib-text > :nth-child(2)').text.to.equal('The second key milestone from this decade takes place five years later. To widespread surprise, AXA “absorbs” UAP, which is twice its size. This deal creates France’s number 1 and the world’s number 2 insurer. ')
    },
    
    'it should see the third paragraph of contrib text': function(browser) {
    browser
        .assert.visible(':nth-child(18) > .container > .row > .col-sm-10 > .contrib-text > :nth-child(3)')
        .expect.element(':nth-child(18) > .container > .row > .col-sm-10 > .contrib-text > :nth-child(3)').text.to.equal('AXA follows this with a series of acquisitions, buying out the Japanese company Nippon Dantai and taking over Guardian Royal Exchange, enabling it to strengthen its presence in 15 countries and move into the health segment through its subsidiary PPP Healthcare. ')
    },
    
    'it should see the fourth paragraph of contrib text': function(browser) {
    browser
        .assert.visible(':nth-child(18) > .container > .row > .col-sm-10 > .contrib-text > :nth-child(4)')
        .expect.element(':nth-child(18) > .container > .row > .col-sm-10 > .contrib-text > :nth-child(4)').text.to.equal('In 1999, eight years after being created, Direct Assurance opens its Internet site. The Group’s digitalization is underway.')
    },
    
    'it should see the fifth paragraph of contrib text': function(browser) {
    browser
        .assert.visible(':nth-child(18) > .container > .row > .col-sm-10 > .contrib-text > :nth-child(5)')
        .expect.element(':nth-child(18) > .container > .row > .col-sm-10 > .contrib-text > :nth-child(5)').text.to.equal('At the dawn of the new millennium, AXA becomes a global leader. More than ever, its success is built around a shared culture.')
    },
    
    'it should see quote_image and quote_wrapper': function(browser) {
    browser
        .execute('scrollTo(0, 7700)')
        .pause(1000)
        .waitForElementVisible('.quote__image', 1000)
        .assert.visible('.quote__image')
        .waitForElementVisible('.quote__wrapper', 1000)
        .assert.visible('.quote__wrapper')
    },
    
    'Quote text should be equal': function(browser) {
    browser
        .assert.visible('.quote__text > p')
        .expect.element('.quote__text > p').text.to.be.equal('“This condition is essential for developing a shared economic adventure”')
    },
    
    'Quote name should be equal': function(browser) {
    browser
        .assert.visible('.quote__name > p')
        .expect.element('.quote__name > p').text.to.be.equal('Claude Bébéar')
    },
    
    'it should click on header bar in order to see the others periods': function(browser) {
    browser
        .assert.visible('.timeline-sticky-header-3 > .timeline-sticky-header__button > .container > .timeline-sticky-header__wrapper > .hidden-xs.hidden-sm')
        .click('.timeline-sticky-header-3 > .timeline-sticky-header__button > .container > .timeline-sticky-header__wrapper > .hidden-xs.hidden-sm')
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
        .pause(1000)
    },
    
    'url should be equal': function(browser) {
    browser
        .assert.urlEquals('https://www.axa.com/en/careers/our-culture-and-values')
        .pause(500)
        .end()
    }
}