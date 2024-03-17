<html>
<head>
    <title>Laravel Signature Pad Tutorial Example - ItSolutionStuff.com </title>
    <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.css" crossorigin="anonymous">
  
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js" crossorigin="anonymous"></script> 
    <link type="text/css" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/south-street/jquery-ui.css" rel="stylesheet" crossorigin="anonymous"> 
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js" crossorigin="anonymous"></script>
    <!-- <script type="text/javascript" src="https://keith-wood.name/js/jquery.signature.js" crossorigin="anonymous"></script> -->
    <!-- <link rel="stylesheet" type="text/css" href="https://keith-wood.name/css/jquery.signature.css" crossorigin="anonymous"> -->
    <link rel="stylesheet" href="styles/jquerySignaturePad.css">
    <style>
        .kbw-signature { 
            width: 60vw;
            margin-bottom: 2vw;
            height: 60vw;
            margin: auto;
            display: block;
        }
        #sig canvas{
            width: 100% !important;
            height: auto;
        }
    </style>
  
</head>
<body class="bg-dark">
<div class="container">
   <div class="row">
       <div class="col-md-6 offset-md-3 mt-5">
           <div class="card">
               <div class="card-header">
                   <h5>Presensi SENAKA</h5>
               </div>
               <div class="card-body">
                    <?php if($message = Session::get('success')): ?>
                        <div class="alert alert-success  alert-dismissible">
                            <button type="button" class="close" data-dismiss="alert">×</button>  
                            <strong><?php echo e($message); ?></strong>
                        </div>
                    <?php endif; ?>
                    <form method="POST" action="<?php echo e(route('signaturepad.upload')); ?>">
                        <?php echo csrf_field(); ?>
                        <div class="col-md-12">
                            <label class="" for="">Signature:</label>
                            <br/>
                            <div id="sig" ></div>
                            <br/>
                            <button id="clear" class="btn btn-danger btn-sm">Clear Signature</button>
                            <textarea id="signature64" name="signed" style="display: none"></textarea>
                        </div>
                        <br/>
                        <button class="btn btn-success">Save</button>
                    </form>
               </div>
           </div>
       </div>
   </div>
</div>
<script type="text/javascript">
    $(document).ready(function() {
        var sig = $('#sig').signature({syncField: '#signature64', syncFormat: 'PNG'});
        $('#clear').click(function(e) {
            e.preventDefault();
            sig.signature('clear');
            $("#signature64").val('');
        });
    });
</script>
<script src="js/jquerySignaturePad.js"></script>
</body>
</html><?php /**PATH C:\Users\fasuyaaa\Project\Web-Senaka\resources\views/signaturePad.blade.php ENDPATH**/ ?>