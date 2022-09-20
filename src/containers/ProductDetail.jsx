import React from 'react';
import ProductInfo from '@components/ProductInfo';
import Icon_Close from '@icons/icon_close.png';
import '@styles/ProductDetail.scss';

const ProductDetail = () => {
	return (
		<aside className="ProductDetail">
			<div className="ProductDetail-close">
				<img src={Icon_Close} alt="close" />
			</div>
			<ProductInfo />
		</aside>
	);
}

export {ProductDetail}