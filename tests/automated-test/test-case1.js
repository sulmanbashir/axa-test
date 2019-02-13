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
    
    'it should see 1958-1980 period, text below and progress bar color should be rgba(159, 217, 180, 1)': function(browser) {
    browser
        .waitForElementVisible('.period-1 > .periods-list__button > .container > .periods-list__button-surtitle')
        .assert.visible('.period-1 > .periods-list__button > .container > .periods-list__button-surtitle')
        .waitForElementVisible('.period-1 > .periods-list__button > .container > .hidden-xs')
        .assert.visible('.period-1 > .periods-list__button > .container > .hidden-xs')
    browser
        .expect.element('.period-1 > .periods-list__button > .container > .periods-list__button-surtitle').text.to.equal('1958 - 1980')
    browser
        .expect.element('.period-1 > .periods-list__button > .container > .hidden-xs').text.to.equal('Rise of a small mutual insurer from Normandy')
    browser
        .assert.cssProperty(".periods-list__period.period-1 .progress-bar", "background-color", "rgba(159, 217, 180, 1)")
    },
    
    'it should click on 1958-1980 and see information': function(browser) {
    browser
        .waitForElementVisible('.period-1 > .periods-list__button > .container')
        .assert.visible('.period-1 > .periods-list__button > .container')
        .click('.period-1 > .periods-list__button > .container')
        .pause(2000)
    },
    
    'it should see 1958-1980 title, same progress bar and same text': function(browser) {
    browser
        .waitForElementVisible('#period-1958-1980 > .container > .period-cover__wrapper > .period-cover__surtitle > h3')
        .assert.visible('#period-1958-1980 > .container > .period-cover__wrapper > .period-cover__surtitle > h3')
        .waitForElementVisible('#period-1958-1980 > .container > .period-cover__wrapper > .period-cover__title-desktop > h2')
        .assert.visible('#period-1958-1980 > .container > .period-cover__wrapper > .period-cover__title-desktop > h2')
    browser
        .expect.element('#period-1958-1980 > .container > .period-cover__wrapper > .period-cover__surtitle > h3').text.to.equal('1958 - 1980')
    browser
        .expect.element('#period-1958-1980 > .container > .period-cover__wrapper > .period-cover__title-desktop > h2').text.to.equal('Rise of a small mutual insurer from Normandy')
    browser
        .assert.cssProperty(".period-cover.period-cover-1 .period-cover__surtitle-border", "background-color", "rgba(159, 217, 180, 1)")
    },
    
    'it should see contrib text and should be equal': function(browser) {
    browser
        .waitForElementVisible(':nth-child(3) > .container > .row > .col-sm-10 > .contrib-text > p')
        .assert.visible(':nth-child(3) > .container > .row > .col-sm-10 > .contrib-text > p')
    browser
        .expect.element(':nth-child(3) > .container > .row > .col-sm-10 > .contrib-text > p').text.to.equal('AXA’s origins can be traced back to a small mutual insurer from Normandy: Ancienne Mutuelle de Rouen, created in the early 19th century and specialized in property and casualty insurance.')
    },
    
    'it should see Key dates title': function(browser) {
    browser
        .waitForElementVisible(':nth-child(4) > .container > .key-dates__title > h3')
        .assert.visible(':nth-child(4) > .container > .key-dates__title > h3')
    browser
        .expect.element(':nth-child(4) > .container > .key-dates__title > h3').text.to.equal('Key dates')
    },
 
    'it should see image of 1958, text and badge color': function(browser) {
    browser //1958
        .assert.visible('.period-cover-1 ~ .key-dates .react-slider .react-slider__pagination-item.active .react-slider__dot')
    browser
        .expect.element(':nth-child(4) > .container > .key-dates__slider > .react-slider > .react-slider__items > .active > .key-dates__content > .key-dates__content-text').text.to.equal('Claude Bébéar joins Ancienne Mutuelle de Rouen as deputy director. ')
    browser
        .waitForElementVisible('.period-cover-1 ~ .key-dates .react-slider .react-slider__item.active .key-dates__content-year', 500)
        .assert.cssProperty('.period-cover-1 ~ .key-dates .react-slider .react-slider__item.active .key-dates__content-year', 'background-color', 'rgba(159, 217, 180, 1)')
    },
        
    'it should see image of 1968, text and badge color': function(browser) {
    browser //1968
        .assert.visible(':nth-child(4) > .container > .key-dates__slider > .react-slider > .react-slider__pagination > :nth-child(2) > .react-slider__dot')
        .click(':nth-child(4) > .container > .key-dates__slider > .react-slider > .react-slider__pagination > :nth-child(2) > .react-slider__dot')
    browser
        .assert.visible(':nth-child(4) > .container > .key-dates__slider > .react-slider > .react-slider__pagination > .active > .react-slider__dot')
    browser
        .expect.element(':nth-child(4) > .container > .key-dates__slider > .react-slider > .react-slider__items > :nth-child(2) > .key-dates__content > .key-dates__content-text').text.to.equal('The company’s new headquarters are inaugurated in Belbeuf, against a backdrop of widespread social unrest in France (May 1968).')
    browser
        .waitForElementVisible(':nth-child(4) > .container > .key-dates__slider > .react-slider > .react-slider__items > .active > .key-dates__content > .key-dates__content-year', 1000)
        .pause(500)
        .assert.cssProperty(':nth-child(4) > .container > .key-dates__slider > .react-slider > .react-slider__items > .active > .key-dates__content > .key-dates__content-year', 'background-color', 'rgba(159, 217, 180, 1)')
    },
    
    'it should see image of 1975, text and badge color': function(browser) {
    browser //1975
        .assert.visible(':nth-child(4) > .container > .key-dates__slider > .react-slider > .react-slider__pagination > :nth-child(3) > .react-slider__dot')
        .click(':nth-child(4) > .container > .key-dates__slider > .react-slider > .react-slider__pagination > :nth-child(3) > .react-slider__dot')    
    browser 
        .assert.visible(':nth-child(4) > .container > .key-dates__slider > .react-slider > .react-slider__pagination > .active > .react-slider__dot')
    browser
        .expect.element(':nth-child(4) > .container > .key-dates__slider > .react-slider > .react-slider__items > :nth-child(3) > .key-dates__content > .key-dates__content-text').text.to.equal('Claude Bébéar becomes CEO of Ancienne Mutuelle at the age of 40.')
    browser
        .waitForElementVisible('.period-cover-1 ~ .key-dates .react-slider .react-slider__item.active .key-dates__content-year', 1000)
        .pause(500)
        .assert.cssProperty('.period-cover-1 ~ .key-dates .react-slider .react-slider__item.active .key-dates__content-year', 'background-color', 'rgba(159, 217, 180, 1)')
    },
    
    'it should see image of 1978, text and badge color': function(browser) {
    browser //1978
        .assert.visible(':nth-child(4) > .container > .key-dates__slider > .react-slider > .react-slider__pagination > :nth-child(4) > .react-slider__dot')
        .click(':nth-child(4) > .container > .key-dates__slider > .react-slider > .react-slider__pagination > :nth-child(4) > .react-slider__dot')
    browser
        .assert.visible(':nth-child(4) > .container > .key-dates__slider > .react-slider > .react-slider__pagination > .active > .react-slider__dot')
    browser
        .expect.element(':nth-child(4) > .container > .key-dates__slider > .react-slider > .react-slider__items > :nth-child(4) > .key-dates__content > .key-dates__content-text').text.to.equal('Ancienne Mutuelle changes its name to “Mutuelles Unies”. ')
    browser
        .waitForElementVisible('.period-cover-1 ~ .key-dates .react-slider .react-slider__item.active .key-dates__content-year', 1000)
        .pause(500)
        .assert.cssProperty('.period-cover-1 ~ .key-dates .react-slider .react-slider__item.active .key-dates__content-year', 'background-color', 'rgba(159, 217, 180, 1)')
    },
    
    'it should see first paragraph of contrib text': function(browser) {
    browser
        .assert.visible(':nth-child(5) > .container > .row > .col-sm-10 > .contrib-text > :nth-child(1)')
        .expect.element(':nth-child(5) > .container > .row > .col-sm-10 > .contrib-text > :nth-child(1)').text.to.equal('In the post-war period, the insurance industry is struggling. The creation of the French social security system in 1945 deprives mutual insurers of a large part of their business by providing workplace accident and illness cover for workers. However, carefully led by its manager André Sahut d’Izarn, Ancienne Mutuelle emerges from this period in quite a strong position. It even welcomes on board several small regional mutual insurers. ')
    },
    
    'it should see second paragraph of contrib text': function(browser) {
    browser
        .assert.visible(':nth-child(5) > .container > .row > .col-sm-10 > .contrib-text > :nth-child(2)')
        .expect.element(':nth-child(5) > .container > .row > .col-sm-10 > .contrib-text > :nth-child(2)').text.to.equal('In this environment, a young Claude Bébéar joins the company “a bit by chance” in 1958. Sahut d’Izarn, looking for a future successor, adopts him as his protégé and trains him up on the business’ specific demands. ')
    },
    
    'it should see more details about 1975 like : content is visible': function(browser) {
    browser
        .execute('scrollTo(0,3000)')
        .pause(1000)
        .assert.visible('.focus-year > .container')
    },
    
    'it should see more details about 1975 like : image is visible': function(browser) {
    browser
        .expect.element('.responsive-image__container > img').to.be.visible
    },
    
    'it should see more details about 1975 like : text title is visible': function(browser) {
    browser
        .assert.visible('.focus-year__text__title > h4')
        .expect.element('.focus-year__text__title > h4').text.to.equal('1975')
    },
    
    'it should see more details about 1975 like : text content is visible': function(browser) {
    browser
        .assert.visible('.focus-year__text__wrapper > p')
        .expect.element('.focus-year__text__wrapper > p').text.to.equal('Claude Bébéar eventually takes the company’s helm in 1975. He is 40 years old, with a modern vision for insurance and already the firm belief that to be sustainable, it is essential to become international…')
    },
    
    'it should see more details about 1978 like : year title is visible': function(browser) {
    browser
        .execute('scrollTo(0,500)')
        .pause(1000)
        .assert.visible('.year-title__title > h4')
        .expect.element('.year-title__title > h4').text.to.equal('1978')
    },
    
    'it should see more details about 1978 like : year title border is visible': function(browser) {
    browser
        .assert.visible('.year-title__border')
    }, 
    
    'it should see more details about 1978 like : video title is visible': function(browser) {
    browser
        .pause(1000)
        .assert.visible('.paragraph-video__title > h3')
        .expect.element('.paragraph-video__title > h3').text.to.equal('The inauguration of the new headquarters in Belbeuf')
    },
  
    'it should see more details about 1978 like : video first paragraph': function(browser) {
    browser
        .pause(1000)
        .assert.visible('.paragraph-video__text > :nth-child(1)')
        .expect.element('.paragraph-video__text > :nth-child(1)').text.to.equal('22,000 m2 of extremely modern offices, with construction costs representing almost 10% of the company’s assets! A crazy project, but the stakes are high: Ancienne Mutuelle’s new headquarters in Belbeuf must make it possible to break away from the image of a “small provincial mutual” and empower its employees to dream.')
    },
    
    'it should see more details about 1978 like : video second paragraph': function(browser) {
    browser
        .pause(1000)
        .assert.visible('.paragraph-video__text > :nth-child(2)')
        .expect.element('.paragraph-video__text > :nth-child(2)').text.to.equal('In 2018, after 43 years at this historic site, AXA moves to Isneauville, a few miles away, with offices that are…extremely modern!')
    },
    
    'it should play youtube video': function(browser) {
    browser
        .execute('scrollTo(0,3500)')
        .pause(1000)
        .assert.visible('#timeline > div.timeline-content > div.body-content > div.paragraph-video.js-scroll-animation.animated.fadeInUp > div > div.paragraph-video__wrapper > div.paragraph-video__video > div > div > div > button')
        .click('#timeline > div.timeline-content > div.body-content > div.paragraph-video.js-scroll-animation.animated.fadeInUp > div > div.paragraph-video__wrapper > div.paragraph-video__video > div > div > div > button')
        .pause(1000)
        .assert.visible('.youtube_player > iframe')
        .click('.youtube_player > iframe')
        .pause(3000)
    },
    
    'it should click on header bar in order to see the others periods': function(browser) {
    browser
        .assert.visible('.timeline-sticky-header-1 > .timeline-sticky-header__button > .container > .timeline-sticky-header__wrapper > .hidden-xs.hidden-sm')
        .click('.timeline-sticky-header-1 > .timeline-sticky-header__button > .container > .timeline-sticky-header__wrapper > .hidden-xs.hidden-sm')
    },
    
    'it should close periods list': function(browser) {
    browser
        .assert.visible('.icon-cross-gap')
        .click('.icon-cross-gap')
    },
    
    'it should click again on header bar and see period list title': function(browser) {
    browser
        .assert.visible('.timeline-sticky-header-1 > .timeline-sticky-header__button > .container > .timeline-sticky-header__wrapper > .hidden-xs.hidden-sm')
        .click('.timeline-sticky-header-1 > .timeline-sticky-header__button > .container > .timeline-sticky-header__wrapper > .hidden-xs.hidden-sm')
        .assert.visible('.periods-list__title > .container > div')
        .expect.element('.periods-list__title > .container > div').text.to.equal("Discover the major periods of AXA's adventure")
    browser
        .end()
    }
 
}