<%@ page language="java" import="java.util.*" contentType="text/html; charset=utf-8"%>
<%@ include file="/WEB-INF/layouts/base.jsp"%>
<!DOCTYPE HTML>
<html>
  <head>
    <title>修改头像</title>
     <link rel="stylesheet" href="../../../static/common/icheck/flat/green.css" />
     <link rel="stylesheet" href="../../../static/common/cropper/css/cropper.min.css" />
     <link rel="stylesheet" href="../../../static/cropper/css/sitelogo.css" />
  </head>
<body>
	<div class ="container">
		<!--修改头像，开始-->
   		<div class="u-account-box undis">
       		<div id="tabCont">
           		<section>
               		<section class="ukindeditor of">
                   		<section class="clearfix">
							<div class="panel panel-default">
							  <div class="panel-heading">
							    <h3 class="panel-title">修改头像注意</h3>
							  </div>
							  <div class="panel-body">
							    <p>做个有头有脸的人!</p>
                               <p>上传你喜欢的照片并保存！</p>
                               <p>建议上传近距离的照片，比如大头照、特写。</p>
                               <p>您上传的图片已传到服务器，但是暂时不更换管理员头像。</p>
							  </div>
							</div>
                           <div id="preview-pane" class="preview-pane">
                               <div class="row">
                                   <div id="crop-avatar" class="col-md-6">
                                       <div class="avatar-view" title="点击更改头像">
                                       	<img src="${ctx}/upload/icon/icon.jpg" alt="头像加载中...">
                                       </div>                                        
									<p class="c-999" style="width: 220px;">220x220</p>
                                   </div>
                               </div>
                           </div>
                       
                           <div id="preview-pane" class="preview-pane">
                               <div class="row">
                                    <div id="crop-avatar" class="col-md-6">
                                       <div class="avatar-view preview-container" style="width: 120px; height: 120px; margin: 0 auto;" >
                                       	<img src="${ctx}/upload/icon/icon.jpg" alt="头像加载中...">
                                           <p class="c-999">120x120</p>
                                      </div>
                                    </div>
                        		</div>   
                           </div>   
                                                                        
                           <div id="preview-pane" class="preview-pane">
                               <div class="row">
                                       <div class="avatar-view preview-container" style="width: 80px; height: 80px; margin: 0 auto;">
                                       	<img src="${ctx}/upload/icon/icon.jpg" alt="头像加载中...">
                                                 <p class="c-999">80x80</p>
                                            </div>
                                     </div>
                                 </div>
                             	<section class="clear"></section>
                         </section>
					</section>
                 </section>
             </div>
             <input type="button" class="commBtn bgGreen w80 ml50" id="deleImage" style="display: none">
   		</div>
    	<!--修改头像，结束-->
	</div>
 
                       
  <div class="modal fade" id="avatar-modal" aria-hidden="true" aria-labelledby="avatar-modal-label" role="dialog" tabindex="-1">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <form class="avatar-form" action="${ctx}/system/sysuser/upload" enctype="multipart/form-data" method="post">
                    <div class="modal-header">
                        <button class="close" data-dismiss="modal" type="button">&times;</button>
                        <h4 class="modal-title" id="avatar-modal-label">选择并上传图片</h4>
                    </div>
                    <div class="modal-body">
                        <div class="avatar-body">
                            <div class="avatar-upload">
                                <input class="avatar-src" name="avatar_src" type="hidden">
                                <input class="avatar-data" name="avatar_data" type="hidden">
                                <label for="avatarInput">图片上传</label>
                                <a href="javascript:;" class="file">选择文件
                                    <input class="avatar-input" id="avatarInput" name="avatar_file" type="file">
                                </a>
                                </div>
                            <div class="row">
                                <div class="col-md-9">
                                    <div class="avatar-wrapper"></div>
                                </div>
                                <div class="col-md-3">
                                    <div class="avatar-preview preview-lg"></div>
                                    <div class="avatar-preview preview-md"></div>
                                    <div class="avatar-preview preview-sm"></div>
                                </div>
                            </div>
                            <div class="row avatar-btns">
                                <div class="col-md-9">
                                    <div class="btn-group">
                                        <button class="btn" data-method="rotate" data-option="-90" type="button" title="Rotate -90 degrees"><i class="fa fa-undo"></i> 向左旋转</button>
                                    </div>
                                    <div class="btn-group">
                                        <button class="btn" data-method="rotate" data-option="90" type="button" title="Rotate 90 degrees"><i class="fa fa-repeat"></i> 向右旋转</button>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <button class="btn btn-success btn-block avatar-save" type="submit"><i class="fa fa-save"></i> 保存修改</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
          </div>
        </div>
        <div class="loading" aria-label="Loading" role="img" tabindex="-1"></div>
    <tiziFooter>  
		<script src="../../../static/common/cropper/js/cropper.min.js"></script>
		<script src="../../../static/common/icheck/icheck.min.js"></script>
		<script src="../../../static/common/cropper/js/sitelogo.js"></script>
	</tiziFooter>  
</body>
</html>