document.addEventListener("DOMContentLoaded", () => {


    let terminal_menu_item = document.querySelectorAll('.terminal-menu-item')
    let terminal_wrap = document.querySelectorAll('.terminal-wrap')
    let log_menu_item = document.querySelectorAll('.log-menu-item')
    let log_desc = document.querySelectorAll('.log-desc')
    let highlight_icon = document.querySelectorAll('.highlight-icon')

    let upload_file_text = document.getElementById('upload_file_text')
    let upload_file = document.getElementById('upload_file')
    let upload_file_btn = document.getElementById('upload_file_btn')

    
    

    terminal_menu_item.forEach((item, index) => {
        item.addEventListener('click', (e) => {
            terminal_menu_item.forEach((item, index) => {
                if(item.classList.contains('terminal-select'))item.classList.remove('terminal-select')    
            })
            terminal_wrap.forEach((item, index) => {
                if(!item.classList.contains('hide')) item.classList.add('hide')
            })
            if(terminal_wrap[index].classList.contains('hide'))terminal_wrap[index].classList.remove('hide')
            item.classList.add('terminal-select')
        })
    })



    log_menu_item.forEach((item,index) => {
        item.addEventListener('click', (e) => {
            log_desc.forEach((item, index) => {
                if(!item.classList.contains('hide'))item.classList.add('hide')
            })
            log_desc[index].classList.remove('hide')
        })
    })

    highlight_icon.forEach((item,index) => {
        let color = 'red'
        let num = index.toString().slice(0,1)
        
        
        if(num === '0') color = 'red'
        else if (num === '1') color = 'yellow'
        else if (num === '2') color = 'green'
        else if (num === '3') color = 'blue'
        else if (num === '4') color = 'gray'
        else color = 'red'

        item.classList.add(color)
    })


    upload_file_btn.addEventListener('click', (e) => {
        upload_file.click();
    })

    upload_file.addEventListener('change', (e) => {
        upload_file_text.value = upload_file.files[0].name
    })


})