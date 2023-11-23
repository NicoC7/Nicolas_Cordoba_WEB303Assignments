$(document).ready(function() {
    $.ajax({
        url: 'characters.json',
        dataType: 'json',
        success: function(data) {
            var characters = data.characters;
            var tableBody = $('#charactersTable tbody');

            characters.forEach(function(character) {
                var row = $('<tr>');
                row.append('<td>' + character.firstName + '</td>');
                row.append('<td>' + character.lastName + '</td>');
                row.append('<td>' + character.gender + '</td>');
                row.append('<td>' + character.role + '</td>');
                row.append('<td>' + character.specialAbility + '</td>');
                tableBody.append(row);
            });

            updateFilterCounts();
        },
        error: function(error) {
            console.log('Error loading data: ' + error.statusText);
        }
    });
});

function searchCharacter(searchTerm) {

    $('#charactersTable tbody tr').removeClass('highlight');

    if (searchTerm !== "") {
        $('#charactersTable tbody tr:contains(' + searchTerm + ')').addClass('highlight');
    }
}

function searchCharacter(searchTerm) {
    $('#charactersTable tbody tr').removeClass('highlight');

    if (searchTerm !== "") {
        var searchTermLowerCase = searchTerm.toLowerCase();

        $('#charactersTable tbody tr').each(function () {
            var firstName = $(this).find('td:eq(0)').text().toLowerCase();
            if (firstName.includes(searchTermLowerCase)) {
                $(this).addClass('highlight');
            }
        });
    }
}

function filterByLastName(range) {

    $('#charactersTable tbody tr').show();

    if (range === 'A-M') {
        $('#charactersTable tbody tr').filter(function() {
            var lastName = $(this).find('td:eq(1)').text();
            return !/^[A-M]/i.test(lastName);
        }).hide();
    } else if (range === 'N-Z') {
        $('#charactersTable tbody tr').filter(function() {
            var lastName = $(this).find('td:eq(1)').text();
            return !/^[N-Z]/i.test(lastName);
        }).hide();
    }

    updateFilterCounts();
}

function updateFilterCounts() {
    var countAM = $('#charactersTable tbody tr:visible').filter(function() {
        var lastName = $(this).find('td:eq(1)').text();
        return /^[A-M]/i.test(lastName);
    }).length;

    var countNZ = $('#charactersTable tbody tr:visible').filter(function() {
        var lastName = $(this).find('td:eq(1)').text();
        return /^[N-Z]/i.test(lastName);
    }).length;

    $('#countAM').text(countAM);
    $('#countNZ').text(countNZ);
}

$.expr[':'].contains = $.expr.createPseudo(function(arg) {
    return function(elem) {
        return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
    };
});
