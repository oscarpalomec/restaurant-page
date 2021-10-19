function contacts () {
    const content = document.querySelector('#content');
    const contactDiv = document.createElement('div');
    const Title = document.createElement('h1');
    const contact1Container = document.createElement('div');
    const contact2Container = document.createElement('div');
    const person1Name = document.createElement('h2');
    const person2Name = document.createElement('h2');
    const person1Job = document.createElement('h3');
    const person2Job = document.createElement('h3');
    const person1Phone = document.createElement('p');
    const person2Phone = document.createElement('p');
    contactDiv.classList.add('contact');
    contact1Container.classList.add('contact-card');
    contact2Container.classList.add('contact-card');
    Title.textContent = 'Contact us';
    person1Name.textContent = 'Elías Palomec';
    person2Name.textContent = 'Graciela Palomec';
    person1Job.textContent = 'Owner';
    person2Job.textContent = 'Manager';
    person1Phone.textContent = '951 126 3546';
    person2Phone.textContent = '951 346 3345';




    contactDiv.appendChild(Title);
    contact1Container.appendChild(person1Name);
    contact1Container.appendChild(person1Job);
    contact1Container.appendChild(person1Phone);
    contactDiv.appendChild(contact1Container);
    contact2Container.appendChild(person2Name);
    contact2Container.appendChild(person2Job);
    contact2Container.appendChild(person2Phone);
    contactDiv.appendChild(contact2Container);
    content.appendChild(contactDiv);




}

export default contacts;