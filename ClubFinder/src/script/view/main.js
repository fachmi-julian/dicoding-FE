import '../component/club-list.js';
import '../component/search-bar.js';
import DataSource from "../data/data-source.js";


const main = function () {
    const searchElement = document.querySelector("search-bar");
    const buttonSearchElement = document.querySelector("#searchButtonElement");
    const clubListElement = document.querySelector("club-list");

    const onButtonSearchClicked = async () => {
        try {
            const results = await DataSource.searchClub(searchElement.value)
            renderResult(results)
        } catch (message) {
            fallbackResult(message)
        }
    }
        

    const renderResult = (results) => {
        clubListElement.clubs = results;
    };

    const fallbackResult = (message) => {
        clubListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;