if(window.innerWidth > 992)
{
    
const allSections = document.querySelectorAll('.section')
const sectionsTop = Array.from(allSections).map(item =>  item.getBoundingClientRect().top);
const pagination = document.querySelector('.scrollbar__sections')
const scrollUp = document.querySelector('.scrollbar__up')
const scrollDown = document.querySelector('.scrollbar__down')
const arrowDown = document.querySelectorAll('.arrow-down')

function createSectionPagination()
{
    // динамически создаем элементы "пагинации"
    for(let i =0; i<allSections.length;i++)
    {
        let sect = allSections[i];
        sect.id = "sect-"+i;

        //console.log(sect.getBoundingClientRect().top)

        let html = '<button class="scrollbar__link" id=link__'+ sect.id +'></button>'
        pagination.innerHTML += html;
    }
};

function setScrollLinkActive(index)
{    
    anchors[lastLinkIndex].classList.remove('scrollbar__link-active');
    anchors[index].classList.add('scrollbar__link-active');

    scrollUp.classList.remove('scrollbar__up-non-active');
    scrollDown.classList.remove('scrollbar__down-non-active');
    
    if(index == 0)
    {
        scrollUp.classList.add('scrollbar__up-non-active');
    }

    if(index == anchors.length - 1)
    {
        scrollDown.classList.add('scrollbar__down-non-active');
    }
}

function scrollToSection(index)
{
    if(index < 0 || index > anchors.length - 1)
        return;
    
    const btnId = anchors[index].id;
    const sectId = btnId.replace("link__", "");

    document.getElementById(sectId).scrollIntoView({block:'center'});
};

function addEventsToAnchors()
{
    for(let i =0; i< anchors.length; i++)
    {
        anchors[i].onclick = function()
        {
            scrollToSection(i);
        };
    }
};

function getAnchors()
{
    return document.querySelectorAll('.scrollbar__link');
};



createSectionPagination();
const anchors = getAnchors();
var currLinkIndex = 0;
var lastLinkIndex = 0;
setScrollLinkActive(0);
addEventsToAnchors();


let scrollTop;
window.addEventListener('scroll', function(e) {
    scrollTop = window.scrollY;
    const halfHeight = this.window.innerHeight / 2;
    for(let i = 0; i < sectionsTop.length; i++)
    {
        let sectPos = sectionsTop[i];
        if(scrollTop +  halfHeight >= sectPos)
        {
            lastLinkIndex = currLinkIndex;
            currLinkIndex = i;
            setScrollLinkActive(i);
        }
    }
});



scrollUp.onclick = function(){
    if(currLinkIndex - 1 < 0)
        return;

    lastLinkIndex = currLinkIndex;
    currLinkIndex--;
    scrollToSection(currLinkIndex);
};


scrollDown.onclick = function(){
    if(currLinkIndex + 1 == anchors.length)
        return;

    lastLinkIndex = currLinkIndex;
    currLinkIndex++;
    scrollToSection(currLinkIndex);
};


for(let down of arrowDown)
{
    down.onclick = function(){
        if(currLinkIndex + 1 == anchors.length)
            return;
    
        lastLinkIndex = currLinkIndex;
        currLinkIndex++;
        scrollToSection(currLinkIndex);
    };
}
}
