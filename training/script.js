<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    $(function(){
        $("ul.ddmenu li").mouseenter(function(){
            $(this).siblings().find("ul").hide();
            $(this).children().slideDown(150);
        });
        $('html').click(function(){
            $('ul.ddmenu ul').slideUp(150);
        });    
    });
</script>