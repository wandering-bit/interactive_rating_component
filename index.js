
const firstclick = (element) => {
    console.log(element.id)

    var allDivs = document.querySelectorAll('.number')

    allDivs.forEach(function (currentDiv) {
        currentDiv.classList.remove('active');
    });

    element.classList.add('active')
}

