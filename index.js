const data = [
    {
        title: "Supervisor",
        description: "Monitors activity to identify project roadblocks",
        icon: "./images/icon-supervisor.svg",
        classType: "supervisor",
    },
    {
        title: "Team Builder",
        description: "Scans our talent network to create the optimal team for your project",
        icon: "./images/icon-team-builder.svg",
        classType: "team-builder",
    },
    {
        title: "Karma",
        description: "Regularly evaluates our talent to ensure quality",
        icon: "./images/icon-karma.svg",
        classType: "karma",
    },
    {
        title: "Calculator",
        description: "Uses data from past projects to provide better delivery estimates",
        icon: "./images/icon-calculator.svg",
        classType: "calculator",
    },
]

const getCardHtml = () => {
    let cardHtml = "";
    data.forEach(item => {
        cardHtml += `
            <div class="card ${item.classType}">
            <h2 class="card__title">${item.title}</h2>
            <p class="card__description">
                ${item.description}
            </p>
            <img class="card__icon" src="${item.icon}" alt="" />
            </div>
            `;
        })
    return cardHtml;
};

const render = () => {
    document.getElementById("cards-section").innerHTML = getCardHtml();
};

render()