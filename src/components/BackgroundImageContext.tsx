/** @jsxImportSource preact */
import type { FunctionalComponent } from 'preact';

export interface BackgroundImageProps {
  image?: string | { src: string; [key: string]: unknown };
  overlayOpacity?: number;
}

const isImageMetadata = (img: unknown): img is { src: string } =>
	typeof img === 'object' && img !== null && 'src' in img;

const BackgroundImage: FunctionalComponent<BackgroundImageProps> = ({
	image,
	overlayOpacity = 0.1
}) => {
	if (!image) return null;

	// Support both Astro ImageMetadata and string URLs
	const imgSrc = isImageMetadata(image) ? image.src : image;

	return (
		<div className="absolute inset-0 left-0 top-0 w-full h-full overflow-hidden">
			<img
				src={imgSrc}
				alt=""
				width={1500}
				height={500}
				class="w-full h-full object-cover"
				loading="eager"
				decoding="async"
			/>
			<div
				className="hero-background absolute inset-0 left-0 top-0 w-full h-full overflow-hidden"
				style={{ opacity: overlayOpacity }}
			/>
		</div>
	);
};

export default BackgroundImage;