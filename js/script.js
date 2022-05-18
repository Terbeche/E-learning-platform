function showTheMenu() {
  if (window.screen.width >= 768) {
    return;
  }
  document.getElementById('overlay').style.display = 'flex';

}



function hideTheMenu() {
  document.getElementById('overlay').style.display = 'none';
}

const navElement = document.getElementById('navigation');
navElement.addEventListener('click', showTheMenu);

const closeButton = document.getElementById('close-button');
closeButton.addEventListener('click', hideTheMenu);

const menuLinks = document.getElementsByClassName('menu-link');
for (let i = 0; i < menuLinks.length; i += 1) {
  menuLinks[i].addEventListener('click', hideTheMenu);
}


const teachersDetails = [
  {
    teacher_name: 'Data Dashboard Healthcare',
    teacher_job: 'software enginer',
    teacher_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    teacher_image: '../images/man1.jpg',
  },
  {
    teacher_name: 'Data Dashboard Healthcare',
    teacher_job: 'software enginer',
    teacher_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    teacher_image: '../images/man2.jpg',
  },
  {
    teacher_name: 'Data Dashboard Healthcare',
    teacher_job: 'software enginer',
    teacher_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    teacher_image: '../images/man3.jpg',
  },
  {
    teacher_name: 'Data Dashboard Healthcare',
    teacher_job: 'software enginer',
    teacher_description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
    teacher_image: './images/man4.jpg',
  }
];

const teachers = document.getElementById('teachers');

const teachersTitle = document.createElement('h2');
teachersTitle.id = 'teachers-title';
teachersTitle.textContent =  'Our teachers';
teachers.appendChild(teachersTitle);

const mainHr = document.createElement('hr');
mainHr.id = 'main-hr';
teachers.appendChild(mainHr);

const theTeachers = document.createElement('div');
theTeachers.classList.add('the-teachers');

for (let i = 0; i < teachersDetails.length; i++) {

    const teacher = document.createElement('div');
    teacher.classList.add('teacher');

    const teacherImage = document.createElement('img');
    teacherImage.classList.add('teacher-image');
    teacherImage.src = teachersDetails[i].teacher_image;
    teacherImage.alt = 'bla bla';
    teacher.appendChild(teacherImage);

    const teacherInformation = document.createElement('div');
    teacherInformation.classList.add('teacher-information');

    const teacherName = document.createElement('h3');
    teacherName.classList.add('teacher-name');
    teacherName.textContent = teachersDetails[i].teacher_name;
    teacherInformation.appendChild(teacherName);

    const teacherJob = document.createElement('p');
    teacherJob.classList.add('teacher-job');
    teacherJob.textContent = teachersDetails[i].teacher_job;
    teacherInformation.appendChild(teacherJob);

    const teacherDescription = document.createElement('h3');
    teacherDescription.classList.add('teacher-description');
    teacherDescription.textContent = teachersDetails[i].teacher_description;
    teacherInformation.appendChild(teacherDescription);

    teacher.appendChild(teacherInformation);
    theTeachers.appendChild(teacher);

}

teachers.appendChild(theTeachers);
