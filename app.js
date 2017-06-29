var courses = document.getElementsByClassName("course");
var courseInfo = [];
var courseHeader = [];

for (var i = 0; i < courses.length; i++) {
    courses[i].addEventListener("click", openCourse, false);
}

document.querySelector("#return-button").addEventListener("click", closeCourse, false);

function openCourse() {
    function addInfoEvents() {
        courseHeader = document.getElementsByClassName("course-info-header");
        courseInfo = document.getElementsByClassName("course-info-text-content");
        for (var i = 0; i < courseHeader.length; i++) {
            courseHeader[i].addEventListener("click", toggleInfo, false);
        }
    }

    function showCourse() {
        $("#menu").hide();
        $("#course-info-wrapper").addClass("wrapper");
        $("#course-info-wrapper").fadeIn("fast").show(addInfoEvents);
    }


    $("#course-info").load("Courses/" + this.getAttribute("data-course") + ".html");
    $("#menu").fadeOut("fast", showCourse);

}

function closeCourse() {
    function showMenu() {
        $("#menu").fadeIn("fast").show();
        $("#course-info-wrapper").hide();
        $("#course-info").empty();
        $("#course-info-wrapper").removeClass("wrapper");
    }

    $("#course-info-wrapper").fadeOut("fast", showMenu);
    courseHeader = [];
    courseInfo = [];
}

function toggleInfo() {
    var info;
    for (var i = 0; i < courseInfo.length; i++) {
        if (courseInfo[i].dataset.info == this.dataset.info) {
            info = courseInfo[i];
            break;
        }
    }

    $(info).slideToggle();
}



