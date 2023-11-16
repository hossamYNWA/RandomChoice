let t_area = document.getElementById("choices-area"),
    choicesDiv = document.querySelector(".choices");

    //e.target.value ==> gets what's inside the element of event

t_area.focus();
t_area.addEventListener("keyup",function (e){
    choicesDiv.innerHTML = "";
    addTags(e.target.value);
    if(e.key==="Enter" && choicesDiv.children.length > 0)
    {
        tags = document.querySelectorAll(".choices span");
        e.target.value = '';
        let times = tags.length*2;
        const interval = setInterval(randomSelect,100);
        setTimeout(function(){
            clearInterval(interval);
            setTimeout(randomSelect,100)
        },times*100)
    }

})

function addTags(input) {
    input = input.trim();
    if (input.length < 1)
    {
        return;
    }
    let choices = input.split(",")
    choices.forEach((choice) => {
        if (choice.trim() != "") {
            let newSpan = document.createElement("span");
            newSpan.innerText = choice.trim();
            choicesDiv.appendChild(newSpan);
        }
    })
}

function highlight(tag)
{
    tag.classList.add("highlighted");
}

function unhigh(tag)
{
    tag.classList.remove("highlighted");
}

function randomSelect()
{
        tags.forEach(tag=>unhigh(tag));
        highlight(tags[Math.floor(Math.random()*tags.length)]);
}
