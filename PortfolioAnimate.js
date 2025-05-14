const hamburgerBtn = document.getElementById('hamburgerBtn');
const nav = document.querySelector('nav');

// Toggle Burger Menu
hamburgerBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
    hamburgerBtn.classList.toggle('open');
});

function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => section.classList.remove('active'));

    const targetSection = document.getElementById(sectionId);
    targetSection.classList.add('active');

   
    nav.classList.remove('active');
    hamburgerBtn.classList.remove('open');
}

function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => section.classList.remove('active'));

    const targetSection = document.getElementById(sectionId);
    targetSection.classList.add('active');
}

// Modal Elements and Close Button
var modal = document.getElementById('project-modal');
var modalImg = document.getElementById('modal-img');
var modalTitle = document.getElementById('modal-title');
var modalDesc = document.getElementById('modal-desc');
var closeBtn = document.getElementsByClassName('close')[0];

// Data For the Projects
var projectData = {
    "project1": {
        "img": "Pictures/Regen1.png",
        "title": "Highlights of Regeneration 1",
        "desc": "This is the first edit I did on the first week of June for the Highlights of Regeneration. This week talks about the true identity of a person. Our character is influenced by what surrounds us, then on that, we grow upon it. Be mindful of who you are in a relationship with for it would define you as a person."
    },
    "project2": {
        "img": "Pictures/Regen2.png",
        "title": "Highlights of Regeneration 2",
        "desc": "This is the second edit I did for the second week of June for the Highlights of Regeneration. The topic talks about Christian Morality and how it would affect you when you are in a relationship with God. No matter who opposes your beliefs as you serve God, then rightfully choose and judge the battles that hold value."
    },
    "project3": {
        "img": "Pictures/Regen3.png",
        "title": "Highlights of Regeneration 3",
        "desc": "This is the third edit I did for the third week of June for the Highlights of Regeneration. The topic is about spirituality where the Word of God holds power in changing your spiritual being. When the uncomfortable reality pressures your destiny, His Word changes the tides of every problem, even those that seem impossible."
    },
    "project4": {
        "img": "Pictures/Regen4.png",
        "title": "Highlights of Regeneration 4",
        "desc": "This is the fourth edit I did for the last week of June for the Highlights of Regeneration. This topic touches the subject of leadership. Being a leader doesn't promise sunshine and rainbows, and that performance doesn't signify much of a good leadership. We must lead others by God's principle, and always strive for commitment, not based through motivation or feeling."
    },
    "project5": {
        "img": "Pictures/Regen5.png",
        "title": "Highlights of Regeneration 5",
        "desc": "This is the fifth edit I did for the month of July for the Highlights of Regeneration. The overall topic for the month is all about leading beyond emotions. Depending on what we felt at the moment, it always lead to unexpected responses that we may regret. Always remember that it is normal for us to feel this emotions, but be reminded that we must take responsibility and not justify ourselves for our wrong actions."
    },
    "project6": {
        "img": "Pictures/Regen6.png",
        "title": "Highlights of Regeneration 6",
        "desc": "This is the sixth edit I did for the month of August for the Highlights of Regeneration. The overall topic is about revolution re-imagined. Ways to lead others to salvation is through preaching Jesus inside our campuses. As this generation grow with trends, imagine how much more the preaching comes to affect the overall population. What you see doesn't equate to God's power, so you don't need to understand but obey what God wants you to do."
    }
};



// Show the Modal when Click
document.querySelectorAll('.project-item').forEach(item => {
    item.addEventListener('click', function() {
        var project = this.getAttribute('data-project');
        var data = projectData[project];
        modalImg.src = data.img;
        modalTitle.textContent = data.title;
        modalDesc.textContent = data.desc;
        modal.style.display = 'flex'; 
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.querySelector('.home-content img'); // Select your main image
    const hoverImage = document.querySelector('.home-content img.img-hover'); // Select your hover image

    mainImage.addEventListener('click', () => {
        hoverImage.classList.toggle('active'); // Toggle the active class
    });
});

document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function() {
       document.querySelectorAll('.nav-item').forEach(nav => nav.style.color = ''); // Reset others
       this.style.color = '#324E66'; // Set selected item color
    });
 });


// Open Modal
function openModal() {
    var modal = document.getElementById('project-modal');
    modal.style.display = 'flex'; 
}

// Close Modal
document.querySelector('.close').onclick = function() {
    document.getElementById('project-modal').style.display = 'none';
}

// Close Modal when Click Outside
window.onclick = function(event) {
    var modal = document.getElementById('project-modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

const vincentBtn = document.querySelector('.branding');

vincentBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    updateModalStyles(); // Call a function to update modal styles if necessary
});

document.getElementById('vincentButton').addEventListener('click', function() {
    document.body.classList.toggle('light-mode');

    // Switch images based on mode
    const mainImage = document.querySelector('.home-content img'); 
    const hoverImage = document.querySelector('.home-content img.img-hover'); 

    if (document.body.classList.contains('light-mode')) {
        mainImage.src = 'Pictures/Me2.jpg'; // Light mode image
        hoverImage.src = 'Pictures/Me3.png'; // Light mode hover image
    } else {
        mainImage.src = 'Pictures/Me1.jpg'; // Dark mode image
        hoverImage.src = 'Pictures/Me4.png'; // Dark mode hover image
    }
});


// Function to update modal styles (if needed)
function updateModalStyles() {
    const modals = document.querySelectorAll('.modal-content');
    modals.forEach(modal => {
        if (document.body.classList.contains('light-mode')) {
            modal.style.backgroundColor = '#ffffff'; // Update modal background
            modal.style.color = '#000000'; // Update modal text color
        } else {
            modal.style.backgroundColor = ''; // Reset to default
            modal.style.color = ''; // Reset to default
        }
    });
}
