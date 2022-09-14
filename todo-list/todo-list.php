<?php
/**
 * Plugin Name:       Todo List
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       todo-list
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */

function addboot_script(){
	wp_enqueue_style('style', get_template_directory_uri());
	wp_enqueue_style('bs_css', 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css');
}
add_action( "wp_enqueue_scripts", "addboot_script" );

function create_block_todo_list_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_todo_list_block_init' );


