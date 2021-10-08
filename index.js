var members = [
    { key: 1, name: 'Cooper Vetrovs', image: './Resources/Shape_12-1.png', about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ante erat adipiscing eget." },
    { key: 2, name: 'Alena', image: './Resources/Shape_2-1.png', about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ante erat adipiscing eget." },
    { key: 3, name: 'Ashlynn Geidt', image: './Resources/Shape_7.png', about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ante erat adipiscing eget." },
    { key: 4, name: 'Marilyn Carder', image: './Resources/Shape_7-1.png', about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ante erat adipiscing eget." },
    { key: 5, name: 'Alena Torff', image: './Resources/Shape_12-1.png', about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ante erat adipiscing eget." },
    { key: 6, name: 'Kierra Rosser', image: './Resources/Shape_12.png', about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. At ante erat adipiscing eget." }
];


// const teamContainer = document.getElementById('teamMember');

members.forEach(m => {
    //console.log(m);
    const teamContainer = document.getElementById('teamContainer');
    const teamMember = document.createElement('div');
    teamMember.className = 'teamMember';

    //create and append member image
    const memberImg = document.createElement('div');
    memberImg.className = 'memberImage';
    memberImg.style.backgroundImage = `url(${m.image})`
    teamMember.appendChild(memberImg);  

    //create and append member details
    const memberDetails = document.createElement('div');
    const memberName = document.createElement('h3');
    const memberAbout = document.createElement('p')
    memberName.innerText= m.name;
    memberAbout.innerText =  m.about

    memberAbout.className = 'memberAbout';
    memberName.className = 'memberName';
    memberDetails.className = 'memberDetails';

    memberDetails.appendChild(memberName);
    memberDetails.appendChild(memberAbout);

    teamMember.appendChild(memberDetails);

    //append team member
    teamContainer.appendChild(teamMember);
});

var ContNames = ['Company', 'Product', 'Resources', 'Contact'];

ContNames.forEach(contName => {
    const getConstName = document.getElementById('footerContent');
    const footerTags = document.createElement('div');
    footerTags.className = 'footerTag';

    //create the tag for each of the footer tags and append them
    const footerTagName= document.createElement('h2')
    footerTagName.innerText = contName

    footerTags.appendChild(footerTagName);
    getConstName.appendChild(footerTags);
    //console.log(footerTags);   
});

//javascript to add the elements of the footer 
const footerConts = [
    ['About Us', 'Press', 'Careers','Privacy', 'Terms'],
    ['Speech to Text', 'Text to Speech'],
    ['Customer Stories', 'FAQ', 'Security', 'Help Centre', 'Contact',],
    ['divine@chrisy@yahoo,com', '+234 90 3333 5459']
]

for (i = 0; i < 1; i++){
    const footerItems = document.getElementById('footerContentTwo');
    const footerItem = document.createElement('div');
    footerItem.className = 'footerItem';

    for (j =0 ; j< 4; j++){
        footerItem.innerText = footerConts[j];

    }

    footerItems.appendChild(footerItem);
    console.log(footerItems);
}


