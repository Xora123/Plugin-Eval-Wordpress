/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, TextControl, RichText } from '@wordpress/block-editor';

import { SelectControl } from '@wordpress/components';
import { useState } from '@wordpress/element';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */


const Edit = (props) => {

	const {
		attributes: { content, color },
		setAttributes,
	} = props;

	const handleContent = (newContent) => {
		setAttributes({ content: newContent });
	};
	const handleColor = (newColor) => {
		setAttributes({ color: newColor });
	}

	const blockProps = useBlockProps({
	})

	return (

		<div {...blockProps}>
			<div className={"alert alert-" + color} role="alert">
				<RichText
					tagName="div"
					value={content}
					allowedFormats={["core/italic"]}
					onChange={handleContent}
					placeholder={__("Veuillez écrire du texte")}
				/>
				<SelectControl
					label="color"
					value={color}
					options={[
						{ label: 'Red', value: 'danger' },
						{ label: 'Yellow', value: 'warning' },
						{ label: 'Black', value: 'dark' },
						{ label: 'succes', value: 'succes' },
						{ label: 'info', value: 'info' },
						{ label: 'light', value: 'light' },
						{ label: 'primary', value: 'primary' },
						{ label: 'secondary', value: 'secondary' },
					]}
					onChange={handleColor}
					__nextHasNoMarginBottom
				/>
			</div>
		</div>
	);
}

export default Edit;