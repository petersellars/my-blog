/** @jsxImportSource preact */
import type { FunctionalComponent } from 'preact';
import type { ImageMetadata } from 'astro';

type BackgroundImageProp = string | ImageMetadata;

function isAstroImage(
	image: BackgroundImageProp | undefined
): image is ImageMetadata {
	return !!image && typeof image === 'object' && 'src' in image;
}

interface HeroContent {
    title: string;
    description: string
    buttons?: {
        text: string;
        link: string;
        variant?: 'primary' | 'secondary' | 'ghostLight' | 'ghostDark';
        target?: string;
    }[];
    backgroundImage?: BackgroundImageProp; // string | any; // Using any for now to handle both string paths and imported images
    overlayOpacity?: number; // Value between 0 and 1
}

interface HeroProps {
    content: HeroContent;
}

const Hero: FunctionalComponent<HeroProps> = ({ content }) => {
	const {
		title,
		description,
		buttons,
		backgroundImage,
		overlayOpacity = 0.1
	} = content;

	return (
		<section className="header-offset relative">
			{backgroundImage && (
				<div className="absolute inset-0 left-0 top-0 w-full h-full overflow-hidden">
					<img
						src={
							isAstroImage(backgroundImage)
								? backgroundImage.src
								: backgroundImage || ''
						}
						alt=""
						width={1500}
						height={500}
						className="w-full h-full object-cover"
						loading="eager"
						decoding="async"
					/>
					<div
						className="hero-background absolute inset-0 left-0 top-0 w-full h-full overflow-hidden"
						style={{ opacity: overlayOpacity }}
					/>
				</div>
			)}

			<div className="site-container mx-auto px-4 py-large relative z-10 flex flex-col md:items-center md:justify-center md:text-center">
				<h1 className="text-white text-balance" data-aos="fade-up">
					{title}
				</h1>
				<p
					className="text-white mt-2 text-balance"
					data-aos="fade-up"
					data-aos-delay="100"
				>
					{description}
				</p>

				{buttons && buttons.length > 0 && (
					<div className="flex flex-wrap gap-4 mt-8" data-aos="fade-up">
						{buttons.map((button, index) => (
							<a
								key={index}
								href={button.link}
								target={button.target || '_self'}
								className={`btn ${button.variant || 'primary'}`}
							>
								{button.text}
							</a>
						))}
					</div>
				)}
			</div>
		</section>
	);
};

export default Hero;