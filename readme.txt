=== Morkva Product Video ===
Contributors: bandido
Tags: woocommerce, product video, video gallery
Requires at least: 5.8
Tested up to: 6.8
Requires PHP: 7.4
Stable tag: 1.0.0
License: GPLv2

Add an MP4 video to WooCommerce product gallery, make your products stand out. Very simple to use.

== 👉️ Description ==

Morkva Product Video lets you attach an MP4 video to any WooCommerce product - simple, fast, and theme-friendly integration:

✅ MP4 video field per product (supports relative or absolute URLs to files hosted on your site).

✅ Thumbnail is always placed second in the gallery (position control is read-only in free).

✅ Basic playback preferences (Autoplay / Loop / Mute at start).

✅ Works with popular themes (incl. Flatsome, Storefront, Block themes).

✅ Lightweight and Performance-friendly: the gallery still loads its images as usual; the video uses preload="none".

Need catalog autoplay previews and advanced behaviors (e.g., single page autoplay that replaces the main image, or choosing last position in gallery)? Check out the Pro version.

Demo (second item in product gallery): [Demo product](https://demoglobal.morkva.co.ua/shop/vanilla-glow-candle/)

**Why self-hosted MP4?**

* Widely supported by browsers.
* Keeps shoppers on your product page.
* No third-party embeds or tracking pixels.

**What this plugin does not do**

* It does not embed YouTube/Vimeo.
* It does not autoplay previews in the catalog (Pro).
* It does not change the main image automatically (Pro).
* It does not store or use external thumbnail URLs (thumbnail must be an attachment).


== 👉️ Installation ==


1. Upload the plugin folder to /wp-content/plugins/ or install it via Plugins → Add New.

2. Activate Morkva Product Video.

3. Go to Products → Edit any product → Product data → Product Video:

* Click Upload / Select Video and choose an MP4 file hosted on your site.

* Click Upload / Select Thumbnail and choose an image from the Media Library.

* Update the product.



== Frequently Asked Questions ==

= Which video formats are supported? =
MP4/H.264 is recommended and used by default. Other containers/codecs aren’t guaranteed across all browsers. Keep bitrates modest for fast playback (e.g., 720p–1080p, 3–8 Mbps).

= Can I use an external image URL as the thumbnail? =
No. The thumbnail must be selected from the Media Library so that WooCommerce can inject it into the product gallery.

= Where does the thumbnail appear? =
In the free version it’s always the second gallery item.

= Does this affect Core Web Vitals? =
The plugin sets the video to preload="none". The gallery images load as usual; video bytes are not fetched until needed. For best results, keep your thumbnail optimized and sized similarly to product images.

= Will it work with my theme? =
It works with most themes that use the standard WooCommerce gallery hooks. We’ve tested with Flatsome, Storefront, and block-based themes. If your theme replaces the gallery entirely, results may vary.

= Does it support variable products? =
Yes—the video is attached to the product (not to variations). If you need per-variation videos, that’s custom work.

= Can I autoplay in catalog or swap the main image automatically on the product page? =
Those enhanced behaviors are Pro features.

== Screenshots ==

1. Product edit page, Product video tab
2. Plugin settings

== Developer Notes ==

Adds a new tab to the WooCommerce product data meta box: mrkv_product_video_panel.

Stores:

* _mrkv_pv_video_url (string)

* _mrkv_pv_thumb_id (int)

* _mrkv_pv_thumb_url (string)

Injects the thumbnail attachment ID into the gallery via woocommerce_product_get_gallery_image_ids.

Replaces the matching gallery thumbnail with a <video> slide via woocommerce_single_product_image_thumbnail_html.

== Support ==

Need help or custom features? Email us at support@morkva.co.ua

Demo: [demoglobal.morkva.co.ua](https://demoglobal.morkva.co.ua)

== Changelog ==

= 1.0.0 =
* Initial release
