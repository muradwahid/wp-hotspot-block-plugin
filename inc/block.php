<?php
class BPHBHelloBlock
{
	public function __construct()
	{
		add_action('init', [$this, 'onInit']);

	}
	function onInit()
	{
		wp_register_style("fontawesome", BPHB_DIR_URL . 'fontawesome/css/all.min.css', [], '5.15.4');
		wp_register_style('bphb-hello-style', BPHB_DIR_URL . 'dist/style.css', [], BPHB_VERSION); // Style
		wp_register_style('bphb-hello-editor-style', BPHB_DIR_URL . 'dist/editor.css', ['bphb-hello-style', "fontawesome"], BPHB_VERSION); // Backend Style
		register_block_type(__DIR__, [
			'editor_style' => 'bphb-hello-editor-style',
			'supports' => [
				'jsx' => true
			],
			'render_callback' => [$this, 'render']
		]); // Register Block
		wp_set_script_translations('bphb-hello-editor-script', 'hotspot-block', BPHB_DIR_PATH . 'languages');
	}
	function render($attributes, $conent)
	{
		extract($attributes);
		wp_enqueue_style('bphb-hello-style');
		wp_enqueue_script('bphb-hello-script', BPHB_DIR_URL . 'dist/script.js', [
			'react',
			'react-dom',
		], BPHB_VERSION, true);
		wp_set_script_translations('bphb-hello-script', 'hotspot-block', BPHB_DIR_PATH . 'languages');

		$className = $className ?? '';
		$blockClassName = "wp-block-bphb-hello $className align$align";

		ob_start(); ?>
		<div class='<?php echo esc_attr($blockClassName); ?>' id='bphbHelloBlock-<?php echo esc_attr($cId) ?>'
			data-attributes='<?php echo esc_attr(wp_json_encode($attributes)); ?>'></div>

		<?php return ob_get_clean();
	}

}
new BPHBHelloBlock();
require_once("ExtendMime.php");