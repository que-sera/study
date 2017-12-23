<!DOCUTYPE html>
<html>
    <head>
    </head>
    <body>
    <script src="script.js">
        $("ul.ddmenu li").mouseenter(function(){
            $(this).siblings().find("ul").hide();
            $(this).children().slideDown(150);
        });
        $('html').click(function(){
            $('ul.ddmenu ul').slideUp(150);
        });    
    });
        </script>
    </body>
</html>