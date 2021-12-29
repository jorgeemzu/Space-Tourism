const navToggle = document.getElementById('nav-toggle')
const nav = document.getElementById('primary-navigation')

navToggle.addEventListener('click', () =>{
    const prueba = nav.getAttribute('data-visible')
    
    
    console.log(prueba)
    if(prueba === 'false'){
        
        nav.className = 'primary-navigation primary-navigation-expanded flex'
        nav.setAttribute('data-visible', true)
    }else{
        
        nav.className = ' primary-navigation  flex';
        nav.setAttribute('data-visible', false)
        
    }
    
    

})


