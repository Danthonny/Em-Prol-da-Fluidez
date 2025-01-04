{"props":{"pageProps":{}},"page":"/","query":{},"buildId":"LfSZY2IHMh5x6NSECZRGQ","nextExport":true,"autoExport":true,"isFallback":false,"scriptLoader":[]}</script>
                        <next-route-announcer>
                            <p aria-live="assertive" id="__next-route-announcer__" role="alert" style="border: 0px; clip: rect(0px, 0px, 0px, 0px); height: 1px; margin: -1px; overflow: hidden; padding: 0px; position: absolute; width: 1px; white-space: nowrap; overflow-wrap: normal;">Em Prol da Fluidez</p>
                        </next-route-announcer>
                        <script>document.addEventListener('DOMContentLoaded', function() {
                            // Selecione todos os botões
                            const buttons = document.querySelectorAll('button');
                        
                            // Adiciona evento de hover para melhorar a interatividade
                            buttons.forEach(button => {
                                button.addEventListener('mouseover', function() {
                                    button.style.transform = 'scale(1.1)';
                                });
                                button.addEventListener('mouseout', function() {
                                    button.style.transform = 'scale(1)';
                                });
                            });
                        
                            // Selecione todos os itens da lista e aplique animação ao passar o mouse
                            const listItems = document.querySelectorAll('ul li');
                            listItems.forEach(item => {
                                item.addEventListener('mouseover', function() {
                                    item.style.opacity = '0.7';
                                    item.style.transform = 'translateX(15px)';
                                });
                                item.addEventListener('mouseout', function() {
                                    item.style.opacity = '1';
                                    item.style.transform = 'translateX(0)';
                                });
                            });
                        
                            // Função para tornar os elementos responsivos
                            const adjustLayoutForMobile = () => {
                                const screenWidth = window.innerWidth;
                                const mobileLayout = screenWidth <= 768;
                        
                                // Ajusta layout para telas menores
                                if (mobileLayout) {
                                    document.querySelectorAll('.flex-1').forEach(el => {
                                        el.style.flex = '1 1 100%';
                                    });
                                } else {
                                    document.querySelectorAll('.flex-1').forEach(el => {
                                        el.style.flex = '1 1 auto';
                                    });
                                }
                            };
                        
                            // Ajustar layout sempre que a tela mudar de tamanho
                            window.addEventListener('resize', adjustLayoutForMobile);
                            
                            // Chama a função para ajuste inicial
                            adjustLayoutForMobile();
                        });

                        // Função para verificar se um elemento está visível na tela
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 && 
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && 
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Função para adicionar a classe 'visivel' aos elementos que entram no viewport
function handleScroll() {
    const elements = document.querySelectorAll('.surgir');
    elements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('visivel');
        }
    });
}

// Escuta o evento de rolagem para ativar a animação
document.addEventListener('scroll', handleScroll);

// Chama a função imediatamente para verificar os elementos que já estão visíveis
handleScroll();