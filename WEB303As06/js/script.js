$(document).ready(function() {
    $('.accordion h3').click(function() {
        $(this).next('.panel').slideToggle();
        $('.accordion .panel').not($(this).next('.panel')).slideUp();
    });

    $('.tabs .tab-nav li a').click(function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $(target).toggle();
        $('.tab-content').not(target).hide();
    });
});

$(document).ready(function() {
    var originalData;

    $.ajax({
        url: 'characters.json',
        dataType: 'json',
        success: function(data) {
            originalData = data.slice();

            var tableBody = $('#character-table tbody');

            data.forEach(function(character) {
                tableBody.append(
                    '<tr>' +
                    '<td>' + character.firstName + '</td>' +
                    '<td>' + character.lastName + '</td>' +
                    '<td>' + character.dateOfBirth + '</td>' +
                    '<td>' + character.occupation + '</td>' +
                    '<td>' + character.bestFriend + '</td>' +
                    '<td>' + character.notableQuotes.join('<br>') + '</td>' +
                    '</tr>'
                );
            });

          
            $('th a').click(function() {
                var column = $(this).data('column');
                var order = $(this).data('order') || 'asc';

                if (order === 'reset') {
                   
                    data = originalData.slice();
                    order = 'asc';
                } else {
                    data.sort(function(a, b) {
                        if (order === 'asc') {
                            return a[column] > b[column] ? 1 : -1;
                        } else {
                            return a[column] < b[column] ? 1 : -1;
                        }
                    });
                    order = order === 'asc' ? 'desc' : 'reset';
                }

                
                $('th a .chevron').html('');
                if (order === 'reset') {
                    $(this).find('.chevron').html('&#x25B2'); 
                } else if (order === 'desc') {
                    $(this).find('.chevron').html('&#x25BC'); 
                }

              
                tableBody.empty();

                data.forEach(function(character) {
                    tableBody.append(
                        '<tr>' +
                        '<td>' + character.firstName + '</td>' +
                        '<td>' + character.lastName + '</td>' +
                        '<td>' + character.dateOfBirth + '</td>' +
                        '<td>' + character.occupation + '</td>' +
                        '<td>' + character.bestFriend + '</td>' +
                        '<td>' + character.notableQuotes.join('<br>') + '</td>' +
                        '</tr>'
                    );
                });

                $(this).data('order', order);
            });
        },
        error: function() {
            console.log('Failed to load data.');
        }
    });
});
