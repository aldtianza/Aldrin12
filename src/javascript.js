document.getElementById('moreInfoBtn').addEventListener('click', function() {
    const moreInfoDiv = document.getElementById('moreInfo');
    if (moreInfoDiv.classList.contains('hidden')) {
        moreInfoDiv.classList.remove('hidden');
        this.textContent = 'Show Less';
    } else {
        moreInfoDiv.classList.add('hidden');
        this.textContent = 'Learn More About Me';
    }
});
