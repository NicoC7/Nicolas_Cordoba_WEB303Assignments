/*
    Assignment 05
*/

class ContentItem {
    constructor(id, name, description, categoryGenre) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.categoryGenre = categoryGenre;
    }

    updateContentItem(id, name, description, categoryGenre) {
        if(id === this.id) {
            if(name !== null) this.name = name;
            if(description !== null) this.description = description;
            if(categoryGenre !== null) this.categoryGenre = categoryGenre;
        }
    }

    toString() {
        return `
        <div calss="content-item-wrapper" id="content-item-${this.id}">
            <h2>${this.name}</h2>
            <p>${this.description}</p>
            <div>${this.categoryGenre}</div>
             `;       
    }

}

const BodyBuilders = [
    new ContentItem(0, "Ronnie Coleman", "American retired professional bodybuilder. The winner of the Mr. Olympia title for eight consecutive.", "Division: Open"),
    new ContentItem(1, "Tom Platz", " American retired professional bodybuilder. He was known for his leg development, which in his prime measured over 30 inches.", "Division: 212 Olympia"),
    new ContentItem(2, "CBum", "Canadian IFBB professional bodybuilder. Bumstead is the reigning Mr. Olympia Classic Physique winner four times consecutive.", "Division: Classic Physique"),
    new ContentItem(3, "Rubiel Mosquera", "Colombian IFBB profesional bodybuilder known as NeckZilla for his Fifty-two cetimeters circumference neck", "Division: Classic Physique"),
    new ContentItem(4, "Ramon Dino", "Brazilian IFBB profesional bodybuilder known for his huge forearms, his forearms make look small his biceps", "Division: Classic Physique")
    ]

$(document).ready(function () {
    // your code here
    const $contentList = $('#content-item-list');

    BodyBuilders.forEach(element => {
        const $contentWrapper = $(element.toString()); 
        $contentWrapper.css({
            border: '1px solid red',
            width : '89%',
            padding : '1.5rem',
            margin : '1.5rem auto'
        }); 

        $contentList.append($contentWrapper);

    });

    const newThemeTitle = "My Favorites BodyBuilders";
    $('#content>h2').text(newThemeTitle);

});




