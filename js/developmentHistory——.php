<link rel="stylesheet" href="<?php echo WfPageHelper::getThemeBaseUrl(); ?>/skin/css/timechou.css">
<div id="developmentHistory">
    <div class="nav_wrap">
        <div class="nav">
            <?php WfPageHelper::renderPartial('/widgets/breadcrumbs'); ?>
        </div>
    </div>
    <div class="por_wrap">
        <div class="desSou_title">
            <div class="scroll">
                <div class="desSou_title_wrap">
                    <div class="b">
                        B
                    </div>
                    <p>发展历程</p>
                    <img src="<?php echo WfPageHelper::getThemeBaseUrl(); ?>/skin/images/behringWorld.png">

                </div>
                 <?php $ppt = WFTDataHelper::nodeCriteria()->addScope('byId', array(4))->addScope('byPosition')->find(); ?>
                <div class="p">
                    <div class="CustomerService_title">
                        <p class="CustomerService_tt">我们的发展历程&展望</p>                            
                        <div class="line"></div>
                    </div>
                        
                    <?php  $ppt->renderUpdateLink() ?>
                    <?php echo $ppt->content ?>
                </div>

                <!--*************************** start *********************************************************  -->            

              <div class="main">
   
 <?php $nodes = WFTDataHelper::nodeCriteria()->addScope('byType', array(12))->addScope('byPosition')->findAll(); ?> 
    <?php WfHelper::getHelper('wfcms')->renderNodeAddLink('developmentHistory_time'); ?>    
    <div class="main_middle">			
        <div class="time-con">
            <div  id="timeline">
                <ul id="dates">

                    <?php foreach ($nodes as $key => $node) { ?> 
                        <li>
                            <a href="#<?php echo date('Ym', $node->getNodeCreatedTime()) ?>">
                                <div class="title"><?php echo date('Y', $node->getNodeCreatedTime()) ?></div>
                                <div class="year"><?php echo date('m', $node->getNodeCreatedTime()) ?>月</div> 
                            </a>
                        </li>
                   <?php } ?>                   
                </ul>

                <ul id="issues">
                    <?php foreach ($nodes as $key => $node) { ?>     
                        <li id="<?php echo date('Ym', $node->getNodeCreatedTime()) ?>">
                            <?php $node->renderUpdateLink() ?>
                            <?php echo $node->content ?>
                        </li>
                    <?php } ?>

                </ul>
                <a href="#" id="next"><img src="<?php echo WfPageHelper::getThemeBaseUrl(); ?>/skin/images/fz_next.jpg" alt=""></a>
                <a href="#" id="prev"><img src="<?php echo WfPageHelper::getThemeBaseUrl(); ?>/skin/images/fz_prev.jpg" alt=""></a>
            </div>
        </div> 

    </div>
    
   



</div> 

<!--              <div class="left_bt_logo">
                    <img src="<?php echo WfPageHelper::getThemeBaseUrl(); ?>/skin/images/left_bt_logo.png" />
                </div>-->
                <!--*************************** end *********************************************************  -->                    
             </div>
        </div>
        <div class="desSou_img">
            <div class="img_wrap">
                <img src="<?php echo $ppt-> getNodeValue('picture')?>"/>
            </div>
        </div>
    </div>
</div>
<script src="<?php echo WfPageHelper::getThemeBaseUrl(); ?>/skin/js/jquery.timelinr-0.9.4.js"></script>

<script type="text/javascript" src="<?php echo WfPageHelper::getThemeBaseUrl(); ?>/skin/js/webfoss.fullscreenstage.js"></script>
<script type="text/javascript">
    $(function() {
         setli();
        function setli(){
            var wid=$("#timeline").width();
            $("#issues li").css({width:wid+"px"});
        }
        
        
        
        
        
        
        
        $("#timeline").timelinr({
            autoPlay:'true',
            issuesSpeed: '3000',
            autoPlayPause: '3000'
        });
        
        $(".mobile_fz ul li:eq(0)").find('.mobile_article').show();
        $(".mobile_fz .jianhao").click(function (event) {
            event.preventDefault();
            if (!$(this).parent('.fz_li').hasClass('active')) {
                $(".mobile_fz .mobile_article").slideUp();
                $(this).prev(".mobile_article").slideDown();
                $(".fz_li").removeClass('active');
                $(this).parent('.fz_li').addClass('active');
            } else {
                $(".mobile_fz .mobile_article").slideUp();
                $(".fz_li").removeClass('active');
            }
        });
        
         $(".mobile_fz .mobile_title").click(function (event) {
            event.preventDefault();
            if (!$(this).parent('.fz_li').hasClass('active')) {
                $(".mobile_fz .mobile_article").slideUp();
                $(this).next(".mobile_article").slideDown();
                $(".fz_li").removeClass('active');
                $(this).parent('.fz_li').addClass('active');
            } else {
                $(".mobile_fz .mobile_article").slideUp();
                $(".fz_li").removeClass('active');
            }
        });
        
    });
    
    
    
    
          $(function(){
   
    function index_gd(){
        var $window = $(".desSou_img");

        var $windowWidth = function() {
            return $window.width();
        };
        var $windowHeight = function() {
            return $window.height();
        };
        $window.fssResize(function() {
            var width = $windowWidth();
            var height = $windowHeight();

		$('.img_wrap').each(function() {
                $this = $(this);
                $this.height(height).width(width);
                $this.triggerHandler("configuration", {height: height, width: width, items: {width: width}});
                $this.triggerHandler("updateSizes");
            });
            
            
           
            
            
        });

	$('.img_wrap img').each(function() {
            $(this).fullscreenstage({'width': 1160, 'height':850});
        });
        
        $(window).fssResize();

       $(window).fssResize(); 

    };

    index_gd();
});

</script>