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
function scrollToBottom(event){
    event.preventDefault()
    const bottomSection = document.getElementById('content');
    bottomSection.scrollIntoView({behavior:'smooth'})
}
function scrollToVideo(event) {
    event.preventDefault()
    const exerciseSection = document.getElementById('video');
    exerciseSection.scrollIntoView({ behavior: 'smooth' })
}