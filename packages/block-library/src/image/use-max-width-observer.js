/**
 * WordPress dependencies
 */
import { useState } from '@wordpress/element';
import { useResizeObserver } from '@wordpress/compose';

function useMaxWidthObserver( className ) {
	const [ usedMaxWidth, setUsedMaxWidth ] = useState();
	const setResizeObserved = useResizeObserver( ( [ entry ] ) => {
		setUsedMaxWidth( entry.contentRect.width );
	} );

	const maxWidthObserver = (
		<div
			// The block’s class names need to be applied because the max-width
			// may vary per theme styles (e.g. alignments).
			className={ className }
			aria-hidden="true"
			style={ {
				position: 'absolute',
				inset: 0,
				width: '100%',
				height: 0,
				margin: 0,
			} }
			ref={ setResizeObserved }
		/>
	);

	return [ maxWidthObserver, usedMaxWidth ];
}

export { useMaxWidthObserver };
