var imagenes = ['http://drive.google.com/uc?export=view&id=1XNB0KCsWgnlqKoYhB6vSJsN0V3ndczdU','http://drive.google.com/uc?export=view&id=1YdJA3vHdtD63QFvt5hQ1mFZPnItYpPDg']
cont = 0;

function carrousel(contenedor){
    contenedor.addEventListener('click', e => {
        let atras = contenedor.querySelector('.atras'),
        adelante = contenedor.querySelector('.adelante'),
        img = contenedor.querySelector('img'),
        tgt = e.target;

        if(tgt == atras){
            if(cont > 0){
                
            }
        }
    })
}