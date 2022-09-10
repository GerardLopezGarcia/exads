var answers = 0
function myClick(film_name) {
    console.log(film_name);

    if (answers < 2) {

        switch (film_name) {

            case 'gray':
                var selection = `    
        <div class="content">
        <div id="bg_overlay"></div>

        <div id="progress" class="anim_1">
            <h3 id="progress_title">QUESTION 2 OF 3:</h3>
            <div>
                <img src="/Assets/Ellipse 1.png" class="elipse e_1">
                <img src="/Assets/Ellipse 3.png" class="elipse e_2">
                <img src="/Assets/Ellipse 1.png" class="elipse e_3">
            </div>

        </div>
        <div id="choices">
            <h1 id="main_question" class="anim_1">Wich one do you like the most?</h1>

            <a><img src="/Assets/image 3-3.png" class="thumbnail i_0 anim_1" id="top" onclick="myClick(this.id)"></a>
            <a><img src="/Assets/image 3-4.png" class="thumbnail i_1 anim_1" id="bullet" onclick="myClick(this.id)"></a>
            <a><img src="/Assets/image 3-5.png" class="thumbnail i_2 anim_1" id="thor" onclick="myClick(this.id)"></a>
        </div>

        </div>`
                $('.content').remove();
                $('#body').append(selection);

                break;

            case 'blonde':
                var selection = `    
        <div class="content">
        <div id="bg_overlay"></div>

        <div id="progress" class="anim_1">
            <h3 id="progress_title">QUESTION 2 OF 3:</h3>
            <div>
                <img src="/Assets/Ellipse 1.png" class="elipse e_1">
                <img src="/Assets/Ellipse 3.png" class="elipse e_2">
                <img src="/Assets/Ellipse 1.png" class="elipse e_3">
            </div>

        </div>
        <div id="choices">
            <h1 id="main_question" class="anim_1">Wich one do you like the most?</h1>

            <a><img src="/Assets/image 3-6.png" class="thumbnail i_0 anim_1" id="batman" onclick="myClick(this.id)"></a>
            <a><img src="/Assets/image 3-7.png" class="thumbnail i_1 anim_1" id="spiderman" onclick="myClick(this.id)"></a>
            <a><img src="/Assets/image 3-8.png" class="thumbnail i_2 anim_1" id="flash" onclick="myClick(this.id)"></a>
        </div>

        </div>`
                $('.content').remove();
                $('#body').append(selection);
                break;

            case 'minions':
                var selection = `    
        <div class="content">
        <div id="bg_overlay"></div>

        <div id="progress" class="anim_1">
            <h3 id="progress_title">QUESTION 2 OF 3:</h3>
            <div>
                <img src="/Assets/Ellipse 1.png" class="elipse e_1">
                <img src="/Assets/Ellipse 3.png" class="elipse e_2">
                <img src="/Assets/Ellipse 1.png" class="elipse e_3">
            </div>

        </div>
        <div id="choices">
            <h1 id="main_question" class="anim_1">Wich one do you like the most?</h1>

            <a><img src="/Assets/image 3-3.png" class="thumbnail i_0 anim_1" id="top" onclick="myClick(this.id)"></a>
            <a><img src="/Assets/image 3-4.png" class="thumbnail i_1 anim_1" id="bullet" onclick="myClick(this.id)"></a>
            <a><img src="/Assets/image 3-5.png" class="thumbnail i_2 anim_1" id="thor" onclick="myClick(this.id)"></a>
        </div>

        </div>`
                $('.content').remove();
                $('#body').append(selection);

                break;

            case 'thor':

                var selection = `    
            <div class="content">
            <div id="bg_overlay"></div>
    
            <div id="progress" class="anim_1">
                <h3 id="progress_title">QUESTION 3 OF 3:</h3>
                <div>
                    <img src="/Assets/Ellipse 1.png" class="elipse e_1">
                    <img src="/Assets/Ellipse 1.png" class="elipse e_2">
                    <img src="/Assets/Ellipse 3.png" class="elipse e_3">
                </div>
    
            </div>
            <div id="choices">
                <h1 id="main_question" class="anim_1">Which one do you want to watch now?</h1>
    
                <a><img src="/Assets/image 3-6.png" class="thumbnail i_0 anim_1" id="batman" onclick="myClick(this.id)"></a>
                <a><img src="/Assets/image 3-7.png" class="thumbnail i_1 anim_1" id="spiderman" onclick="myClick(this.id)"></a>
                <a><img src="/Assets/image 3-8.png" class="thumbnail i_2 anim_1" id="flash" onclick="myClick(this.id)"></a>
            </div>
    
            </div>`
                $('.content').remove();
                $('#body').append(selection);
                break;

            case 'batman':
                var selection = `    
        <div class="content">
        <div id="bg_overlay"></div>

        <div id="progress" class="anim_1">
            <h3 id="progress_title">QUESTION 3 OF 3:</h3>
            <div>
                <img src="/Assets/Ellipse 1.png" class="elipse e_1">
                <img src="/Assets/Ellipse 1.png" class="elipse e_2">
                <img src="/Assets/Ellipse 3.png" class="elipse e_3">
            </div>

        </div>
        <div id="choices">
            <h1 id="main_question" class="anim_1">Which one do you want to watch now?</h1>

            <a><img src="/Assets/image 3-3.png" class="thumbnail i_0 anim_1" id="top" onclick="myClick(this.id)"></a>
            <a><img src="/Assets/image 3-4.png" class="thumbnail i_1 anim_1" id="bullet" onclick="myClick(this.id)"></a>
            <a><img src="/Assets/image 3-5.png" class="thumbnail i_2 anim_1" id="thor" onclick="myClick(this.id)"></a>
        </div>

        </div>`
                $('.content').remove();
                $('#body').append(selection);

                break;

            case 'top':

                var selection = `    
            <div class="content">
            <div id="bg_overlay"></div>
    
            <div id="progress" class="anim_1">
                <h3 id="progress_title">QUESTION 3 OF 3:</h3>
                <div>
                    <img src="/Assets/Ellipse 1.png" class="elipse e_1">
                    <img src="/Assets/Ellipse 1.png" class="elipse e_2">
                    <img src="/Assets/Ellipse 3.png" class="elipse e_3">
                </div>
    
            </div>
            <div id="choices">
                <h1 id="main_question" class="anim_1">Which one do you want to watch now?</h1>
    
                <a><img src="/Assets/image 3-6.png" class="thumbnail i_0 anim_1" id="batman" onclick="myClick(this.id)"></a>
                <a><img src="/Assets/image 3-7.png" class="thumbnail i_1 anim_1" id="spiderman" onclick="myClick(this.id)"></a>
                <a><img src="/Assets/image 3-8.png" class="thumbnail i_2 anim_1" id="flash" onclick="myClick(this.id)"></a>
            </div>
    
            </div>`
                $('.content').remove();
                $('#body').append(selection);
                break;
            case 'bullet':

                var selection = `    
            <div class="content">
            <div id="bg_overlay"></div>
    
            <div id="progress" class="anim_1">
                <h3 id="progress_title">QUESTION 3 OF 3:</h3>
                <div>
                    <img src="/Assets/Ellipse 1.png" class="elipse e_1">
                    <img src="/Assets/Ellipse 1.png" class="elipse e_2">
                    <img src="/Assets/Ellipse 3.png" class="elipse e_3">
                </div>
    
            </div>
            <div id="choices">
                <h1 id="main_question" class="anim_1">Which one do you want to watch now?</h1>
    
                <a><img src="/Assets/image 3-6.png" class="thumbnail i_0 anim_1" id="batman" onclick="myClick(this.id)"></a>
                <a><img src="/Assets/image 3-7.png" class="thumbnail i_1 anim_1" id="spiderman" onclick="myClick(this.id)"></a>
                <a><img src="/Assets/image 3-8.png" class="thumbnail i_2 anim_1" id="flash" onclick="myClick(this.id)"></a>
            </div>
    
            </div>`
                $('.content').remove();
                $('#body').append(selection);
                break;
            case 'spiderman':

                var selection = `    
        <div class="content">
        <div id="bg_overlay"></div>

        <div id="progress" class="anim_1">
            <h3 id="progress_title">QUESTION 3 OF 3:</h3>
            <div>
                <img src="/Assets/Ellipse 1.png" class="elipse e_1">
                <img src="/Assets/Ellipse 1.png" class="elipse e_2">
                <img src="/Assets/Ellipse 3.png" class="elipse e_3">
            </div>

        </div>
        <div id="choices">
            <h1 id="main_question" class="anim_1">Which one do you want to watch now?</h1>

            <a><img src="/Assets/image 3-3.png" class="thumbnail i_0 anim_1" id="top" onclick="myClick(this.id)"></a>
            <a><img src="/Assets/image 3-4.png" class="thumbnail i_1 anim_1" id="bullet" onclick="myClick(this.id)"></a>
            <a><img src="/Assets/image 3-5.png" class="thumbnail i_2 anim_1" id="thor" onclick="myClick(this.id)"></a>
        </div>

        </div>`
                $('.content').remove();
                $('#body').append(selection);

                break;
            case 'flash':

                var selection = `    
        <div class="content">
        <div id="bg_overlay"></div>

        <div id="progress" class="anim_1">
            <h3 id="progress_title">QUESTION 3 OF 3:</h3>
            <div>
                <img src="/Assets/Ellipse 1.png" class="elipse e_1">
                <img src="/Assets/Ellipse 1.png" class="elipse e_2">
                <img src="/Assets/Ellipse 3.png" class="elipse e_3">
            </div>

        </div>
        <div id="choices">
            <h1 id="main_question" class="anim_1">Which one do you want to watch now?</h1>

            <a><img src="/Assets/image 3-3.png" class="thumbnail i_0 anim_1" id="top" onclick="myClick(this.id)"></a>
            <a><img src="/Assets/image 3-4.png" class="thumbnail i_1 anim_1" id="bullet" onclick="myClick(this.id)"></a>
            <a><img src="/Assets/image 3-5.png" class="thumbnail i_2 anim_1" id="thor" onclick="myClick(this.id)"></a>
        </div>

        </div>`
                $('.content').remove();
                $('#body').append(selection);

                break;
        }
        answers += 1
        console.log(answers)
    } else {
        console.log(film_name)
      
        switch (film_name) {
            case 'top':
                var redirect_to = 'https://www.imdb.com/title/tt1745960/?ref_=nv_sr_srsg_1'
                break;
            case 'thor':
                var redirect_to = 'https://m.imdb.com/title/tt10648342/?ref_=nv_sr_srsg_0'
                break;
            case 'bullet':
                var redirect_to = 'https://www.imdb.com/title/tt12593682/?ref_=nv_sr_srsg_0'
                break;
            case 'batman':
                var redirect_to = 'https://www.imdb.com/title/tt1877830/?ref_=nv_sr_srsg_0'
                break;
            case 'spiderman':
                var redirect_to = 'https://www.imdb.com/title/tt10872600/?ref_=nv_sr_srsg_4'
                break;
            case 'flash':
                var redirect_to = 'https://www.imdb.com/title/tt3107288/?ref_=nv_sr_srsg_0'
                break;

        }
        var selection = 
        `<div id="bg_overlay"></div>
        <div id="watch_here">
            <h1 id="watch-title">WATCH NEW MOVIES FOR FREE</h1>
            <h4 class="watch-text">Watch any movies online for free without ads!</h4>
            <h4 class="watch-text t2">Have fun watching your favourite movies!</h4>
            <a href=${redirect_to}><button id="button">WATCH HERE!</button></a>
         </div>`
                $('.content').remove();
                $('#body').append(selection);
    
    }
}