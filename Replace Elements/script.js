// function replaceFirstItem(){
//     const firstItem = document.querySelector('li:first-child');


//     const li = document.createElement('li')

//     li.textContent = 'replaced first'
//     firstItem.replaceWith(li)
// }


// function replaceSecondItem(){
//      const secondItem = document.querySelector('li:nth-child(2)')

//      secondItem.outerHTML = `<li>replace second</li>`;
// }


// function replaceAllItem(){
//     const lis = document.querySelectorAll('li')


//     lis.forEach((item)=>{
//         item.outerHTML = '<li>replace all</li>'
//     })
// }

// replaceFirstItem()
// replaceSecondItem()
// replaceAllItem()























function removeClearButton(){
    const clearBtn = document.querySelector('#clear')
    clearBtn.remove
}


function removeFirstItem(){
    const ul = document.querySelector('ul');
    const li = document.querySelector('li:first-child');

    ul.removeChild(li)
}


function removeItem(itemNumber){
    const ul = document.querySelector('ul')
    const li = document.querySelector(`li:nth-child(${itemNumber})`)

    ul.removeChild(li)
}


removeClearButton()
// removeFirstItem()
removeItem(2)