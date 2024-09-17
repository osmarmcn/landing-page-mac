    document.getElementById('closeBtn').addEventListener('click', function() {
        document.getElementById('header-info').style.display = 'none';


    });

    function checkScrollPosition() {
        let header = document.querySelector('.header-positon');
        
      
        let scrollPosition = window.scrollY;
    
      
        if (scrollPosition >= 700) {
            header.style.display = 'flex';  
        } else {
            header.style.display = 'none';  
        }
    }
    
    
    document.addEventListener('scroll', checkScrollPosition);
    
    
    window.addEventListener('load', checkScrollPosition);


    document.getElementById("menuButton").addEventListener("click", function() {
        this.classList.toggle("open");
        
       
        let header = document.querySelector('.header-menu');
        header.classList.toggle("menu-open");
        }); 

    const data = [
    {
    id: 1,
    class: "comentario-1",
    texto: "Uso semanalmente o CleanMyMac X no meu Mac mini com M2 Pro para garantir que tudo funcione bem, ficar de olho em softwares duvidosos e recuperar o espaço purgável em disco. Eu sei que poderia fazer algumas dessas coisas manualmente no Terminal, mas o processo é muito mais rápido via software e poupa tempo. O CleanMyMac X também é útil para desinstalar e atualizar softwares.",
    autor: "Mark Sparrow"
    },
    {
    id: 2,
    class: "comentario-2",
    texto: "Se você já passou pela situação de ter um Mac quase cheio, confira o CleanMyMac X. Há anos, ele tem sido uma excelente forma de recuperar espaço com pouquíssimo esforço.",
    autor: "John Voorhees"
    },
    {
    id: 3,
    class: "comentario-3",
    texto: "Seu Mac está em forma? Essa tarefa não precisa ser difícil. O CleanMyMac oferece todas as ferramentas que você precisa para garantir uma máquina sempre veloz e segura.",
    autor: "Killian Bell"
    },
    {
    id: 4,
    class: "comentario-4",
    texto: "O CleanMyMac X ajuda a remover arquivos desnecessários e identifica aquilo que está deixando o computador lento.",
    autor: "Romain Dillet"
    },
    {
    id: 5,
    class: "comentario-5",
    texto: "Uso o CleanMyMac há muitos anos e continuo me impressionando a cada atualização. Sem dúvida, a versão deste ano é a melhor já feita. Altamente recomendado.",
    autor: "Bryan M. Wolfe"
    }
    ];

    
    function criar(id){
    const container = document.getElementById('comentarios');
    container.innerHTML = '';

    
    const comentario = data.find(item => item.id === id);

   
    if (comentario) {
    container.innerHTML = `
        <div class="comentario ${comentario.class}">
            <p class="p-1">
                ${comentario.texto}
            </p>
            <span>${comentario.autor}</span>
        </div>
    `;
    }

   
    const buttons = document.querySelectorAll('.links button');
    buttons.forEach(button => button.classList.remove('active')); 
    document.getElementById(`btn-${id}`).classList.add('active'); 
    }

   
    window.onload = () => {
    criar(1);
    };

    
    document.getElementById('btn-1').addEventListener('click', () => criar(1));
    document.getElementById('btn-2').addEventListener('click', () => criar(2));
    document.getElementById('btn-3').addEventListener('click', () => criar(3));
    document.getElementById('btn-4').addEventListener('click', () => criar(4));
    document.getElementById('btn-5').addEventListener('click', () => criar(5));

