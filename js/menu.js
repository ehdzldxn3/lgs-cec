document.addEventListener("DOMContentLoaded", () => {

    let menu = document.querySelector('.menu')
    let arrow_btn = document.querySelector('.arrow-btn')
    let menu_title_box = document.querySelector('.menu-title-box')
    let folder_main_box = document.querySelectorAll('.folder-main-box')
    let folder_main_title = document.querySelectorAll('.folder-main-title')
    let folder_item = document.querySelectorAll('.folder-item')
    let folder_sub_box = document.querySelectorAll('.folder-sub-box')
    let folder_sub_item = document.querySelectorAll('.folder-sub-item')

    
    let list_section = document.getElementById('list_section')
    let cec_section = document.getElementById('cec_section')
    let lookup_section = document.getElementById('lookup_section')
        

    
    
    // menu open
    arrow_btn.addEventListener('click', (e) => {
        
        menu.classList.toggle('menu-open')
        
        if(list_section !== null)list_section.classList.toggle('menu-open')
        if(cec_section !== null)cec_section.classList.toggle('menu-open')
        if(lookup_section !== null)lookup_section.classList.toggle('menu-open')
        

        // main folder title hide & show
        folder_main_title.forEach((item, index) => {
            item.classList.toggle('hide')
        })
        // CEC hide & show
        menu_title_box.classList.toggle('hide')


        folder_sub_box.forEach((item, index) => {
            if(!item.classList.contains('hide')) item.classList.add('hide')
        })

        // menu close
        if(!menu.classList.contains('menu-open')) {
            folder_sub_item.forEach((item, index) => {
                if(item.classList.contains('sub-open')) item.classList.remove('sub-open')
            })
            folder_item.forEach((item, index) => {
                if(item.classList.contains('folder-open')) item.classList.remove('folder-open')
            })
        }
    })

    // folder close click
    folder_main_box.forEach((item, index) => {
        item.addEventListener('click', (e) => {
            folder_item[index].classList.toggle('folder-open')
            if(!menu.classList.contains('menu-open')) menu.classList.add('menu-open')
            folder_main_title.forEach((item, index) => {
                item.classList.remove('hide')
            })
            menu_title_box.classList.remove('hide')

            
            folder_sub_box[index].classList.toggle('hide')
            folder_sub_box[index].classList.toggle('sub-open')

            folder_sub_item.forEach((item) => {
                if(!folder_item[index].classList.contains('folder-open')) {
                    if(item.classList.contains('sub-open')) item.classList.remove('sub-open')
                }
            })

            if(menu.classList.contains('menu-open')) {
                if(list_section !== null) list_section.classList.add('menu-open')
                if(cec_section !== null) cec_section.classList.add('menu-open')
                if(lookup_section !== null)lookup_section.classList.add('menu-open')
            }

        })

    })

    // folder sub click
    folder_sub_item.forEach((item, index) => {
        item.addEventListener('click', (e) => {
            subMenuClose()
            item.classList.toggle('sub-open')
            
            // menu change
            item.children[0].children[1].innerHTML
            
        })
    })

    const subMenuClose = () => {
        folder_sub_item.forEach((item, index) => {
            if(item.classList.contains('sub-open')) item.classList.remove('sub-open')
        })
    }




    
})