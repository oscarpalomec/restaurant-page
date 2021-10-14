import image from './comida.jpg'
function mainContent () {
    const content = document.querySelector('#content');
    const contentDiv = document.createElement('div');
    const leftContent = document.createElement('div');
    const headline = document.createElement('h1');
    const mainText = document.createElement('div');
    const paragraph = document.createElement('p');
    const H2 = document.createElement('h2');
    const paragraphHours = document.createElement('p');
    const H2location = document.createElement('h2');
    const plocation = document.createElement('p');
    const rightContent = document.createElement('div');
    const img = document.createElement('img');
    const myImage = new Image();

    contentDiv.classList.add('main');
    
    leftContent.classList.add('left')
   
    headline.textContent = "El istmeños's restaurant";
    
    mainText.classList.add('main-text');
    
    paragraph.textContent =  `El ismeño's restaurant has the best food in town. The atmosphere
    and customer's service will make you feel at home. You'll love our
    most popular dishes. This is the place you want to be when you're
    starving.`;
    
    H2.textContent = 'Hours';
    
    paragraphHours.textContent = "Tuesday - Friday 10am - 20pm";
    
    H2location.textContent = "Location";

    plocation.textContent = "Oaxaca de Juárez #220 Centro";

    rightContent.classList.add('right');

    myImage.src = image;

    mainText.appendChild(paragraph);
    leftContent.appendChild(headline);
    leftContent.appendChild(mainText);
    leftContent.appendChild(H2);
    leftContent.appendChild(paragraphHours);
    leftContent.appendChild(H2location);
    leftContent.appendChild(plocation);
    contentDiv.appendChild(leftContent);
    rightContent.appendChild(myImage);
    contentDiv.appendChild(rightContent);
    content.appendChild(contentDiv);
}

export default mainContent;