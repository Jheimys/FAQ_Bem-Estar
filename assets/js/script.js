(function() {
    const headers = document.querySelectorAll('.acordion-header')
    const accordionItems = document.querySelectorAll('.acordion-item')

    headers.forEach((header) => {
        header.addEventListener('click', () => {
            const item = header.parentNode
            
            const isActive = item.classList.contains('acordion-item--active')

            accordionItems.forEach((accordionItem) => {
                accordionItem.classList.remove('acordion-item--active')
                accordionItem.classList.add('acordion-item--closed')
            })

            if(!isActive ){
                item.classList.add('acordion-item--active')
                item.classList.remove('acordion-item--closed')
            }

           
        })
    })

}) ();