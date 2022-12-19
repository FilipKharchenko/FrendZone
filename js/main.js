document.addEventListener('DOMContentLoaded', () => {

    const balls = document.querySelectorAll('.footer__ball');
    const heroBackground = document.querySelector('.hero__img');
    const headerBalls = document.querySelectorAll('.ball');
    let ticketsTitles = document.querySelectorAll('.tickets__item-title');
    let ticketsData =  document.querySelectorAll('.tickets__item-data');

    function newTicketsTitle() {
        ticketsTitles.forEach(el =>  {
            let title = el.textContent.split('');
            let newArr = [];

            for (i of title) {
                i = '<span>'+i+'</span>'
                newArr.push(i)
            }

            title = newArr.join('');

            el.innerHTML = title;
        })
    }
    newTicketsTitle();

    function newTicketsData() {
        ticketsData.forEach(el =>  {
            let title = el.textContent.split('');
            let newArr = [];

            for (i of title) {
                i = '<span>'+i+'</span>'
                newArr.push(i)
            }

            title = newArr.join('');

            el.innerHTML = title;
        })
    }
    newTicketsData();


    function footerActivate() {
        function elementInViewport(el){
            var bounds = el.getBoundingClientRect();
            return (
                (window.innerHeight - bounds.top > 100)
            );
        }
        
        
        document.addEventListener("scroll", (e) => {
            var el = document.querySelector("#footer");
            var inViewport = elementInViewport(el);
    
    
            function addClass() {
                balls.forEach(ball => ball.classList.add('active'));
            }
    
            function removeClass() {
                balls.forEach(ball => ball.classList.remove('active'));
            }

    
            if(inViewport) {
                    setTimeout(addClass, 200)
                }  else {
                    setTimeout(removeClass, 200)
                };
        })    
    }

    footerActivate();

    function heroActive() {
        heroBackground.onmouseover = function(e) {
            headerBalls.forEach(ball => ball.classList.add('active'));
        };

        heroBackground.onmouseout = function(e) {
            headerBalls.forEach(ball => ball.classList.remove('active'));
        };
    };

    heroActive();
});