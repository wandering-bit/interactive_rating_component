

let selection = 0

const firstclick = (element) => {
    console.log(element.id)

    var allDivs = document.querySelectorAll('.number')

    allDivs.forEach(function (currentDiv) {
        currentDiv.classList.remove('active');
    });

    element.classList.add('active')
    selection = element.id
}

const btnsubmit = () => {
    console.log("submitting");
    console.log("selection",selection)
    const element = document.querySelector('.result')
    const spanElement = document.querySelector('.scoretext')
    element.style.marginRight = '340px'
    console.log(element)
    spanElement.textContent = `You selected ${selection} out of 5` 
}