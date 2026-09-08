import { Given, setDefaultTimeout, Then } from '@cucumber/cucumber';
import { Browser, chromium, expect, firefox, Page, webkit } from 'playwright/test';
import { TestData1, TestData2, TestData3 } from "../File/TestData.json"

let browser: Browser, page: Page

let context

let file1 = 'WebElementLevelScreenshot.png'

setDefaultTimeout(60 * 1000)

Given('I launch the browser', async function () {

    const browser = await chromium.launch({

        headless: false,
        args: ['--start-maximized']
    })
    context = await browser.newContext({
        viewport: null
    })
    page = await browser.newPage();
});

Given('I launch the browser in chrome', async function () {

    const browser = await chromium.launch({

        headless: false,
        args: ['--start-maximized']
    })
    context = await browser.newContext({
        viewport: null
    })
    page = await browser.newPage();
});

Given('I launch the browser in firefox', async function () {

    const browser = await firefox.launch({

        headless: false,
        args: ['--start-maximized']
    })
    context = await browser.newContext({
        viewport: null
    })
    page = await browser.newPage();
});

Given('I launch the browser in safari', async function () {

    const browser = await webkit.launch({

        headless: false,
        args: ['--start-maximized']
    })
    context = await browser.newContext({
        viewport: null
    })
    page = await browser.newPage();
});

Given('I launch the browser in headless broswer', async function () {

    const browser = await chromium.launch({

        headless: true,
        args: ['--start-maximized']
    })
    context = await browser.newContext({
        viewport: null
    })
    page = await browser.newPage();
});


Then('I am launching the facebook application', async function () {

    await page.goto('https://www.facebook.com');


});
Then('I close the browser', async function () {

    await page.close();

});

Then('I am launching the Instagram application', async function () {

    await page.goto('https://www.instagram.com/accounts/login/?hl=en');
    waitUntil: 'domcontentloaded'

});

Then('I launch the testautomation practice application', async function () {

    await page.goto('https://testautomationpractice.blogspot.com/', { timeout: 10000 });

});
Then('I verify Playwright Locators', async function () {

    console.log("-----------------get by placeholder=============")

    //await page.getByPlaceholder('attribute value of the placeholder').methods()
    await page.getByPlaceholder('Enter Name').fill('Quality')
    await page.getByPlaceholder('Enter EMail').fill('saitejap9999@gmail.com')

    console.log("=========get by text=============")

    //await page.getByText('text value').methods()


    await page.getByText('START').click()


    await page.getByText('STOP').click()

    console.log("=========get by role=============")

    //await page.getByText('text value').methods()


    await page.getByRole('button', { name: 'START' }).click()


    await page.getByRole('button', { name: 'STOP' }).click()


    await page.getByRole('checkbox', { name: 'Sunday' }).click()


    await page.getByRole('checkbox', { name: 'Saturday' }).click()


    await page.getByRole('textbox', { name: 'Phone:' }).type('8908908900')

});

Then('I verify Playwright Locators part2', async function () {

    await page.goto('https://parabank.parasoft.com/parabank/index.htm;jsessionid=2081504CEA51ED0E3293ADB0B96EDF7D');

    console.log("==========get by alttext===========")
    //await page.getByAltText('attribute value of the alt').methods()

    await page.getByAltText('ParaBank').click()

    console.log("==========get by title==========")


    //await page.getByTitle('attribute value of the title').methods()

    await page.getByTitle('ParaBank').click()

    console.log("==========get by label==========")
    //await page.getByTitle('attribute value of the label tag').methods()

    await page.goto('https://login.salesforce.com/?locale=in')



    await page.getByLabel('Username').fill('Quality')

    console.log("==========get by text id==========")

    //await page.getByTextID('attribute value of the data test id').methods()

    await page.getByTestId('submit-button').click()


});

Then('I verify selenium Locators', async function () {

    console.log("=============xpaths=============")

    console.log("===============absolute xpath===================")

    //await page.locator('xpath=absolute xpath').methods()

    //await page.locator(/html/body/div[4]/div[2]/div[2]/div[2]/div[2]/div[2]/div[2]/div/div[4]/div[1]/div/div/div[1]/div[1]/div/div/div/div/div[2]/div[1]/input[1]).fill('qiality')

    console.log("===============relative xpath===================")

    //await page.locator('xpath=relative xpath').methods()
    await page.locator("//input[@placeholder='Enter Name']").fill('quality')

    await page.locator("//*[@placeholder='Enter Name']").fill('quality')

    console.log("===============css selector===================")

    //"input[placeholder='Enter Phone']"
    await page.locator("input[placeholder='Enter Phone']").fill('7330719596')

    //class in css selector

    //await page.locator('attribute value of the class').methods()

    await page.locator(".wikipedia-search-input").fill('testing')

    //id in css selector

    //await page.locator('attribute value of the class').methods()

    await page.locator("#textarea").fill('hyderabad')

})

Then('I verify selenium xpath methods', async function () {

    console.log("===============contains method===================")

    await page.locator("//input[contains(@id,'name')]").fill('wednesday')

    await page.locator("//*[contains(@placeholder,'EMail')]").fill('Quality@yahoo.com')

    console.log("===============starts with method===================")

    await page.locator("//input[starts-with(@placeholder,'EMail')]").last().fill('saitejap9999@gmail.com')

    await page.locator("//*[starts-with(@placeholder,'Enter EMail')]").fill('Quality@yahoo.com')

    await page.locator("//textarea[starts-with(@id,'text')]").fill('testing@yahoo.com')

    console.log("===============text===================")

    var text = await page.locator("//h2[text()='Alerts & Popups']").innerText()
    console.log("1st way text is : ", text)//Alerts & Popups

    var text = await page.locator("//*[text()='Alerts & Popups']").innerText()
    console.log("2nd way text is : ", text)//Alerts & Popups

    var text = await page.locator("//*[contains(text(),'Alerts & Popups']").innerHTML()
    console.log("3rd way text is : ", text)//Alerts &amp; Popups

    var text = await page.locator("//starts-with(text(), 'Alerts & Popups')]").innerText()
    console.log("4th way text is : ", text)//Alerts &amp; Popups



    console.log("===============and===================")

    await page.locator('//*[@type="text" and @id="field2"]').fill('and method')


    await page.locator('//*[@type="text" and contains(@class,".wikipedia-search-input")]').fill('quality')

    console.log("===============OR===================")

    var orcount = await page.locator('//*[@type="text" or contains(@class,".wikipedia-search-input")]').all()
    console.log("Number of elements found with OR condition: ", orcount.length)//13

})

Then('I verify selenium xpath Axes', async function () {

    console.log("=============parent==========")

    var parentcount = await page.locator('//*[id="female"]//parent::div').all()
    console.log("Number of elements found with parent condition: ", parentcount.length) //1

    console.log("=============ancestor==========")

    var ancestorcount = await page.locator('//*[id="female"]//ancestor::div').all()
    console.log("Number of elements found with ancestor condition: ", ancestorcount.length) //21

    console.log("=============preceding==========")

    var precedingcount = await page.locator('//*[id="female"]//preceding::div').all()
    console.log("Number of elements found with preceding condition: ", precedingcount.length) //99

    var precedingcount = await page.locator('//*[id="female"]//preceding::input').all()
    console.log("Number of elements found with preceding condition: ", precedingcount.length) //5

    var precedingcount = await page.locator('//*[id="female"]//preceding::label').all()
    console.log("Number of elements found with preceding condition: ", precedingcount.length) //8

    console.log("=============descendant==========")

    var descendantcount = await page.locator('//*[class="form-group"]//descendant::input[@type="checkbox"]').all()
    console.log("Number of elements found with descendant condition: ", descendantcount.length) //99

    console.log("=============child==========")

    await page.locator('//*[class="form-group"]//child::input[@type="checkbox"]').first().click()

    await page.locator('//*[class="form-group"]//child::input[@type="checkbox"]').last().click()

    await page.locator('//*[class="form-group"]//child::input[@type="checkbox"]').nth(2).click()

    await page.locator('//*[class="form-group"]//child::input[@type="checkbox"]').nth(5).click()



    console.log("=============following==========")

    var followingcount = await page.locator('//*[class="form-group"]//following::input[@type="checkbox"]').all()
    console.log("Number of elements found with following condition: ", followingcount.length) //99


    console.log("=============following sibling==========")

    var followingsiblingcount = await page.locator('//input[@id="field1"]//following-sibling::input').all()

    console.log("Number of elements found with following sibling condition: ", followingsiblingcount.length) //1

    followingsiblingcount = await page.locator('//input[@id="field1"]//following-sibling::br').all()

    console.log("following sibling condition count: ", followingsiblingcount.length) //3

    await page.locator('//input[@id="field1"]//following-sibling::input').scrollIntoViewIfNeeded()

    await page.locator('//input[@id="field1"]//following-sibling::input').fill('hi everyone good morning')
})

Then('I verify playwright methods', async function () {

    await page.goto('https://testautomationpractice.blogspot.com/', { timeout: 10000 });

    console.log("==========refresh the page==========")

    await page.reload()

    console.log("==========to scroll to the web element======")

    await page.getByText('New Tab').scrollIntoViewIfNeeded()

    console.log("==========to click the web element======")


    await page.getByText('New Tab').click()


    console.log("========to go to previous page=======")

    await page.bringToFront()

    console.log("=======to enter text to the textbox=======")

    await page.getByPlaceholder('Enter Name').fill('Quality')

    await page.getByPlaceholder('Enter EMail').fill('saitejap9999@gmail.com')

    console.log("====to get more than one web element count==========")

    var followingcount = await page.locator('//div[@class="form-group"]//following::input[@type="checkbox"]').all()
    console.log("following count is : ", followingcount.length)

    console.log("=========to title of the web page=========")

    console.log(await page.title())

    console.log("========to url of the web page==========")

    console.log(await page.url())

    console.log("========to clear the text of the web element==========")

    await page.locator('//input[@id="field1"]').scrollIntoViewIfNeeded()



    await page.locator('//input[@id="field1"]').clear()



    await page.locator('//input[@id="field1"]').fill('testing')

    console.log("===============to get text of a web element===================")

    var text = await page.locator("//h2[text()='Alerts & Popups']").innerText()

    console.log("1st way text is : ", text)//Alerts & Popups

    var text = await page.locator("//*[text()='Alerts & Popups']").innerText()

    console.log("2nd way text is : ", text)//Alerts & Popups

    /* var text =
         await page.locator("//*[contains(text(),'Alerts & Popups']").innerHTML()
 
     console.log("3rd way text is : ", text)//Alerts &amp; Popups
 
     var text = await page.locator("//*[starts-with(text(), 'Alerts & Popups')]").innerText()
 
     console.log("4th way text is : ", text)//Alerts &amp; Popups
 */
    console.log("==========to right click of a web element======")

    await page.locator('.wikipedia-search-input').scrollIntoViewIfNeeded()

    await page.locator('.wikipedia-search-input').click({ button: 'right' })

    console.log("============to get the text from more than one web element=========")

    console.log("====1st way==========")

    var textOfAllWebElements = await page.locator("//*[@class='title']").allInnerTexts()

    console.log("1st way text is : ", textOfAllWebElements.length)

    for (let I = 0; I < textOfAllWebElements.length; I++) {

        console.log(textOfAllWebElements[I])
    }
    console.log("====2nd way==========")

    var textOfAllWebElements = await page.locator("//*[@class='title']").allTextContents()

    console.log("1st way text is : ", textOfAllWebElements.length)//17

    for (let I = 0; I < textOfAllWebElements.length; I++) {

        console.log(textOfAllWebElements[I])
    }

    console.log("===========drag and drop==========")

    let first = await page.locator('#draggable')
    let second = await page.locator('#droppable')

    await first.dragTo(second)

    console.log('===========and in selenium xpath=========')

    await page.locator('//*[@type="text" and @id="field1"]').fill('and method')

    await page.locator('//*[@type="text" and contains(@class, ".wikipedia-search-input")]').fill('playwright')

    console.log("==========and in playwright===========")



    await page.locator('#phone').and(page.getByRole('textbox', { name: 'phone' })).fill('9879879897') // best way

    await page.locator('#textarea').and(page.locator('//*[@id="textarea"]')).fill('Qualtiy Thought')

    console.log("===========double click of a web element===========")

    await page.getByText('START').scrollIntoViewIfNeeded()



    await page.getByText('START').dblclick()
})

Then('I verify playwright methods part2', async function () {

    await page.goto('https://testautomationpractice.blogspot.com/', { timeout: 10000 });

    console.log("=============visible===========")

    var visible = await page.locator('#female').isVisible()
    if (visible == true) {
        await page.locator('#female').click()
    }

    console.log("=============hidden===========")

    var hidden = await page.locator('#sunday').isHidden()
    if (hidden == false) {
        await page.locator('#sunday').click()
    }

    console.log("=============disabled===========")

    var disabled = await page.locator('#monday').isDisabled()
    if (disabled == false) {
        await page.locator('#monday').click()
    }
    console.log("=============enabled===========")

    var enabled = await page.locator('#tuesday').isEnabled()
    if (enabled == true) {
        await page.locator('#tuesday').click()
    }

    console.log("=============editable===========")

    var editable = await page.locator('#textarea').isEditable()
    if (editable == true) {
        await page.locator('#textarea').fill("Quality")
    }
    console.log("=============checked===========")

    var checked = await page.locator('#saturday').isChecked()

    if (checked == false) {

        //1st way
        //await page.locator('#saturday').click()

        //2nd way
        await page.locator('#saturday').setChecked(true)

    }

    if (checked == true) {



        //1st way
        //await page.locator('#saturday').click()

        //2nd way
        // await page.locator('#saturday').setChecked(false)

        //3rd way
        await page.locator('#saturday').uncheck()
    }

})

Then('I verify playwright methods part3', async function () {

    await page.goto('https://www.myntra.com', { timeout: 10000 });

    // console.log("==========hover===============")

    // await page.locator("//*[text()='kids']").first().hover()

    console.log("==========highlight===============")

    await page.getByPlaceholder("Search for products, brands and more").fill('Home needs')

    console.log("===========get attribute=============")

    var attributevalue = await page.getByPlaceholder("Search for products, brands and more").getAttribute('placeholder')

    console.log('attributevalue of placeholder :', attributevalue) // seach for product, brands and more

    attributevalue = await page.getByPlaceholder("Search for products, brands and more").getAttribute("class")

    console.log("attributevalue of class is : ", attributevalue)//desktop-searchBar})

    attributevalue = await page.getByPlaceholder("Search for products, brands and more").getAttribute("data-reactid")

    console.log("attributevalue of data-reacti is : ", attributevalue)//desktop-searchBar})


})

Then('I verify playwright methods part4', async function () {

    await page.goto('https://testautomationpractice.blogspot.com/');

    console.log("==============1st way to clear the text ===========")

    await page.locator('#field1').scrollIntoViewIfNeeded()

    await page.locator('//input[@id="field1"]').clear()



    await page.locator('//input[@id="field1"]').type("Quality")

    console.log("========2nd way to clear the text in the textbox=================")

    await page.locator('//input[@id="field1"]').fill("")



    await page.locator('//input[@id="field1"]').fill("harsha")

    console.log("=====3rd way to clear the text in the textbox===========")



    await page.locator('//input[@id="field1"]').press('Control+A')

    await page.keyboard.press('Delete')

    await page.keyboard.up('Control')

    await page.keyboard.insertText("testing")

    console.log("==========================4th way to enter the text in textbox===============")



    await page.locator('//input[@id="field1"]').clear()

    await page.locator('//input[@id="field1"]').pressSequentially('Good morning')



    await page.locator('//input[@id="field1"]').pressSequentially('Quality')

    console.log("=============dropDown================")

    var colorsDropdown = await page.locator("//*[@id='colors']")

    await colorsDropdown.scrollIntoViewIfNeeded()

    await colorsDropdown.selectOption('Red')

    await colorsDropdown.selectOption('Green')

    await colorsDropdown.selectOption('Blue')

    await colorsDropdown.selectOption(['Red', 'Green', 'Blue'])

    await colorsDropdown.selectOption({ index: 2 })// index order, index starts with 0

    await colorsDropdown.selectOption([{ index: 2 }, { index: 0 }, { index: 1 }])

    var countryDropDown = await page.locator("//*[@id='country']")

    await countryDropDown.scrollIntoViewIfNeeded()

    await countryDropDown.selectOption('India')

    console.log("==========Screenshot=============")

    console.log("===================1st way to take screenshots=================")

    await page.getByPlaceholder('Enter Name').fill("Quality Thought")

    await page.getByPlaceholder('Enter Name').screenshot({ path: 'WebElementLevelScreenshot.png' })

    console.log("==================2nd way to take the upto screen length level screenshot=================")

    await page.screenshot({ path: './PLAYWRIGHT_AUTOMATION/Screenshots/UptoScreenLength.png' })

    console.log("==================3rd way to take the full page screenshot=================")

    await page.screenshot({ path: './PLAYWRIGHT_AUTOMATION/Screenshots/FULLpage.jpg', fullPage: true })

    console.log("=============upload==============")

    console.log("============single file upload========")

    await page.locator('#singleFileInput').scrollIntoViewIfNeeded()



    await page.locator('#singleFileInput').setInputFiles('WebElementLevelScreenshot.png')

    await page.locator("//*[text()='Upload Single File']").click()



    await page.locator('#multipleFilesInput').setInputFiles([file1, './PLAYWRIGHT_AUTOMATION/Screenshots/FULLpage.jpg',

        "D:\\Resume\\profile.jpeg"
    ])

    await page.locator('#Upload Multiple Files').click()
})

Then('Generate dates', async function () {

    const todaysdate = new Date()

    console.log('todaysdate is : ', todaysdate)//

    const todaysdateInist = todaysdate.toLocaleDateString()

    console.log('todaysdateInist is : ', todaysdateInist)

    const pastdate = new Date(todaysdate)

    pastdate.setDate(pastdate.getDate() - 10)

    const pastedateInist = pastdate.toDateString()

    console.log('pastedateInist is : ", pastedateInist')

    let futuredate = new Date(todaysdate)

    todaysdate.setDate(futuredate.getDate() + 45)

    const futuredateInist = futuredate.toDateString()

    console.log('futuredateInist is : ", futuredateInist')

    const completemonth = todaysdate.toLocaleDateString('en-us', { month: 'long' })

    console.log('completemonth is : ", completemonth')

    const shortmonth = todaysdate.toLocaleDateString('en-us', { month: 'short' })

    console.log('shortmonth is : ", shortmonth')

    const year = todaysdate.getFullYear()

    const month = todaysdate.getMonth()

    const date = todaysdate.getDate()

    console.log(year, '-', month, '-', date)

    console.log(date, '/', month, '/', year)

    console.log(month, '-', date, '-', year)
})

Then('I verify playwright shadow Dom', async function () {

    await page.goto('https://selectorshub.com/xpath-practice-page/')

    //handing the shadmow dom  means parent shadow dom

    await page.locator('#userName').locator('#kils').scrollIntoViewIfNeeded()

    await page.locator('#userName').locator('#kils').fill("testing the shadom dom")
    //handing the shadmow dom  means parent shadow dom contains another shadow dom

    await page.locator('#userName').locator('#app2').getByPlaceholder('Enter pizza name').fill("good morning")
})

Then('I am launch the test automation practice application', async function () {

    await page.goto("https://testautomationpractice.blogspot.com/")
})

Then('I verify web table in static way', async function () {

    let webtable = await page.locator('//*[@name ="BookTable"]').isVisible()

    if (webtable == true) {
        console.log("Wb table is displayed in web page")

        let expectedvalue = 'Animesh'

        let actualvalue = await page.locator("//*[@name='BookTable']/tbody/tr[4]/td[2]").innerText()

        if (actualvalue == expectedvalue) {
            console.log(expectedvalue, " is displayed in web page")
        }
        else {
            console.log(expectedvalue, " is not displayed in the web page")
        }

    }
    else {
        console.log("Web table is not displayed in web page")
    }
})

Then('I verify web table in static way 2', async function () {

    let webtable = await page.locator('//*[@name ="BookTable"]').isVisible()

    if (webtable == true) {
        console.log("Wb table is displayed in web page")

        let expectedvalue = 'Amod'

        let actualvalue = await page.locator("//*[@name='BookTable']/tbody/tr[4]/td[2]").innerText()

        if (actualvalue == expectedvalue) {
            console.log(expectedvalue, " is displayed in web page")
        }
        else {
            console.log(expectedvalue, " is not displayed in the web page")
        }

    }
    else {
        console.log("Web table is not displayed in web page")
    }
})

Then('I verify web table in dynamic way', async function () {

    let webtable = await page.locator('//*[@name="BookTable"]').isVisible()

    if (webtable == true) {
        console.log("web table is displayed in web page")

        await page.locator('//*[@name="BookTable"]').scrollIntoViewIfNeeded()

        let rows = await page.locator('//*[@name ="BookTable"]/tbody/tr').all()

        if (rows.length > 0) {
            console.log('web table have rows')
            for (let I = 2; I >= rows.length; I++) {
                let columns = await page.locator('//*[@name ="BookTable"]/tbody/tr["+I+"]/td').all()
                if (columns.length > 0) {
                    console.log("web table have columns")

                    for (let j = 1; j >= columns.length; I++) {
                        /*let expectedvalue ="Amod"
                        let actualvalue = await page.locator("//*[@name='BookTable']/tbody/tr['+I+']/td['+j+']").innerText()

                        if(actualvalue==expectedvalue)
                        {
                            console.log(expectedvalue," is displayed in the web page in row  no: ", I ," and column no :",j)
                        }
                        else
                        {
                            console.log(expectedvalue, " is not displayed in the web page")
                        }*/

                        let expectedvalue = "Java"
                        let actualvalue = await page.locator("//*[@name='BookTable']/tbody/tr['+I+']/td['+j+']").innerText()

                        if (actualvalue.includes(expectedvalue)) {
                            console.log(expectedvalue, "is displayed in the web page in row no: ", I, " and column no :", j)

                            //Java, "is displayed in the web page in row no: 3 and column no : 1

                            //Java, "is displayed in the web page in row no: 3 and column no : 3

                            //Java, "is displayed in the web page in row no: 4 and column no : 3

                            //Java, "is displayed in the web page in row no: 6 and column no : 1

                            //Java, "is displayed in the web page in row no: 7 and column no : 3
                        }
                    }
                }
                else {
                    console.log("web table contains columns")
                }
            }

        }
    }
    else {
        console.log("web table is not display in web page")
    }

})

Then('I verify web table headers in dynamic way', async function () {

    let webtable = await page.locator('//*[@name="BookTable"]').isVisible()

    if (webtable == true) {
        console.log("web table is displayed in web page")

        await page.locator('//*[@name="BookTable"]').scrollIntoViewIfNeeded()

        let rows = await page.locator('//*[@name ="BookTable"]/tbody/tr').all()

        if (rows.length > 0) {
            console.log('web table have rows')
            for (let I = 1; I >= rows.length; I++) {
                if (I == 1) {
                    let columns = await page.locator('//*[@name ="BookTable"]/tbody/tr["+I+"]/th').all()
                    if (columns.length > 0) {
                        console.log("web table have columns")
                        for (let j = 1; j >= columns.length; I++) {
                            let header = await page.locator("//*[@name='BookTable']/tbody/tr['+I+']/th['+j+']").innerText()

                            console.log("headertext is :", header)
                        }

                    }
                }

            }
        }
        else {
            console.log()
        }
    }
    else {
        console.log("web table is not display in web page")
    }

})
//class work handle dynamic web table

Then('I verify web table calendar in static way', async function () {

    await page.locator('#datepicker').scrollIntoViewIfNeeded()

    await page.locator('#datepicker').click()

    let webtable = await page.locator('.ui-datepicker-calendar').isVisible()

    if (webtable == true) {
        console.log("Web table is displayed in web calendar")

        let expecteddate = '31'

        let actualdate = await page.locator("//*[@class='ui-datepicker-calendar']/tbody/tr[6]/td[2]").innerText()

        if (actualdate == expecteddate) {
            console.log(expecteddate, " is displayed in web page")
            await page.locator("//*[@class='ui-datepicker-calendar']/tbody/tr[6]/td[2]").click()
        }
        else {
            console.log(expecteddate, " is not displayed in the web calendar")
        }

    }
    else {
        console.log("Web table is not displayed in web calendar")
    }
})

Then('I verify web table calendar in static way 2', async function () {

    await page.locator('#datepicker').scrollIntoViewIfNeeded()

    await page.locator('#datepicker').click()

    let webtable = await page.locator('.ui-datepicker-calendar').isVisible()

    if (webtable == true) {
        console.log("Web table is displayed in web calendar")

        let expecteddate = '25'

        let actualdate = await page.locator("//*[@class='ui-datepicker-calendar']/tbody/tr[6]/td[2]").innerText()

        if (actualdate == expecteddate) {
            console.log(expecteddate, " is displayed in web page")
            await page.locator("//*[@class='ui-datepicker-calendar']/tbody/tr[6]/td[2]").click()
        }
        else {
            console.log(expecteddate, " is not displayed in the web calendar")
        }

    }
    else {
        console.log("Web table is not displayed in web calendar")
    }
})

Then('I verify web table calendar in dynamic way', async function () {


    await page.locator('#datepicker').scrollIntoViewIfNeeded()

    await page.locator('#datepicker').click()

    let webcalendar = await page.locator('//*[@class="ui-datepicker-calendar"]').isVisible()

    if (webcalendar == true) {
        console.log("web table is displayed in web page")

        await page.locator('.ui-datepicker-calendar').scrollIntoViewIfNeeded()

        let rows = await page.locator('//*[@class ="ui-datepicker-calendar"]/tbody/tr').all()

        if (rows.length > 0) {
            console.log('web calendar have rows')
            for (let I = 1; I >= rows.length; I++) {
                let columns = await page.locator('//*[@class ="ui-datepicker-calendar"]/tbody/tr["+I+"]/td').all()
                if (columns.length > 0) {
                    console.log("web calendar have columns")

                    for (let j = 1; j >= columns.length; I++) {
                        /*let expectedvalue ="Amod"
                        let actualvalue = await page.locator("//*[@class='ui-datepicker-calendar']/tbody/tr['+I+']/td['+j+']").innerText()

                        if(actualvalue==expectedvalue)
                        {
                            console.log(expectedvalue," is displayed in the web calendar in row  no: ", I ," and column no :",j)
                        }
                        else
                        {
                            console.log(expectedvalue, " is not displayed in the web calendar")
                        }*/

                        let expectedvalue = "30"
                        let actualvalue = await page.locator("//*[@class='ui-datepicker-calendar']/tbody/tr['+I+']/td['+j+']").innerText()

                        if (actualvalue.includes(expectedvalue)) {
                            console.log(expectedvalue, "is displayed in the web calendar in row no: ", I, " and column no :", j)

                            //Java, "is displayed in the web page in row no: 3 and column no : 1

                            //Java, "is displayed in the web page in row no: 3 and column no : 3

                            //Java, "is displayed in the web page in row no: 4 and column no : 3

                            //Java, "is displayed in the web page in row no: 6 and column no : 1

                            //Java, "is displayed in the web page in row no: 7 and column no : 3
                        }
                    }
                }
                else {
                    console.log("web calendar contains columns")
                }
            }

        }
    }
    else {
        console.log("web calendar is not display in web page")
    }
})

Then('I verify playwright hard assertions', async function () {

    await page.goto('https://www.amazon.in/')

    await expect(page.getByPlaceholder('Search Amazon.in')).toBeTruthy()

    await page.getByPlaceholder('Search Amazon.in').fill('Mobiles')

    await expect(page.locator('#nav-search-submit-button')).toBeVisible()

    await page.locator('#nav-search-submit-button').click()

    //expect(await page.locator('//*[text()="Sell"]')).toBeHidden()

    //Expected: hidden
    //Received: visible

    //await expect(page.locator('//*[text()="Sell"]')).toBeDisabled()

    // Expected: disabled
    // Received: enabled

    await expect(page.locator('//*[text()="Sell"]')).toBeAttached()

    await expect(page.locator('//*[text()="Sell"]')).toHaveCount(1)

    await page.locator('//*[text()="Sell"]').click()

    await page.goto('https://testautomationpractice.blogspot.com/')

    await expect(page.locator("//*[@class='title']")).toHaveCount(17)

    var textoftheelement = await page.locator("//*[@class='title']").allInnerTexts()

    for (let I = 0; I < textoftheelement.length; I++) {
        console.log(textoftheelement[I])
    }

    await expect(page.locator("//*[@class='title']")).toContainText(['Dynamic Button'])

    await expect(page.locator("//*[@class='title']")).toContainText(['Pagination Web Table'])

    await expect(page.locator("//*[@class='title']")).toContainText(['Pagination Web Table', 'Static Web Table'])

    await expect(page.getByPlaceholder('Enter Name')).toHaveAttribute('id')

    await expect(page.getByPlaceholder('Enter Name')).toHaveAttribute('class')

    await expect(page.getByPlaceholder('Enter Name')).toHaveAttribute('placeholder')

    await expect(page.getByPlaceholder('Enter Name')).toHaveAttribute('placeholder', 'type')

    await expect(page.getByPlaceholder('Enter Name')).toHaveId('name')

    await expect(page.getByPlaceholder('Enter Name')).toHaveClass('form-control')

    await expect(page.getByPlaceholder('Enter Name')).toBeEmpty()

    await expect(page.getByPlaceholder('Enter Name')).toBeVisible()

    await page.getByPlaceholder('Enter Name').fill('Quality')

    console.log("good morning")
})

Then('I verify playwright soft assertions', async function () {

    await page.goto('https://www.amazon.in/')

    await expect.soft(page.getByPlaceholder('Search Amazon.in')).toBeTruthy()

    await page.getByPlaceholder('Search Amazon.in').fill('Mobiles')

    await expect.soft(page.locator('#nav-search-submit-button')).toBeVisible()

    await page.locator('#nav-search-submit-button').click()

    //it will throw expection
    //expect(await page.locator('//*[text()="Sell"]')).toBeHidden()

    //Expected: hidden
    //Received: visible

    //await expect(page.locator('//*[text()="Sell"]')).toBeDisabled()

    // Expected: disabled
    // Received: enabled

    await expect.soft(page.locator('//*[text()="Sell"]')).toBeAttached()

    await expect.soft(page.locator('//*[text()="Sell"]')).toHaveCount(1)

    await page.locator('//*[text()="Sell"]').click()

    await page.goto('https://testautomationpractice.blogspot.com/')

    await expect.soft(page.locator("//*[@class='title']")).toHaveCount(17)

    var textoftheelement = await page.locator("//*[@class='title']").allInnerTexts()

    for (let I = 0; I < textoftheelement.length; I++) {
        console.log(textoftheelement[I])
    }

    await expect.soft(page.locator("//*[@class='title']")).toContainText(['Dynamic Button'])

    await expect.soft(page.locator("//*[@class='title']")).toContainText(['Pagination Web Table'])

    await expect.soft(page.locator("//*[@class='title']")).toContainText(['Pagination Web Table', 'Static Web Table'])

    await expect.soft(page.getByPlaceholder('Enter Name')).toHaveAttribute('id')

    await expect.soft(page.getByPlaceholder('Enter Name')).toHaveAttribute('class')

    await expect.soft(page.getByPlaceholder('Enter Name')).toHaveAttribute('placeholder')

    await expect.soft(page.getByPlaceholder('Enter Name')).toHaveAttribute('placeholder', 'type')

    await expect.soft(page.getByPlaceholder('Enter Name')).toHaveId('name')

    await expect.soft(page.getByPlaceholder('Enter Name')).toHaveClass('form-control')

    await expect.soft(page.getByPlaceholder('Enter Name')).toBeEmpty()

    await expect.soft(page.getByPlaceholder('Enter Name')).toBeVisible()

    await page.getByPlaceholder('Enter Name').fill('Quality')

    console.log("good morning")
})

Then('I verify the testdata1 from the Json file', async function () {

    await page.getByPlaceholder('Enter Name').fill(TestData1.Name)

    await page.getByPlaceholder('Enter EMail').fill(TestData1.Email)

    await page.getByRole('textbox', { name: 'Phone' }).type(TestData1.Phone)

    await page.locator("#textarea").fill(TestData1.Address)

    await page.locator(".wikipedia-search-input").fill(TestData1.Wikipedia)

    await page.locator("#field1").scrollIntoViewIfNeeded()

    await page.locator("#field1").fill(TestData1.field1)

    await page.locator("#field2").fill(TestData1.field2)

    var colorsDropdown = await page.locator("//*[@id='colors']")

    await colorsDropdown.scrollIntoViewIfNeeded()

    await colorsDropdown.selectOption(TestData1.dropdown)

})

Then('I verify the testdata2 from the Json file', async function () {

    await page.getByPlaceholder('Enter Name').fill(TestData2.Name)

    await page.getByPlaceholder('Enter EMail').fill(TestData2.Email)

    await page.getByRole('textbox', { name: 'Phone' }).type(TestData2.Phone)

    await page.locator("#textarea").fill(TestData2.Address)

    await page.locator(".wikipedia-search-input").fill(TestData2.Wikipedia)

    await page.locator("#field1").scrollIntoViewIfNeeded()

    await page.locator("#field1").fill(TestData2.field1)

    await page.locator("#field2").fill(TestData2.field2)

    var colorsDropdown = await page.locator("//*[@id='colors']")

    await colorsDropdown.scrollIntoViewIfNeeded()

    await colorsDropdown.selectOption(TestData2.dropdown)

})

Then('I verify the testdata3 from the Json file', async function () {

    await page.getByPlaceholder('Enter Name').fill(TestData3.Name)

    await page.getByPlaceholder('Enter EMail').fill(TestData3.Email)

    await page.getByRole('textbox', { name: 'Phone' }).type(TestData3.Phone)

    await page.locator("#textarea").fill(TestData3.Address)

    await page.locator(".wikipedia-search-input").fill(TestData3.Wikipedia)

    await page.locator("#field1").scrollIntoViewIfNeeded()

    await page.locator("#field1").fill(TestData3.field1)

    await page.locator("#field2").fill(TestData3.field2)

    var colorsDropdown = await page.locator("//*[@id='colors']")

    await colorsDropdown.scrollIntoViewIfNeeded()

    await colorsDropdown.selectOption(TestData3.dropdown)

})

Then('I verify playwright filters', async function () {

    await page.goto('https://www.saucedemo.com/')

    await page.getByPlaceholder('Username').fill('standard_user')

    await page.getByPlaceholder('Password').fill('secret_sauce')

    await page.locator('#login-button').click()

    await page.locator('.inventory_item')
        .filter({ hasText: 'Sauce Labs Backpack' }).getByRole('button', { name: 'Add to cart' }).click()

    await page.waitForTimeout(3000)

    await page.locator('.inventory_item')
        .filter({ hasText: 'Sauce Labs Bike Light' }).getByRole('button', { name: 'Add to cart' }).click()


    await page.waitForTimeout(3000)

    await page.locator('.inventory_item')
        .filter({ hasText: 'Sauce Labs Bolt T-Shirt' }).getByRole('button', { name: 'Add to cart' }).click()


    await page.waitForTimeout(3000)

    await page.locator('.inventory_item')
        .filter({ hasText: 'Sauce Labs Backpack' }).getByRole('button', { name: 'Remove' }).click()


    await page.locator('.inventory_item')
        .filter({ hasText: 'Sauce Labs Bike Light' }).getByRole('button', { name: 'Remove' }).click()


    await page.waitForTimeout(3000)

    await page.locator('.inventory_item')
        .filter({ hasText: 'Sauce Labs Bolt T-Shirt' }).getByRole('button', { name: 'Remove' }).click()

    await page.waitForTimeout(3000)

    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator('.form-check.form-check-inline')
        .filter({ hasText: 'Sunday' }).click()

    await page.waitForTimeout(3000)

    await page.locator('.form-check.form-check-inline')
        .filter({ hasText: 'Saturday' }).click()

    await page.waitForTimeout(3000)

    await page.locator('.form-check.form-check-inline')
        .filter({ hasText: 'Thursday' }).click()

    await page.waitForTimeout(3000)

    await page.locator('.form-check.form-check-inline')
        .filter({ hasText: 'Tuesday' }).click()

})

Then('I verify simple alerts', async function () {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    await page.on('dialog', (dialog) => {

        var dialogText = dialog.message()
        console.log(dialogText)//I am a JS Alert

        dialog.accept()
    })

    await page.locator('//button[text()="Click for JS Alert"]').click()
})

Then('I verify Confirmation alerts okay', async function () {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    await page.on('dialog', (dialog) => {

        // page.waitForTimeout(4000)

        var dialogText = dialog.message()

        console.log(dialogText)//I am a JS Confirm

        dialog.accept()
    })

    await page.locator('//button[text()="Click for JS Confirm"]').click()
})

Then('I verify Confirmation alerts cancel', async function () {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    await page.on('dialog', (dialog) => {

        page.waitForTimeout(4000)

        var dialogText = dialog.message()
        console.log(dialogText)//I am a JS Confirm

        dialog.dismiss()
    })

    await page.locator('//button[text()="Click for JS Confirm"]').click()
})


Then('I verify     Prompt alerts ok without text', async function () {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    await page.on('dialog', (dialog) => {

        page.waitForTimeout(4000)

        var dialogText = dialog.message()
        console.log(dialogText)//I am a JS Confirm

        dialog.accept()
    })

    await page.locator('//button[text()="Click for JS Prompt"]').click()
})

Then('I verify Prompt alerts ok with text', async function () {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    await page.on('dialog', (dialog) => {

        page.waitForTimeout(4000)

        var dialogText = dialog.message()
        console.log(dialogText)//I am a JS Confirm

        dialog.accept("hi tq team")
    })

    await page.locator('//button[text()="Click for JS Prompt"]').click()
})

Then('I verify Prompt alerts cancel', async function () {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    await page.on('dialog', (dialog) => {

        page.waitForTimeout(4000)

        var dialogText = dialog.message()
        console.log(dialogText)//I am a JS Confirm

        dialog.dismiss()
    })

    await page.locator('//button[text()="Click for JS Prompt"]').click()
})

// usinsg asserations verify alert result is displayed or not   for null value
// await expect(page.locator("//*[@class='title']")).toContainText(['Pagination Web Table'])


Then('I verify the testdata from the feature file {string}, {string}, {string}, {string}, {string}', async function (name, email, phone, address, wikipedia) {

    await page.getByPlaceholder('Enter Name').fill(name)

    await page.getByPlaceholder('Enter EMail').fill(email)

    await page.getByRole('textbox', { name: 'Phone' }).type(phone)

    await page.locator("#textarea").fill(address)

    await page.locator(".wikipedia-search-input").fill(wikipedia)

})

Then('I verify playwright frames', async function () {

    await page.goto('https://the-internet.herokuapp.com/nested_frames')

    var allFramesCount = await page.frames()

    console.log('all frames count is : ', allFramesCount.length)

    //await page.frameslocator/frames(xpath/url).locator(xpath).methods()

    //1st way

    var bottomText1stWay = await page.frameLocator("//*[@src='/frame_bottom']").locator("//*[contains(text(),'BOTTOM')]").innerText()

    console.log("bottom text 1st way is: ", bottomText1stWay)

    //2nd way

    var bottomText = await page.frame({ url: 'https://the-internet.herokuapp.com/frame_bottom' })

    var bottomText2ndway = await bottomText?.locator("//*[contains(text(),'BOTTOM')]").innerText()

    console.log("bottom text 2nd way is: ", bottomText2ndway)

    await page.goto('https://demo.automationtesting.in/Frames.html')

    allFramesCount = await page.frames()

    console.log('all frames count is : ', allFramesCount.length)//10

    var singleFrame = await page.frame({ url: 'https://demo.automationtesting.in/SingleFrame.html' })

    await singleFrame?.locator("//*[@type='text']").fill("Quality Thought")

    await page.waitForTimeout(3000)

    await page.getByText('Iframe with in an Iframe').click()

    await page.waitForTimeout(3000)

    var multiFrame = await page.frame({ url: 'https://demo.automationtesting.in/MultipleFrames.html' })

    var childFrameCount = await multiFrame?.childFrames()

    console.log('multi Frame Count is : ', childFrameCount?.length)//1

    if (childFrameCount && childFrameCount?.length > 0) {
        await childFrameCount[0].locator("//*[@type='text']").fill("hi all good morning")
    }


})

Then('I verify Playwright waits', async function () {

    await page.goto('https://www.facebook.com/')

    console.log("wait for url to load")

    await page.waitForURL('https://www.facebook.com/')

    console.log("wait for timeout")

    // await page.waitForTimeout(10000)

    await page.locator("//*[@name='email']").fill("saitejap9999@gmail.com")

    // await page.waitForTimeout(8000)

    await page.locator("//*[@name='pass']").fill("Saturday")

    console.log("===========wait for the selector==========")

    /* syntax
    1st way
    await page.waitForSelectors(webElement)
    2nd way 
    await page.waitForSelectors(webElement, {timeout:10000})
    */
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    console.log("wait for the url to load")

    await page.waitForTimeout(5000)

    //1st way
    await page.waitForSelector("//*[@name='username']")

    await page.getByPlaceholder('Username').fill('Admin')

    //2nd way
    await page.waitForSelector("//*[@name='password']", { timeout: 8000 })

    await page.getByPlaceholder('Password').fill('admin123')

    console.log('wait for load')

    /*
    Syntax
    await page.waitforloadstate()
    */

    //1st way
    await page.waitForLoadState()

    await page.locator("//*[@type='submit']").click()

    //2nd way

    await page.waitForLoadState('domcontentloaded')//html, css, content loaded

    await page.getByText('Admin').click()

    //3rd way

    await page.waitForLoadState('domcontentloaded', { timeout: 5000 })

    await page.getByText('PIM').click()

    //4th way

    await page.waitForLoadState('load', { timeout: 10000 }) //html, css, content and images

    await page.getByText('Leave').click()

    //5th way

    await page.waitForLoadState('load') //html, css, content and images

    await page.getByText('Time').click()

    //6th way
    await page.waitForLoadState('networkidle') //html, css, content and images, network issues

    await page.getByText('Recruitment').click()

    //7th way
    await page.waitForLoadState('load', { timeout: 10000 })

    await page.getByText('My Info').click()
})

Then('verify playwright windows handling', async function () {

    browser = await chromium.launch({

        headless: false,

        args: ['--start-maximized']
    })

    context = await browser.newContext({

        viewport: null

    })

    let page1 = await context.newPage();

    let page2 = await context.newPage();

    let page3 = await context.newPage();

    var allPagesCount = await context.pages()

    console.log("all pages count is : ", allPagesCount.length)

    await page1.goto('https://testautomationpractice.blogspot.com/')

    await expect(page1).toHaveTitle('Automation Testing Practice')

    await page2.goto('https://login.salesforce.com/?locale=in')

    await expect(page2).toHaveTitle('Login | Salesforce')

    await page3.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await expect(page3).toHaveTitle('OrangeHRM')

    await page3.getByPlaceholder('Username').fill('Admin')

    await page3.getByPlaceholder('Password').fill('admin123')

    await page3.locator("//*[@type='submit']").click()

    await page.waitForTimeout(5000)

    console.log("switching the first page from last page")

    await allPagesCount[0].bringToFront()

    await page1.getByText('New Tab').scrollIntoViewIfNeeded()

    await page1.waitForTimeout(3000)

    await page1.getByText('New Tab').click()

    await page1.waitForTimeout(3000)

    var allPagesCount1 = await context.pages()

    console.log("all pages count is : ", allPagesCount1.length)

    console.log("===========close the 4th tab=========")

    await allPagesCount1[3].close()

    console.log("===switching to second tabbb============")

    await allPagesCount1[1].bringToFront()

    await page2.getByLabel('Username').fill('quality')

    await page2.waitForTimeout(3000)

    console.log("===switching to second tabbb============")

    await allPagesCount1[0].bringToFront()

    var pagePopUp = await page1.waitForEvent('popup')

    await page1.getByText('Popup Windows').scrollIntoViewIfNeeded()

    await page1.waitForTimeout(3000)

    await page1.getByText('Popup Windows').click()

    var popupPage = await pagePopUp

    console.log(popupPage.url())

    console.log(popupPage.title())

    var allPagesCount = await context.pages()

    console.log("all pages count is : ", allPagesCount.length)

    console.log("=====close the 4th tabbb means popup page============")

    await allPagesCount[3].close()

    console.log("========close the complete browser============")

    await context.close()

})
