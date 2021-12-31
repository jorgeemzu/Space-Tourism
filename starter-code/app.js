const navToggle = document.querySelectorAll('.nav-toggle')
const nav = document.getElementById('primary-navigation')


navToggle.forEach( (toggle) =>{
    toggle.addEventListener('click', () =>{
        const prueba = nav.getAttribute('data-visible')
        if(prueba === 'false'){
            
            nav.className = 'primary-navigation primary-navigation-expanded flex'
            nav.setAttribute('data-visible', true)
        }else{
            
            nav.className = ' primary-navigation  flex';
            nav.setAttribute('data-visible', false)
            
        }
        
        
    
    })
})



