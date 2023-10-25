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
        </div>
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

// Bonus mark
    //Try to add the buttons but didnt work and im tired of this
    // const $buttonsDiv = $("<div class='buttons'></div>");
    // const $updateSuccessfulButton = $("<button id='updateSuccessful'>Update Successfully</button>");
    // const $updateUnsuccessfulButton = $("<button id='updateUnsuccessful'>Update Unsuccessfully</button>");

    // $('#content-item-list').append($buttonsDiv);

    // $buttonsDiv.append($updateSuccessfulButton);
    // $buttonsDiv.append($updateUnsuccessfulButton);

    const updateSucc = $("#updateSuccessful");
    const updateUnsucc = $("#updateUnsuccessful");
//Update Succesfully
    updateSucc.on('click',function(){
    const itemToUpdt = BodyBuilders[0];
    itemToUpdt.updateContentItem(itemToUpdt.id,"Mike Mentzer", "American IFBB profesional bodybuilder known for using cocaine as pre-workout and the havy duty training method", "Division: Classic Physique");

    const $updatedItem = $(itemToUpdt.toString());
    $updatedItem.css({
        border: '1px solid red',
        width : '89%',
        padding : '1.5rem',
        margin : '1.5rem auto'
    }); 

    const succMssg = $("<span class='success-message'>Succesfully Updated</span>");
    
    const $oldItem = $(`#content-item-${itemToUpdt.id}`);
    $oldItem.replaceWith($updatedItem);
    $updatedItem.prepend(succMssg.css({
        background: "green",
        color: 'white',
        padding: "0.5rem"
    }));

    succMssg.fadeIn();
    setTimeout(function () {
        succMssg.fadeOut();
    }, 2000);

    $(`#content-item-${itemToUpdt.id}`).replaceWith($updatedItem);
    });

//Update Unsuccesfully

    updateUnsucc.on('click',function(){
        const itemToUpdt = BodyBuilders[1];
        itemToUpdt.updateContentItem(itemToUpdt.id, null, null, null);

        const unSuccMssg = $("<span class='unsuccess-message'>Unsuccesfully Updated</span>");

        const $header = $('header');
        $header.prepend(unSuccMssg.css({
            background: "red",
            color: 'white',
            padding: "0.5rem 0",
            margin: "15rem"
        }));

        unSuccMssg.fadeIn();
        setTimeout(function () {
            unSuccMssg.fadeOut(function () {
                unSuccMssg.remove();
            });
        }, 2000);
        });
});




