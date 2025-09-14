document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'});
        });
    });
    window.addEventListener('scroll', () =>{
        const navbar = document.querySelector('.navbar');
        window.scrollY > 50 ?
            navbar.style.backgroundColor = 'rgba(10,10,10,0.98)':
            navbar.style.backgroundColor = 'rgba(10,10,10,0.95)';
    });
function enviarWhats(event){
    event.preventDefault()

    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value
    const telefone = '5585986557364'
    const texto = `Olá! Me chamo ${nome}, ${mensagem}`;
    const msgFormatada = encodeURIComponent(texto)
    const url = `https://wa.me/${telefone}?text=${msgFormatada}`


    window.open(url, '_blank')

}
