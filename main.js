(function () {
    'use strict';

    function toogleMenu(event) {
        var secondMenu = document.querySelector('.menu-bottom'),
            open = document.querySelector('.open'),
            lang = document.querySelector('.menu-icon-lang'),
            main = document.querySelector('.menu-icon'),
            that = event.currentTarget,
            selectedMenu = ((that.classList.contains('menu-icon') === true) ? 'left-opened' : 'right-opened'),
            nonSelectedMenu = ((that.classList.contains('menu-icon') === false) ? 'left-opened' : 'right-opened'),
            opened = ((open === lang) ? lang : main);

        // Check if any menu is opened
        if (open) {
            // Check if that opened one and the clicked one are the same and close
            if (open === that) {
                that.classList.remove('open');
                secondMenu.classList.remove(selectedMenu);
            } else {

                // Close the menu
                opened.classList.remove('open');
                secondMenu.classList.remove(nonSelectedMenu);

                // Open the othe one
                that.classList.add('open');
                setTimeout(function () {
                    secondMenu.classList.add(selectedMenu);
                }, 500);
            }

        } else {
            that.classList.add('open');
            secondMenu.classList.add(selectedMenu);
        }
    }

    function closeMenu(event) {
        var open = document.querySelector('.open'),
            secondMenu = document.querySelector('.menu-bottom');

        if (event.which === 27 && open) {

            // Must check that open exists first
            var openedMenu = ((open.classList.contains('menu-icon') === true) ? 'left-opened' : 'right-opened');

            open.classList.remove('open');
            secondMenu.classList.remove(openedMenu);
        }
    }

    // Attach the listeners
    document.querySelector('.menu-icon').addEventListener('click', toogleMenu);
    document.querySelector('.menu-icon-lang').addEventListener('click', toogleMenu);
    // Close with keyboard
    document.addEventListener('keyup', closeMenu);
}());