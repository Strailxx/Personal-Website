const menu = document.getElementById("Lmenu");

Array.from(document.getElementsByClassName("Lmenu-item"))
    .forEach((item, index) => {
        item.onmouseover = () => {
            menu.dataset.activeIndex = index;
        }
    });

document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.Lmenu-item');
    const contentDivs = document.querySelectorAll('.Rmenu-item');

    // Function to show corresponding div on hover
    function showContent(index) {
        contentDivs.forEach((div, i) => {
            if (i === index) {
                div.style.height = div.scrollHeight + 'px';
                div.style.opacity = '1';
                div.classList.add('visible');
            } else {
                div.style.height = '0';
                div.style.opacity = '0';
                div.classList.remove('visible');
            }
        });
    }

    // Initially show "Five"
    showContent(0);

    // Event listeners for each menu item
    menuItems.forEach((item, index) => {
        item.addEventListener('mouseenter', function() {
            showContent(index);
        });
    });
});