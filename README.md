In this project let's build a **Covid19 Dashboard** by applying the concepts we have learned till now. This project allows you to practice the concepts and techniques learned till React Course and apply them in a concrete project.

You will demonstrate your skills by creating an app that will fetch data from an internal server using a **class component**, displaying that data, using **component lifecycle** methods, **routing** concepts and adding responsiveness to the website.

This is an individual assessment. All work must be your own.

### Prerequisites

#### UI Prerequisites

<details>
<summary>Click to view</summary>

- What is Figma?
  - Figma is a vector graphics editor and prototyping tool which is primarily web-based. You can check more info on the <a href="https://www.figma.com/" target="_blank">Website</a>
- Create a Free account in Figma
  - Kindly follow the instructions as shown in <a href="https://www.youtube.com/watch?v=hrHL2VLMl7g" target="_blank">this</a> video to create a Free Figma account. Watch the video upto **00:55**
- How to Check CSS in Figma?
  - Kindly follow the instructions as shown in <a href="https://youtu.be/B242nuM3y2s?t=80" target="_blank">this</a> video to check CSS in the Figma screen. Watch the video upto **02:45**
- Export Images in Figma screen

  - Kindly follow the instructions as shown in <a href="https://www.youtube.com/watch?v=NpzL1MONwaw" target="_blank">this</a> video to export images from the Figma screen
  - Click on the Export button to get Export options as shown in the below image

  <div style="text-align:center;margin:10px 0px 0px 45px;width:200px;">
    <img src="https://assets.ccbp.in/frontend/react-js/figma-export-option.png" />
  </div>

- Upload your exported images from Figma to Cloudinary and get image URLs from Cloudinary. Refer <a href="https://learning.ccbp.in/projects/course?c_id=fe4c935d-3ad5-4bb8-a1a5-9b045ae70010&s_id=2f72d6fe-09a7-4c0a-b0db-196740c853a0&t_id=6535e48d-fb4e-45c4-9654-3da423c79e26" target="_blank">this</a> session for better understanding

</details>

#### Design Files

<details>
<summary>Click to view</summary>

- You can check the **Design Files** for different devices <a href="https://www.figma.com/file/lGl9tRXcsmxicjTITM2A8P/Covid19_Dashboard?node-id=0%3A1" target="_blank" >here</a>

</details>

### Set Up Instructions

<details>
<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`
</details>

### Completion Instructions

<details>
<summary>Functionality to be added</summary>

The app must have the following functionalities

- Users should be able to navigate to Home, About routes using links in Navbar
- The website should be responsive in mobile view, tablet view as well (Use Media Queries to achieve the responsive website)

- **Home Route**

  - An HTTP GET request should be made to the Home Route API URL
    - **_Loader_** should be displayed while fetching the data
    - After the data is fetched successfully,
      - Stats of **Confirmed**, **Active**, **Recovered**, **Deceased** cases of **India** should be equal to the respective data received from the response
      - List of State/UT should be displayed with corresponding **Confirmed**, **Active**, **Recovered**, **Deceased** cases count
      - When the **Ascending Icon** (**FcGenericSortingAsc** react-icon) is clicked, then the list of State/UT should be sorted with **Ascending Order** based on State/UT name
      - When the **Descending Icon** (**FcGenericSortingDesc** react-icon) is clicked, then the list of State/UT should be sorted with **Descending Order** based on State/UT name
  - Footer should be displayed as shown in the Figma

- **Search Functionality**

  - Search should be case **insensitive**. This means Searching for `AN` or `an` or `An` should give the same search results
  - When the State/UT is searched by using the State/UT name, then the list of State/UT names matched with the search text should be displayed
  - When the Specific State/UT is clicked in the searched State/UT, then the page should be navigated to the Specific State/UT

- **State-Specific Route**

  - An HTTP GET request should be made to the State-Specific Route API URL
    - **_Loader_** should be displayed while fetching the data
    - After the data is fetched successfully,
      - State name and last updated date should be equal to the State name received from the response
      - Stats of **Confirmed**, **Active**, **Recovered**, **Deceased** cases of specific state should be equal to the respective data received from the response
      - Tested count should be equal to the tested count received from the response
      - Initially districts with Descending order of their **Confirmed Cases** should be displayed in the Top Districts
      - When the **Active Cases** card is clicked, then the Top Districts and **Bar Graph** should be changed to **Descending order** by their **Active Cases** count
      - When the **Confirmed Cases** card is clicked, then the Top Districts and **Bar Graph** should be changed to **Descending order** by their **Confirmed Cases** count
      - When the **Recovered Cases** card is clicked, then the Top Districts and **Bar Graph** should be changed to **Descending order** by their **Recovered Cases** count
      - When the **Deceased Cases** card is clicked, then the Top Districts and **Bar Graph** should be changed to **Descending order** by their **Deceased Cases** count
      - **Bar Graph** should be displayed with the last 10 days of Covid19 cases data
      - Initially for Spread Trends, **Daily Data** should be displayed
    - Footer should be displayed as shown in the Figma

- **Not Found Route**

  - When a random path is provided in the URL, then the page should be navigated to the Not Found Route

- **About Route**

  - An HTTP GET request should be made to the About Route API URL
    - **_Loader_** should be displayed while fetching the data
    - After the data is fetched successfully, the response received should be displayed
    - List of **faqs** should be displayed
    - Footer should be displayed as shown in the Figma

- **Header**

  - When the **COVID19INDIA** heading element in the Header is clicked, then the page should be navigated to the Home Route
  - When the **Home** link in the Header is clicked, then the page should be navigated to the Home Route
  - When the **About** link in the Header is clicked, then the page should be navigated to the My About Route

</details>

### Quick Tips

<details>
<summary>Click to view</summary>

- Conversion of Object items to Array Items <a href="https://codesandbox.io/s/conversion-of-object-items-to-array-items-vyy1s" target="_blank">CodeSandbox</a>
- Use React Charts package to implement given charts
  - React charts <a href="https://www.npmjs.com/package/recharts" target="_blank" >Documentation</a>.
  - Line chart and Bar Chart implementation <a href="https://codesandbox.io/s/line-chart-and-bar-chart-implementation-forked-vghxj?file=/src/App.js" target="_blank">CodeSandbox</a>
  - Multi area chart implementation <a href="https://codesandbox.io/s/multi-area-chart-implementation-dkhyc?file=/src/App.js" target="_blank">CodeSandbox</a>
- Implement Select fields using this package
  - React select <a href="https://www.npmjs.com/package/react-select/v/2.4.3" target="_blank">Documentation</a>
  - React select implementation <a href="https://codesandbox.io/s/react-select-dropdown-example-forked-4ssev" target="_blank">CodeSandbox</a>
- Usage of extracting date wise stats <a href="https://codesandbox.io/s/getting-specific-state-datewise-data-j4vus" target="_blank">CodeSandbox</a>

</details>

### Important Note

**Below Instructions are needed to pass the test cases.**

<details>
<summary>Click to view</summary>

- **Note:**

  - Don't use any third-party packages other than packages mentioned in the **Quick Tips**

  - For Mini Projects, you have to use normal HTML elements to style the React Components. Usage of `styled-components` (CSS in JS) to style React components are not supported in Mini Projects. Test cases won't be passed, if you use styled-components

  - Refer to the below Example for the usage of `testid` in the HTML elements

    - Example: `<div testid="countryWideConfirmedCases" className="country-wide-confirmed-cases"/>`

  - Get all states data from the response of Get Countrywide covid19 cases API by mapping the state's list that we have provided you in the App.js file

  - If you receive any type of covid19 cases count of a state as undefined from the API call, store that value as 0

  - Example:- You have received the confirmed cases count, population for the State Goa as undefined so instead of storing undefined store confirmed cases of Goa as 0. Like this for all states and districts store 0 if you receive any count as undefined

  - Your code will contain a `Counter` Component in the path `src/components` you can modify the component based on your use case or you can ignore it

  - Formulae for active cases `activeCases = confirmedCases-(recoveredCases+deceasedCases)`

  - Adding individual states Covid19 data will give you national wide Covid19 data

  - **Don't wrap** the `Bar Chart` or `Line Chart` with `ResponsiveContainer`

- Routes:

  - The Home Route should contain the pathname as `/`

  - The State-specific Route should contain the pathname as `/state/:stateCode`

    - **Note:** use the particular state code in place of id

  - The About Route should contain the pathname as `/about`

- Header:

  - Your code should contain a `Header` Component in the path `src/components`

- Footer:

  - Your code should contain a `Footer` Component in the path `src/components`

  - The Footer component should consist of all social icons from the `react-icons` third-party library

  - The Footer component should consist of the `VscGithubAlt` react icon

  - The Footer component should consist of the `FiInstagram` react icon

  - The Footer component should consist of the `FaTwitter` react icon

- Home Route:

  - The Loader container should contain the test id with value as `homeRouteLoader`

  - The States Search results unordered list should contain the test id with value as `searchResultsUnorderedList`

  - The Search bar should contain the `BsSearch` react icon

  - The State Search results list item should contain a `BiChevronRightSquare` react icon

  - The Confirmed cases card should contain the test id with value as `countryWideConfirmedCases`

  - The Confirmed cases image in the Confirmed cases container should contain the alt text as `country wide confirmed cases pic`

  - The Recovered cases card should contain the test id with value as `countryWideRecoveredCases`

  - The Recovered cases image in the Recovered cases container should contain the alt text as `country wide recovered cases pic`

  - The Active cases card should contain the test id with value as `countryWideActiveCases`

  - The Active cases image in the Active cases container should contain the alt text as `country wide active cases pic`

  - The Deceased cases card should contain the test id with value as `countryWideDeceasedCases`

  - The Deceased cases image in the Deceased cases container should contain the alt text as `country wide deceased cases pic`

  - The Statewise covid19 data table should contain the test id with value as `stateWiseCovidDataTable`

  - The `FcGenericSortingAsc` react icon should be wrapped with an HTML button element and the Button should contain the test id value as `ascendingSort`

  - The `FcGenericSortingDesc` react icon should be wrapped with an HTML button element and the Button should contain the test id value as `descendingSort`

  - Example:

    ```html
    <button type="button" testid="ascendingSort">
      <FcGenericSortingDesc />
    </button>
    ```

  - Place the ascending sort icon and descending sort icon in an HTML container element with the test id attribute value `stateWiseCovidDataTable`

  - Place the total countrywide confirmed cases count, the text `Confirmed` and the image of the confirmed case inside of the HTML container element with the test id attribute value `countryWideConfirmedCases`

  - Place the total countrywide active cases count, the text `Active` and the image of the active case inside of the HTML container element with the test id attribute value `countryWideActiveCases`

  - Place the total countrywide recovered cases count, the text `Recovered` and the image of the recovered case inside of the HTML container element with the test id attribute value `countryWideRecoveredCases`

  - Place the total countrywide deceased cases count, the text `Deceased` and the image of the deceased case inside of the HTML container element with the test id attribute value `countryWideDeceasedCases`

  - Wrap all the list items of the HTML unordered list element with the test id attribute value `searchResultsUnorderedList` with Link from `react-router-dom`

- State-specific Route

  - **NOTE:** Wrap all the Line charts with an HTML container element and assign test id attribute value as `lineChartsContainer` to that HTML container element

  - The GET State details API Loader container should contain the test id with value as `stateDetailsLoader`

  - The GET Timeline details API Loader container should contain the test id with value as `timelinesDataLoader`

  - The State-specific Confirmed cases card should contain the test id value as `stateSpecificConfirmedCasesContainer`

  - The State-specific confirmed cases image should contain the alt text as `state specific confirmed cases pic`

  - The State-specific Active cases card should contain the test id value as `stateSpecificActiveCasesContainer`

  - The State-specific confirmed cases image should contain the alt text as `state specific active cases pic`

  - The State-specific Recovered cases card should contain the test id value as `stateSpecificRecoveredCasesContainer`

  - The State-specific confirmed cases image should contain the alt text as `state specific recovered cases pic`

  - The State-specific Deceased cases card should contain the test id value as `stateSpecificDeceasedCasesContainer`

  - The State-specific confirmed cases image should contain the alt text as `state specific deceased cases pic`

  - Place the total State-specific confirmed cases count, the text `Confirmed` and the image of the confirmed case inside of the HTML container element with the test id attribute value `stateSpecificConfirmedCasesContainer`

  - Place the total State-specific active cases count, the text `Active` and the image of the active case inside of the HTML container element with the test id attribute value `stateSpecificActiveCasesContainer`

  - Place the total State-specific recovered cases count, the text `Recovered` and the image of the recovered case inside of the HTML container element with the test id attribute value `stateSpecificRecoveredCasesContainer`

  - Place the total State-specific deceased cases count, the text `Deceased` and the image of the deceased case inside of the HTML container element with the test id attribute value `stateSpecificDeceasedCasesContainer`

  - The Top Districts unordered list should contain the test id attribute with value as `topDistrictsUnorderedList`

- About Route

  - The Loader container should contain the test id value as `aboutRouteLoader`

  - The Faqs unordered list should contain the test id value as `faqsUnorderedList`

</details>

### Resources

<details>
<summary>Data fetch URLs</summary>

- Home Route:

  - Get stats of confirmed, active, recovered, deceased cases state wise (<u>sum of state wise data will give you national wise data</u>) :

    ```js
    'https://apis.ccbp.in/covid19-state-wise-data'

    ```

- State-Specific Route:

  - Get tested count, last updated date and stats of confirmed, active,recovered, deceased cases in specific states:

    ```js
    'https://apis.ccbp.in/covid19-state-wise-data'
    //(the response contains stats of all the States, you can use a state code (Ex:- "AP") to get specific state stats.)

    ```

  - Get districts (sort to show Top Districts):

    ```js
    'https://apis.ccbp.in/covid19-state-wise-data'
    //(the response contains stats of all the States, you can use a state code (Ex:- "AP") to get specific state stats.)

    ```

  - Sample Response for the API Url `https://apis.ccbp.in/covid19-state-wise-data`:

    ```json
    {
    "AP":{
      "districts":{
         "Anantapur":{
            "total":{
               "confirmed":157823,
               "deceased":1093,
               "recovered":156679,
               "tested":787085,
               "vaccinated1":2659813,
               "vaccinated2":1556657
            }
         }
      },
      "meta":{
         "date":"2021-10-28",
         "last_updated":"2021-10-28T20:20:18+05:30",
         "population":397000,
         "tested":{
            "date":"2021-10-27",
            "source":"https://dhs.andaman.gov.in/NewEvents/847.pdf"
         }
      },
      "total":{
         "confirmed":7651,
         "deceased":129,
         "recovered":7516,
         "tested":592748,
         "vaccinated1":293644,
         "vaccinated2":195689
      }
    }
      {...}
     }
    ```

  - Get timelines to show spread trends (use timelines data for rendering Bar chart, Line chart and other recharts by date-wise):

    ```js
    'https://apis.ccbp.in/covid19-timelines-data/AP'
    //(change state code in URL for other states)

    //(or)

    'https://apis.ccbp.in/covid19-timelines-data'
    //(the response contains stats of all the States, you can use a state code (Ex:- "AP") to get specific state stats.)

    ```

  - Sample Response

    ```json
    {
      "AN": {
        "dates": {
          "2021-09-09": {
            "total": {
              "confirmed": 7577,
              "deceased": 129,
              "recovered": 7441,
              "tested": 508157,
              "vaccinated1": 267126,
              "vaccinated2": 112124
            }
          },
          "2021-09-09": {...}
        }
      }
    }
    ```

- About Route:

  - Get faqs:

    ```js
    'https://apis.ccbp.in/covid19-faqs'

    ```

  - Sample Response

    ```json
    {
      "faq": [
        {
          "answer": "No.",
          "category": "General",
          "qno": "1",
          "question": "Are you official?"
        }
      ]
    }
    ```

    </details>

### Stretch Goals

If you complete the main features of the project you can try out the below features as well

**Note:** Just a reminder the additional functionality is just extra practice using the tools we have learned. These are not required. If you do not reach the stretch goals, don't worry

<details>
<summary>Additional Functionality to be added</summary>

- Users should be able to see Themes (Light & Dark) in Navbar
- **State-Specific Route**

  - India Map with Specific State should be highlighted

- **Vaccination Details Route**

  - An HTTP GET request should be made to the **Vaccination Details API URL**
    - **_Loader_** should be displayed while fetching the data
    - After the data is fetched successfully, the response received should be displayed
      - Page should contain the dropdowns to select state and district
      - Page should contain the sites Conducting Vaccination, total Registrations, Total Vaccination Doses sections
      - Page should contain the Vaccination Trends for both by **Doses** and **Ages** section

- **Data Fetch URLs**

  - **Vaccination Details Route:**

    - Get states data:

      ```js
      'https://apis.ccbp.in/covid19-state-ids'

      ```

    - Get Districts data (state specific):

      ```js
      'https://apis.ccbp.in/covid19-districts-data/2'
      //(change state id in URL)

      ```

    - Get sites conducting vaccination, total registrations, total vaccination, vaccination trends, vaccination - category, vaccination by age Details:

      ```js
      'https://apis.ccbp.in/covid19-vaccination-data'
      //(change date in URL)

      ```

</details>

### Project Submission Instructions

- For Mini Projects, you can submit the test cases at your own pace. But we suggest you to submit the code to know the percentage of completion through test cases and that score will be considered for your interviews

- Also it's important to publish your code frequently using `Step - 4` in the Instructions tab

> ### _Things to Keep in Mind_
>
> - All components you implement should go in the `src/components` directory.
> - **Do not remove the pre-filled code**
> - Want to quickly review some of the concepts you’ve been learning? Take a look at the Cheat Sheets.
