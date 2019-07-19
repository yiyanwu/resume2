/* 添加riseup类*/
let markTags = document.querySelectorAll('[data-x]')
for (let i = 0; i < markTags.length; i++) {
    markTags[i].classList.add('riseup')
}
setTimeout(function () {
    findClosestAndRemoveOffset()
}, 100)
window.addEventListener('scroll', function () {
    findClosestAndRemoveOffset()
})


/* 自动上浮函数*/
function findClosestAndRemoveOffset() {
    let markTags = document.querySelectorAll('[data-x]')
    let minIndex = 0
    for (let i = 1; i < markTags.length; i++) {
        if (Math.abs(markTags[i].offsetTop - window.scrollY) < Math.abs(markTags[minIndex].offsetTop - window.scrollY)) {
            minIndex = i
        }
    }
    for (let i = 0; i < markTags.length; i++) {
        markTags[i].classList.remove('moved')
    }
    markTags[minIndex].classList.remove('riseup')
    markTags[minIndex].classList.add('moved')
    let id = markTags[minIndex].id
    let a = document.querySelector('a[href="#' + id + '"]')
    let li = a.parentNode
    let childrens = li.parentNode.children
    for (let i = 0; i < childrens.length; i++) {
        childrens[i].classList.remove('moved')
    }
    li.classList.add('moved')
    
}
let liTags = document.querySelectorAll('nav.menu >ul >li')
for (let i = 0; i < liTags.length; i++) {
    liTags[i].onmouseenter = function (x) {
        x.currentTarget.classList.add('active')
    }
    liTags[i].onmouseleave = function (x) {
        x.currentTarget.classList.remove('active')
    }
}