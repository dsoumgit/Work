function init() {
    console.log('DOM is ready');
    // hide loader after 4 sec
    var loader = document.querySelector('.cssload-box-loading');

    setTimeout(function () {
        loader.style.display = 'none';

        document.querySelector('.logo-header').style.opacity = 1;
        document.querySelector('#social-icon').style.opacity = 1;

        document.querySelector('#main').style.opacity = 1;
    }, 3000);

}

//document.addEventListener('DOMContentLoaded', ready);

$(document).ready(function () {

    // call init function
    init();

    $('.text').click(function (evt) {
        var text = $(evt.target).text();
        console.log(text);
        if (text === 'About') {
            //   $('#main').fadeOut();

            $('#aboutMe').modal();
        } else if (text === 'Work') {
            $('#workModal').modal();
        }
    });
});