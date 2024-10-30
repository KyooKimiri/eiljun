function toggleMenu() {
        var menu = document.getElementById("menuItems");
        if (menu.classList.contains("open")) {
            menu.classList.remove("open");
        } else {
            menu.classList.add("open");
        }
    }