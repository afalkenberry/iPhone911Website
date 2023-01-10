const accordionItems = document.querySelectorAll('.collapse')
const acc = document.getElementById('accordionExample')
console.log(accordionItems);

accordionItems.forEach((el)=>{
    el.addEventListener('shown.bs.collapse',(e)=>{
        var scrollOffset = acc.scrollTop + el.parentNode.offsetTop
        acc.scroll({
            top: scrollOffset,
            left: 0, 
            behavior: 'smooth'
        })
    })
})
