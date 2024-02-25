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

// document.getElementById('dropdown').addEventListener('click', function() {
//     this.classList.toggle('open');
// });

// document.addEventListener('DOMContentLoaded', function() {
//     const diaryText = localStorage.getItem('diaryText') || '';
//     const textarea = document.getElementById('diary-text');

//     let currentPage = 0;

//     if (diaryText && diaryText.pages && diaryText.pages[currentPage]) {
//         textarea.value = diaryText.pages[currentPage].content;
//     }

//     textarea.addEventListener('input', function() {
//         savePageContent(textarea.value);
//     });

//     window.prevPage = function() {
//         if (currentPage > 0) {
//             currentPage--;
//             loadPageContent();
//         }
//     };

//     window.nextPage = function() {
//         currentPage++;
//         loadPageContent();
//     };

//     function loadPageContent() {
//         if (diaryText.pages && diaryText.pages[currentPage]) {
//             textarea.value = diaryText.pages[currentPage].content;
//         } else {
//             savePageContent('');
//         }

//         updatePageCounter();
//     }

//     function savePageContent(content) {
//         if (!diaryText.pages) {
//             diaryText.pages = [];
//         }

//         diaryText.pages[currentPage] = {
//             pageNumber: currentPage + 1,
//             content: content,
//         };

//         localStorage.setItem('diaryText', diaryText);
//     }

//     function updatePageCounter() {
//         const pageCounter = document.getElementById('pageCounter');
//         if (pageCounter) {
//             pageCounter.innerText = 'Page ' + (currentPage + 1);
//         }
//     }
// });
