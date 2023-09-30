
function loadTeamDataUsingGetJSON() {
    $.getJSON("team.json", function (data) {
        $.each(data, function (index, member) {
            var memberInfo =
                "<h2>" + member.name + "</h2>" +
                "<h5>" + member.position + "</h5>" +
                "<p>" + member.bio + "</p>";
            $("#team").append(memberInfo);
        });
    });
}


$(document).ready(function () {
    loadTeamDataUsingGetJSON();
});
