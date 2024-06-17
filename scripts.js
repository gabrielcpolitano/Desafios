document.getElementById('courseForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const courseName = document.getElementById('courseName').value;
  const totalLessons = document.getElementById('totalLessons').value;
  const lessonsWatched = document.getElementById('lessonsWatched').value;
  
  const progress = calculateProgress(totalLessons, lessonsWatched);
  
  const course = {
      name: courseName,
      total: totalLessons,
      watched: lessonsWatched,
      progress: progress
  };

  addCourse(course);
  saveCourse(course);
  
  document.getElementById('courseForm').reset();
});

document.getElementById('toggleTheme').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  saveThemePreference();
});

function calculateProgress(totalLessons, lessonsWatched) {
  return (lessonsWatched / totalLessons) * 100;
}

function addCourse(course) {
  const courseList = document.getElementById('courseList');
  
  const courseElement = document.createElement('div');
  courseElement.className = 'course';
  
  const courseTitle = document.createElement('h3');
  courseTitle.textContent = `${course.name} (${course.watched}/${course.total} lessons)`;
  
  const progressBarContainer = document.createElement('div');
  progressBarContainer.className = 'progress-bar';
  
  const progressBar = document.createElement('div');
  progressBar.className = 'progress-bar-fill';
  progressBar.style.width = course.progress + '%';
  progressBar.textContent = Math.round(course.progress) + '%';
  
  const buttonGroup = document.createElement('div');
  buttonGroup.className = 'button-group';
  
  const decreaseButton = document.createElement('button');
  decreaseButton.innerHTML = '<i class="fas fa-minus"></i> Decrease';
  decreaseButton.addEventListener('click', () => updateProgress(course, 'decrease'));

  const deleteButton = document.createElement('button');
  deleteButton.innerHTML = '<i class="fas fa-trash"></i> Delete';
  deleteButton.className = 'button-delete';
  deleteButton.addEventListener('click', () => deleteCourse(course));
  
  const increaseButton = document.createElement('button');
  increaseButton.innerHTML = '<i class="fas fa-plus"></i> Increase';
  increaseButton.addEventListener('click', () => updateProgress(course, 'increase'));
  
  buttonGroup.appendChild(decreaseButton);
  buttonGroup.appendChild(deleteButton);
  buttonGroup.appendChild(increaseButton);
  
  progressBarContainer.appendChild(progressBar);
  courseElement.appendChild(courseTitle);
  courseElement.appendChild(progressBarContainer);
  courseElement.appendChild(buttonGroup);
  courseElement.dataset.courseName = course.name;
  
  courseList.appendChild(courseElement);
}

function saveCourse(course) {
  const courses = JSON.parse(localStorage.getItem('courses')) || [];
  courses.push(course);
  localStorage.setItem('courses', JSON.stringify(courses));
}

function loadCourses() {
  const courses = JSON.parse(localStorage.getItem('courses')) || [];
  courses.forEach(course => addCourse(course));
}

function updateLocalStorage(course, action) {
  const courses = JSON.parse(localStorage.getItem('courses')) || [];
  const index = courses.findIndex(c => c.name === course.name);
  if (index !== -1) {
      if (action === 'increase' && course.watched < course.total) {
          courses[index].watched++;
      } else if (action === 'decrease' && course.watched > 0) {
          courses[index].watched--;
      } else if (action === 'delete') {
          courses.splice(index, 1);
      }
      courses[index].progress = calculateProgress(courses[index].total, courses[index].watched);
      localStorage.setItem('courses', JSON.stringify(courses));
  }
}

function updateProgress(course, action) {
  const courseList = document.getElementById('courseList');
  const courseElement = courseList.querySelector(`[data-course-name="${course.name}"]`);
  const courseTitle = courseElement.querySelector('h3');
  const progressBar = courseElement.querySelector('.progress-bar-fill');
  
  if (action === 'increase' && course.watched < course.total) {
      course.watched++;
  } else if (action === 'decrease' && course.watched > 0) {
      course.watched--;
  }
  
  const progress = calculateProgress(course.total, course.watched);
  
  courseTitle.textContent = `${course.name} (${course.watched}/${course.total} lessons)`;
  progressBar.style.width = progress + '%';
  progressBar.textContent = Math.round(progress) + '%';
  
  updateLocalStorage(course, action);
}

function deleteCourse(course) {
  const courseList = document.getElementById('courseList');
  const courseElement = courseList.querySelector(`[data-course-name="${course.name}"]`);
  courseElement.remove();
  updateLocalStorage(course, 'delete');
}

function saveThemePreference() {
  const isDarkMode = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDarkMode);
}

function loadThemePreference() {
  const isDarkMode = JSON.parse(localStorage.getItem('darkMode'));
  if (isDarkMode) {
      document.body.classList.add('dark-mode');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  loadCourses();
  loadThemePreference();
});
