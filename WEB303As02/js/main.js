// WEB303 Assignment 2

$(document).ready(function () {
    // Event listener for the links
    $('#prospect').on('click', function (e) {
      e.preventDefault();
      loadContent('prospect.html');
    });
  
    $('#convert').on('click', function (e) {
      e.preventDefault();
      loadContent('convert.html');
    });
  
    $('#retain').on('click', function (e) {
      e.preventDefault();
      loadContent('retain.html');
    });
  
    // Function to load content from a file and animate it
    function loadContent(file) {
      $.ajax({
        url: file,
        type: "GET",
        dataType: 'html',
        success: function (data) {
          // Animate the content div with a fade-in effect
          $('#content').fadeOut(300, function () {
            $(this).html(data).fadeIn(300);
          });
        },
        error: function () {
          console.error('Error loading content from ' + file);
        },
      });
    }
  });
  