<script type="text/javascript" src="js/jquery-1.4.2.min.js"></script>
<script type="text/javascript">
    $(function(){
    $("ul.menu li").hover(function(){
        $("ul.sub:not(:animated)", this).slideDown();
    }, function(){
        $("ul.sub",this).slideUp();
    });
});
</script>