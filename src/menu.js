function menu () {
    const breakfastArray = ['Memelas', 'Entomatadas', 'Enfrijoladas', 'Enchiladas'];
    const mealsArray = ['Garnachas', 'Tlayudas', 'Mole', 'Guías'];
    const beveragesArray = ['Coffee', 'Chocolate', 'Champurrado', 'Jugo'];
    const pricesArray = ['$65.00', '$65.00','$65.00','$65.00'];
    const content = document.querySelector('#content');
    const menuDiv = document.createElement('div');
    const Title = document.createElement('h1');
    const breakfastMenuBlocks = document.createElement('div');
    const breakfastLeftMenu = document.createElement('div');
    const breakfastRightMenu = document.createElement('div');
    const mealsMenuBlocks = document.createElement('div');
    const mealsLeftMenu = document.createElement('div');
    const mealsRightMenu = document.createElement('div');
    const beveragesMenuBlocks = document.createElement('div');
    const beveragesLeftMenu = document.createElement('div');
    const beveragesRightMenu = document.createElement('div');
    breakfastMenuBlocks.classList.add('menu-blocks');
    breakfastLeftMenu.classList.add('left-menu');
    breakfastRightMenu.classList.add('right-menu');
    mealsMenuBlocks.classList.add('menu-blocks');
    mealsLeftMenu.classList.add('left-menu');
    mealsRightMenu.classList.add('right-menu');
    beveragesMenuBlocks.classList.add('menu-blocks');
    beveragesLeftMenu.classList.add('left-menu');
    beveragesRightMenu.classList.add('right-menu');
    Title.textContent = 'Menu';
    const breakfasTitle = document.createElement('h2');
    const mealsTitle = document.createElement('h2');
    const beveragesTitle = document.createElement('h2');
    breakfasTitle.textContent = 'Breakfast';
    mealsTitle.textContent = 'Meals';
    beveragesTitle.textContent = 'Beverages';

    menuDiv.classList.add('main-menu');

    for (let i = 0; i<breakfastArray.length; i++){
        let breakfastItem = document.createElement('p');
        let itemPrice = document.createElement('p');
        breakfastItem.textContent = breakfastArray[i];
        itemPrice.textContent = pricesArray[i];
        breakfastLeftMenu.appendChild(breakfastItem);
        breakfastRightMenu.appendChild(itemPrice);
    }

    for (let i = 0; i<mealsArray.length; i++){
        let mealItem = document.createElement('p');
        let itemPrice = document.createElement('p');
        mealItem.textContent = mealsArray[i];
        itemPrice.textContent = pricesArray[i];
        mealsLeftMenu.appendChild(mealItem);
        mealsRightMenu.appendChild(itemPrice);
    }

    for (let i = 0; i<beveragesArray.length; i++){
        let beverageItem = document.createElement('p');
        let itemPrice = document.createElement('p');
        beverageItem.textContent = beveragesArray[i];
        itemPrice.textContent = pricesArray[i];
        beveragesLeftMenu.appendChild(beverageItem);
        beveragesRightMenu.appendChild(itemPrice);
    }
    menuDiv.appendChild(Title);
    menuDiv.appendChild(breakfasTitle);
    breakfastMenuBlocks.appendChild(breakfastLeftMenu);
breakfastMenuBlocks.appendChild(breakfastRightMenu);
menuDiv.appendChild(breakfastMenuBlocks);
menuDiv.appendChild(mealsTitle);
mealsMenuBlocks.appendChild(mealsLeftMenu);
mealsMenuBlocks.appendChild(mealsRightMenu);
menuDiv.appendChild(mealsMenuBlocks);




menuDiv.appendChild(beveragesTitle);
beveragesMenuBlocks.appendChild(beveragesLeftMenu);
beveragesMenuBlocks.appendChild(beveragesRightMenu);
menuDiv.appendChild(beveragesMenuBlocks);

content.appendChild(menuDiv);
}

export default menu;