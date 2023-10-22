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
        <div calss = "content-item-wrapper" id = "content-item-${this.id}">
            <h2>${this.name}</h2>
            <p>${this.description}</p>
            <div>${this.categoryGenre}</div>
        </div>
        `;       
    }

}

$(document).ready(function () {
    // your code here

});




