//drop down
document.getElementById('dropdown').addEventListener('click', function() {
    this.classList.toggle('open');
  });

//store in local storage
document.addEventListener('DOMContentLoaded', function() {
    const diaryText = localStorage.getItem('diaryText');
    const textarea = document.getElementById('diary-text');
    
    if (diaryText) {
        textarea.value = diaryText;
    }

    textarea.addEventListener('input', function() {
        const updatedDiaryText = textarea.value;
        localStorage.setItem('diaryText', updatedDiaryText);
    });
});
