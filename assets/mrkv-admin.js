(function($){
    $(function(){
        var videoFrame = null;
        var thumbFrame = null;

        var $videoField = $('#_mrkv_pv_video_url');
        var $thumbUrlField = $('#_mrkv_pv_thumb_url');
        var $thumbIdField = $('#_mrkv_pv_thumb_id');

        $('.mrkv-pv-upload-video').on('click', function(e){
            e.preventDefault();

            if (videoFrame) {
                videoFrame.open();
                return;
            }

            videoFrame = wp.media({
                title: $(this).data('modal-title') || 'Select Product Video',
                library: {
                    type: 'video'
                },
                button: {
                    text: $(this).data('button-text') || 'Use this video'
                },
                multiple: false
            });

            videoFrame.on('select', function(){
                var attachment = videoFrame.state().get('selection').first();
                if (!attachment) return;

                var url = attachment.get('url');
                $videoField.val(url).trigger('change');
            });

            videoFrame.open();
        });

        $('.mrkv-pv-upload-thumb').on('click', function(e){
            e.preventDefault();

            if (thumbFrame) {
                thumbFrame.open();
                return;
            }

            thumbFrame = wp.media({
                title: $(this).data('modal-title') || 'Select Video Thumbnail',
                library: {
                    type: 'image'
                },
                button: {
                    text: $(this).data('button-text') || 'Use this image'
                },
                multiple: false
            });

            thumbFrame.on('select', function(){
                var attachment = thumbFrame.state().get('selection').first();
                if (!attachment) return;

                var url = attachment.get('url');
                var id = attachment.get('id');
                $thumbUrlField.val(url).trigger('change');
                $thumbIdField.val(id).trigger('change');
            });

            thumbFrame.open();
        });

        $('.mrkv-pv-clear-thumb').on('click', function(e){
            e.preventDefault();
            $thumbUrlField.val('').trigger('change');
            $thumbIdField.val('').trigger('change');
        });
    });
})(jQuery);
