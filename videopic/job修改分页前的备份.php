<script>
    $(function(){
        $("body").addClass("sub");
    })

</script>

	<script type="text/javascript" src="<?php echo WfPageHelper::getThemeBaseUrl(); ?>/skin/js/search.js"></script>
<div id="container" class="sub">
	
	<div class="title title5">
		<div class="titlearea">
			<h2>招聘岗位</h2>
		</div>		
	</div><!-- title -->

	<article class="article type1">
		<div class="s_cate">
			<ul>
				<li><a href="/site/professions">专业</a></li>		
				<li><a href="/site/recruit">招聘流程</a></li>		
				<li class="active"><a href="/site/job">招聘岗位</a></li>		
			</ul>
		</div>
	
	<!--#####	 게시판 리스트 인클루드 #####-->
	


<!-- ######비밀번호 체크용 레이어 -->

<!-- ######비밀번호 체크용 레이어 끝 -->
<!-- 본문영역 시작 -->


<div id="container" class="sub">
	<article class="article type3">

	<!-- 在此隐藏了搜索功能 -->
		<div class="board_search" style="display:none;">
			<div class="search">
				<form name="searchFrm" id="searchFrm" method="get" action="/site/job">
				
					<label for="word" class="hide">검색옵션</label>
					<select name="key" class="selectST1">
						<option value="1" >Subject</option>
						<option value="2" >Contents</option>
					</select>
					<input name="word" id="word" type="text" class="inputST1" value="">
					
					<img id="search_img" style="cursor:pointer;" src="<?php echo WfPageHelper::getThemeBaseUrl(); ?>/skin/images/search_btn.gif"/>
				</form>
			</div>
		</div>

		<div class="board_list">
<!--分页是好的-->
			 <?php
    
    $pageSize = 1000000000;
    $pager = WfPageHelper::linkPager(3, array(
                'nextPage' => '下一页',
                'prevPage' => '上一页',
                'firstPage' => '首页',
                'lastPage' => '末页',
    ));
		
    $criteria = WFTDataHelper::nodeCriteria()->addScope('byType', array(12));
    //
	if(isset($_GET['key'])&&isset($_GET['word']))
	{
		$type=$_GET['key'];
		$content=$_GET['word'];
		if($type==1)
		{
			$criteria->compare('t.title',$content,true);
		}else{
			$criteria->compare('t.content',$content,true);
		}
	}
    $dp = WFTDataHelper::criteriaProvider($criteria, $pageSize);
    $comments = $dp->getData();
	$count= count($comments);
	
	 ?>
		<?php if($count==0){?>
			<?php if(empty($content)||strlen($content)<2){ ?>
				<div class="t-c">搜索文字最少为2个文字</div>
			<?php }else{ ?>
			<div class="t-c">There is no more writing.</div>
			
			<?php } ?>
		<?php }else{ 
			foreach($comments as $key =>$value){
		?>
			<div style="padding:20px 0px" class="zp" >
                            <?php $value->renderUpdateLink() ?>
                            <a href="/site/job_detail/<?php echo $value->getNodeId()?>">
				<p><?php echo $value->title;?></p>
				<p><?php echo WfPageHelper::striptags($value->getNodeContent(), 50) ?>...</p>
                            </a>
			</div>
		<?php }} ?>
		</div>
			<div class="paging">
			 
			<div class="inner">
			 <?php WfPageHelper::renderPager($dp, $pager) ?>
<!--<a href='#' onclick="return false;" class="nextP"><img src="<?php echo WfPageHelper::getThemeBaseUrl(); ?>/skin/images/but_firstpage_new.gif" alt="" /></a>
<a href='#' onclick="return false;" class="lastP"><img src="<?php echo WfPageHelper::getThemeBaseUrl(); ?>/skin/images/but_prepage_new.gif" alt="" /></a>
<ul>
<li class="on">1</li>
</ul>
<a href='#' onclick="return false;" class="nextP"><img src="<?php echo WfPageHelper::getThemeBaseUrl(); ?>/skin/images/but_nextpage_new.gif" alt="" /></a>
<a href='#' onclick="return false;" class="lastP"><img src="<?php echo WfPageHelper::getThemeBaseUrl(); ?>/skin/images/but_endpage_new.gif" alt="" /></a>-->
</div>
		</div>
	</article><!-- article -->
</div><!-- container -->
<!-- 본문영역 끝 -->
</div><!-- container -->
<!--  -->
