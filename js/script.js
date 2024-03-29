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

const teachersDetails = [{
  teacher_name: 'Angus Henry',
  teacher_job: 'Web developer',
  teacher_description: '10 years of experience in the Tech industry and web development',
  teacher_image: './images/teacher1.jpg',
},
{
  teacher_name: 'Rafael Miller',
  teacher_job: 'Software enginer',
  teacher_description: '10 years of experience in the Tech industry and web development',
  teacher_image: './images/teacher4.jpg',
},
{
  teacher_name: 'Isabelle Arnold',
  teacher_job: 'UX designer',
  teacher_description: '10 years of experience in the Tech industry and web development',
  teacher_image: './images/teacher3.jpg',
},

{
  teacher_name: 'Alicia Baker',
  teacher_job: 'Data analyst',
  teacher_description: '10 years of experience in the Tech industry and web development',
  teacher_image: './images/teacher2.jpg',
},

{
  teacher_name: 'Ellie Mccoy',
  teacher_job: 'Blockchain developer',
  teacher_description: '10 years of experience in the Tech industry and web development',
  teacher_image: './images/teacher5.jpg',
},
{
  teacher_name: 'Homer Solis',
  teacher_job: 'Mobile developer',
  teacher_description: '10 years of experience in the Tech industry and web development',
  teacher_image: './images/teacher6.jpg',
},
];

const teachers = document.getElementById('teachers');

const teachersTitle = document.createElement('h2');
teachersTitle.id = 'teachers-title';
teachersTitle.textContent = 'Our teachers';
teachers.appendChild(teachersTitle);

const mainHr = document.createElement('hr');
mainHr.classList.add('main-hr');
teachers.appendChild(mainHr);

const theTeachers = document.createElement('div');
theTeachers.classList.add('the-teachers');

for (let i = 0; i < teachersDetails.length; i += 1) {
  const teacher = document.createElement('div');
  teacher.classList.add('teacher');
  if (i > 1) {
    teacher.classList.add('teacher-hidded');
  }

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

const moreDiv = document.createElement('div');
moreDiv.classList.add('more');
moreDiv.classList.add('hide-me-on-desktop');

const moreSpan = document.createElement('span');
moreSpan.textContent = 'MORE';
moreDiv.appendChild(moreSpan);

const arrowSpan = document.createElement('span');

const arrowIcon = document.createElement('i');
arrowIcon.classList.add('fas');
arrowIcon.classList.add('fa-solid');
arrowIcon.classList.add('fa-chevron-down');
arrowSpan.appendChild(arrowIcon);

moreDiv.appendChild(arrowSpan);

theTeachers.appendChild(moreDiv);

teachers.appendChild(theTeachers);

const teachersHidded = document.getElementsByClassName('teacher-hidded');

function teachersToggle() {
  if (moreSpan.textContent === 'MORE') {
    Array.from(teachersHidded).forEach((teacherHidded) => {
      teacherHidded.style.display = 'flex';
    });
    moreSpan.textContent = 'LESS';
    arrowIcon.classList.remove('fa-chevron-down');
    arrowIcon.classList.add('fa-chevron-up');
  } else if (moreSpan.textContent === 'LESS') {
    Array.from(teachersHidded).forEach((teacherHidded) => {
      teacherHidded.style.display = 'none';
    });
    moreSpan.textContent = 'MORE';
    arrowIcon.classList.remove('fa-chevron-up');
    arrowIcon.classList.add('fa-chevron-down');
  }

  window.scrollTo(0, document.body.scrollHeight);
}

moreDiv.addEventListener('click', teachersToggle);
