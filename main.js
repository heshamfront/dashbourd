// بيانات افتراضية للطالب
const yearCourses = [
  'رياضيات عامة',
  'جبر وهندسة',
  'تفاضل وتكامل',
  'إحصاء',
];
const enrolledCourses = [
  'رياضيات عامة',
  'تفاضل وتكامل',
];
const attendancePercent = 85;
const absencePercent = 15;

// عرض الكورسات
const yearCoursesList = document.getElementById('yearCourses');
yearCourses.forEach(course => {
  const li = document.createElement('li');
  li.textContent = course;
  yearCoursesList.appendChild(li);
});

const enrolledCoursesList = document.getElementById('enrolledCourses');
enrolledCourses.forEach(course => {
  const li = document.createElement('li');
  li.textContent = course;
  enrolledCoursesList.appendChild(li);
});

// عرض الحضور والغياب
if (document.getElementById('attendancePercent')) {
  document.getElementById('attendancePercent').textContent = attendancePercent;
  document.getElementById('absencePercent').textContent = absencePercent;
}

// نافذة الإعدادات
const settingsBtn = document.getElementById('settingsBtn');
const settingsModal = document.getElementById('settingsModal');
const closeSettings = document.getElementById('closeSettings');

settingsBtn.onclick = () => {
  settingsModal.style.display = 'flex';
};
closeSettings.onclick = () => {
  settingsModal.style.display = 'none';
};
window.onclick = (e) => {
  if (e.target === settingsModal) {
    settingsModal.style.display = 'none';
  }
};

// حفظ الإعدادات (تجريبي)
document.getElementById('settingsForm').onsubmit = function(e) {
  e.preventDefault();
  alert('تم حفظ التغييرات بنجاح!');
  settingsModal.style.display = 'none';
};

// تسجيل الدخول
const loginPage = document.getElementById('loginPage');
const dashboard = document.getElementById('dashboard');
const loginForm = document.getElementById('loginForm');
const welcomeMsg = document.getElementById('welcomeMsg');

if (loginForm) {
  loginForm.onsubmit = function(e) {
    e.preventDefault();
    // تحقق بسيط: الحقول غير فارغة
    const studentName = document.getElementById('loginStudentName').value.trim();
    const email = document.getElementById('loginEmail').value.trim();
    const pass = document.getElementById('loginPassword').value.trim();
    if (studentName && email && pass) {
      loginPage.style.display = 'none';
      dashboard.style.display = 'block';
      if (welcomeMsg) {
        welcomeMsg.textContent = `مرحبًا بك يا ${studentName} في منصتك التعليمية!`;
      }
      // عكس اسم الطالب في الإعدادات
      var settingsNameInput = document.getElementById('studentName');
      if (settingsNameInput) {
        settingsNameInput.value = studentName;
      }
    } else {
      alert('يرجى إدخال جميع البيانات المطلوبة');
    }
  };
}
// عند تحميل الصفحة: إظهار صفحة تسجيل الدخول فقط
window.onload = function() {
  loginPage.style.display = 'flex';
  dashboard.style.display = 'none';
  if (welcomeMsg) welcomeMsg.textContent = '';
};
