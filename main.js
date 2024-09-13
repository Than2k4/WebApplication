const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const comment = document.querySelector('#list-comment')
const commentItem = document.querySelectorAll('#list-comment .item')
var translateY = 0
var count = commentItem.length

next.addEventListener('click', function (event) {
    event.preventDefault();
    if (count == 1) {
        return false;
    }
    translateY += -250;
    comment.style.transform = `translateY(${translateY}px)`; // Sửa ở đây
    count--;
});

prev.addEventListener('click', function (event){
    event.preventDefault()
    if (count == 3) {
        return false
    }
    translateY += 250
    comment.style.transform = `translateY(${translateY}px)`
    count++
})
function toggleForm() {
    const formPopup = document.getElementById('formPopup');
    const overlay = document.getElementById('overlay');
    if (formPopup.style.display === 'block') {
        formPopup.style.display = 'none';
        overlay.style.display = 'none';
    } else {
        formPopup.style.display = 'block';
        overlay.style.display = 'block';
    }
}
function scrollToExercise(event) {
    event.preventDefault()
    const exerciseSection = document.getElementById('exercise');
    exerciseSection.scrollIntoView({ behavior: 'smooth' })
}
function scrollToContact(event) {
    event.preventDefault()
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' })
}