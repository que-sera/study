<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.0/jquery.min.js>
    $(function(){
    $("ul.menu li").hover(function(){
        $("ul.sub:not(:animated)", this).slideDown();
    }, function(){
        $("ul.sub",this).slideUp();
    });
});
</script>