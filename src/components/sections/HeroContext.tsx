/** @jsxImportSource preact */
import type { FunctionalComponent } from 'preact';

export interface HeroProps {
  title: string;
  description: string;
  buttons?: {
    text: string;
    link: string;
    variant?: 'primary' | 'secondary' | 'ghostLight' | 'ghostDark';
    target?: string;
  }[];
  backgroundImage?: string;
  overlayOpacity?: number;
}

const Hero: FunctionalComponent<HeroProps> = ({
	title,
	description,
	buttons = [],
	backgroundImage,
	overlayOpacity
}) => (
	<section className="header-offset relative">
		{backgroundImage && (
			<div className="absolute inset-0 left-0 top-0 w-full h-full overflow-hidden">
				<img
					src={backgroundImage}
					alt=""
					className="w-full h-full object-cover"
					loading="eager"
					decoding="async"

				/>
				<div
					className="hero-background absolute inset-0 left-0 top-0 w-full h-full overflow-hidden"
					style={`opacity: ${overlayOpacity ?? 0.1}`}
				/>
			</div>
		)}

		<div className="site-container mx-auto px-4 py-large relative z-10 flex flex-col md:items-center md:justify-center md:text-center">
			<h1 className="text-white text-balance" data-aos="fade-up">{title}</h1>
			<p className="text-white mt-2 text-balance"
				data-aos="fade-up"
				data-aos-delay="100"
			>{description}</p>

			{buttons.length > 0 && (
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

export default Hero;