const navMenu = {
    container: null,
    ADDRESSES: ['index.html', 'categories.html', '#accessories', '#offers', 'contact.html'],
    TITLES: ['Home', 'Categories', 'Accessories', 'Offers', 'Contact'],
    isActive: [true, false, false, false, false],
    dropdownData: [
        {
            addresses: ["categories.html", "product.html", "cart.html", "checkout.html", "contact.html"],
            titles: ["Categories", "Product", "Cart", "Check out", "Contact"]
        },
        {
            addresses: ["categories.html", "categories.html", "categories.html", "categories.html", "categories.html"],
            titles: ["Category", "Category", "Category", "Category", "Category"]
        },
        '',
        '',
        ''
    ],
    init() {
        this.container = document.querySelector('.main_nav');
        this.render();
    },
    render() {
        let result = '';
        for (let i = 0; i < this.TITLES.length; i++) {
            result += this.createMenuItem(this.ADDRESSES[i], this.TITLES[i], this.isActive[i], this.dropdownData[i]);
        }

        this.container.innerHTML = `
                <ul> 
                    ${result}   
                </ul>
        `;
    },
    createMenuItem(address, title, isActive, dropdownData) {
        const activeStyle = isActive ? 'active' : '';
        let dropdownStyle = '';
        let dropdownContent = '';
        if (dropdownData) {
            dropdownStyle = 'hassubs';
            dropdownContent = `
                <ul>
                    ${this.createDropdownContent(dropdownData.addresses, dropdownData.titles)}
                </ul>
            `;
        }
        return `
            <li class="${dropdownStyle} ${activeStyle}">
                <a href="${address}">${title}</a>
                ${dropdownContent}
            </li>
        `;
    },
    createDropdownContent(addresses, titles) {
        let content = '';
        for (let i = 0; i < addresses.length; i++) {
            content += `<li><a href="${addresses[i]}">${titles[i]}</a></li>`;
        }
        return content;
    },

};
navMenu.init();
