<?php
/**
 * Plugin Name: hotspot block
 * Description: Description of the Hotspot Block.
 * Version: 1.0.0
 * Author: bPlugins LLC
 * Author URI: http://bplugins.com
 * License: GPLv3
 * License URI: https://www.gnu.org/licenses/gpl-3.0.txt
 * Text Domain: hotspot-block
 */

// ABS PATH
if ( !defined( 'ABSPATH' ) ) { exit; }

// Constant
define( 'BPHB_VERSION', isset( $_SERVER['HTTP_HOST'] ) && 'localhost' === $_SERVER['HTTP_HOST'] ? time() : '1.0.0' );
define( 'BPHB_DIR_URL', plugin_dir_url( __FILE__ ) );
define( 'BPHB_DIR_PATH', plugin_dir_path( __FILE__ ) );



require_once BPHB_DIR_PATH . 'inc/block.php';

// function my_format_TinyMCE( $in ) {
//   print_r($in);
//   return $in;
// }
// add_filter( 'tiny_mce_before_init', 'my_format_TinyMCE' );